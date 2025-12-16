const templates = (data) => ({
  forgot_password: `<div><h1>reset your password with</h1><p>${data?.otp}</p></div>`,
  login: `<div><h1>Welcome to foodman multivendor food delivery online service</h1><p>${data?.email}</p></div>`,
  otp: `<div><h1>Verify your email with otp</h1><p>${data?.otp}</p></div>`,
});
const htmlTemplate = (templateString, data) => {
  const template = templates(data);

  return template[templateString];
};
export default htmlTemplate;
