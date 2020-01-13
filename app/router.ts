import { Application } from 'egg';
import userRouter from './routers/user';
import companyRouter from './routers/company';

export default (app: Application) => {
  userRouter(app);
  companyRouter(app);
};
