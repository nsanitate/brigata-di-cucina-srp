export class Pasticcere {

    preparaTorta(ingrediente?: string) {
        const ingredientePreparato = this.preparaIngrediente(ingrediente);
        return 'torta' + ingredientePreparato;
    }

    private preparaIngrediente(ingrediente?: string) {
        if (ingrediente) {
            return ' alle ' + ingrediente;
        } else {
            return '';
        }
    }

}