import express from 'express'; // Importamos express
import cors from 'cors'; // Importamos cors
import morgan from 'morgan'; // Importamos morgan
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from "./swaggerOptions";
const specs = swaggerJSDoc(options);
import taskRoutes from './routes/tasks'; // Importamos las rutas de tasks
const app = express(); // Inicializamos express
app.use(cors()); // Usamos cors
app.use(morgan('dev')); // Usamos morgan
app.use(express.json()); // Usamos express.json
app.use(taskRoutes); // Usamos las rutas de tasks
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
export default app; // Exportamos app