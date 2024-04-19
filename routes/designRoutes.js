const designController = require('../controllers/designController')
const router = require('express').Router()
const auth = require('../middlewares/middleware')

router.post('/create-user-design',auth,designController.create_user_design) 

module.exports = router
