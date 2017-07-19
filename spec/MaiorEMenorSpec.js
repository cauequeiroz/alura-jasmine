describe("Maior e Menor", () => {

    it("should understand non-sequencial numbers", () => {
        const algoritimo = new MaiorEMenor();
        algoritimo.encontra([5, 15, 7, 9]);
        
        expect( algoritimo.pegaMaior() ).toEqual(15);
        expect( algoritimo.pegaMenor() ).toEqual(5);
    });

    it("should understand descending numbers order", () => {
        const algoritimo = new MaiorEMenor();
        algoritimo.encontra([9, 8, 7, 6]);

        expect( algoritimo.pegaMaior() ).toEqual(9);
        expect( algoritimo.pegaMenor() ).toEqual(6);
    });

    it("should understand ascending numbers order", () => {
        const algoritimo = new MaiorEMenor();
        algoritimo.encontra([6, 7, 8, 9]);

        expect( algoritimo.pegaMaior() ).toEqual(9);
        expect( algoritimo.pegaMenor() ).toEqual(6);
    });

    it("should understand just one number", () => {
        const algoritimo = new MaiorEMenor();
        algoritimo.encontra([5]);

        expect( algoritimo.pegaMaior() ).toEqual(5);
        expect( algoritimo.pegaMenor() ).toEqual(5);
    });

});