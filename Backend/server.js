const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hellow world");
});

app.listen(4000, () => console.log("server is running in port no 4000"));
