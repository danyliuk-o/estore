import { Router } from 'express';
import {dirname, join} from "path";
import {fileURLToPath} from "url";
const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get('/goods.json', (req, res) => {
	res.download(join(__dirname, '../data/goods.json'), 'goods.json');
});

export default router;
