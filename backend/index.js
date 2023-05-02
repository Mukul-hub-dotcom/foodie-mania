const express = require("express");
const cors = require("cors");
const app = express();
const connectToMongoDB = require("./db.js");

connectToMongoDB();

app.use(cors());
app.get("/", (req, res) => {
  res.send("hello Mukul");
});
app.use(express.json());

app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

app.listen(5000, () => {
  console.log(`Server is Listening on 5000`);
});
