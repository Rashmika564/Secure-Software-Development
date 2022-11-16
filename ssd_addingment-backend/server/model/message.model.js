module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("message", {
      message: {
        type: Sequelize.STRING
      }
    });
  
    return Message;
  };