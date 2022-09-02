const express = require("express");
const cors = require('cors');

const CompanyListRoutes = require("./Routes/routes");

const app = express();
const port = 8080;

app.use(cors(
      {
          origin: 'http://localhost:3001'
        }
));


app.use(express.json());

app.use('/api/v1/CompanyLists',CompanyListRoutes);

app.listen(port,()=>console.log(`app listening on port ${port}`))