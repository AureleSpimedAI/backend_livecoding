const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

/** Here we are configuring express to use body-parser as middle-ware. */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Server running");
});

/** Routers API */
const apiRouter = require("./routes/api");
app.use("/api", apiRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${PORT}`);
});
