// ==================== Intercepta o submit do formulário ====================

// Obtém o elemento do formulário pelo ID
const contatoForm = document.getElementById('contato-form');

// Só continua se o elemento existir
if (contatoForm) {
  // Adiciona um listener para o evento "submit"
  contatoForm.addEventListener('submit', function(event) {
    event.preventDefault();                // Impede o envio real do formulário
    alert('Página em construção');         // Exibe um alerta informando que ainda não funciona
  });
}

// ==================== Alterna entre tema claro e escuro ====================

// Obtém o botão que alterna o tema
const toggleBtn = document.getElementById("theme-button");
// Obtém o ícone que será trocado junto com o tema
const icon = document.getElementById("theme-icon");

// Quando o botão for clicado:
toggleBtn.addEventListener("click", () => {
  // Alterna a classe "dark" no <body>. Se já tem, remove. Se não tem, adiciona.
  document.body.classList.toggle("dark");

  // Atualiza o ícone com base no tema atual
  if (document.body.classList.contains("dark")) {
    icon.src = "img/lightMode.svg";  // Tema escuro → Ícone que representa o modo claro
  } else {
    icon.src = "img/darkMode.svg";   // Tema claro → Ícone que representa o modo escuro
  }
});

// ==================== Aumenta e diminui o tamanho da fonte ====================

// Obtém os botões para aumentar e diminuir a fonte
const aumentarF = document.getElementById("fonteMaior");  // botão "A+"
const diminuirF = document.getElementById("fonteMenor");  // botão "A-"

// Quando clicar no botão para aumentar a fonte:
aumentarF.addEventListener("click", () => {
  // Obtém o tamanho atual da fonte do body (ex.: "16px") e transforma em número
  let size = parseFloat(getComputedStyle(document.body).fontSize);
  // Aumenta a fonte em 2px
  document.body.style.fontSize = (size + 2) + "px";
});

// Quando clicar no botão para diminuir a fonte:
diminuirF.addEventListener("click", () => {
  // Obtém o tamanho atual da fonte
  let size = parseFloat(getComputedStyle(document.body).fontSize);
  // Só diminui se a fonte for maior que 10px, para evitar que fique ilegível
  if (size > 10) {
    document.body.style.fontSize = (size - 2) + "px";
  }
});
