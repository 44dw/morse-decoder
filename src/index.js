const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const space = '**********';
    const arr = expr.match(/.{1,10}/g);
    let result = [];
    for (let symbolDigits of arr) {
        if (symbolDigits === space) {
            result.push(' ');
            continue;
        }
        const digitsWithoutZeros = symbolDigits.replace(/0{2,}/, '');
        result.push(MORSE_TABLE[digitsWithoutZeros.replace(/10/g, '.').replace(/11/g, '-')]);
    }
    console.log(result)
    return result.join('');
  }

module.exports = {
    decode
}