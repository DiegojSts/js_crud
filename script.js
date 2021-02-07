var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = [];
    formData["fullName"] = document.getElementById("fullName").value;
    formData["office"] = document.getElementById("office").value;
    formData["company"] = document.getElementById("company").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.office;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.company;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.salary;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.city;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Apagar</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("office").value = "";
    document.getElementById("company").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("office").value = selectedRow.cells[1].innerHTML;
    document.getElementById("company").value = selectedRow.cells[2].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.office;
    selectedRow.cells[2].innerHTML = formData.company;
    selectedRow.cells[3].innerHTML = formData.salary;
    selectedRow.cells[4].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Deseja excluir esse registro ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {

        isValid = true;

        if(document.getElementById("fullName").value == ""){
            isValid = false;
            document.getElementById("fullNameValidationError").classList.remove("hide");
        } else {
            document.getElementById("fullNameValidationError").classList.add("hide");
        }        
        if (document.getElementById("office").value == ""){
            isValid = false;
            document.getElementById("officeValidationError").classList.remove("hide"); 
        } else {
            document.getElementById("officeValidationError").classList.add("hide");        
        }        
        if(isValid){

            document.getElementById("fullNameValidationError").classList.contains("hide");
            document.getElementById("fullNameValidationError").classList.add("hide");
            document.getElementById("officeValidationError").classList.contains("hide");
            document.getElementById("officeValidationError").classList.add("hide");
        }            
         return isValid; 
    }

    
