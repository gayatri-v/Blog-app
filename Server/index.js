import express from "express";

const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
  res.send("API is running..");
});
app.get("/", (req, res) => {
  res.send("API is not running..");
});
app.get("/", (req, res) => {
  res.send("API is not running..");
});



app.listen(PORT, () => {
  console.log(`API is running on https://localhost:${PORT}`);
});
