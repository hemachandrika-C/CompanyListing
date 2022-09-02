const pool = require("../db");
const queries = require("../queries/queries");

const getAllCompaniesInfo = (req, res) => {
  pool.query(queries.getAllCompaines, (error, results) => {

    console.log(results)
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getCompaniesByIdInfo = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getCompaniesById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addCompaniesInfo = (req, res) => {
  console.log(req.body);
  const { id, companyname, datecreatedat } = req.body;

  //Check if email address
  pool.query(queries.checkCompanyAlreadyExist, [companyname], (error, results) => {
    if(results.rows.length){
      res.send("Company Name already Exist...Create new One")
    }

    //add students to db
    pool.query(
      queries.AddCompanies,
      [id,companyname,datecreatedat],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Companies Added Successfully");
      }
    );
  });
};


const removeCompaniesInfo = (req, res) => {
  const id = parseInt(req.params.id);

  console.log(id);

  pool.query(queries.getCompaniesById , [id], (error, result) => {
    const companyNotExist = !result.rows.length;

    if (companyNotExist) {
      res.send("Company does not exist in the database!!!");
    }

    pool.query(queries.removeCompanies, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Company removed successfully");
    });
  });
};


module.exports = {
  getAllCompaniesInfo,
  getCompaniesByIdInfo,
  addCompaniesInfo,
  removeCompaniesInfo,
};

