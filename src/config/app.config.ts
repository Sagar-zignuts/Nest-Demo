export const appConfig = () => {
  return {
    environment: {},
    database: {
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username : process.env.DB_USERNAME,
      password : process.env.DB_PASSWORD, 
    },
  };
};
