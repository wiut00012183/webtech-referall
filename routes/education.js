const express = require('express');
const educationFile = require('../controllers/education');
const router = express.Router();

router.post('/education-detail',  educationFile.postEducationDetail);
router.get('/',  educationFile.getAllEducation);
router.get('/education-edit/:educationId',  educationFile.getEditEducation);
router.post('/education-edit',  educationFile.postEditEducation);
router.get('/add-new-education',  educationFile.getNewEducation);
router.post('/add-new-education',  educationFile.postNewEducation);
router.post('/education-delete',  educationFile.deleteEducation);


module.exports = router;
