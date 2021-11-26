const mongoose = require('mongoose');
const { DB_CONNECTION } = require('../config');

module.exports = () => mongoose.connect(DB_CONNECTION);
