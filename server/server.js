const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const dbName = "productmgrdb"

require("./config/mongoose.config")(dbName);

app.use(express.json());

app.use(cors());

require('./routes/product.routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );