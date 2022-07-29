import Gedung from "../models/gedungModel.js";
import path from "path";
import fs from "fs";

export const getGedung = async(req, res)=>{
    try {
        const response = await Gedung.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getGedungById = async(req, res)=>{
    try {
        const response = await Gedung.findOne({
            where:{
                idgedung : req.params.idgedung
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveGedung = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Product.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Successfuly saved"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateGedung = async(req, res)=>{
    const gedung = await Gedung.findOne({
        where:{
            idgedung : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = gedung.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const namagedung = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const penjelasan = req.body.title;
    
    try {
        await Gedung.update({namagedung: namagedung, gambar: fileName, linktour: url, penjelasan: penjelasan},{
            where:{
                idgedung: req.params.id
            }
        });
        res.status(200).json({msg: "Product Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteGedung = async(req, res)=>{
    const gedung = await Gedung.findOne({
        where:{
            idgedung : req.params.idgedung
        }
    });
    if(!gedung) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await Gedung.destroy({
            where:{
                idgedung : req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}