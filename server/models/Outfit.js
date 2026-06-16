const mongoose = require(
  "mongoose"
);

const outfitSchema =
  new mongoose.Schema(

    {

      user: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

      },

      suggestion: {

        type: String,

        required: true,

      },

      isFavorite: {

        type: Boolean,

        default: false,

      },

    },

    {

      timestamps: true,

    }

  );

module.exports =
  mongoose.model(

    "Outfit",

    outfitSchema

  );
