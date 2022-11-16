import { DataTypes } from "sequelize";
import database from '../Config/database.js'

const Users = database.define('Users', {
    name:{
        type:DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING
    }, 
    email:{
        type:DataTypes.STRING
    }
})

export default Users;