//events
const element = document.querySelector('#inputText')
const button = document.querySelector('#submit')

button.addEventListener('click', function () {
    populate(element.value);
})

//functions
function populate(element) {
    const display = document.querySelector('#myTable');
    let displayedElement = document.createTextNode(element);

    let checkbox = document.createElement('input');

    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "todoElements";

    let label = document.createElement('label')
    label.htmlFor = "id";
    label.appendChild(displayedElement);

    let tableRow = document.createElement('tr');
    let tableData = document.createElement('td');




    tableData.appendChild(checkbox);
    tableData.appendChild(label);
    tableRow.appendChild(tableData);



    display.appendChild(tableRow);
}

function rearrangeOrder() {
    let tbl = document.getElementById('mytable');
    let rows = tbl.getElementsByTagName('tr');
    let firstRow = rows[0];
    let lastRow = rows[rows.length];
    firstRow.parentNode.insertBefore(lastRow.parentNode.removeChild(lastRow), firstRow);
}