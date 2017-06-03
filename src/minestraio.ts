export class Minestraio {

    preparaZuppa(ingrediente?: string) {
        const ingredientePreparato = this.preparaIngrediente(ingrediente);
        return 'zuppa' + ingredientePreparato;
    }

    private preparaIngrediente(ingrediente?: string) {
        if (ingrediente) {
            return ' di ' + ingrediente;
        } else {
            return '';
        }
    }

}