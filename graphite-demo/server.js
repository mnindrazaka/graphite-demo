const express = require("express");
const activityFeed = require("./data.js");

const app = express();
const port = 3000;

app.get("/feed", (req, res) => {
  res.json(activityFeed);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}, lets go`);
});
