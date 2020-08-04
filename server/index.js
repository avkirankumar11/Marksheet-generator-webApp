const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const markSheetTemp = require('./documents');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    pdf.create(markSheetTemp(req.body), {}).toFile('certificate.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/certificate.pdf`)
})

app.listen(port, () => console.log(`Port ${port} is active`));