const { Router } = require('express');
const controller = require('../Controllers/Controllers');

const companyController = require('../Controllers/selectedController');


const router = Router();


router.get('/companySeletedAll', companyController.getSelectedCompany);
router.post('/companySeleted', companyController.addSelectedCompanyInfo);

router.get('/', controller.getAllCompaniesInfo);
router.post('/', controller.addCompaniesInfo);
router.get("/:id",controller.getCompaniesByIdInfo);
router.delete("/:id",controller.removeCompaniesInfo);






module.exports = router;