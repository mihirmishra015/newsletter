import express from 'express';
import { json } from 'express';
import Mailjet from 'node-mailjet';
import cors from 'cors';
import { EventEmitter } from 'events';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

EventEmitter.defaultMaxListeners = 15;  // Increase the default limit

const app = express();
const port = 8000;

app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const mailjetClient = Mailjet.apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    const request = mailjetClient
        .post('contact', { version: 'v3' })
        .request({
            Email: email,
            IsExcludedFromCampaigns: false,
        });
        
    request.then(result => {
        res.status(200).json({ message: 'Successfully subscribed!' });
    })
    .catch(err => {
        console.log(err.statusCode);
        res.status(500).json({ message: 'Subscription failed.' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
