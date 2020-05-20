import { Router } from 'express';
import ApiService from './ApiService';
import validation from './validation';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'Backend api is running' });
});

routes.post('/crud', validation, ApiService.index);

export default routes;
