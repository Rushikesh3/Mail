var express = require('express')
var nodemailer = require('nodemailer');

var app = express();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'user@mail.com',
        pass: '*********'
    }
});
var mail = 'nextUser';
var mailOptions = {
    from: 'user@mail.com',
    to: mail,
    subject: 'Testing',
    text: `hello dear`,
    attachments: [{ // utf-8 string as an attachment
            filename: 'attachment.',
            path: './filepath'
        },

    ]
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});




app.listen(3000, function() {
    console.log("running server at PORT :- 3000 !");
});