const JWT = require ("jsonwebtoken");

//protected route

module.exports.requireSignIn = async (req, res, next) =>  {
  try {
      const token = req.header('Authorization');
   console.log(token)
      if (!token) {
          return res.status(401).json({ error: 'Unauthorized - Token not provided' });
      }
      JWT.verify(token, "CHATAPP", (err, user) => {
          if (err) {
              return res.status(403).json({ error: 'Forbidden - Invalid token' });
          }
          req.user = user;
          next();
      });
  }
  catch (error) {
    console.log(error)
      res.status(500).send({
          message: "Internal Server Error",
          error: error.message,
      })
  }
}
