const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("This is a test end point");
  res.send("Your GET response.");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ::: ${PORT}`);
});
