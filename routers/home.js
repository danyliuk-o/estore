import { Router } from 'express';
import { getGoods, toCapitalizeString } from "../utilities/index.js";
const router = Router();

router.get('/', async (req, res) => {
	let categories = await getGoods();
	const count = 4
	for (let category in categories) {
		categories[category] = categories[category]
			.sort(() => 0.5 - Math.random())
			.slice(0, count);
	}
	res.render('main', {
		categories,
		capitalize: toCapitalizeString
	});
});

export default router;
