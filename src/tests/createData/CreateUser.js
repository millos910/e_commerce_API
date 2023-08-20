const User = require("../../models/User")

const userCreate = async () => {

  const user = {
    firstName: "Emilio",
    lastName: "Montero",
    email: "emontero910@gmail.com",
    password: "emilio123",
    phone: "+593 0962932613"
  }

  await User.create(user)

}

module.exports = userCreate