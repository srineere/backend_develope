const express = require('express');
const coursecontroller = require('../controllers/courseController')

const router = express.Router();

router.get('/',coursecontroller.course_list_get);
router.get('/login',coursecontroller.login_get);
router.get('/instructors',coursecontroller.instructors_get);
router.get('/:id',coursecontroller.course_details_get);


module.exports = router;