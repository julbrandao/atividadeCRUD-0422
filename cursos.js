const express = require('express');
const router = express.Router();

const { Curso } = require('../models');

// Listar cursos
router.get("/", async (req, res) => {
    const cursos = await Curso.findAll();
    res.render("base", {
        title: "Listar Cursos",
        view: "cursos/show",
        cursos,
    });
});

// Formulário para adicionar curso
router.get("/add", async (req, res) => {
    res.render("base", {
        title: "Adicionar Curso",
        view: "cursos/add",
    });
});

// Adicionar curso no banco
router.post("/add", async (req, res) => {
    await Curso.create({ nome: req.body.nome });
    res.redirect("/cursos");
});

// Formulário para editar curso
router.get("/edit/:id", async (req, res) => {
    const curso = await Curso.findByPk(req.params.id);
    res.render("base", {
        title: "Editar Curso",
        view: "cursos/edit",
        curso,
    });
});

// Atualizar curso no banco
router.post("/edit/:id", async (req, res) => {
    await Curso.update(
        { nome: req.body.nome },
        { where: { id: req.params.id } }
    );
    res.redirect("/cursos");
});

// Excluir curso
router.post("/delete/:id", async (req, res) => {
    await Curso.destroy({ where: { id: req.params.id } });
    res.redirect("/cursos");
});

module.exports = router;
