export function makeSlug(value: string, separator?: string = '_'): string {
	const mapAccentsHex: any = {
		a: /[\xE0-\xE6]/g,
		A: /[\xC0-\xC6]/g,
		e: /[\xE8-\xEB]/g,
		E: /[\xC8-\xCB]/g,
		i: /[\xEC-\xEF]/g,
		I: /[\xCC-\xCF]/g,
		o: /[\xF2-\xF6]/g,
		O: /[\xD2-\xD6]/g,
		u: /[\xF9-\xFC]/g,
		U: /[\xD9-\xDC]/g,
		c: /\xE7/g,
		C: /\xC7/g,
		n: /\xF1/g,
		N: /\xD1/g
	};

	for (let letter in mapAccentsHex) {
		let regularExpression = mapAccentsHex[letter];
		value = value.replace(regularExpression, letter);
	}

	value = value.toLowerCase();
	value = value.replace(/[^a-z0-9\-]/g, ' ');

	value = value.replace(/ {2,}/g, ' ');

	value = value.trim();
	value = value.replace(/\s/g, separator);

	return value;
}
