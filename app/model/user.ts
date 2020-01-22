export default (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    nickname: STRING(20),
    job: STRING(20),
    avatar: STRING(255),
    gender: INTEGER(1),
    created: DATE,
    updateds: DATE,
  });

  User.getUserInfoByOpenid = async function(openId: string) {
    return await this.findOne({
      where: { openId },
    });
  };

  return User;
};
