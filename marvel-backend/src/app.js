const express = require("express");
const cors = require("cors");
const characterRoutes = require("./routes/characterRoutes");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/api/characters", characterRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
