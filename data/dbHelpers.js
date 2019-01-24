const knex = require('knex');

const db_config = require('../knexfile.js');

const db = knex(db_config.development);

module.exports = {
    registerUser: (user) => {
        return db('users').insert(user);
    },

    findUserById: (user) => {
        return db('users').where({ id }).first();
    },

    loginUser: (user) => {
        return db('users').where('users.username', user.username)
    } ,

    findUsers: () => {
        return db('users').select('id', 'username');
      }
}