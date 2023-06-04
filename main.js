
let rows = document.getElementById('rows');
let cols = document.getElementById('cols');
let btn = document.querySelector('button');
btn.addEventListener('click', createTable);
function createTable(){
    let body = document.body;
    let Table = document.createElement("table");

    for(let i = 0; i < +rows.value; i++){
        let tr = document.createElement("tr");
        tr.innerHTML="row";
        Table.appendChild(tr);

        for(let j = 0; j < +cols.value; j++){
            let td = document.createElement("td");
            td.innerHTML="item";
           tr.appendChild(td);
        }
    }
    body.appendChild(Table);
}