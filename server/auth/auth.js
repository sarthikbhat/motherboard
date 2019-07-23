const jwt=require('jsonwebtoken');



module.exports = {
    async verify(req, res, next) {
        try {
          var token = req.headers.authorization.split(" ");
          if (token) {

            jwt.verify(token, "secret", function (err, payload) {
                console.log(payload)
                if (payload) {
                    user.findById(payload.userId).then(
                        (doc)=>{
                            req.user=doc;
                            next()
                        }
                    )
                } else {
                   next()
                }
            });

            return await next();
          } else {
            console.log('Access Token missing');
            return res.unauthorizedUser();
          }
        } catch(e) {
          if(/JsonWebTokenError/i.test(e)) {
            return res.unauthorizedUser();
          }
          return res.error(e);
        }
      }
}