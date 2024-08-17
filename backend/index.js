import express from 'express';
import { json } from 'express';
import SibApiV3Sdk from 'sib-api-v3-sdk';
import cors from 'cors';
import { EventEmitter } from 'events';
import dotenv from 'dotenv';

dotenv.config();

EventEmitter.defaultMaxListeners = 15;

const app = express();
const port = 8000;

app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Instantiate the Brevo client
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_V3_KEY;  // Use your Brevo API key here

const apiInstance = new SibApiV3Sdk.ContactsApi();

app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    const createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;

    apiInstance.createContact(createContact).then(data => {
        res.status(200).json({ message: 'Successfully subscribed!' });
    }).catch(error => {
        console.error(error);
        res.status(500).json({ message: 'Subscription failed.' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
