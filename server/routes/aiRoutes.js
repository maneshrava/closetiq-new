const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const Cloth =
  require("../models/Cloth");

const History =
  require("../models/History");

/* GENERATE AI OUTFIT */

router.post(

  "/generate",

  authMiddleware,

  async (req, res) => {

    try {

      console.log(
        "AI ROUTE HIT"
      );

      /* USER ID */

      const userId =
        req.user.id;

      /* GET USER CLOTHES */

      const clothes =
        await Cloth.find();

      /* NO CLOTHES */

      if (
        clothes.length === 0
      ) {

        return res
          .status(400)
          .json({

            message:
              "No clothes found",

          });

      }

      /* MOCK WEATHER */

      const weather =
        "Cloudy";

      const temperature =
        24;

      /* SIMPLE AI OUTFIT */

      const top =
        clothes[0];

      const bottom =
        clothes[1]
        || clothes[0];

      const outfit =
        `
Current Weather:
${weather}

Temperature:
${temperature}°C

Wear the
${top.color}
${top.name}

with the
${bottom.color}
${bottom.name}

for a stylish
weather-friendly outfit.
`;

      /* SAVE HISTORY */

      const newHistory =
        new History({

          user: userId,

          outfit,

        });

      await newHistory.save();

      /* RESPONSE */

      res.json({

        success: true,

        weather,

        temperature,

        outfit,

      });

    } catch (error) {

      console.log(error);

      res.status(500)
        .json({

          message:
            "AI generation failed",

        });

    }

  }

);

/* GET HISTORY */

router.get(

  "/history",

  authMiddleware,

  async (req, res) => {

    try {

      const userId =
        req.user.id;

      const history =
        await History.find({

          user: userId,

        }).sort({

          createdAt: -1,

        });

      res.json({

        history,

      });

    } catch (error) {

      console.log(error);

      res.status(500)
        .json({

          message:
            "Failed to fetch history",

        });

    }

  }

);

module.exports =
  router;
