const getAllCompaines = "SELECT * FROM  sai";
const getCompaniesById = "SELECT * FROM sai WHERE id = $1";
const checkCompanyAlreadyExist = "SELECT s FROM sai s WHERE s.companyname = $1";
const AddCompanies = "INSERT INTO sai (id,companyname,datecreatedat) VALUES ($1,$2,$3)";
const removeCompanies = "DELETE FROM sai WHERE id = $1";


const getSelectedCompany = "select * from seletedcompany";

const selectedCompanies = "INSERT INTO seletedCompany (id,companyname,datecreatedat) VALUES ($1,$2,$3)";


module.exports = {
    getAllCompaines,
    getCompaniesById,
    checkCompanyAlreadyExist,
    AddCompanies,
    removeCompanies,
    selectedCompanies,
    getSelectedCompany
}