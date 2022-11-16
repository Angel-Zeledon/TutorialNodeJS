import { response, request } from "express";
import Carro from "../Models/Carro.js";
import Users from "../Models/Users.js";

export const obtenerCarros = async(req = request, res = response) => {
    const {name, password} = req.body

    const user = await Users.findOne({
        where:{
            name,
            password
        }
    })

    if(!user){
        res.status(404).json({
            mensaje:"Usuario no encontrado"
        })
    }

    const carros = await Carro.findAll({
        where:{
            owner:user.get('id')
        }
    })

    res.status(200).json({
        carros
    })

}

export const CrearCarro = async(req = request, res = response) => {
    const {model, year, owner} = req.body;
    const carro = {
        owner,
        model,
        year
    }

    await Carro.update(carro)

    res.status(201).json({
        carro
    })
}

