const designController = require('../controllers/designController')
const router = require('express').Router()
const auth = require('../middlewares/middleware')

router.post('/create-user-design',auth,designController.create_user_design) 
router.get('/user-design/:design_id',auth,designController.get_user_design) 

module.exports = router
