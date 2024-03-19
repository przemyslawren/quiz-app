const express = require('express');
const countryByCapital = require('country-json/src/country-by-capital-city.json');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3005;

const wait = (ms) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
};

app.get('/countries', (req, res) => {
  res.json(countryByCapital);
});

app.get('/countries/search', async (req, res) => {
  const searchParam = req.query.country;

  const filteredCapitals = countryByCapital.filter((country) =>
    country.country.toLowerCase().startsWith(searchParam.toLowerCase())
  );

  await wait(1000);

  res.json(filteredCapitals);
});

app.get('/countries/random', async (req, res) => {
  const randomIndex = Math.floor(Math.random() * countryByCapital.length);

  await wait(1000);

  res.json(countryByCapital[randomIndex]);
});

app.listen(port, () => {
  console.log(`Capitals server listening on port ${port}`);
});
