import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import statusRoute from './routes/status.route';
import usersRouter from './routes/users.route';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas
app.use(statusRoute);
app.use(usersRouter);

// Configuração dos Middlers de Erro
app.use(errorHandler);

// Configurações do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});