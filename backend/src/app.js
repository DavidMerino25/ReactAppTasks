import express from 'express';
const app = express();
import taskRoutes from './routes/tasks';
app.use(express.json());
app.use(taskRoutes);
export default app;