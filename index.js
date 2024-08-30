import express from 'express';
import dotenv from "dotenv"
import cors from "cors";
import watchListRouter from "./routes/watchlists.route.js"
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config();
const app = express();
app.use(express.json());
const port = 8085;
app.use(cors());

app.use('/watchlists', watchListRouter);
app.get('/health', (req, res) => {
   res.json({message: "Service is healthy"});
});


app.get('/', (req, res) => {
   res.json({ message: 'GS Stock Broker Watchlist Manager Service' });
});

app.listen(port, () => {
   connectToMongoDB();
   console.log(`Server is listening at http://localhost:${port}`);
})