import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import personasRoutes from './routes/personas.routes.js';

// Inicializar
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));

// Configuración del motor de plantillas Handlebars
app.engine('.hbs', engine({
    defaultLayout: 'main', 
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs'); 

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

app.use(personasRoutes);


// Servir archivos estáticos
app.use(express.static(join(__dirname, 'public')));

// Iniciar el servidor
app.listen(app.get('port'), () => 
    console.log('Servidor corriendo en el puerto', app.get('port'))
);
