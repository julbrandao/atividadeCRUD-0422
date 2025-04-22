module.exports = (sequelize, DataTypes) => {
    const Departamento = sequelize.define("Departamento", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    Departamento.associate = (models) => {
   
        Departamento.hasMany(models.Curso, {
            foreignKey: "departamentoId",
            as: "Cursos", 
        });
    };

    return Departamento;
};
