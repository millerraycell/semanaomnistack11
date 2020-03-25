const connection = require("../database/connection");

module.exports = {
    async index (req,res){
        const {page = 1} = req.query;

        const [count] = await connection('incidents').count();

        res.header("X-Total-Count", count['count']);

        const incidents = await connection('incidents')
            .join('ongs', 'ong_id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page-1)*5)
            .select("incidents.*","ongs.name", "ongs.email", "ongs.whatsapp", "ongs.city", "ongs.uf");

        return res.json(incidents);
    },

    async delete(req,res){
        const {id} = req.params;
        const ong_id = req.headers.authorization;

        const incidents = await connection('incidents')
            .where({'id': id})
            .select('ong_id')
            .first()

        if(incidents.ong_id !== ong_id){
            return res.status(401).json({error: "Operation note permitted"});
        }

        await connection('incidents')
            .where('id', id)
            .delete();

        return res.status(204).send();
    },

    async create(req,res){
        const {title, description, value} = req.body;
        const ong_id = req.headers.authorization;
        
        await connection("incidents").insert({
            title,
            description,
            value,
            ong_id
        });

        const result = await connection('incidents')
            .where({'title': title, "ong_id" : ong_id})
            .select('id')
            .first()

        return res.json({"id" : result.id});
    }
}