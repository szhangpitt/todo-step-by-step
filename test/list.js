(function ($, list) {
    describe('list', function () {
        var $todoListContainer = $('<div></div>').appendTo('body');
        var todos = ['1', '2'];
        var $list;

        before(function () {
            $list = list.initList(todos, $todoListContainer);
        });

        it('should init', function () {
            expect($list).not.to.be(undefined);
        });

        it('should be a <ul>', function () {
            expect($list.is('ul')).to.be(true);
        });

        it('should contain 2 items', function () {
            expect($list.find('li').length).to.be(2);
        });

        after(function () {
            $todoListContainer.remove();
        });


    });
}(this.jQuery, this.todo.list));