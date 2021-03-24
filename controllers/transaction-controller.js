class TransController {
	static showAll(req, res) {
		res.send("Menampilkan history transaction untuk user id ini. id user dapat dari session")
	}
	
	static showEditPage(req, res) {
		res.send("Menampilkan form edit yg isinya list item yg ada di transaksi, sudah terpopulate. Hanya bisa dilakukan pada status paid: false")
	}
	
	static editTrans(req, res) {
		res.send("Mengubah transaksi ini. hanya dapat dilakukan pada status paid: false")
	}
	
	static deleteTrans(req, res) {
	  res.send("Membatalkan transaksi. hanya dapat dilakukan pada status paid: false")
	}
	
	static pay(req, res) {
	  res.send("Mengubah status transaksi paid menjadi true")
	}
}

module.exports = TransController