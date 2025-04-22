const express = require('express');
const router = express.Router();
const { Professor } = require('../models');

//Listar categoria
router.get("/", async (req, res) => {
    const professores = await Professor.findAll();
    res.render(
        "base", {
            title: "Listar Professores",
            view: "professores/show",
            professores,
    });
});

//add nova categoria - formulário
router.get("/add", async (req, res) => {
    res.render(
        "base", {
            title: "Adicionar Professor",
            view: "professores/add",
    });
});

//add nova categoria - no bd
router.post("/add", async(req, res) =>{
    await Professor.create({nome: req.body.nome, materia: req.body.materia,});
    res.redirect("/professores")
});

//edit categoria - formulário
router.get("/edit/:id", async (req, res) => {
    const professor = await Professor.findByPk(req.params.id);
    res.render(
        "base", {
            title: "Editar Professor",
            view: "professores/edit",
            professor,
    });
});

//edit categoria - no bd
router.post("/edit/:id", async(req, res) =>{
    await Professor.update(
        {nome: req.body.nome, materia:req.body.materia,},
        {where:{id: req.params.id}}
    );
    res.redirect("/professores")
});

//excluir categoria
router.post("/delete/:id", async(req, res) =>{
    await Professor.destroy({where:{id: req.params.id}});
    res.redirect("/professores")
});

module.exports = router;