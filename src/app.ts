#! /usr/bin/env node

import mysql from 'mysql2';
import _ from 'lodash';

const args = process.argv.slice(2);
const action = args.find((a) => a.includes('--action='))?.replace('--action=', '');
const host = args.find((a) => a.includes('--dbhost='))?.replace('--dbhost=', '');
const port = args.find((a) => a.includes('--dbport='))?.replace('--dbport=', '');
const user = args.find((a) => a.includes('--dbuser='))?.replace('--dbuser=', '');
const password = args.find((a) => a.includes('--dbpassword='))?.replace('--dbpassword=', '');
const database = args.find((a) => a.includes('--dbdatabase='))?.replace('--dbdatabase=', '');

if ((host ?? '').length <= 0 || (user ?? '').length <= 0 || (password ?? '').length <= 0 || (database ?? '').length <= 0) {
  throw Error('Missing database credentials. Consult documentation for more information.');
}

const connection = mysql.createConnection({
  host: host,
  port: _.isNil(port) ? 3306 : +port,
  user: user,
  password: password,
  database: database,
});
Run(connection);

async function Run(connection: mysql.Connection) {
  switch (action) {
    case 'dump':
      connection.end();
      throw Error('Not yet implemented');
    case 'restore':
      connection.end();
      throw Error('Not yet implemented');
    default:
      connection.end();
      throw Error('No valid action defined. Please use the --action flag to define a valid action! For more information consult the documentation.');
  }
}