const express = require('express')
const router = express.Router()

// Import controllers
const UserControllers = require('./controllers/UserController')

router.get('/users', UserControllers.index)
router.get('/user', UserControllers.show)
router.post('/users', UserControllers.store)
router.put('/users', UserControllers.update)
router.delete('/users', UserControllers.destroy)

module.exports = router