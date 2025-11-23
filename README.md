# Base de Conhecimento de Espécies para Bonsai

Este projeto é uma base de conhecimento em formato JSON, dedicada a catalogar e descrever diversas espécies de plantas comumente utilizadas na arte do bonsai. O objetivo é fornecer um recurso centralizado e estruturado para entusiastas, praticantes e estudantes de bonsai, desde o nível iniciante ao avançado.

## 🌳 Sobre o Projeto

A arte do bonsai envolve o cultivo de árvores e arbustos em pequenos recipientes, e a escolha da espécie correta é um dos passos mais importantes para o sucesso. Esta base de dados foi criada para ajudar na identificação e no estudo das características de cada planta, como suas necessidades de cultivo, aparência e adequação a diferentes estilos de bonsai.

## 📂 Estrutura dos Dados

A informação está contida no arquivo `data.json`, que consiste em um array de objetos. Cada objeto representa uma espécie de planta e segue a seguinte estrutura:

```json
{
  "nome": "Nome principal da espécie",
  "nome_popular": "Nome popular ou alternativo",
  "nome_cientifico": "Nome científico (binomial)",
  "descricao": "Um parágrafo detalhando as características da planta relevantes para o bonsai, como tipo de folhagem, casca, crescimento, e dicas de cultivo.",
  "link": "URL para uma fonte externa com mais informações (ex: Wikipedia).",
  "tags": [
    "tag1",
    "tag2",
    "tag3"
  ]
}
```

### Descrição dos Campos

- **`nome`**: O nome mais comum da espécie em português.
- **`nome_popular`**: Um nome alternativo ou regionalmente conhecido.
- **`nome_cientifico`**: A nomenclatura botânica oficial.
- **`descricao`**: Detalhes sobre a planta no contexto do bonsai, incluindo dicas de estilo, poda, e cuidados.
- **`link`**: Um link para aprofundar o conhecimento sobre a espécie.
- **`tags`**: Palavras-chave que categorizam a planta (ex: `tropical`, `conífera`, `iniciante`, `flor`, `fruto`). As tags facilitam a busca e a filtragem dos dados.

## 💡 Como Utilizar

Este arquivo JSON pode ser utilizado para diversos fins, como:

- Alimentar um site ou aplicativo sobre bonsai.
- Criar uma ferramenta de busca e filtragem de espécies.
- Análise de dados para entender as características mais comuns das plantas de bonsai.
- Estudo pessoal e consulta rápida.

## 🌱 Como Contribuir

Contribuições são bem-vindas! Se você deseja adicionar uma nova espécie ou corrigir/melhorar uma informação existente, sinta-se à vontade para editar o arquivo `data.json` e sugerir a alteração, garantindo que a nova entrada siga a estrutura de dados definida.
