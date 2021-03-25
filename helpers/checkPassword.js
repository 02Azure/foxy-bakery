const bcrypt = require("bcryptjs")

function checkPassword(input, hash) {
  return bcrypt.compareSync(input, hash)
}

module.exports = checkPassword