(function (global, $) {
    var todo = global.todo;

    if (!todo) {
        todo = {};
        global.todo = todo;
    }

    var module = global.todo.service = {};

    module.getList = function () {
        return $.ajax({
            method: 'GET',
            url: '/data/data.json'
        })
        .fail(failHandler);
    }
    module.addItem = function (item) {
        return $.ajax({
            method: 'GET',
            url: '/data/add-item.json'
        })
        .fail(failHandler);
    }

    function failHandler (xhr) {
        console.warn('service call failed', xhr);
    }

}(this, this.jQuery));