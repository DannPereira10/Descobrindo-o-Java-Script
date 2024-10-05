//estilo dos botões
const buttons = document.querySelectorAll(".btn.bnt-primary");

buttons.forEach((button) => {
  button.style.backgroundColor = "#007BFF";
  button.style.color = "#fff";
});

//add valores
const add = () => {
  const valor = document.getElementById("valor").value;
  const lista = document.getElementById("valores");

//Verifica se o campo de entrada está vazio antes de adicionar
  if (valor !== "") {
    const node = document.createElement("li");
    const textoNode = document.createTextNode(valor);
    node.appendChild(textoNode);
    lista.appendChild(node);

//limpa o input
    document.getElementById("valor").value = "";
  }
};

//ordenar (Arrow Function)
const ordenar = () => {
  const lista = document.getElementById("valores");
  const algoritmo = document.getElementById("algoritmo").selectedIndex;
  let valores = Array.from(lista.children).map((item) =>
    parseInt(item.innerHTML)
  );

  if (algoritmo === 0) {
    bubbleSort(valores);
  } else if (algoritmo === 1) {
    selectionSort(valores);
  } else if (algoritmo === 2) {
    quickSort(valores, 0, valores.length - 1);
  }

  lista.innerHTML = valores
    .map((valor) => `<li>${valor}</li>`)
    .reduce((a, b) => a + b);
};

//Bubble Sort (Arrow Function)
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};

//Selection Sort (Arrow Function)
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
};

//Quick Sort (Arrow Function)
const quickSort = (arr, left, right) => {
  if (left >= right) return;
  const pivot = arr[Math.floor((left + right) / 2)];
  const index = partition(arr, left, right, pivot);
  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);
};

const partition = (arr, left, right, pivot) => {
  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
};

//misturar os valores da lista (Arrow Function)
const misturar = () => {
  const lista = document.getElementById("valores");
  let valores = Array.from(lista.children).map((item) =>
    parseInt(item.innerHTML)
  );

  for (let i = valores.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [valores[i], valores[j]] = [valores[j], valores[i]];
  }

  lista.innerHTML = valores
    .map((valor) => `<li>${valor}</li>`)
    .reduce((a, b) => a + b);
};
