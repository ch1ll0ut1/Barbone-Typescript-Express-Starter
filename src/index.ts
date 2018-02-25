import * as dotenv from 'dotenv';
import * as express from 'express';

// Load env configuration
dotenv.config();

// Setup app
const PORT = process.env.PORT || 1337;
const app = express();

app.listen(PORT, () =>
  console.log(`Server running on ${PORT}!`),
);

app.get('/', (req, res) => {
  res.send('Awesome! Try a breakpoint!');
});
