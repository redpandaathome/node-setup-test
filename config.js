if (process.env.NODE_ENV == 'development') {
   require("dotenv").config();
 }
 
 function required(key, defaultValue = undefined) {
   const value = process.env[key] || defaultValue;
   if (value == null) {
     throw new Error(`Key ${key} is undefined!`);
   }
   return value;
 }
 
 const config = {
   db: {
     host: required("RDS_HOSTNAME"),
     user: required("RDS_USER"),
     database: required("RDS_DATABASE"),
     password: required("RDS_PASSWORD"),
   },
   port: parseInt(required("port", 3000)),
 };
 
 module.exports.config = config;
 