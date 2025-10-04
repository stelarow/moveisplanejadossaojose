# 📧 Configuração do Envio de Email

O formulário de contato está configurado para enviar emails para **alessandrobatisp@gmail.com** usando o serviço **Resend**.

## 🚀 Passos para Configurar

### 1. Criar conta no Resend (GRÁTIS)

1. Acesse: https://resend.com/signup
2. Crie uma conta gratuita (100 emails/dia grátis)
3. Confirme seu email

### 2. Obter sua API Key

1. Faça login em: https://resend.com/api-keys
2. Clique em **"Create API Key"**
3. Dê um nome (ex: "Móveis Planejados")
4. Copie a chave gerada (começa com `re_`)

### 3. Configurar no Projeto

Crie um arquivo `.env.local` na raiz do projeto:

```bash
RESEND_API_KEY=re_sua_chave_aqui
```

**⚠️ IMPORTANTE:** Nunca commite o arquivo `.env.local` no Git!

### 4. Testar o Formulário

```bash
npm run dev
```

Acesse http://localhost:3000, vá até a seção de contato e teste o formulário.

## 📝 O que acontece quando alguém preenche o formulário?

1. Usuário preenche: Nome, Telefone e Mensagem
2. Formulário valida os dados (mínimo de caracteres, formato)
3. Envia para a API `/api/send-email`
4. API envia email formatado para **alessandrobatisp@gmail.com**
5. Usuário vê mensagem de sucesso ✅

## 🎨 Formato do Email Recebido

O email chega com:
- **Assunto:** "Novo Orçamento - [Nome do Cliente]"
- **De:** Móveis Planejados São José
- **Para:** alessandrobatisp@gmail.com
- **Conteúdo:**
  - Nome do cliente
  - Telefone de contato
  - Mensagem/projeto descrito
  - Data e hora do envio

## 🔧 Alternativa: Usar Outro Serviço de Email

Se preferir usar outro serviço (Gmail, SendGrid, etc), edite o arquivo:
`app/api/send-email/route.ts`

## 🆘 Problemas Comuns

### Email não está sendo enviado
- ✅ Verifique se a `RESEND_API_KEY` está configurada no `.env.local`
- ✅ Reinicie o servidor (`npm run dev`)
- ✅ Verifique o console do navegador (F12) para erros
- ✅ Verifique os logs do terminal

### Email vai para spam
- Configure SPF/DKIM no Resend (veja documentação)
- Use domínio próprio ao invés de `onboarding@resend.dev`

## 📚 Documentação Resend

https://resend.com/docs/send-with-nextjs
