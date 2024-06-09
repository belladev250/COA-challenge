
function reverseString(input) {
    const length = input.length;
    let output = input;

    if (length % 3 === 0) {
        output = output.split('').reverse().join('');
    }

    if (length % 5 === 0) {
        output = output.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    if (length % 15 === 0) {
        output = output.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }

    return output;
}

const result = reverseString("Chocolate Chip Cookie");
console.log(result); 
