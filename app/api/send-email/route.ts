import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();

    // Validação básica
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Móveis Planejados São José <onboarding@resend.dev>',
      to: ['alessandrobatisp@gmail.com'],
      subject: `Novo Orçamento - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .field-label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
              .field-value { background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #667eea; }
              .footer { margin-top: 20px; text-align: center; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🏠 Novo Pedido de Orçamento</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Móveis Planejados São José</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">👤 Nome:</div>
                  <div class="field-value">${name}</div>
                </div>
                <div class="field">
                  <div class="field-label">📱 Telefone:</div>
                  <div class="field-value">${phone}</div>
                </div>
                <div class="field">
                  <div class="field-label">💬 Mensagem:</div>
                  <div class="field-value">${message}</div>
                </div>
                <div class="footer">
                  <p>Enviado via formulário do site em ${new Date().toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente.' },
      { status: 500 }
    );
  }
}
