class ShopController {
	static showAllItems(req, res) {
		res.send("tampilkan list kue dalam form tipe number")
	}

	static checkout(req, res) {
		res.send("Buat entri transaksi ( dan itemtransaction ) baru sesuai dari nilai form, redirect ke transaction list")
	}	
}

module.exports = ShopController