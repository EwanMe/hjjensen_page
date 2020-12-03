function addItem() {
  //Gets input from form
  var item = document.querySelector('#item').value;
  var type = document.querySelector('#type').value;
  var price = document.querySelector('#price').value;
  var wishlist = document.querySelector('#wishlist-body');

  //Get number of rows and sets as index in ID. Starts at 0.
  var rowIndex = document.getElementById('wishlist-body').rows.length;

  //Writes the form input into HTML-formatted string
  var table = '';
  table += '<tr class="row" id="row-' + rowIndex + '">';
  table += '<td>';
  table += item;
  table += '</td>';
  table += '<td>';
  table += type;
  table += '</td>';
  table += '<td>';
  table += price;
  table += '</td>';
  table += '<td class="empty-cell">';
  //Creates onclick that accesses the row of the button so it can be moved.
  table += '<button class="arrow" onclick="moveItem(this.parentElement.parentElement)">&#x2191;</button>';
  table += '<button class="delete" onclick="deleteItem(this.parentElement.parentElement)">Delete</button>';
  table += '</td>';
  table += '</tr>';

  //Writes the string to a table in the HTML
  wishlist.innerHTML += table;
}

function moveItem(element) {
  var currentRow = element; //Element
  var currentId = element.id; //Id
  var currentIdNum = parseInt(currentId.substr(4)); //Row index number
  var targetIdNum = currentIdNum - 1; //Above row index number
  var targetId = 'row-' + targetIdNum; //Above row id
  var targetRow = document.getElementById(targetId); //Above row element

  //Gets the table body element for next step.
  var parent = targetRow.parentNode;

  //Moves the clicked row one step up.
  parent.insertBefore(currentRow, targetRow);

  //Swaps IDs so this function works next time.
  document.getElementById(targetId).id = currentId;
  currentRow.id = targetId;
}

function deleteItem(row) {
  var id = row.id;
  var index = parseInt(id.substr(4)) + 1; //Add one from ID to not delete table header
  var table = document.getElementById('wishlist'); //Gets table element

  table.deleteRow(index);

  updateRowIds();
}

function updateRowIds() {
  var table = document.getElementById('wishlist');

  //Checks row ids against expected increment and updates.
  for (let i = 0, row; row = table.rows[i]; i++) {
    let rowIndex = i - 1;
    let rowId = parseInt(row.id.substr(4));

    //Row id gets same number as index if it doesn't match increment.
    if (rowId === rowIndex) {
      continue;
    }
    else {
      row.id = 'row-' + rowIndex;
    }
  }
}
