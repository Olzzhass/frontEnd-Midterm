console.log("HERE")

function toggleTable() {
    var table = document.getElementById("educationTable");
    var button = document.getElementById("toggleTableButton");

    // Переключение видимости таблицы
    if (table.style.display === "none") {
        table.style.display = "table";
        button.textContent = "Hide Table";  // Меняем текст кнопки
    } else {
        table.style.display = "none";
        button.textContent = "Show Table";  // Меняем текст кнопки обратно
    }
}
