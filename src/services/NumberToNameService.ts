import { decimalHouses, houses, names, dozens } from '../utils/constantNumbers.json'

function Extended(numero: String) {
    const [before, after] = numero.replace('-', '').replace(',', '.').split('.')
    const numberBeforeExtended = `${prefix(numero)}${numberExtended(before)}`

    if (!+after) return numberBeforeExtended;
    let numberAfter = after.replace(/0+$/g, '');
    let numberAfterExtended = ` vírgula ${numberExtended(numberAfter)}`;
    let decimal = findsDecimalHouseName(numberAfter);
    if (decimal) numberAfterExtended += ` ${decimal}`;
    return numberBeforeExtended + numberAfterExtended;
}

function prefix(number: String) {
    return Number(number) < 0 ? 'menos ' : ''
}

function findsDecimalHouseName(numberAfter: any) {
    let decimal: any = decimalHouses[numberAfter.length - 1] || '';
    if (decimal && +numberAfter !== 1) {
        decimal = decimal.split(' ');
        decimal[0] = decimal[0] + 's';
        decimal = decimal.join(' ');
    }
    return decimal;
}

function getGroup(number: any) {
    if (number == '100') return 'cem';
    let output = '';
    for (let i = 0; i < number.length; i++) {
        let c = number[i];
        if (output) {
            if (c == '0') continue;
            output += ' e ';
        }
        if (((number.length == 2 && i == 0) || (number.length == 3 && i == 1)) && c == '1') return output + dozens[+number[i + 1]];
        output += names[number.length - i - 1][+c];
    }
    return output;
}

function numberExtended(numberString: string) {
    let number = String(numberString || 0)
    const output = [], numbers = [];

    while (number.length > 0) {
        const piece = number.length <= 3 ? number : number.substr(number.length - 3, 3);
        numbers.push({ number: +piece, name: getGroup(piece) });
        number = number.length - 3 > 0 ? number.substr(0, number.length - 3) : '';
    }

    if (numbers.length == 1 && numbers[0].number == 0) return numbers[0].name;

    for (var i = numbers.length - 1; i > 0; i--) {
        if (numbers[i].number != 0) {
            output.push(numbers[i].name + ' ' + (numbers[i].number == 1 ? houses[i].replace('ões', 'ão') : houses[i]))
        };
    }

    if (numbers.length && numbers[0].number > 0) {
        output.push(`${(numbers.length > 1 && (numbers[0].number < 100 || numbers[0].number % 100 == 0) ? 'e ' : '')}${numbers[0].name}`);
    } else if (output.length > 1) output.splice(output.length - 1, 0, 'e');

    return output.join(' e ');
}

export default function (number: String) {
    const str = Extended(number)
    return `${str.charAt(0).toUpperCase() + str.slice(1)}.`;
}
