class veiculoService {

async listarVeiculos () {

const res = await pool.query("SELECT * FROM veiculos... RETURNING*");
return res.rows[0]

}

async create () {

const res = await pool.query("INSERT INTO veiculos... RETURNING*");
return res.rows[0]

   }
}