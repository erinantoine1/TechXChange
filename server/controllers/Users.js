const db = require('../db');

module.exports = {

  createUser: (req, res) => {
    const data = req.body;

    console.log('create user body:', data);
    let qString = `INSERT INTO users (name, email, description, thumbnail_url, street, city, state, country) VALUES ("${data.name}", "${data.email}", "${data.description}", "${data.thumbnail_url}", "${data.street}", "${data.city}", "${data.state}", "${data.country}");`;

    db.query(qString, function(err, results) {
      if(err) {
        console.log(err);
        res.status(500).send(err);
        return;
      }
      res.status(200).send(results);
    })

  },

  deleteUser: (req, res) => {
    const userEmail = req.query.email;

    let qString = `DELETE from users WHERE email='${userEmail}';`;

    db.query(qString, function(err, results) {
      if(err) {
        console.log(err);
        res.status(500).send(err);
        return;
      }
      res.status(200).send(results);
    })

  },
  getUser: async (req, res) => {
    const userEmail = req.query.email;
    console.log('GETTING USER with email of', userEmail);

    const qString = `SELECT * FROM users WHERE email = '${userEmail}';`;

    db.query(qString, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
        return;
      }
      // console.log('promise style results\n', results);
      res.status(200).send(results);
    });
  },

  getAllUsers: async (req, res) => {
    // console.log('GETTING All users');

    const qString = `SELECT * FROM users;`;

    db.query(qString, function (err, results) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
        return;
      }
      // console.log('promise style results\n', results);
      res.status(200).send(results);
    });
  },
};
