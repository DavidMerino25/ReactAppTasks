import express from 'express';
const app = express();
import taskRoutes from './routes/tasks';
app.use(taskRoutes);
export default app;