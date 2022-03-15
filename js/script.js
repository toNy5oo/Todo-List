function newItem() {

    //Checking if value of input is empty
    if ($('#input').val() === '') {
        alert('Please type something');
        return;
    }

    //Get the element and the value of the input
    let input = $('#input').val();
    let element = $('<li></li>');

    //Add the element to the list
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

    //Adding the listener for the click event
    deleteButton.on("click", deleteListItem);

    function deleteListItem() {
        element.addClass('delete');
    }

    function crossOut() {
        //Assigning the toggle class strike 
        element.toggleClass('strike');
    }

    //Making the list sortable
    $('#list').sortable();
}