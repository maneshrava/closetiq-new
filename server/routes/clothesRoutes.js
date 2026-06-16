const express = require("express");

const router = express.Router();

const Cloth = require("../models/Cloth");

const authMiddleware = require(
  "../middleware/authMiddleware"
);

router.get(
  "/",

  authMiddleware,

  async (req, res) => {

    try {

      const clothes =
        await Cloth.find({

          user: req.userId,

        });

      res.status(200).json({

        clothes,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed to fetch clothes",

      });

    }

  }
);

router.post(
  "/",

  authMiddleware,

  async (req, res) => {

    try {

      const cloth =
        await Cloth.create({

          ...req.body,

          user: req.userId,

        });

      res.status(201).json({

        cloth,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Failed to add cloth",

      });

    }

  }
);

router.delete(
  "/:id",

  authMiddleware,

  async (req, res) => {

    try {

      await Cloth.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({

        message:
          "Deleted successfully",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Delete failed",

      });

    }

  }
);

router.put(

  "/:id",

  authMiddleware,

  async (req, res) => {

    try {

      const updatedCloth =
        await Cloth.findByIdAndUpdate(

          req.params.id,

          req.body,

          {

            new: true,

          }

        );

      res.status(200).json({

        updatedCloth,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Update failed",

      });

    }

  }

);

module.exports = router;
