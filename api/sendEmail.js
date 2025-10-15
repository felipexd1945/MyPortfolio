import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const msg = {
      to: "felipezica8@gmail.com", // seu e-mail
      from: "felipexd1945@hotmail.com", // pode ser seu domínio ou qualquer e-mail verificado
      subject: `Mensagem do Portfólio - ${name}`,
      text: message,
      replyTo: email,
    };

    await sgMail.send(msg);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
