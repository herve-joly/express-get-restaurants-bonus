const express = require("express");
const app = express();
const port = 3000;
const { Restaurant, Menu, Item } = require("./models/index");
const { sequelize } = require("./db");

//TODO:
app.use(express.json());
app.get("/restaurants", async (request, response) => {
  const respond = await Restaurant.findAll({
    include: [{ model: Menu, include: [{ model: Item }] }],
  });

  response.send(respond);
});

app.listen(port, () => {
  sequelize.sync();
  console.log("App listening on port " + port);
});
