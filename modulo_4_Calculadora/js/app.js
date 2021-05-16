
function sumNumbers(a, b) {
    var result1 = parseFloat(a) + parseFloat(b);
    console.log(result1);
    document.getElementById("result").value = result1;
    return result1;
};

function subNumbers(a, b) {
    var result2 = parseFloat(a) - parseFloat(b);
    console.log(result2);
    document.getElementById("result").value = result2; 
    return result2;

};

function product(a,b) {
    var result3 = parseFloat (a) * parseFloat (b);
    console.log(result3);
    document.getElementById("result").value = result3;
    return result3;
};

function division(a,b) {
    var result4 = parseFloat(a) / parseFloat (b);
    console.log(result4);
    document.getElementById("result").value = result4; 
    return result4;
};

// var showresultSum = () => result1;
// var showresultSub = () => result2;
// var showresultProduct = () => result3;
// var showresultDivision = () => result4;

// function ifsumNumber () {
//     if (isNaN (parseFloat(a)) || isNaN(parseFloat(b))) {
//         document.getElementById("result1").innerText = "Error, debes incluir dos números";
//         console.log("primera");
//     }else{
//         showresultSum();
//         console.log("segunda");
//     }
// };
