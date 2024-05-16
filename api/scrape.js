// api/scrape.js
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
    const url = req.query.url;
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        const number = $('#number').text();
        const result = { number: number || 'Not found' };

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error scraping the site' });
    }
};
