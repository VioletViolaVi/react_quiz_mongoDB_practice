const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
let server;

// middleware config
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
app.use(bodyParser.json({ limit: "20mb" }));
app.use("/api/users/", userRoutes);

mongoose
  .connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("Database connections established"))
  .catch((err) =>
    console.log("Error connecting to mongodb instance ==> ", err)
  );

server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
