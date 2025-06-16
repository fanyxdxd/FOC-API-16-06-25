const { response, request } = require("express")

class RoleController{
    constructor(){
        console.log("Instancia del RoleController")

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
        const { name } = req.body;
        return res.status(201).json({
            msj: "Created",
            role:{
                name
            }
        })

    }

    update(req = request, res = response){
        const { id } = req.params;
        const { name } = req.body;

        return res.status(201).json({
            msj: "Update",
            id
        })

    }

    deleted(req = request, res = response){
        const { id } = req.params;
        
        return res.status(201).json({
            msj: "Deleted",
            id
        })

    }


    

}

module.exports={
    RoleController
}