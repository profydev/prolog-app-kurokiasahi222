const openMailApp = () => {
  const email = "support@prolog-app.com";
  const subject = "Support Request:";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoLink;
};

export default openMailApp;
