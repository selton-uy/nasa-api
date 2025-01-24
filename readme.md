# NASA APOD Viewer

Este projeto é uma aplicação web que utiliza a API APOD (Astronomy Picture of the Day) da NASA para exibir imagens e vídeos astronômicos do dia, além de suas descrições e informações associadas.

---

## Funcionalidades

- Exibe a imagem ou vídeo astronômico do dia fornecido pela NASA.
- Permite selecionar uma data específica para visualizar a mídia correspondente.
- Fornece informações detalhadas, como título, descrição e autor (quando disponível).
- Oferece suporte para vídeos e imagens, ajustando o layout automaticamente.
- Layout responsivo para diferentes tamanhos de tela.

---

## Tecnologias Utilizadas

- **HTML**: Estrutura do site.
- **CSS**: Estilização e design responsivo.
- **JavaScript**: Lógica de funcionamento e integração com a API da NASA.
- **API APOD da NASA**: Fonte de dados astronômicos.

---

## Como Utilizar

### Pré-requisitos

- Navegador atualizado.
- Chave de API da NASA. Você pode obter a sua chave em [NASA Open APIs](https://api.nasa.gov/).

### Configuração

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nasa-apod-viewer.git
   ```

2. Abra o arquivo `index.html` em um navegador ou use um servidor local para testar.

3. Insira sua chave de API da NASA no arquivo JavaScript, na variável `key`.

### Estrutura do Projeto

```plaintext
/
├── index.html      # Estrutura principal do site
├── styles.css      # Estilos e layout
├── script.js       # Lógica da aplicação
├── README.md       # Documentação do projeto
```

---

## Layout e Design

### Desktop
- Exibição de imagens ou vídeos com título e descrição centralizados.
- Gradiente escuro (“Dark”) para facilitar a leitura em imagens claras.

### Mobile
- Layout otimizado com ajustes de fontes e espaçamento para telas menores.
- Suporte para resolução abaixo de 600px.

---

## Funcionalidades Futuras

- Adicionar suporte para salvar as imagens ou vídeos favoritos.
- Implementar modo escuro permanente para usuários que preferirem.
- Exibir miniaturas dos vídeos ao invés de carregá-los automaticamente.
- Melhorar o tratamento de erros para dados ausentes ou requisições inválidas.

---

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para colaborar:

1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-branch
   ```
3. Faça as alterações desejadas e realize um commit:
   ```bash
   git commit -m "Descrição das alterações"
   ```
4. Envie suas alterações para o seu fork:
   ```bash
   git push origin minha-branch
   ```
5. Abra um pull request no repositório original.

---

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

---

## Contato

Para dúvidas ou sugestões, entre em contato:

- **Email**: selton.bae@gmail.com

