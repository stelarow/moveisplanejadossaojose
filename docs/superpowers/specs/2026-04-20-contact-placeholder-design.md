# Design: placeholders neutros de telefone

## Objetivo

Trocar os placeholders de telefone restantes para um formato neutro, sem reutilizar o número real da empresa dentro dos campos de formulário.

## Escopo

Atualizar apenas estes campos:

- `components/contact-progressive.tsx`
- `components/contact.tsx`

## Decisão

Usar o placeholder `(48) 00000-0000`.

## Motivo

- Mantém o formato esperado de celular.
- Continua coerente com a região atendida pelo site.
- Evita mostrar um contato real em um campo que serve apenas como exemplo.

## Fora de escopo

- Alterar links `tel:` ou `wa.me`
- Alterar schema markup
- Alterar validação do formulário
- Alterar textos de contato exibidos ao usuário

## Verificação

- Os dois placeholders passam a usar `(48) 00000-0000`.
- Nenhum contato real é modificado por essa etapa.
