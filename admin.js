var selectedRow = null;
function accounts(e){
    event.preventDefault();
    var formData = formdata();
    if(selectedRow === null){
        changes(formData);
    }
    else{
        select(formData);
    }
    fill();
}


function formdata(){
    var formData = {};
    formData["Email"] = document.getElementById("Email").value;
    formData["name"] = document.getElementById("name").value;
    formData["Password"] = document.getElementById("Password").value;
    formData["Index"] = document.getElementById("Index").value;
    return formData;
}


function changes(data){
    var table = document.getElementById("set").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Email;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.name;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Password;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Index;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='replace(this)'>Change</button> 
                           <button onClick='delte(this)'>Delete</button>`
}


function replace(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Email').value = selectedRow.cells[0].innerHTML;
    document.getElementById('name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Password').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Index').value = selectedRow.cells[3].innerHTML;

}

function select(formData){
    selectedRow.cells[0].innerHTML = formData.Email;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.Password;
    selectedRow.cells[3].innerHTML = formData.Index;
}


function delte(td){
    row = td.parentElement.parentElement;
    document.getElementById('set').deleteRow(row.rowIndex);
    fill();
}

function fill(){
    document.getElementById('Email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('Password').value = '';
    document.getElementById('Index').value = '';
selectedRow = null;
}