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
        var $list = $(makeList(todos));
        $container.html($list);

        return $list
    }

    module.addItem = function (item) {
        items.push(item);
        var $listItem = $(makeItem(item, items.length));
        $container.find('ul').append($listItem);

        return $listItem
    }

}(this));