import express from "express";
import * as path from "path";

const app = express();

app.use("/public", express.static(path.resolve("build/client")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("build/client/index.html"));
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log("Server started on port", PORT));
