// Form Validators Module
export class FormValidators {
  static validateRequired(value) {
    return value.trim() !== '';
  }

  static validateDate(date) {
    return !isNaN(Date.parse(date));
  }

  static validateTime(time) {
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(time);
  }

  static validatePlaca(placa) {
    const placaRegex = /^[A-Z]{3}-\d{4}$/;
    return placaRegex.test(placa);
  }
}