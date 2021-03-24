const express = require('express')
const router = express.Router()
const ShopController = require("../controllers/shop-controller")

router.get("/", ShopController.showAllItems) 

router.post("/", ShopController.checkout) //tambahkan entri transaksi (id dapat dari session)

module.exports = router