document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#message-form");
    const input = document.querySelector("#message-input");
    const counter = document.querySelector("#message-count");
    const notes = document.querySelector("#notes");
    const storageKey = "tcu-campus-note";

    function addNote(content) {
        const note = document.createElement("blockquote");
        note.className = "user-note";
        note.textContent = "“" + content + "”";
        notes.prepend(note);
    }

    const savedNote = localStorage.getItem(storageKey);
    if (savedNote) {
        addNote(savedNote);
    }

    input.addEventListener("input", function () {
        counter.textContent = input.value.length + " / 80";
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const content = input.value.trim();

        if (!content) {
            return;
        }

        notes.querySelectorAll(".user-note").forEach(function (note) {
            note.remove();
        });
        addNote(content);
        localStorage.setItem(storageKey, content);
        input.value = "";
        counter.textContent = "0 / 80";
    });
});
