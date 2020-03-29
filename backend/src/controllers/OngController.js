const generateUniqueid = require('../utils/generateUniqueid')
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*') ;
       
       return response.json(ongs);
      
    },

    async create(request, response){
        const { name, email, whatsapp, city, fu } = request.body;

        const id =generateUniqueid()
       
        
        await connection('ongs').insert({
       id,
       name,
       email,
       whatsapp,
       city,
       fu,
        })

        return response.json( {id} );
    }
}
