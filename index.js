require('dotenv').config();
const cors = require('cors');

const {PORT} = require('./config');

const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());

const apiRoutes = require('./src/routes/authRoutes');
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`visit http://localhost:${PORT}`);
});
