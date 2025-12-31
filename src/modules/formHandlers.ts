export class FormHandlers {
  constructor() {
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    this.handleNaturezaDelito();
    this.handleEstadoVitima();
  }

  handleNaturezaDelito() {
    const select = document.getElementById('naturezaDelitoSelect') as HTMLSelectElement;
    const input = document.getElementById('especificacao-naturezaDelito') as HTMLInputElement;

    select?.addEventListener('change', () => {
      if (select.value === 'outros') {
        input.classList.remove('hidden');
      } else {
        input.classList.add('hidden');
        input.value = '';
      }
    });
  }

  handleEstadoVitima() {
    const selectEstado = document.getElementById('estadoVitima') as HTMLSelectElement;
    const divMaterialCobertura = document.getElementById('materialCobertura');

    selectEstado?.addEventListener('change', () => {
      if (selectEstado.value === 'Coberta') {
        divMaterialCobertura?.classList.remove('hidden');
      } else {
        divMaterialCobertura?.classList.add('hidden');
        (document.getElementById('materialQueCobria') as HTMLInputElement).value = '';
      }
    });
  }

  // ... outros métodos
}