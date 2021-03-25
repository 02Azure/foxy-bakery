const {User} = require("../models")
const checkPassword = require("../helpers/checkPassword")
const getChart = require("../helpers/getChart")

class IndexController {
	static showMainPage(req, res) {
    let totalPurchase = [216000, 100000, 232000, 120000, 300000]
    let transferDate = [
  new Date("2021-02-02T10:53:54Z"),

  new Date("2021-02-08T11:13:54Z"),

  new Date("2021-02-22T11:41:14Z"),

  new Date("2021-03-01T04:53:32Z"),

  new Date("2021-03-12T10:03:14Z"),

    ]
		res.render("index", {data: [totalPurchase, transferDate], getChart:getChart})
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