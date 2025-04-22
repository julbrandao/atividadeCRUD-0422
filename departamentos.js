const express = require('express');
const router = express.Router();

const { Departamento } = require('../models');

// Listar departamentos
router.get("/", async (req, res) => {
    const departamentos = await Departamento.findAll();
    res.render("base", {
        title: "Listar Departamentos",
        view: "departamentos/show",
        departamentos,
    });
});

// Formulário para adicionar
router.get("/add", async (req, res) => {
    res.render("base", {
        title: "Adicionar Departamento",
        view: "departamentos/add",
    });
});

// Salvar novo departamento
router.post("/add", async (req, res) => {
    await Departamento.create({
        nome: req.body.nome,
        descricao: req.body.descricao,
    });
    res.redirect("/departamentos");
});

// Formulário para editar
router.get("/edit/:id", async (req, res) => {
    const departamento = await Departamento.findByPk(req.params.id);
    res.render("base", {
        title: "Editar Departamento",
        view: "departamentos/edit",
        departamento,
    });
});

// Atualizar no banco
router.post("/edit/:id", async (req, res) => {
    await Departamento.update(
        {
            nome: req.body.nome,
            descricao: req.body.descricao,
        },
        { where: { id: req.params.id } }
    );
    res.redirect("/departamentos");
});

// Excluir
router.post("/delete/:id", async (req, res) => {
    await Departamento.destroy({ where: { id: req.params.id } });
    res.redirect("/departamentos");
});

module.exports = router;
