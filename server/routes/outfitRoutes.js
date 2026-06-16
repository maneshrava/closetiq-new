const express = require(
  "express"
);

const router =
  express.Router();

const Outfit = require(
  "../models/Outfit"
);

const authMiddleware = require(
  "../middleware/authMiddleware"
);

/* Get Outfit History */
router.get(

  "/",

  authMiddleware,

  async (req, res) => {

    try {

      const outfits =
        await Outfit.find({

          user:
            req.userId,

        }).sort({

          createdAt: -1,

        });

      res.status(200).json({

        success: true,

        history: outfits,

        data: outfits,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed to fetch outfits",

      });

    }

  }

);

/* Get Favorite Outfits */
router.get(

  "/favorites",

  authMiddleware,

  async (req, res) => {

    try {

      const favorites =
        await Outfit.find({

          user:
            req.userId,

          isFavorite: true,

        }).sort({

          createdAt: -1,

        });

      res.status(200).json({

        success: true,

        favorites,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed to fetch favorite outfits",

      });

    }

  }

);

/* Toggle Favorite Outfit */
router.patch(

  "/:id/favorite",

  authMiddleware,

  async (req, res) => {

    try {

      const outfit =
        await Outfit.findOne({

          _id:
            req.params.id,

          user:
            req.userId,

        });

      if (!outfit) {

        return res.status(404).json({

          message:
            "Outfit not found",

        });

      }

      outfit.isFavorite =
        typeof req.body.isFavorite === "boolean"
          ? req.body.isFavorite
          : !outfit.isFavorite;

      await outfit.save();

      res.status(200).json({

        success: true,

        outfit,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed to update favorite outfit",

      });

    }

  }

);

module.exports = router;
