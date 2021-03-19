import express from "express";
// rest of the code remains same
const app = express();
const PORT = 1568;
app.get("/", (req, res) => res.send("hello world"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at  http://localhost:${PORT}`);
});
