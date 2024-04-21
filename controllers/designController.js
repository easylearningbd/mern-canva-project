const {formidable} = require('formidable')
const cloudinary = require('cloudinary').v2
const designModel = require('../models/designModel')

class designController {

    create_user_design = async(req,res) => {
        const form = formidable({});
        const { _id } = req.userInfo
        try {
            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
            })
            const [fields, files] = await form.parse(req)
            const { image } = files 
            const { url } = await cloudinary.uploader.upload(image[0].filepath)

            const design = await designModel.create({
                user_id: _id,
                components: [JSON.parse(fields.design[0])],
                image_url: url
            })
            return res.status(200).json({ design }) 

        } catch (error) {
            return res.status(500).json({ message: error.message }) 
        }
        
    }
    // End Method 

    get_user_design = async(req,res) => {
        const {design_id } = req.params
         try {
            const design = await designModel.findById(design_id)
            return res.status(200).json({design: design.components })
         } catch (error) {
            return res.status(500).json({message: error.message })
         }
    }
      // End Method 

}

module.exports = new designController()