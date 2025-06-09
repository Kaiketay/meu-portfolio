# Meu Portfolio Web

Este repositório contém um site simples desenvolvido em HTML, CSS e JavaScript, com um backend em Python utilizando Flask. O projeto é um ponto de partida para um portfólio pessoal, contendo seções básicas e um formulário de contato.

## Funcionalidades

- **Tema Claro/Escuro**: Um botão de alternância permite habilitar o modo escuro através do JavaScript.
- **Seções Páginas**: Início, Sobre, Projetos, Habilidades e Contato.
- **Formulário de Contato**: Os dados são enviados para um pequeno backend em Flask (`server.py`) que apenas registra as informações recebidas.

## Estrutura do Projeto

```
index.html   # Página principal
style.css    # Estilos e tema escuro
script.js    # Lógica do tema e envio do formulário
server.py    # Servidor Flask para receber mensagens
```

## Executando o Backend

1. Certifique-se de ter o Python instalado (versão 3.7 ou superior).
2. Instale a dependência Flask:
   ```bash
   pip install flask flask-cors
   ```
3. Execute o servidor:
   ```bash
   python server.py
   ```
   O servidor ficará disponível em `http://localhost:5000` e receberá as mensagens enviadas pelo formulário.

## Utilização

Com o servidor em execução, abra `index.html` em seu navegador. Preencha o formulário na seção "Contato" e envie para testar o backend. Você também pode alternar entre os modos claro e escuro utilizando o botão "Alternar Tema".

## Licença

Este projeto é fornecido sem garantia e pode ser adaptado livremente.
