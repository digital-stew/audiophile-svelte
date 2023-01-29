export default function numberToCurrency(number: number) {
    return '$' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}