const express = require('express')
const router = express.Router()
const TransController = require("../controllers/transaction-controller")

router.get("/", TransController.showAll) 

router.get("/stats", TransController.showStats)

router.get("/edit/:id", TransController.showEditPage) //untuk ubah item transaksi. hanya dapat dilakukan pada status paid false

router.post("/edit/:id", TransController.editTrans)

router.get("/delete/:id", TransController.deleteTrans)

router.get("/pay/:id", TransController.pay)

module.exports = router