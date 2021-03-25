const {Item, Transaction, TransactionItem, User} = require("../models")

class ShopController {
	static showAllItems(req, res) {
    Item.findAll()
        .then(data => {
          res.render("shop", {items: data})
        })
        
        .catch(err => {
          res.send(err)
        })
	}

	static checkout(req, res) {
		//cek kalau semuanya 0
		let boughtItems = []
		
		for(let item in req.body) {
			if(req.body[item] > 0) {				
				Item.findByPk(+item)
					.then(data => {
						boughtItems.push({
							ItemId: +item, 
							amount: +req.body[item],
						}) 
					})
					
					.catch(err => {
						res.send(err)
					})
			}
		}

		Transaction.create({
			UserId: 1,//+session.userid
			// date: new Date(),
			isPaid: false
		})
			.then(data => {
				boughtItems.forEach(item => item.TransactionId = data.id)
				return TransactionItem.bulkCreate(boughtItems)
			})
			
			.then(data => {
				res.redirect("/transactions")
			})
	}	
}

module.exports = ShopController