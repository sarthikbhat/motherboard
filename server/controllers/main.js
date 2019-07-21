const db = require('../utils/database.js');

// exports.mainpage = async (req, res) => {
//   try{
//   const result = await db.execute('SELECT * FROM teachers');
//   console.log(result);
//   }catch(err){
//     console.log(err);
//   }
// };

exports.mainpage = async (req, res) => {
  const type = req.query.type
  res.status(422).render('index', {
    path: '/dashboard',
    pageTitle: 'Mentorship_Forum',
    type
  });
};
exports.connection = async (req, res) => {
  res.render('mainpage');
};