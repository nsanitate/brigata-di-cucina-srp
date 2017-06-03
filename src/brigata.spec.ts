import { expect } from 'chai';

import { Brigata } from './brigata';
import { Chef } from './chef';

describe(('Brigata'), () => {
    let brigata: Brigata;

    beforeEach(() => {
        // Arrange
        const chef = new Chef();
        brigata = new Brigata(chef);
    });


    it('dovrebbe essere coordinata', () => {
        // Act
        let actual = brigata.isCoordinata();

        // Assert
        expect(actual).to.be.true;
    });

    describe('Sezione minestre', () => {

        it('dovrebbe potermi portare della zuppa', () => {
            // Act
            let actual = brigata.dammiZuppa();

            // Assert
            expect(actual).to.equal('zuppa');
        });

        xit('dovrebbe potermi portare della zuppa di ceci', () => {
            // Act
            let actual = brigata.dammiZuppa('ceci');

            // Assert
            expect(actual).to.equal('zuppa di ceci');
        });

    });

    describe('Sezione pasticceria', () => {

        it('dovrebbe potermi portare una torta', () => {
            // Act
            let actual = brigata.dammiTorta();

            // Assert
            expect(actual).to.equal('torta');
        });

        xit('dovrebbe potermi portare una torta alle noci', () => {
            // Act
            let actual = brigata.dammiTorta('noci');

            // Assert
            expect(actual).to.equal('torta alle noci');
        });

    });

});