const title = document.querySelector(".title");
const body = document.querySelector("body");
const main = document.querySelector(".main");
const selectDate = document.querySelector("#date");
const changeButton = document.querySelector(".button");

const key = "j7nTmpyXRshJ6z2ol789pwPxmvHBN2EROC4wwgVa";
const minDate = "1996-06-16";

async function getAllInfo(date = "") {
  try {
    if (date && new Date(date) < new Date(minDate)) {
      alert("Data indisponível! Por favor, escolha uma data a partir de 16 de junho de 1996.");
      return;
    }
    const url = date
      ? `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`
      : `https://api.nasa.gov/planetary/apod?api_key=${key}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    body.style.backgroundImage = `url('${data.url}')`;
    title.innerText = `${data.title}`;

    //removendo autores e explicações duplicadas
    const existingExplanation = document.querySelector(".explanation");
    const existingAuthor = document.querySelector(".author");
    const existingImg  = document.querySelector('.img');
    if (existingExplanation) existingExplanation.remove();
    if (existingAuthor) existingAuthor.remove();
    if (existingImg) existingImg.remove();
    

    //criando elementos
    const explanation = document.createElement("p");
    const author = document.createElement("h2");
    const img = document.createElement('img')

    //adicionando classes e texto
    explanation.classList.add("explanation");
    author.classList.add("author");
    img.classList.add('img')


    explanation.innerText = data.explanation;
    author.innerText = data.copyright;
    img.setAttribute('src', data.url);

    //Adicionando ao DOM
    main.appendChild(explanation);
    main.appendChild(author);
    main.appendChild(img);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

function handleFormSubmit(event) {
  if (event) {
    event.preventDefault();
  }
  
  const date = selectDate.value;
  getAllInfo(date);
}
document.addEventListener("DOMContentLoaded", () => {
  const selectDate = document.querySelector("#date");
  const today = new Date().toISOString().split("T")[0];
  selectDate.value = today;
  selectDate.setAttribute('max', today)
});

main.addEventListener("submit", handleFormSubmit);
main.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter'){
    handleFormSubmit()
  }
})
getAllInfo();
