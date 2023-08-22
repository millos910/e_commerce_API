const catchError = require('../utils/catchError');
const ProductImg = require('../models/ProductImg');
//!fs significa file sistems osea archivos de sistema
const fs=require('fs')
const path=require('path')

const getAll = catchError(async(req, res) => {
    const result = await ProductImg.findAll()
    return res.json(result)
});

const create=catchError(async(req,res)=>{
    const {filename}=req.file
    const url=`${req.protocol}://${req.headers.host}/uploads/${filename}`
    const result=await ProductImg.create({filename,url})   
    return res.status(201).json(result)
})

const remove=catchError(async(req,res)=>{
    const {id}=req.params
    const result=await ProductImg.findByPk(id)
    //! EXPLICACION PARA VERIFICAR EL ERROR 
    if(!result) return res.sendStatus(404)
    //!aplicamos un metodo bloqueante
    fs.unlinkSync(path.join(__dirname,'..','public','uploads',`${result.filename}`))
    await result.destroy()
    return res.sendStatus(204)
})

module.exports = {
    getAll,
    create,
    remove
}