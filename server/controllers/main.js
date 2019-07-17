const db = require('../utils/database.js');

exports.mainpage = async (req, res) => {
  try{
  const result = await db.execute('SELECT * FROM teachers');
  console.log(result);
  }catch(err){
    console.log(err);
  }
};