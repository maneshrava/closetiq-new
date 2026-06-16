const jwt =
  require("jsonwebtoken");

function authMiddleware(

  req,

  res,

  next

) {

  try {

    const token =
      req.header(
        "Authorization"
      )?.replace(
        "Bearer ",
        ""
      );

    if (!token) {

      return res
        .status(401)
        .json({

          message:
            "No token",

        });

    }

    const decoded =
      jwt.verify(

        token,

        process.env.JWT_SECRET

      );

    console.log(
      decoded
    );

    /* SAVE USER */

    req.user = decoded.id;

    next();

  } catch (error) {

    console.log(error);

    res.status(401)
      .json({

        message:
          "Invalid token",

      });

  }

}

module.exports =
  authMiddleware;
