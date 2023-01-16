
export default class Utils {

  static format_money (value: number, decimals: number = 0): string {
    return (value || 0).toFixed(decimals).replace(new RegExp(`\\d(?=(\\d{3})+${decimals > 0 ? '\.' : ''}$$)`, 'g'), '$&,');
  }

}
