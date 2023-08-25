// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const noteContent = document.getElementById("note-content");

noteContent.addEventListener("input", function () {
    localStorage.setItem("savedNote", noteContent.value);
});

// Recuperar conteúdo salvo ao carregar a página
window.addEventListener("load", function () {
    const savedNote = localStorage.getItem("savedNote");
    if (savedNote) {
        noteContent.value = savedNote;
    }
});