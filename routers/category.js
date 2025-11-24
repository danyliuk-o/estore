import { Router } from 'express';
import {getCategoryNames, getGoods, toCapitalizeString} from "../utilities/index.js";
const router = Router();

router.get('/', async (req, res) => {
	const categories = await getCategoryNames();
	res.render('category', {
		categories,
		capitalize: toCapitalizeString
	});
});

router.get('/:categoryName', async (req, res) => {
	const { categoryName } = req.params;
	const categories = await getGoods();
	if (!categories[categoryName]) {
		return res.status(404).render('not_found');
	}

	res.render('category_single', {
		category: categories[categoryName],
		categoryName,
		capitalize: toCapitalizeString
	});
})

export default router;
