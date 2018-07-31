// Pasar de decimal a numeros romanos

var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;

function dec2rom(dec) {

    var result = "";

    while (dec != 0) {
        if (dec >= I && dec <= 3) {
            dec -= I;
            result += "I";
        } else if (dec == 4) {
            dec -= 4;
            result += "IV";
        } else if (dec >= V && dec <= 8) {
            dec -= V;
            result += "V";
        } else if (dec == 9) {
            dec -= 9;
            result += "IX";
        } else if (dec >= X && dec <= 39) {
            dec -= X;
            result += "X";
        } else if (dec >= 40 && dec <= 49) {
            dec -= 40;
            result += "XL";
        } else if (dec >= L && dec <= 89) {
            dec -= L;
            result += "L";
        } else if (dec >= 90 && dec <= 99) {
            dec -= 90;
            result += "XC";
        } else if (dec >= C && dec <= 399) {
            dec -= C;
            result += "C";
        } else if (dec >= 400 && dec <= 499) {
            dec -= 400;
            result += "CD";
        } else if (dec >= D && dec < 900) {
            dec -= D;
            result += "D";
        } else if (dec >= 900 && dec <= 999) {
            dec -= 900;
            result += "CM";
        } else if (dec >= M && dec <= 3000) {
            dec -= M;
            result += "M";
        }

    }


    return result;
}


function roman2decimal(rom) {

    var result = 0;
    var aux = false;
    while (aux != true) {
        for (var i = 0; i <= rom.length; i++) {
            if (rom[i + 1] == null || rom[i] == rom[i + 1]) {
                switch (rom[i]) {
                    case 'I':
                        result += 1;
                        break;
                    case 'V':
                        result += 5;
                        break;
                    case 'X':
                        result += 10;
                        break;
                    case 'L':
                        result += 50;
                        break;
                    case 'C':
                        result += 100;
                        break;
                    case 'D':
                        result += 500;
                        break;
                    case 'M':
                        result += 1000;
                        break;
                }
            } else {
                if (rom[i] != rom[i + 1]) {
                    if (rom[i] == 'I') {
                        result -= 1;
                    } else if (rom[i] == 'V' && rom[i + 1] == 'I') {
                        result += 5;
                    } else if (rom[i] == 'X' && rom[i + 1] == 'I' || rom[i] == 'X' && rom[i + 1] == 'V') {
                        result += 10;
                    } else if (rom[i] == 'X' && rom[i + 1] == 'L' || rom[i] == 'X' && rom[i + 1] == 'C' || rom[i] == 'X' && rom[i + 1] == 'D' ||
                        rom[i] == 'X' && rom[i + 1] == 'M') {
                        result -= 10;
                    } else if (rom[i] == 'L' && rom[i + 1] == 'I' || rom[i] == 'L' && rom[i + 1] == 'V' || rom[i] == 'L' && rom[i + 1] == 'X') {
                        result += 50;
                    } else if (rom[i] == 'C' && rom[i + 1] == 'I' || rom[i] == 'C' && rom[i + 1] == 'V' || rom[i] == 'C' && rom[i + 1] == 'X' ||
                        rom[i] == 'C' && rom[i + 1] == 'L') {
                        result += 100;
                    } else if (rom[i] == 'C' && rom[i + 1] == 'D' || rom[i] == 'C' && rom[i + 1] == 'M') {
                        result -= 100;
                    } else if (rom[i] == 'D' && rom[i + 1] == 'I' || rom[i] == 'D' && rom[i + 1] == 'V' || rom[i] == 'D' && rom[i + 1] == 'X' ||
                        rom[i] == 'D' && rom[i + 1] == 'L' || rom[i] == 'D' && rom[i + 1] == 'C') {
                        result += 500;
                    } else if (rom[i] == 'D' && rom[i + 1] == 'M') {
                        result -= 500;
                    } else if (rom[i] == 'M' && rom[i + 1] == 'I' || rom[i] == 'M' && rom[i + 1] == 'V' || rom[i] == 'M' && rom[i + 1] == 'X' ||
                        rom[i] == 'M' && rom[i + 1] == 'L' || rom[i] == 'M' && rom[i + 1] == 'C' || rom[i] == 'M' && rom[i + 1] == 'D') {
                        result += 1000;
                    }
                }
            }
            aux = true;

        }
    }

    console.log(result);
}

function llamada() {
    for (var i = 1; i <= 3000; i++) {
        console.log(dec2rom(i) + "-> " + i);
        //console.log("roman2decimal('" + dec2rom(i) + "');");
    }
}

llamada();

//roman2decimal('I');