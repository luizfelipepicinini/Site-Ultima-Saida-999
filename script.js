const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    menuBtn.setAttribute("aria-expanded", aberto);
    menuBtn.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("aberto");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Abrir menu");
    });
});

const form = document.getElementById("formContato");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        resultado.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    resultado.innerHTML = `
        <strong>Mensagem recebida!</strong><br>
        Nome: ${escapeHTML(nome)}<br>
        E-mail: ${escapeHTML(email)}<br>
        Mensagem: ${escapeHTML(mensagem)}
    `;
});

function escapeHTML(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
}
