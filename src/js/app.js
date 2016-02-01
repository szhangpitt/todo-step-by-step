(function ($) {
    $('body').prepend('<h1>It runs! </h1>');

    $.getJSON('data/data.json', function (todos) {
        console.log(todos);

        $('#todo-list').append(
            todos.map(function (todo, index) {
                return '' +
                    '<li>' +
                        '<label for="todo-input-' + index + '">' +
                            '<input type="checkbox" id="todo-input-' + index + '">&nbsp;' +
                             todo +
                        '</label>' +
                    '</li>';
            }));
    });
        
}(jQuery));