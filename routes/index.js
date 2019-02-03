let express = require('express')
let router = express.Router()

const itemController = require('../controllers/itemController')
const reviewController = require('../controllers/reviewController')


// router.get('/', (req, res) => { res.send()});
router.get('/america/:category', itemController.index);
router.get('/', itemController.index);


//  AdDMIN Routes
router.put('/america/admin/', itemController.create);
router.post('/america/admin/:id', itemController.update);
router.delete('/america/admin/:id', itemController.delete);

module.exports = router;