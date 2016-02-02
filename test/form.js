(function ($, form) {
    describe('form', function () {
        var $theForm;
        var $formContainer = $('<div></div>').appendTo('body');

        before(function () {
            $theForm = form.init($formContainer);
        });

        it('should init', function () {
            expect($theForm).not.to.be(undefined);
        });

        it('should be a <form>', function () {
            expect($theForm.is('form')).to.be(true);
        });

        it('should contain 1 text input', function () {
            expect($theForm.find('input').length).to.be(1);
        });

        it('should contain 1 button', function () {
            expect($theForm.find('button').length).to.be(1);
        });

        it('should trigger `add` event', function (done) {
            $theForm.on('add', function (event, text) {
                expect(text).to.be('abc');
                done();
            });

            $theForm.find('input').val('abc');
            $theForm.submit();
        });

        after(function () {
            $formContainer.remove();
        });

    });
}(this.jQuery, this.todo.form));