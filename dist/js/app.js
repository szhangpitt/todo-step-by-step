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
            url: 'data/data.json'
        })
        .fail(failHandler);
    }
    module.addItem = function (item) {
        return $.ajax({
            method: 'GET',
            url: 'data/add-item.json'
        })
        .fail(failHandler);
    }

    function failHandler (xhr) {
        console.warn('service call failed', xhr);
    }

}(this, this.jQuery));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8tbGlzdC5qcyIsInRvZG8tZm9ybS5qcyIsInNlcnZpY2UuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgdmFyIHRvZG8gPSBnbG9iYWwudG9kbztcblxuICAgIGlmICghdG9kbykge1xuICAgICAgICB0b2RvID0ge307XG4gICAgICAgIGdsb2JhbC50b2RvID0gdG9kbztcbiAgICB9XG5cbiAgICB2YXIgbW9kdWxlID0gZ2xvYmFsLnRvZG8ubGlzdCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gbWFrZUl0ZW0gKHRleHQsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiAnPGxpPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInRvZG8taW5wdXQtJyArIGluZGV4ICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRvZG8taW5wdXQtJyArIGluZGV4ICsgJ1wiPiZuYnNwOycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgK1xuICAgICAgICAgICAgICAgICAgICAnPC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAnPC9saT4nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VMaXN0ICh0b2Rvcykge1xuICAgICAgICByZXR1cm4gJycgK1xuICAgICAgICAnPHVsIGlkPVwidG9kby1saXN0XCI+JyArXG4gICAgICAgIHRvZG9zLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlSXRlbShpdGVtLCBpbmRleCk7XG4gICAgICAgIH0pLmpvaW4oJycpICtcbiAgICAgICAgJzwvdWw+J1xuICAgIH1cblxuICAgIHZhciAkY29udGFpbmVyO1xuICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgbW9kdWxlLmluaXRMaXN0ID0gZnVuY3Rpb24gKHRvZG9zLCBjb250YWluZXIpIHtcbiAgICAgICAgJGNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgaXRlbXMgPSBbXS5jb25jYXQodG9kb3MpO1xuICAgICAgICB2YXIgJGxpc3QgPSAkKG1ha2VMaXN0KHRvZG9zKSk7XG4gICAgICAgICRjb250YWluZXIuaHRtbCgkbGlzdCk7XG5cbiAgICAgICAgcmV0dXJuICRsaXN0XG4gICAgfVxuXG4gICAgbW9kdWxlLmFkZEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB2YXIgJGxpc3RJdGVtID0gJChtYWtlSXRlbShpdGVtLCBpdGVtcy5sZW5ndGgpKTtcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKCd1bCcpLmFwcGVuZCgkbGlzdEl0ZW0pO1xuXG4gICAgICAgIHJldHVybiAkbGlzdEl0ZW1cbiAgICB9XG5cbn0odGhpcykpOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCAkKSB7XG4gICAgdmFyIHRvZG8gPSBnbG9iYWwudG9kbztcblxuICAgIGlmICghdG9kbykge1xuICAgICAgICB0b2RvID0ge307XG4gICAgICAgIGdsb2JhbC50b2RvID0gdG9kbztcbiAgICB9XG5cbiAgICB2YXIgbW9kdWxlID0gZ2xvYmFsLnRvZG8uZm9ybSA9IHt9O1xuXG4gICAgdmFyICRjb250YWluZXI7XG4gICAgdmFyICRmb3JtO1xuXG4gICAgbW9kdWxlLmluaXQgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICAgICRjb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgICRmb3JtID0gJCgnJyArXG4gICAgICAgICAgICAnPGZvcm0gaWQ9XCJhZGQtdG9kby1mb3JtXCI+JyArXG4gICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiPicgK1xuICAgICAgICAgICAgICAgICc8YnV0dG9uPkFkZDwvYnV0dG9uPicgK1xuICAgICAgICAgICAgJzwvZm9ybT4nKTtcblxuICAgICAgICAkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3JtIHN1Ym1pdCBldmVudCcpO1xuICAgICAgICAgICAgdmFyIHRvZG9UZXh0ID0gJGZvcm0uZmluZCgnaW5wdXQnKS52YWwoKTtcblxuICAgICAgICAgICAgaWYgKCF0b2RvVGV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGZvcm0udHJpZ2dlcignYWRkJywgdG9kb1RleHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkY29udGFpbmVyLmh0bWwoJGZvcm0pO1xuXG4gICAgICAgIHJldHVybiAkZm9ybTtcbiAgICB9XG5cbn0odGhpcywgdGhpcy5qUXVlcnkpKTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgJCkge1xuICAgIHZhciB0b2RvID0gZ2xvYmFsLnRvZG87XG5cbiAgICBpZiAoIXRvZG8pIHtcbiAgICAgICAgdG9kbyA9IHt9O1xuICAgICAgICBnbG9iYWwudG9kbyA9IHRvZG87XG4gICAgfVxuXG4gICAgdmFyIG1vZHVsZSA9IGdsb2JhbC50b2RvLnNlcnZpY2UgPSB7fTtcblxuICAgIG1vZHVsZS5nZXRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICB1cmw6ICdkYXRhL2RhdGEuanNvbidcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoZmFpbEhhbmRsZXIpO1xuICAgIH1cbiAgICBtb2R1bGUuYWRkSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHVybDogJ2RhdGEvYWRkLWl0ZW0uanNvbidcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoZmFpbEhhbmRsZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZhaWxIYW5kbGVyICh4aHIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdzZXJ2aWNlIGNhbGwgZmFpbGVkJywgeGhyKTtcbiAgICB9XG5cbn0odGhpcywgdGhpcy5qUXVlcnkpKTsiLCIoZnVuY3Rpb24gKCQsIGxpc3QsIGZvcm0sIHNlcnZpY2UpIHtcbiAgICAkKCdib2R5JykucHJlcGVuZCgnPGgxPkl0IHJ1bnMhIDwvaDE+Jyk7XG4gICAgdmFyICR0b2RvTGlzdENvbnRhaW5lciA9ICQoJyN0b2RvLWNvbnRhaW5lcicpO1xuICAgIHZhciAkdG9kb0Zvcm1Db250YWluZXIgPSAkKCcjdG9kby1mb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgdmFyICR0aGVGb3JtID0gZm9ybS5pbml0KCR0b2RvRm9ybUNvbnRhaW5lcik7XG5cbiAgICBzZXJ2aWNlLmdldExpc3QoKS5kb25lKGZ1bmN0aW9uICh0b2Rvcykge1xuICAgICAgICBjb25zb2xlLmxvZyh0b2Rvcyk7XG4gICAgICAgIC8vIEdvdCBkYXRhIG9mIGFsbCBleGlzdGluZyB0b2RvJ3MsIHByb2R1Y2UgdGhlIERPTSBhbmQgYXBwZW5kIHRvIGNvbnRhaW5lclxuICAgICAgICBsaXN0LmluaXRMaXN0KHRvZG9zLCAkdG9kb0xpc3RDb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gaGFuZGxlciBmb3IgYWRkIGl0ZW0gdG8gdGhlIHRvIGRvIGxpc3RcbiAgICAkdGhlRm9ybS5vbignYWRkJywgZnVuY3Rpb24gKGV2ZW50LCB0b2RvVGV4dCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZm9ybSBoYXMgdmFsaWQgaW5wdXQnLCB0b2RvVGV4dCk7XG5cbiAgICAgICAgdmFyIG5ld0l0ZW0gPSB0b2RvVGV4dDtcblxuICAgICAgICBzZXJ2aWNlLmFkZEl0ZW0obmV3SXRlbSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCBpdGVtIGRhdGEnLCBkYXRhKTtcbiAgICAgICAgICAgIC8vIFNlcnZlciByZXNwb25kcyBPSywgaXRlbSBhZGRlZC4gTm93IHdlIHN5bmMgdGhlIFVJLlxuICAgICAgICAgICAgbGlzdC5hZGRJdGVtKG5ld0l0ZW0pO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG5cbn0oalF1ZXJ5LCB0aGlzLnRvZG8ubGlzdCwgdGhpcy50b2RvLmZvcm0sIHRoaXMudG9kby5zZXJ2aWNlKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
