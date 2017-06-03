import { Chef } from './chef';
import { Minestraio } from './minestraio';
import { Pasticcere } from './pasticcere';

export class Brigata {

    private coordinata = false;

    constructor(
        private chef: Chef,
        private minestraio: Minestraio,
        private pasticcere: Pasticcere
    ) { }

    isCoordinata() {
        if (!this.coordinata) {
            this.coordinata = this.chef.coordina();
        }
        return this.coordinata;
    }

    dammiZuppa(ingrediente?: string) {
        let zuppa = this.minestraio.preparaZuppa(ingrediente);
        return zuppa;
    }

    dammiTorta(ingrediente?: string) {
        let torta = this.pasticcere.preparaTorta(ingrediente);
        return torta;
    }

}