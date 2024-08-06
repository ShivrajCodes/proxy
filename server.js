const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get('/news', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'in',
        category: 'health',
        apiKey: 'a4496b4273874f91b2477521f30d005c',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
