const { Transaction, Item, TransactionItem } = require("../models")

class TransController {
	static showAll(req, res) {
		Transaction.findAll({
			include: Item,
			order: ["date"]
		})
			.then(data => {
				// console.log(data.Trancation.Items);
				res.render("transactions", { transactions: data })
			})

			.catch(err => {
				res.send(err)
			})
	}

	static showEditPage(req, res) {

		Transaction.findOne({
			where: ({
				id: req.params.id
			}),
			include: Item
		})

			.then(data => {
				console.log(data.id)
				res.render("editTransaction", { data })
			})
			.catch(err => {
				res.send(err)
			})

		// res.send("Menampilkan form edit yg isinya list item yg ada di transaksi, sudah terpopulate. Hanya bisa dilakukan pada status paid: false")

	}

	static editTrans(req, res) {
		let values = Object.values(req.body)
		let keys = Object.keys(req.body)
		// value.forEach(el => {})
		for(let i = 0; i < values.length; i++) {
			TransactionItem.update({ amount: values[i] }, {
				where: {
					TransactionId: +req.params.id,
					ItemId: +keys[i]
				}
			})
			
			.then(data => {
		
			})
			.catch(err => {
				res.send(err)
			})

		}
	
			res.redirect("/transactions")
		// res.send(Object.values(req.body))


		// res.send("Mengubah transaksi ini. hanya dapat dilakukan pada status paid: false")
	}

	static deleteTrans(req, res) {
		// Transaction.destroy({
		Transaction.destroy({
			where: {
				id: req.params.id
			}
		})
			.then(data => {
				res.redirect("/transactions")
			})
			.catch(err => {
				res.send(err)
			})

	}

	static pay(req, res) {
		Transaction.update({ isPaid: true }, {
			where: {
				id: +req.params.id
			}
		})
			.then(data => {
				res.redirect("/transactions")
			})
			.catch(err => {
				res.send(err)
			})
		//   Transaction.update({isPaid: true}, {
		//     where: {
		//       id: +req.params.id

	}
}

module.exports = TransController