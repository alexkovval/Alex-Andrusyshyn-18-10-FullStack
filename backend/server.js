const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use(require("cors")());

app.use("/cities", require("./src/routes/citiesRoutes"));

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
