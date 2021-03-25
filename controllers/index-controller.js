const {User} = require("../models")

class IndexController {
	static showMainPage(req, res) {
		res.render("index")
	}

  static login(req, res) {
    
  }
}

module.exports = IndexController