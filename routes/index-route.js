const express = require('express')
const router = express.Router()
const IndexController = require("../controllers/index-controller")
const shop = require("./shop-route")
const transaction = require("./transactions-route")

router.get('/', IndexController.showMainPage)

router.use("/shop", shop)
router.use("/transactions", transaction)

module.exports = router