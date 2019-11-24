const bcrypt = require('bcrypt')

const User = require('../models/User')

module.exports = {
  async index(req, res, next) {
    const user = await User.find()
    return res.json(user)
  },

  async show(req, res) {
    const { username } = req.body

    const user = await User.findOne({ username })

    if (!user) {
      return res.status(400).json({ error: 'O usuário não existe' })
    }

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
    const { name, email, username } = req.body
    let { password } = req.body

    let user = await User.findOne({ username })

    if (!user) {
      return res.status(400).json({ error: 'O usuário não existe' })
    }
    if (name) {
      user.name = name
    }
    if (email) {
      user.email = email
    }
    if (password) {
      user.password = await bcrypt.hash(password, 12)
    }

    user = await User.findByIdAndUpdate(user._id, user)

    return res.json(user)
  },

  async destroy(req, res) {
    const { username } = req.body

    let user = await User.findOne({ username })

    if (!user) {
      return res.status(400).json({ error: 'O usuário não existe' })
    }

    user = await User.findByIdAndDelete(user._id)

    return res.json(user)
  },
}