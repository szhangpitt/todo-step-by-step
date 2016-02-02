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

    function makeList (todos) {
        return '' +
        '<ul id="todo-list">' +
        todos.map(function (item, index) {
            return module.makeItem(item, index);
        }).join('') +
        '</ul>'
    }

    module.initList = function (todos, $container) {
        $container.html(module.makeList(todos));
    }

}(this));