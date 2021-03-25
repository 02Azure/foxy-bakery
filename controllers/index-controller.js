const {User} = require("../models")
const checkPassword = require("../helpers/checkPassword")

class IndexController {
	static showMainPage(req, res) {
		res.render("index")
	}

  static login(req, res) {
    let input = {
      username: req.body.username,
      password: req.body.password
    }

    User.findOne({
      where: {
        username: input.username
      }
    })
      .then(data => {
        if(data) {
          if(checkPassword(input.password, data.password)) {
            req.session.isLoggedIn = true
            req.session.userId = data.id

            res.redirect("/shop")

          } else {
            res.send({error: `Incorrect Password`})
          }
        } else {
          res.send({error: `${input.username} is not registered yet`})
        }

      })

      .catch(err => {
        res.send(err)
      })
  }

  static logout(req, res) {
    req.session.destroy()
    res.redirect("/")
  }
}

module.exports = IndexController