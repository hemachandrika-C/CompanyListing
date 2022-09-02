import React from "react";

import {Router } from "react-router-dom";

import { Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import CompanyMain from './Components/ComapnyListDropDown/CompanyMain';
import SelectedCompany from "./Components/SelectedCompanyList/selectedCompany";
import Paginate from "./Components/SelectedCompanyList/Paginate";

const appHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">

      <Router history={appHistory}>
        <Switch>
            <Route path="/" component={CompanyMain} exact />

            <Route path="/sai" component={SelectedCompany} />

             <Route path="/paginate" component={Paginate} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
