(function (global) {
    var todo = global.todo;

    if (!todo) {
        todo = {};
        global.todo = todo;
    }

    var module = global.todo.list = {};

    function makeItem (text, index) {
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
            return makeItem(item, index);
        }).join('') +
        '</ul>'
    }

    var $container;
    var items = [];

    module.initList = function (todos, container) {
        $container = container;
        items = [].concat(todos);
        $container.html(makeList(todos));
    }

    module.addItem = function (item) {
        items.push(item);
        $container.find('ul').append(makeItem(item, items.length));
    }

}(this));