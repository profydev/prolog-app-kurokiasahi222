interface MailOptions {
  email?: string;
  subject?: string;
}

export default function openMailApp({
  email = "support@prolog-app.com",
  subject = "Support Request:",
}: MailOptions = {}): string {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  return mailtoLink;
}
