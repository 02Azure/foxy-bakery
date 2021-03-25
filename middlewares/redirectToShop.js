function redirectToShop (req, res, next) {
  if(req.session.isLoggedIn) {
    res.redirect("/shop")
  } else {
    next()
  }
}

module.exports = redirectToShop