module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define("Curso", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Curso.associate = (models) => {
        Curso.belongsTo(models.Departamento, {
            foreignKey: "departamentoId",
            as: "Departamento",
        });

        Curso.hasMany(models.Aluno, {
            foreignKey: "cursoId",
            as: "Alunos",
        });

    };

    return Curso;
};
