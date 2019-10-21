const jwt=require('jsonwebtoken');
module.exports = {
    async verify(req, res, next) {
        try {
          var token = req.headers.token
          if (token) {
            jwt.verify(token, "secret", async function (err, payload) {
                if (payload) {
                    req.userId = payload.userId;
                } else {
                   next()
                }
            });
            return await next();
          } else {
            console.log('Access Token missing');
            return res.status(500).json({message:"Unauthorized User."});
          }
        } catch(e) {
          if(/JsonWebTokenError/i.test(e)) {
            return res.status(500).json({message:"Unauthorized User."});
          }
          return res.status(500).json({error:e});
        }
      }
}