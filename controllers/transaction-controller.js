const { Transaction, Item, TransactionItem } = require("../models")

class TransController {
	static showAll(req, res) {
		Transaction.findAll({
      where: {
        UserId: +req.session.userId
      },
      include: Item,
      order: [["date", "DESC"]]
    }) 
      .then(data => {
        res.render("transactions", {transactions: data})
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
				res.render("editTransaction", { data })
			})
			.catch(err => {
				res.send(err)
			})
	}

	static editTrans(req, res) {
		let values = Object.values(req.body)
		let keys = Object.keys(req.body)

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
	}

	static deleteTrans(req, res) {
		Transaction.destroy({
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
	}

  static showStats(req, res) {
    Transaction.findAll({
      where: {
        UserId: +req.session.userId,
        isPaid: true
      },
      include: Item
    }) 
      .then(data => {
        res.render("transaction-stats", {data: data})
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = TransController