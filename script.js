function printTable() {
    let tableNumber = Number(document.getElementById("Number").value);
    let startFrom = Number(document.getElementById("MinLength").value);
    let EndTo = Number(document.getElementById("MaxLength").value);
    let table = document.getElementById("Table");
  
    table.innerHTML = '';
  
   
    for (let i = startFrom; i <= EndTo; i++) {
      table.innerHTML += `${tableNumber} x ${i} = ${tableNumber * i} <br>`;
    }
    console.log('Table printed');
  }
  
  function reset() {
    document.getElementById("Number").value = "";
    document.getElementById("MinLength").value = "";
    document.getElementById("MaxLength").value = "";
    document.getElementById("Table").innerHTML = "";
  }
  