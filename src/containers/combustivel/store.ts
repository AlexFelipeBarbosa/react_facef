import { action, observable } from 'mobx';

import swal from 'sweetalert2';

export default class CombustivelStore {
  @observable etanol = 0;
  @observable gasolina = 0;

  @action submit = () => {
    const { etanol, gasolina } = this;
    if (!isNaN(Number(etanol)) && !isNaN(Number(gasolina))) {
      const value = Number(etanol) / Number(gasolina);

      if (value > 0.7) {
        swal.fire('Vale a pena GASOLINA', '', 'success');
      } else if (value < 0.7) {
        swal.fire('Vale a pena ETANOL', '', 'success');
      } else {
        swal.fire('São equivalentes', '', 'info');
      }
    } else {
      swal.fire('Preencha os valores válidos', '', 'warning');
    }
  };
  @action handleForm = (event: any, select?: any) => {
    const { name, value } = select || event.target;
    this[name] = value;
  };
}
const combustivel = new CombustivelStore();
export { combustivel };
