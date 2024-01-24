import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();



const app = express();
app.use(cors())
const port = process.env.PORT || 3001;

const YOUR_SERVICE_ID =  process.env.VITE_YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID =  process.env.VITE_YOUR_TEMPLATE_ID;
const YOUR_PUBLIC_KEY =  process.env.VITE_YOUR_PUBLIC_KEY;

app.get('/api', (req, res) => {
  res.json({ YOUR_SERVICE_ID ,YOUR_TEMPLATE_ID,YOUR_PUBLIC_KEY});

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
