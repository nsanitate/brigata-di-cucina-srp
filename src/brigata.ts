import { Chef } from './chef';

export class Brigata {

    private coordinata = false;

    constructor(
        private chef: Chef
    ) { }

    isCoordinata() {
        if (!this.coordinata) {
            this.coordinata = this.chef.coordina();
        }
        return this.coordinata;
    }

    dammiZuppa(ingrediente?: string) {
        let zuppa = this.chef.preparaZuppa(ingrediente);
        return zuppa;
    }

    dammiTorta(ingrediente?: string) {
        let torta = this.chef.preparaTorta(ingrediente);
        return torta;
    }

}