// comentarios do form

const inputName = document.getElementById("inputName");
const inputComment = document.getElementById("inputComment");
const form = document.getElementById("formulario");
const commentPost = document.getElementById("commentPost");
const inputEmail = document.getElementById("inputEmail");
const comentarioResposta = document.getElementById("inputComment");
const botaoEnviar = document.getElementById("botao-enviar");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let p = document.createElement("p");
  p.classList = "p-2 d-flex text-wrap flex-wrap";
  p.innerHTML = `<strong>${inputName.value} : </strong> &nbsp ${inputComment.value}`;
  commentPost.appendChild(p);
  inputName.value = "";
  inputComment.value = "";
  inputEmail.value = "";
  inputName.focus();
});

comentarioResposta.addEventListener("input", (event) => {
  if (comentarioResposta.value.length > 0) {
    botaoEnviar.style.display = "block";
  } else {
    botaoEnviar.style.display = "none";
  }
});
