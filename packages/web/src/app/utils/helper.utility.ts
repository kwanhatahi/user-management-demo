export default class HelperUtility {
  static padLeft(max: number, value: number) {
    return value.toString().padStart(max, '0');
  }
}
