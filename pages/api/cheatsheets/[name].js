import { xmlify, getCheatSheets } from '../../../src/utils';

export default (req, res) => {
	const { query: { name } } = req;

	let trimmedName;
	const isJson = name.endsWith('.json');

	if (isJson) {
		trimmedName = name.substr(0, name.length - 5);
	} else {
		// Zeal <= 0.6.1 assumes all feed urls have a .xml suffix
		trimmedName = name.endsWith('.xml') ? name.substr(0, name.length - 4) : name;
	}

	getCheatSheets(trimmedName)
		.then((list) => {
			!isJson && res.setHeader('Content-Type', 'application/xml');
			res.send(isJson ? list : xmlify(list));
		})
		.catch((err) => {
			res.json(err);
		});
};
