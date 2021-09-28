let aBoolean = true;

function submitClicked() {
    if (aBoolean === false) {
        alert('You can not press sumbmit twice...refresh the page to enter new values.')
        location.reload();
    }
    let finalHCF = undefined;

    function HCF(x, y) {
        let r = undefined;
        if (x > y) {
            while (r != 0) {
                r = x % y;
                if (r != 0) {
                    x = y;
                    y = r;
                }
            }
            console.log(y + ' is the HCF');
            finalHCF = y;
        } else if (y > x) {
            while (r != 0) {
                r = y % x;
                if (r != 0) {
                    y = x;
                    x = r;
                }
            }
            console.log(x + ' is the HCF');
            finalHCF = x;
        }

    }

    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;

    HCF(a, b);

    document.getElementById('HCFlabel').innerText = finalHCF;
    aBoolean = false;
}