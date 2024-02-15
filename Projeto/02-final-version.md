# **CSI606-2023-02 - Presencial - Trabalho Final - Resultados**

## *Aluna(o): Guilherme Lopes de Araújo*

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo
O sistema, à princípio, permitirá que os usuários explorem e visualizem informações geográficas em formato de mapas interativos, além de poderem procurar por locais. Apenas locais do território brasileiro estão disponíveis para pesquisa. 

### 1. Funcionalidades implementadas
Das funcionalidades descritas anteriormente, foram implementadas:
- Pesquisa por locais;
- Interação com o mapa do local pesquisado;
- Geração de um Json com informações básicas desse local;
- 
  
### 2. Funcionalidades previstas e não implementadas
Estava previsto a busca por atributos específicos dos locais, como endereço e características específicas. O SGBD utilizado para armazenar esses dados foi o Neo4j, um banco NoSQL orientado a grafos, que possui complexidade diferente dos bancos tradicionais. Logo, levaria um tempo além do previsto para configurar a lógica das consultas com os relacionamentos entre os vértices e arestas.

### 3. Outras funcionalidades implementadas
Nenhuma funcionalidade extra foi adicionada.

### 4. Principais desafios e dificuldades
O principal desafio durante o desenvolvimento do projeto, foi a geração dos mapas. Trabalhar com dados geográficos requer bastante cuidado, sobretudo em relação às coordenadas. Boa parte das API's são pagas, logo, houve limitações quanto à escolha da tecnologia a ser utilizada. Optei pela Leaflet, uma biblioteca do JavaScript. Ademais, design não é uma habilidade bem trabalhada deste que vos fala, portanto o frontend foi uma dificuldade pessoal que tive que superar 😊.

### 5. Instruções para instalação e execução
Como esse sistema foi criado com base em uma iniciação científica, trata-se de um banco de dados local. A universidade ainda não conseguiu hospedá-lo, portanto, caso queriam executar esse sistema, é necessário ter o Neo4j instalado em sua máquina e, logo em seguida, seguir o passo a passo descrito no repositório: https://github.com/Guilherme1709/GraphGeoNames.
Por ser um banco muito robusto, sua criação leva cerca de 6 horas, dependendo do processamento da sua máquina. Assim que o setor de T.I da UFOP me retornar, as alteração serão realizadas e o site poderá ser acessado de forma remota 😊🤙.


### 6. Referências
Monteiro, B. R. (2021). Usage of focused gazetteers in geoparsing. PhD thesis, Universidade Federal de Minas Gerais, Belo Horizonte, MG, Brasil. Disponível em https://repositorio.ufmg.br/handle/1843/36251.

Monteiro, B. R., Davis Jr., C. A., e Fonseca, F. (2016). A survey on the geographic scope of textual documents. Computers & Geosciences, 96:23–34.
