(function (global) {
    var todo = global.todo;

    if (!todo) {
        todo = {};
        global.todo = todo;
    }

    var module = global.todo.list = {};

    module.makeItem = function (text, index) {
        return '<li>' +
                    '<label for="todo-input-' + index + '">' +
                        '<input type="checkbox" id="todo-input-' + index + '">&nbsp;' +
                         text +
                    '</label>' +
                '</li>';
    }

    module.makeList = function (todos) {
        return todos.map(function (item, index) {
            return module.makeItem(item, index);
        });
    }

}(this));