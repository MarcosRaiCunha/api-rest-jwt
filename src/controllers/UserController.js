const bcrypt = require('bcrypt')

const User = require('../models/User')

module.exports = {
  async index(req, res, next) {
    const user = await User.find()
    return res.json(user)
  },

  async store(req, res, next) {
    const { name, username, email } = req.body
    let { password } = req.body
    let user = await User.findOne({ username })

    if (user) {
      return res.json(user)
    }

    password = await bcrypt.hash(password, 12)

    user = await User.create({
      name,
      username,
      email,
      password,
      create_at: Date.now()
    })
    return res.json(user)

  },

  async update(req, res) {
    
  },
  async destroy(req, res) {

  },
}