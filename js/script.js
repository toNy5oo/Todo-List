function newItem() {

    //Checking if value of input is empty
    if ($('#input').val() === '') {
        alert('Please type something');
        return;
    }

    let input = $('#input').val();
    let element = $('<li></li>');
    element.append(input);

    //Add the item to the list as a list element
    $('#list').append(element);

    //Reset value of the input form
    $('#input').val('');

    //Making double click toggle the strike class
    element.on("dblclick", crossOut);

    //Create delete button
    let deleteButton = $('<crossoutbutton></crossoutbutton>');
    deleteButton.append(document.createTextNode('Remove'));
    //Append the button to the item
    element.append(deleteButton);
    deleteButton.on("click", deleteListItem);

    function deleteListItem() {
        element.addClass('delete');
    }

    //Assigning the toggle class to each li element
    function crossOut() {
        element.toggleClass('strike');
    }

    //Making the list sortable
    $('#list').sortable();
}