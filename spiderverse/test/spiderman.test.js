const Spiderman = require('../app/superhero');

describe("Unit Case For Superman Class", ()=>{
    test('1) Case test: Create an spiderman object', () => {
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 14, "Sony") ;
        expect(andrewGarfield.nameHero).toBe("Spiderman Sony");
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe("Andrew Garfield")


        expect().toBe()
    }),
    test('2) Case test: Test GetInfo() function', () => {
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 14, "Sony") ;
        expect(andrewGarfield.getInfo()).toBe("Hey, I'm Andrew Garfield from Sony");
        expect().toBe()
    })
})