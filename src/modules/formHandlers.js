// Form Handlers Module
export class FormHandlers {
  constructor() {
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    this.handleNaturezaDelito();
    this.handleEstadoVitima();
    this.handlePreservacao();
    this.handleResgate();
    // ... outros handlers
  }

  handleNaturezaDelito() {
    const select = document.getElementById('naturezaDelitoSelect');
    const input = document.getElementById('especificacao-naturezaDelito');

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
    const selectEstado = document.getElementById('estadoVitima');
    const divMaterialCobertura = document.getElementById('materialCobertura');

    selectEstado?.addEventListener('change', () => {
      if (selectEstado.value === 'Coberta') {
        divMaterialCobertura.classList.remove('hidden');
      } else {
        divMaterialCobertura.classList.add('hidden');
        document.getElementById('materialQueCobria').value = '';
      }
    });
  }

  // ... outros métodos
}