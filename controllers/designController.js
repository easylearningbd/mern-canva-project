const {formidable} = require('formidable')
const cloudinary = require('cloudinary').v2

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

            
        } catch (error) {
            
        }
        
    }
    // End Method 

}

module.exports = new designController()