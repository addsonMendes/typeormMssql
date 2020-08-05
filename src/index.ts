import 'reflect-metadata'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { createConnection  } from 'typeorm'

import userRoutes from './routes/user.routes'
import vendaRoutes from './routes/venda.routes'

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(userRoutes);
app.use(vendaRoutes);


app.listen(4500);
console.log('Servidor ouvindo na porta', 4500);


