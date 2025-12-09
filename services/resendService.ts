/**
 * Handles contact form submission by calling the server-side API.
 * This keeps the API key secure on the server.
 */
export const sendContactEmail = async (name: string, email: string, message: string) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Falha ao enviar mensagem');
    }

    return result;
  } catch (error: any) {
    console.error('Error sending contact email:', error);
    throw new Error(error.message || 'Erro ao processar o envio.');
  }
};