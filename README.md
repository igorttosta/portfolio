# Portfólio · Igor Tosta

Meu portfólio pessoal: apresentação, experiências profissionais e projetos, com tema claro e escuro.

🔗 **[Acessar o portfólio](https://portfolio-orpin-kappa-64.vercel.app)**

## Funcionalidades

- Apresentação com links para LinkedIn e GitHub, e contato por e-mail em um modal
- Experiências profissionais com contexto, conquistas, atividades e tecnologias de cada cargo
- Vitrine de projetos com imagem, descrição, stack e links para código e demo
- Tema claro e escuro
- Layout responsivo e chamada final para contato

## Destaques técnicos

- **Conteúdo separado da interface**: experiências, projetos e stack ficam em arquivos JSON (`json/`), então atualizar o portfólio não exige mexer nos componentes
- **Next.js com App Router**, gerado como página estática
- **Tailwind CSS** junto com componentes do **MUI**, com o tema sincronizado entre os dois via `next-themes`

## Stack

- [Next.js 15](https://nextjs.org/) e React 19
- TypeScript
- Tailwind CSS e MUI
- Deploy na Vercel

## Como rodar

Pré-requisito: Node.js 18.18 ou superior.

```bash
git clone https://github.com/igorttosta/portfolio.git
cd portfolio
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura

```
app/         Layout e página principal
components/  Seções do portfólio (perfil, experiências, projetos, navegação)
json/        Conteúdo: experiências, projetos e stack
public/      Imagens e ícones
```

## Autor

Feito por **Igor Tosta** · [LinkedIn](https://www.linkedin.com/in/matos-igor-tosta/) · [GitHub](https://github.com/igorttosta)
