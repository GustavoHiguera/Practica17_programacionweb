let express= require('express');
//Se inyecta la dependencia del express

let app = express();
//app que hace la función del servidor

let personsRoute = require('./routes/person');
//se incluye el router que viene de persons
//Debe ser exactamente la ruta en la que se encuentra person.

app.set('view engine', 'ejs'); //marcamos como view engine a ejs.
app.use(personsRoute); //usamos en el servidor a la ruta de persons.
app.use('/assets', express.static(__dirname + '/public')); //especificamos el directorio.

let PORT = process.env.PORT || 3000;
//se define el puerto de escucha, en el caso de process.env.PORT es si se le define algún puerto por node, si no,
//se le definirá el 3000.

app.listen(PORT, () => {
    console.log('escuchando en el puerto 3000');
});

//en esta practica también se uso Postman, el cual es una herramienta que nos permite
//verificar el contenido de backend en la práctica, sin todo el frontend del navegador.

//Es importante mencionar que ahora se debe levantar el server desde la carpeta src, ya que ahí es donde se encuentra
//el servidor.

const mongoose = require('mongoose');
mongoose.connect(
`mongodb+srv://ghiguera:xzEVV8g2@micluster.qc5dx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, //Este es el url que proporciona mongodb atlas, donde tuve que sustituir la contraseña.
{
useNewUrlParser: true,
useUnifiedTopology: true
}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));//Mensaje de error si no conecta.
db.once("open", function () {
console.log("Connected successfully"); //Mensaje de éxito si conecta con la base de datos de mongodb atlas
});

//En esta practica lo que hicimos es usar mongoose para conectarnos a una base de datos creado con mongodb atlas, en este sitio creamos
//nuestra cuenta, creamos un cluster y la conectamos con un url. Esto es bastante practico para lograr probar que los datos que introducimos
//en nuestro programa se guardan, con el nombre de colecciones en mongodb.
//Noté que mongoose es algo pesado y puede ser un poco difícil de configurar pero una vez esta hecho trae muchas ventajas.
//El proceso en mongodb atlas fue muy sencillo, ya que la página es bastante intuitiva y el servicio gratis que ofrece es muy amigable con el usuario.