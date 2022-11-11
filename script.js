let isExist = false;

function createTable()
{
    if(!isExist)
    {
        const table = document.createElement("table");
        table.setAttribute("id", "mytable");

        document.getElementById('container').appendChild(table);
        isExist = true;

        document.getElementById('add').disabled = false;
        document.getElementById('delete').disabled = false;
        document.getElementById('rowNumber').disabled = false;
    } else {
        alert('Таблица уже создана');
    }
   
}

function addRowCont()
{
    const rowContInput = document.getElementById('rowCount');
    const newRowCount = parseInt(rowContInput.value) + 1;
    rowContInput.value = newRowCount;
    return rowContInput.value;
}

function addRow()
{
    const table = document.getElementById('mytable');
    const rowNum = addRowCont();
    console.log
    const row = table.insertRow();

    row.setAttribute('id', 'num-' + rowNum);

    const tdNum = row.insertCell();
    tdNum.textContent = rowNum;
    tdNum.setAttribute('class', 'numberCell')

    const tdValue =  row.insertCell();
    tdValue.textContent = 'value ' + Math.floor(Math.random()*10);
}

function autoRepeat()
{
    const cells = document.querySelectorAll('.numberCell');
    let i = 1;

    cells.forEach(item =>{
        item.textContent = i;
        i++;
    })
}

function remuveRow()
{
    const input = document.getElementById('rowNumber').value
    const hidenInput = document.getElementById('rowCount').value
    const table = document.getElementById('mytable')
    if (parseInt(input) <= parseInt(hidenInput))
    {
        table.deleteRow(input - 1);
        //hiddenInput.value -= 1;
        //autoRepeat();
        //document.getElementById('num-' + input).remove();
        //remRow();
    } else
    {
        alert('Такой строки не существует')
    }
}