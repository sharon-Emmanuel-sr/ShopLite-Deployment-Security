require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
});

console.log(`Application running in ${process.env.NODE_ENV} mode.`);
console.log(`Connecting to: ${process.env.DB_URL}`);