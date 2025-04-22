module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define("Professor", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        materia: { 
          type: DataTypes.STRING,
          allowNull: false, 
      },
    });

    
    return Professor;

}; 