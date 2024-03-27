/* eslint-disable prettier/prettier */
import { ConnectionPool } from 'mssql';

export const nestdb: ConnectionPool = new ConnectionPool({
  user: 'sa',
  password: 'root',
  server: 'localhost',
  database: 'Employee',
  // port: 5171,
  options: {
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
});