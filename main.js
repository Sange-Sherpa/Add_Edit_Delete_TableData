const submit = document.querySelector('#submit');
const tbody = document.querySelector('#data_list');
const table = document.querySelector('#list');
const addRow = document.querySelector('#addRow');

function addToTable(e) {
    e.preventDefault();
    
    const fname = document.querySelector('#fname').value; 
    const age = document.querySelector('#age').value;
    const address = document.querySelector('#address').value;

    tbody.innerHTML += `
        <tr>
        <td> ${fname} </td>
        <td> ${age} </td>
        <td> ${address} </td>
        <td>
            <button style='border:none; border-radius: 5px; background-color: white;' class='deleteBtn'> <i style='font-size: 1.2rem; cursor: pointer;' class="fas fa-edit"></i> </button> 
            <button style='border:none; border-radius: 5px; background-color: white;' class='editBtn'> <i style='font-size: 1.2rem; cursor: pointer;' class="fas fa-trash"></i> </button>
        </td>
        </tr> 
    `;   

    // alert(fname + age + address);
}

function onAddRow(e) {
    
    tbody.innerHTML += `
        <tr>
        <td> <input type='text' size=30 maxlength="25" style='border: none; outline: none; padding: 5px; font-size: 18px'> </td>
        <td> <input type='text' size=30 maxlength="2" style='border: none; outline: none; padding: 5px; font-size: 18px'> </td>
        <td> <input type='text' size=30 maxlength="25" style='border: none; outline: none; padding: 5px; font-size: 18px'> </td>
        <td>
            <button style='border:none; border-radius: 5px; background-color: white; outline: none;' class='deleteBtn'> <i style='font-size: 1.2rem; cursor: pointer;' class="fas fa-edit"></i> </button> 
            <button style='border:none; border-radius: 5px; background-color: white; outline: none;' class='editBtn'> <i style=' font-size: 1.2rem; cursor: pointer;' class="fas fa-trash"></i> </button>
        </td>
        </tr> 
    `;   

    // alert(fname + age + address);
}

function onDeleteRow(e) {

    
} 

submit.addEventListener('click', addToTable);
addRow.addEventListener('click', onAddRow);
table.addEventListener('click', onDeleteRow);
