import { expect } from 'chai';

import { Brigata } from './brigata';
import { Chef } from './chef';
import { Minestraio } from './minestraio';
import { Pasticcere } from './pasticcere';

describe(('Brigata'), () => {
    let brigata: Brigata;

    beforeEach(() => {
        // Arrange
        const chef = new Chef();
        const minestraio = new Minestraio();
        const pasticcere = new Pasticcere();
        brigata = new Brigata(chef, minestraio, pasticcere);
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

        it('dovrebbe potermi portare della zuppa di ceci', () => {
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

        it('dovrebbe potermi portare una torta alle noci', () => {
            // Act
            let actual = brigata.dammiTorta('noci');

            // Assert
            expect(actual).to.equal('torta alle noci');
        });

    });

});