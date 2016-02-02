(function (global, $) {
    var todo = global.todo;

    if (!todo) {
        todo = {};
        global.todo = todo;
    }

    var module = global.todo.form = {};

    var $container;
    var $form;

    module.init = function (container) {
        $container = container;
        $form = $('' +
            '<form id="add-todo-form">' +
                '<input type="text">' +
                '<button>Add</button>' +
            '</form>');

        $form.on('submit', function (e) {
            e.preventDefault();
            console.log('form submit event');
            var todoText = $form.find('input').val();

            if (!todoText) {
                return;
            }

            $form.trigger('add', todoText);
        });

        $container.html($form);

        return $form;
    }

}(this, this.jQuery));