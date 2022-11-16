module.exports = (sequelize, Sequelize) => {
    const File = sequelize.define("file", {
      fileName: {
        type: Sequelize.STRING
      },
      filePath: {
        type: Sequelize.STRING
      },
    });
  
    return File;
  };