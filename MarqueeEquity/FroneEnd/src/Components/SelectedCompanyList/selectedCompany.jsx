import React, { useState ,  useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import "./selected.css"


function SelectedCompany() {
  const [selectedList,setSelectedList] = useState([]);

  const columns = [
    { dataField: "id", text: "CIN", sort: true },
    { dataField: "companyname", text: "Name", sort: true },
  ];

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/CompanyLists/companySeletedAll")
    .then(response => response.json())
    .then(data =>setSelectedList(data))
  },[])

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc"
    }
  ];

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    }
  });
  
  console.log(selectedList)

  
    return (
      <div className='container'>
        <div className='addMoreBtn'>
          <button>Company</button>
          <div>+</div>
  
        </div>
        <div className="BoostrapTable"></div>
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={selectedList}
          columns={columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
        />
      </div>
    )
  
 
}

export default SelectedCompany