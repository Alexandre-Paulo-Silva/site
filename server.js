const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/public/index.html');


})

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'devmastersoftware@gmail.com',
            pass: 'dev13143366grgrg'
        }

    })
    const mailOptions = {
        from: req.body.email,
        to: 'devmastersoftware@gmail.com',
        subject: `Email: ${req.body.email}   
                  Nome: ${req.body.nome} `,
        text: req.body.message

    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            //console.log(error);


            res.send('error')
        } else {
            console.log('Email: enviado: ' + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT, () => {

    console.log(`Servidor rodando na porta ${PORT}`);
})