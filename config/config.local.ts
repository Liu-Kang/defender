import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  // Sequelize config
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'defender',
    username: 'root',
    password: '2917',
    operatorsAliases: false
  };

  return config;
};
