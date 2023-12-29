/* const mongodb = require('mongodb').MongoClient;


const conexionLocal = "mongodb://localhost:27017";
const conexionAtlas = "mongodb+srv://franco2011:Italia098.@cluster0.bsdrvwv.mongodb.net/"

//Establezco una nueva conexion con Mongo
const client = new mongodb(conexionLocal);


const dbName = "Game Nex";

const main = async() => {
	try {
		await client.connect();
		console.log(`Esta conectado a MongoDB, con la cadena ${conexionLocal}`);

	} catch(err) {
		console.error(`Hay un error al conectarse con la base de datos MongoDB: ${err}`);
		
	} finally {
		await client.close();
	}
};

main(); */

const express = require('express');
const { connectDB } = require('../public/data/data');

const app = express();

app.get('/', async (req, res) => {
	const db = await connectDB();
	const juegosColeccion = db.collection('juegos');

	//Obtenemos todos los juegos
	const juegos = await juegosColeccion.find().toArray();

	res.json(juegos);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
	console.log(`Servidor escuchando en el puerto ${PORT}`)
})
