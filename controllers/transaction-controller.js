const {Transaction, Item} = require("../models")

class TransController {
	static showAll(req, res) {
		Transaction.findAll({
      include: Item,
      order: ["date"]
    }) 
      .then(data => {
        res.render("transactions", {transactions: data})
      })

      .catch(err => {
        res.send(err)
      })
	}
	
	static showEditPage(req, res) {
		res.send("Menampilkan form edit yg isinya list item yg ada di transaksi, sudah terpopulate. Hanya bisa dilakukan pada status paid: false")
	}
	
	static editTrans(req, res) {
    // Transaction.findByPk(+req.params.id, {
    //   include: Item
    // })

		res.send("Mengubah transaksi ini. hanya dapat dilakukan pada status paid: false")
	}
	
	static deleteTrans(req, res) {
	  // Transaction.destroy({

	}
	
	static pay(req, res) {
	//   Transaction.update({isPaid: true}, {
  //     where: {
  //       id: +req.params.id

	}
}

module.exports = TransController