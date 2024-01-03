import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
