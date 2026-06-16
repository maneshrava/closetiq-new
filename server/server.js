const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const authRoutes =
  require("./routes/authRoutes");

const clothesRoutes =
  require("./routes/clothesRoutes");

const aiRoutes =
  require("./routes/aiRoutes");

const outfitRoutes =
  require("./routes/outfitRoutes");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
  process.env.MONGO_URI
)

.then(() => {

  console.log(
    "MongoDB Connected 🚀"
  );

})

.catch((error) => {

  console.log(error);

});

app.get("/", (req, res) => {

  res.send(
    "ClosetIQ Backend Running 🚀"
  );

});

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/clothes",
  clothesRoutes
);

app.use(
  "/api/ai",
  aiRoutes
);

app.use(
  "/api/history",
  outfitRoutes
);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});
