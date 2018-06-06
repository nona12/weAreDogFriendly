const nodemailer = require('nodemailer');

module.exports = (contact) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nuriahervella@gmail.com',
            pass: 'baiona07'
        }
    });
    const mailOptions = {
        from: '"${contact.nombre}" <${contact.email}>',
        to: 'nuriahervella@gmail.com',
        subject: contact.asunto,
        html: `
    <strong>Nombre:</strong> ${contact.nombre} <br/>
    <strong>E-mail:</strong> ${contact.email} <br/>
    <strong>Mensaje:</strong> ${contact.mensaje}
 `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}