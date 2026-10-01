class veiculosService {

async listarVeiculos () {

const res = await pool.query("SELECT * FROM veiculos... RETURNING*");
return res.rows[0]

}

async create (modelo, marca, ano, placa) {

const res = await pool.query("INSERT INTO veiculos VALUES ($1, $2, $3, $4) RETURNING*",
    [modelo, marca, ano, placa]
);
return res.rows[0]

   }
}
