function getContentData(raw_html) {
	return raw_html.replace(/<\s*[^>]*>/gm, ' ');
}

export default getContentData;
