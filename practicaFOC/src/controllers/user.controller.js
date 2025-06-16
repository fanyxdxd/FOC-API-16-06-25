const { response, request } = require("express")

class UserController{

    constructor(){
        console.log("Instancia del UserController")

    }

    getAll(req = request, res = response){
        return res.status(201).json({
            msj: "Get All"
        })

    }

     getOne(req = request, res = response){
        const { id } = req.params;

        return res.status(201).json({
            msj: "Get One",
            id
        })

    }

    created(req = request, res = response){

        const { name, email, password, role_id } = req.body;
        
        return res.status(201).json({
            msj: "Created",
            role:{
                name,
                email,
                password,
                role_id,
            }
        })

    }

    update(req = request, res = response){
        const { id } = req.params;
        const {name, email, password, role_id} = req.body

        return res.status(201).json({
            msj: "Update",
            name,
            email,
            password,
            role_id,
            id
        })

    }

    deleted(req = request, res = response){
        const { name } = req.body;
        const { id } = req.params;
        return res.status(201).json({
            msj: `Deleted ${name} was deleted`,
            id
        })

    }


    

}

module.exports={
    UserController
}