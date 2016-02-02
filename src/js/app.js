(function ($, list) {
    $('body').prepend('<h1>It runs! </h1>');
    var $todoListContainer = $('#todo-list');
    var $addTodoForm = $('#add-todo-form');
    var $addTodoInput = $('#add-todo-form > input');

    $.ajax({
        method: 'GET',
        url: 'data/data.json'
    }).done(function (todos) {
        console.log(todos);
        // Got data of all existing todo's, produce the DOM and append to container
        $todoListContainer.append(
            list.makeList(todos));
    });

    // handler for add item to the to do list
    $addTodoForm.on('submit', function (e) {
        e.preventDefault();
        console.log('submitting to do item', e);

        var newItem = $addTodoInput.val();

        if (!newItem) {
            alert('Please put something in the input');
            return;
        }

        $.ajax({
            method: 'GET',
            url: 'data/add-item.json'
        }).done(function (data) {
            console.log('add item data', data);
            alert('Item added!');
            // Server responds OK, item added. Now we sync the UI.
            var todo = newItem;
            var index  = $todoListContainer.children('li').length;
            $todoListContainer.append(list.makeItem(todo, index));
        }).fail(function (xhr) {
            console.warn('add item fail', xhr);
        });

    });


}(jQuery, this.todo.list));
