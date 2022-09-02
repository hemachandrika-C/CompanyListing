import React, { Component } from 'react';


import "./mockcompany.css";


import axios from "axios";


import CompanyProps from './CompanyProps';

import { withRouter } from "react-router";

import { Link } from "react-router-dom";

import { NavLink, Route } from 'react-router-dom'


class CompanyMain extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        value :"",
        data:[],
      }
    }

    componentDidMount() {
        axios
          .get("http://localhost:8080/api/v1/CompanyLists")
          .then((response) => {
            
            console.log(response);

            this.setState({ data: response.data });
            
            console.log(this.state.data)
          })
          .catch((error) => {
            console.log(error);
          });
      }

    onChange = (event) => {
        this.setState({value:event.target.value});
      };

    onSearch = (searchTerm,searchSelectedID,datecreatedat) => {
      console.log(searchSelectedID)
      

      if(searchSelectedID){
        this.setState({value:searchTerm});

        axios
			.post('http://localhost:8080/api/v1/CompanyLists/companySeleted',{
        "id" : searchSelectedID,
        "companyname" : searchTerm,
        "datecreatedat" :datecreatedat
      })
			.then(response => {
        console.log(response.data);
         console.log("suceesss");
			})
			.catch(error => {
				console.log(error)
			})
      }


     

        // this.setState({value:searchTerm});

        // history.push("/list");

        // console.log(searchTerm);
      };

  render() {
    const { history } = this.props;

    return (
      <div className="container hema">
         <div className="wrapper__div">
                <div className="forms__div">
                  <div className="formsControl__box">
                    <input type="text" value={this.state.value} onChange={this.onChange} className="textbox__formControls"/>
                    <div className="dropdown__Icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10.222" viewBox="0 0 12 10.222">
                        <path id="Polygon_2" data-name="Polygon 2" d="M6,0l6,10.222H0Z" transform="translate(12 10.222) rotate(180)" fill="#868baf"/>
                      </svg>
                    </div>
                  </div>
                  <button to="/list" onClick={() => this.onSearch(this.state.value)} className="Submit"> SUBMIT </button>
                  {/* <NavLink to="sai" className="Submit">SUBMIT</NavLink> */}
                  
                  {/* <button onClick={() => history.push("/sai")} className="Submit"> SUBMIT </button> */}
                    {/* <Link to="/list" onClick={() => this.onSearch(this.state.value)} className="Submit"> SUBMIT </Link> */}
                    <div className="dropdown menu">
                      <CompanyProps valueItems= {this.state.data} itemsState={this.state.value} searchEvent={this.onSearch}/>
                    </div>
                </div>
               
            </div>
      </div>
    )
  }
}

export default withRouter(CompanyMain)