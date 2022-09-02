const pool = require("../db");

const queries = require("../queries/queries");


const getSelectedCompany = (req, res) => {
    pool.query(queries.getSelectedCompany, (error, results) => {
        console.log(res)
  
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  };

const addSelectedCompanyInfo = (req, res) => {
    console.log(req.body);
    const { id, companyname, datecreatedat } = req.body;
  

      pool.query(
        queries.selectedCompanies,
        [id,companyname,datecreatedat],
        (error, results) => {
          if (error) throw error;
          res.status(201).send("Companies Added Successfully");
        }
      );

  };

module.exports = {
    getSelectedCompany,
    addSelectedCompanyInfo
  };
  