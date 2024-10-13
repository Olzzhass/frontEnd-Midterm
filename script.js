console.log("HERE")

function toggleTable() {
    var table = document.getElementById("educationTable");
    var button = document.getElementById("toggleTableButton");

    if (table.style.display === "none") {
        table.style.display = "table";
        button.textContent = "Hide Learned Courses";
    } else {
        table.style.display = "none";
        button.textContent = "Show Learned Courses";
    }
}
