const express = require('express')
const router = express.Router()
const IndexController = require("../controllers/index-controller")
const shop = require("./shop-route")
const transaction = require("./transactions-route")
const isLoggedIn = require("../middlewares/loginCheck")
const redirectToShop = require("../middlewares/redirectToShop")

router.get('/', redirectToShop, IndexController.showMainPage)

router.post("/login", redirectToShop, IndexController.login)

router.use(isLoggedIn)

router.get("/logout", IndexController.logout)

router.use("/shop", shop)
router.use("/transactions", transaction)

module.exports = router