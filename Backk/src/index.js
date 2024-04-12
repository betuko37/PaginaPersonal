const express = require("express");
const morgan = require("morgan");
const database = require("./database");
const cors = require("cors");

const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Escuchando comunicaciones al puerto " + app.get("port"));

//middlewares
app.use(cors({
    origin: ["http://127.0.0.1:3000","http://127.0.0.1:3001"]
}));
app.use(morgan("dev"));

//rutas
app.get("/productos", async (req, res) => {
  const connection = await database.getConnection();

  const resultado = await connection.query("SELECT * FROM productos");
  res.json(resultado);


});
