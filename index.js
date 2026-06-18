import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
  return res.json({ message: "Server is healthy this is v 4.1", status: "Github Actions added" });
});

app.listen(PORT, (req, res) => {
  console.log(`App is running on PORT ${PORT}`);
});
