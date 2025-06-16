const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        console.log("Instancia del Servidor")

        this.app= express();
        this.port = process.env.API_PORT || 3500; //confg del express
        this.pre = "/api"
        //definir los paths de los end point 
        this.paths={
            role:`${this.pre}/roles`,
            user:`${this.pre}/users`,
        }
        //
        this.middlewares();
        this.routes();

    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'));
    }
    routes(){

        this.app.use(this.paths.role,require('../routers/role.route'))
        this.app.use(this.paths.user,require('../routers/user.route'))
        

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Listen in http://localhost:${this.port}`)
        })
    }

}



module.exports={
    Server
}