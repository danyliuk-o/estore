import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import homeRouter from './routers/home.js';
import categoryRouter from './routers/category.js';
import downloadRouter from './routers/download.js';

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
const PORT = process.env.PORT || 3000;

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'public')));


app.use('/', homeRouter);
app.use('/category', categoryRouter);
app.use('/download', downloadRouter);

app.listen(PORT, () => {
  console.log(`Server start на http://localhost:${PORT}`);
});
