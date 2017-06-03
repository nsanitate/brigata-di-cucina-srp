export class Chef {

    coordina() {
        // Roba di coordinamento
        return true;
    }

    preparaZuppa(ingrediente?: string) {
        let zuppa = 'zuppa';
        if (ingrediente) {
            zuppa = zuppa + this.preparaIngrediente(ingrediente);
        }
        return zuppa;
    }

    preparaTorta(ingrediente?: string) {
        let torta = 'torta';
        if (ingrediente) {
            torta = torta + this.preparaIngrediente(ingrediente);
        }
        return torta;
    }

    private preparaIngrediente(ingrediente?: string) {
        throw 'Gestione ingredienti non implementata';
    }

}