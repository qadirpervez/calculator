

    //http://codepen.io/qadirpervez/pen/EPyKLv
        

(function () {
    var string1 = '',
    string2 = '',
    operator = '';
    memoryClear = function () {
        string1 = '';
        string2 = '';
        operator = '';
        document.getElementById('output').innerHTML = 0;
    };
    divide = function () {
        operator = '/';
    };
    multiply = function () {
        operator = '*';
    };
    add = function () {
        operator = '+';
    };
    minus = function () {
        operator = '-';
    };
    number = function (num) {
        if (!string1 || !operator) {
            string1 = string1 + num;
            if (string1) {
                document.getElementById('output').innerHTML = string1;
            } else {
                document.getElementById('output').innerHTML = 'syntax error';
            }

        } else {

            string2 = string2 + num;
            if (string2) {
                document.getElementById('output').innerHTML = string2;
            } else {
                document.getElementById('output').innerHTML = 'syntax error';
            }

        }
    };
    equals = function () {
        var x = parseFloat(string1),
            y = parseFloat(string2),
            obj = {
                '+': function (a, b) {
                    return a + b;
                },
                '-': function (a, b) {
                    return a - b;
                },
                '*': function (a, b) {
                    return a * b;
                },
                '/': function (a, b) {
                    return a / b;
                }
            },
            ans = obj[operator](x, y);
        if (ans || ans == 0) {
            document.getElementById('output').innerHTML = ans;
        } else {
            document.getElementById('output').innerHTML = 'syntax error';
        }
        string1 = ans;
        string2 = '';
    }
} ());
