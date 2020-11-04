import { parse } from 'json5';

const isUndefined = (val) => val === undefined;

const isEmpty = (obj) => [ Object, Array ].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;

const CDNs = [ '', 'sanfrancisco.', 'newyork.', 'london.', 'frankfurt.' ];

const getCheatSheets = async (filterName) => {
	const response = await fetch(`https://kapeli.com/feeds/zzz/cheatsheets/cheat.json`);
	const text = await response.text();
	const data = parse(text).cheatsheets || {};

	let cheatsheets = data;

	if (!isUndefined(filterName) && !isEmpty(filterName)) {
		let t = {};
		if (isUndefined(data[filterName]) || isEmpty(data[filterName])) {
			t[filterName] = {};
		} else {
			t[filterName] = data[filterName];
		}
		cheatsheets = t;
	}

	const list = Object.keys(cheatsheets).map((key) => {
		const val = cheatsheets[key];
		const object = { ...val };
		object.name = key;
		object.archive = `${key}.tgz`;
		object.urls = CDNs.map((city) => {
			return `https://${city}kapeli.com/feeds/zzz/cheatsheets/${key}.tgz`;
		});

		return object;
	});

	return list;
};

const getDocsets = async (filterName) => {
	const response = await fetch(`https://kapeli.com/feeds/zzz/user_contributed/build/index.json`);

	const data = await response.json();
	//   return data;

	let docsets;

	if (isUndefined(filterName) || isEmpty(filterName)) {
		docsets = data.docsets;
	} else {
		let t = {};
		if (isUndefined(data.docsets[filterName]) || isEmpty(data.docsets[filterName])) {
			t[filterName] = {};
		} else {
			t[filterName] = data.docsets[filterName];
		}
		docsets = t;
	}

	const list = Object.keys(docsets).map((key) => {
		const val = docsets[key];
		const object = { ...val };
		object.name = key;
		object.urls = CDNs.map((city) => {
			return `https://${city}kapeli.com/feeds/zzz/user_contributed/build/${key}/${val.archive}`;
		});

		return object;
	});

	return list;
};

const xmlify = (list) => {
	return (list || [])
		.map((docset) => {
			let urls = (docset.urls || [])
				.map((url) => {
					return `    <url>${url}</url>`;
				})
				.join('\n');
			let other = (docset.specific_versions || [])
				.map((v) => {
					return `        <version><name>${v.version}</name></version>`;
				})
				.join('\n');

			return `\
        <entry>
          <name>${docset.name}</name>
          <version>${docset.version}</version>
        ${urls}
          <other-versions>
        ${other}
          </other-versions>
        </entry>`;
		})
		.join('\n');
};

export { getDocsets, getCheatSheets, xmlify };
