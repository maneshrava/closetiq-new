const mongoose =
  require("mongoose");

const historySchema =
  new mongoose.Schema(

    {

      user: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

      },

      outfit: {

        type: String,

        required: true,

      },

    },

    {

      timestamps: true,

    }

  );

module.exports =
  mongoose.model(

    "History",

    historySchema

  );
