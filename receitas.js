const cards = document.querySelectorAll(".card-img-top");
const list = document.querySelectorAll(".ingredientes-list");
const cardsHover = document.querySelectorAll(".card");

cards.forEach((card) => {
  cards.style.width = "100%";
  cards.style.height = "200px";
  cards.style.objectFit = "cover";
});

list.forEach((ingredientList) => {
  ingredientList.style.minHeight = "150px";
  ingredientList.style.maxHeight = "150px";
  ingredientList.style.overflowY = "auto";
});

const pnlCatalogo = document.getElementById("pnlCatalogo");

pnlCatalogo.addEventListener("mouseover", (e) => {
  if (e.target.closest(".card")) {
    const card = e.target.closest(".card");
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s";
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  }
});

pnlCatalogo.addEventListener("mouseout", (e) => {
  if (e.target.closest(".card")) {
    const card = e.target.closest(".card");
    card.style.transform = "scale(1)";
    card.style.boxShadow = "none";
  }
});

const receitas = [
  {
    titulo: "Brigadeiro de Café",
    imagem: "img/brigadeiro.jpeg",
    preparo:
      "Coloque o leite condensado, a margarina e o café em uma panela ao fogo; Espere o café se dissolver (sempre mexendo para não agarrar); Depois que o café estiver mais ou menos dissolvido, acrescente o chocolate em pó; Abaixe o fogo e continue mexendo até dar ponto de brigadeiro; Se quiser enrolar, pegue uma pequena porção com uma colher e enrole na mão, depois passe no chocolate em pó.",
    ingredientes: [
      "1 lata de leite condensado",
      "1 colher (sobremesa) cheia de chocolate em pó",
      "1 colher (sobremesa) rasa de café",
      "60 g de margarina",
    ],
  },
  {
    titulo: "Mousse de Maracuja",
    imagem: "img/mousse.jpeg",
    preparo:
      "Bata todos os ingredientes no liquidificador, exceto as sementes; Coloque em um refratário, decore e leve à geladeira por alguns minutos.",
    ingredientes: [
      "1 lata de leite condensado",
      "1 lata de creme de leite",
      "A mesma medida de suco concentrado de maracujá",
      "Sementes de maracujá para decorar",
    ],
  },

  {
    titulo: "Pão de Queijo de Liquidificador",
    imagem: "img/pao.jpg",
    preparo:
      "Em um liquidificador, coloque o Leite NINHO, o óleo, os ovos, o polvilho, o queijo e o sal e bata até obter uma mistura homogênea; Despeje a massa até a metade de forminhas para empadas untadas; Leve para assar em forno médio (180°C) preaquecido por cerca de 15 minutos ou até dourar; Reserve para amornar e desenforme.",
    ingredientes: [
      "1 xícara (chá) de Leite Líquido",
      "1 ovo",
      "2 xícaras (chá) de polvilho doce",
      "1 xícara (chá) de queijo parmesão ralado",
      "1 pitada de sal",
    ],
  },
  {
    titulo: "Café Gelado Cremoso",
    imagem: "img/gelado.jpeg",
    preparo:
      "Em um copo, misture o café resfriado com o leite condensado; Adicione os cubos de gelo; Acrescente o creme de leite e finalize com o chantilly por cima; Delicie-se com a textura cremosa deste café irresistível.",
    ingredientes: [
      "70ml de café Baggio, previamente preparado e resfriado",
      "Gelo a gosto",
      "2 colheres de sopa de leite condensado;",
      "3 colheres de sopa de creme de leite;",
    ],
  },
  {
    titulo: "Romeu e Julieta no forno",
    imagem: "img/romeu.jpg",
    preparo:
      "1 No liquidificador, coloque os ovos, o requeijão e o creme de leite. Bata até que vire uma mistura homogênea. Passe cada uma das fatias de goiabada na farinha de trigo para empanar. Com as fatias de goiabada empanadas, forre as laterais e o fundo de uma travessa. Cubra as fatias de goiabada com a mistura do liquidificador. Leve ao forno preaquecido a 180 graus Célsius por 35 minutos. Sua receita de Romeu e Julieta no forno está pronta para servir. Bom apetite!",
    ingredientes: [
      "4 ovos",
      "2 copos de requeijão",
      "1 lata de creme de leite",
      "00 gramas de goiabada em fatias",
      "Farinha de trigo o quanto baste para empanar",
    ],
  },
  {
    titulo: "Tortinha de Maçã na Air Fryer",
    imagem: "img/tortinha.jpg",
    preparo:
      " Em um processador, triture o Biscoito TOSTINES Especiarias com a manteiga até formar uma massa com aspecto de areia molhada. Transfira essa massa para forminhas de torta e reserve; Em um recipiente, misture o Leite MOÇA com as gemas. Transfira esse creme para as forminhas reservadas e, em seguida, arrume as maças por cima do creme, com a casca virada para cima; Leve para assar na AirFryer pré-aquecida 180ºC por cerca de 20 minutos ou até que estejam douradas. Sirva quente com uma bola de sorvete.",
    ingredientes: [
      "1 pacote de Biscoito TOSTINES® Especiarias",
      "meia xícara (chá) de manteiga sem sal",
      "meia lata de Leite MOÇA®",
      "3 gemas",
      "3 maças em fatias finas",
    ],
  },
];

function getListaIngredientes(receita) {
  let listaHTML = '<ul class="ingredientes-list">';
  listaHTML += receita.ingredientes
    .map((ingrediente) => `<li>${ingrediente}</li>`)
    .reduce((acc, item) => acc + item, "");
  listaHTML += "</ul>";
  return listaHTML;
}

function getCard(receita) {
  return `
          <div class="card m-2" style="width: 250px;">
              <img src="${receita.imagem}" class="card-img-top" alt="${
    receita.titulo
  }">
              <div class="card-body">
                  <h5 class="card-title">${receita.titulo}</h5>
                  <div class="card-text">
                      ${getListaIngredientes(receita)}
                      <hr>
                      <p>${receita.preparo}</p>
                  </div>
              </div>
          </div>`;
}

function preencheCatalogo() {
  const pnlCatalogo = document.getElementById("pnlCatalogo");
  pnlCatalogo.innerHTML = receitas.map((receita) => getCard(receita)).join("");
}

preencheCatalogo();
