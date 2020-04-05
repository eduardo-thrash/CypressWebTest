describe('cuentas', function () {

    var a = 1 + 1;

    var b = 2;

    it('vamos a ver que se sume bien', function () {

        expect(a == b).to.equal(true);

    })

    it('vamos a ver que reste bien', function () {

        expect(a - b).to.equal(0)
        
    })
})