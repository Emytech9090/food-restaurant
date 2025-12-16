import htmlTemplate from "../constants/html-template.js";
import transporter from "../config/email.js";
const sendEmail = async ({ subject, to, template, data }) => {
  const info = await transporter.sendMail({
    from: '"Food delivery" <emekadestiny9090@gmail.com>',
    to,
    subject,
    html: htmlTemplate(template, data),
  });
};

export default sendEmail;
