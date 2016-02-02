(function ($, service) {
    describe('service', function () {

        it('should have getList', function () {
            expect(service.getList).to.be.a('function');
        });

        it('should have addItem', function () {
            expect(service.addItem).to.be.a('function');
        });

        it('getList() should return promise', function () {
            expect(service.getList().done).to.be.a('function');
        });

        it('addItem() should return promise', function () {
            expect(service.addItem().done).to.be.a('function');
        });

    });
}(this.jQuery, this.todo.service));