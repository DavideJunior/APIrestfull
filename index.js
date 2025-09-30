import express from 'express';
import 'dotenv/config';
import userRoutes from './src/routes/user.routes.js';
import postRoutes from './src/routes/post.routes.js';
import categoryRoutes from './src/routes/category.routes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/categories', categoryRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

