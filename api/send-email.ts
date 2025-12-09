import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'Missing API Key configuration' });
  }

  try {
    // 1. Manage Audience (Best Effort)
    // You might want to move audience ID to env var too
    const audienceId = '52b77564-1d9c-4151-9d01-de941f87ce99'; 
    
    try {
      if (audienceId) {
        const nameParts = name.trim().split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ') || '';

        await resend.contacts.create({
          email: email,
          firstName: firstName,
          lastName: lastName,
          unsubscribed: false,
          audienceId: audienceId
        });
        console.log(`Contact ${email} saved to audience.`);
      }
    } catch (contactError) {
      console.warn('Could not save contact to audience:', contactError);
    }

    // 2. Send Notification Email
    const { data, error } = await resend.emails.send({
      from: 'Contato Site Carlos <emails@mails.convertesites.com.br>',
      to: ['crorioli81@gmail.com'],
      subject: `Portfólio: Nova mensagem de ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #4f46e5;">Nova mensagem recebida</h2>
          <p>Você recebeu um novo contato através do seu portfólio.</p>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>

          <p><strong>Mensagem:</strong></p>
          <blockquote style="border-left: 4px solid #4f46e5; padding-left: 15px; margin-left: 0; color: #555;">
            ${message.replace(/\n/g, '<br/>')}
          </blockquote>
        </div>
      `
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
