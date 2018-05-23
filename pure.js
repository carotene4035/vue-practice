var inputA = document.getElementById('a');
var inputB = document.getElementById('b');

var sumNode = document.getElementById('sum');
var jouNode = document.getElementById('jou');


inputA.addEventListener('input', function() {
    render();
});

inputB.addEventListener('input', function() {
    render();
});

var render = function() {
    var a = parseInt(inputA.value);
    var b = parseInt(inputB.value);

    var sum = a + b;
    var jou = a * a;

    sumNode.innerText = sum;
    jouNode.innerText = jou;
}