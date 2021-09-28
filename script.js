let factorsOfNum1 = [];
let factorsOfNum2 = []
let aBoolean = true;

function submitClicked() {
    if (aBoolean === false) {
        alert('You can not click submit twice...reload the page to enter new values!!!')
        location.reload();
    }
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;

    function calculatingFactors() {
        for (i = 1; i < number1; i++) {
            if (number1 % i === 0) {
                factorsOfNum1.push(i);
            }
        }

        for (a = 1; a < number2; a++) {
            if (number2 % a === 0) {
                factorsOfNum2.push(a);
            }
        }
    }
    calculatingFactors();

    factorsOfNum1.push(number1);
    factorsOfNum2.push(number2);

    lengthOfFactors1 = factorsOfNum1.length;
    let variable1 = lengthOfFactors1 - 1;
    lastFactor1 = Number(factorsOfNum1[lengthOfFactors1 - 1]);

    lengthOfFactors2 = factorsOfNum2.length;
    let variable2 = lengthOfFactors2 - 1;
    lastFactor2 = Number(factorsOfNum2[lengthOfFactors2 - 1]);


    let commonFactors = [];

    let dummyFactorOfNum1 = factorsOfNum1.length - 1;


    function forLoops() {

        for (let b = 0; b < (variable1); b++) {
            let dummyFactorOfNum2 = factorsOfNum2.length - 1;
            let checkingFactor1 = Number(factorsOfNum1[dummyFactorOfNum1]);

            for (let c = 0; c < (variable2); c++) {
                let checkingFactor2 = Number(factorsOfNum2[dummyFactorOfNum2]);

                if (checkingFactor1 === checkingFactor2) {
                    commonFactors.push(checkingFactor1);
                    dummyFactorOfNum2--;
                } else {
                    dummyFactorOfNum2--;
                }
            }
            dummyFactorOfNum1--;
        }
    }
    forLoops();

    let HCF = commonFactors[0];

    document.getElementById('HCFlabel').innerText = HCF;
    document.getElementById('factordiv1').innerText = factorsOfNum1;
    document.getElementById('factordiv2').innerText = factorsOfNum2;
    document.getElementById('commonFactordiv').innerText = commonFactors;
    aBoolean = false;
}

let check1 = document.getElementById('checkbox1');
let check2 = document.getElementById('checkbox2');
let check3 = document.getElementById('checkbox3');
let check4 = document.getElementById('checkbox4');

let HCF = document.getElementById('HCFdivision');
let factor1 = document.getElementById('factor1divion');
let factor2 = document.getElementById('factor2divion');
let commonFactors = document.getElementById('commonFactors');

/*
let checkText1 = document.getElementById('checked-text1');
let checkText2 = document.getElementById('checked-text2');
let checkText3 = document.getElementById('checked-text3');
let checkText4 = document.getElementById('checked-text4');
*/

function isChecked() {
    if (check1.checked) {
        HCF.classList.remove('d-none');
    } else {
        HCF.classList.add('d-none');
    }
    if (check2.checked) {
        factor1.classList.remove('d-none');
    } else { factor1.classList.add('d-none'); }
    if (check3.checked) {
        factor2.classList.remove('d-none');
    } else { factor2.classList.add('d-none'); }
    if (check4.checked) {
        commonFactors.classList.remove('d-none');
    } else { commonFactors.classList.add('d-none'); }
}