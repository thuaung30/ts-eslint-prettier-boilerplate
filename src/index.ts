import express, { Application } from 'express';
import morgan from 'morgan';
import router from './routes';
import swaggerUi from 'swagger-ui-express';

const PORT = parseInt(process.env.PORT as string) || 3000;

const app: Application = express();

// middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

// swagger documentation
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  })
);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
