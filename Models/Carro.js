import { DataTypes } from "sequelize";
import database from '../Config/database.js'

const Carro = database.define('Carros', {
    model:{
        type:DataTypes.STRING
    },
    year: {
        type:DataTypes.INTEGER
    }, 
    owner:{
        type:DataTypes.INTEGER
    }
})

export default Carro;