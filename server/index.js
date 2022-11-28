const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFortune, updateFortune, deleteFortune } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/fortune", addFortune)
app.put("/api/fortune/:index", updateFortune)
app.delete("/api/fortune/:index", deleteFortune);


app.listen(4000, () => console.log("Server running on 4000"));
