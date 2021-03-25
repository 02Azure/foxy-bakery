function loginCheck (req, res, next) {
  if(res.session.isLoggedIn) {
    next()
  } else {
    res.redirect("/")
  }
}

module.exports = loginCheck