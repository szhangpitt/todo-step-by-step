(function ($, list, form, service) {
    $('body').prepend('<h1>It runs! </h1>');
    var $todoListContainer = $('#todo-container');
    var $todoFormContainer = $('#todo-form-container');

    var $theForm = form.init($todoFormContainer);

    service.getList().done(function (todos) {
        console.log(todos);
        // Got data of all existing todo's, produce the DOM and append to container
        list.initList(todos, $todoListContainer);
    });

    // handler for add item to the to do list
    $theForm.on('add', function (event, todoText) {
        console.log('form has valid input', todoText);

        var newItem = todoText;

        service.addItem(newItem).done(function (data) {
            console.log('add item data', data);
            // Server responds OK, item added. Now we sync the UI.
            list.addItem(newItem);
        });

    });


}(jQuery, this.todo.list, this.todo.form, this.todo.service));
