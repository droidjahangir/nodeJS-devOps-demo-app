import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;


const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", (req, res, next) => {
    return res.json('returned response for /api/users')
});

app.listen(PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});