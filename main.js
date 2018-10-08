document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#u1x').addEventListener('input', u1x);
    document.querySelector('#i1x').addEventListener('input', i1x);

    document.querySelector('#u2x').addEventListener('input', u2x);
    document.querySelector('#i2x').addEventListener('input', i2x);

    document.querySelector('#u1k').addEventListener('input', u1k);
    document.querySelector('#i1k').addEventListener('input', i1k);

    document.querySelector('#u2k').addEventListener('input', u2k);
    document.querySelector('#i2k').addEventListener('input', i2k);

    document.querySelector('#cos1xx').addEventListener('input', cos1xx);
    document.querySelector('#cos1kz').addEventListener('input', cos1kz);

    document.querySelector('#cos2xx').addEventListener('input', cos2xx);
    document.querySelector('#cos2kz').addEventListener('input', cos2kz);

    document.getElementById("change1xx").addEventListener("click", change1xx, false);
    document.getElementById("change1kz").addEventListener("click", change1kz, false);
    document.getElementById("change2xx").addEventListener("click", change2xx, false);
    document.getElementById("change2kz").addEventListener("click", change2kz, false);

});

var u1x_value = 0;
var i1x_value = 0;
var u2x_value = 0;
var i2x_value = 0;
var u1k_value = 0;
var i1k_value = 0;
var u2k_value = 0;
var i2k_value = 0;

var cos1xx_value = 0;
var cos1kz_value = 0;
var cos2xx_value = 0;
var cos2kz_value = 0;
var phi1xx_value = 0;
var phi1kz_value = 0;
var phi2xx_value = 0;
var phi2kz_value = 0;

var z1x = 0;
var z1k = 0;
var z2x = 0;
var z2k = 0;
var z = 0;

var a11 = 0;
var a12 = 0;
var a21 = 0;
var a22 = 0;

function u1x() {
    u1x_value = this.value;
    update();
}

function i1x() {
    i1x_value = this.value;
    update();
}

function u2x() {
    u2x_value = this.value;
    update();
}

function i2x() {
    i2x_value = this.value;
    update();
}

function u1k() {
    u1k_value = this.value;
    update();
}

function i1k() {
    i1k_value = this.value;
    update();
}

function u2k() {
    u2k_value = this.value;
    update();
}

function i2k() {
    i2k_value = this.value;
    update();
}

function cos1xx() {
    cos1xx_value = this.value;
    phi1xx_value = degrees(math.acos(cos1xx_value));
    update();
}

function cos1kz() {
    cos1kz_value = this.value;
    phi1kz_value = degrees(math.acos(cos1kz_value));

    update();
}

function cos2xx() {
    cos2xx_value = this.value;
    phi2xx_value = degrees(math.acos(cos2xx_value));
    update();
}

function cos2kz() {
    cos2kz_value = this.value;
    phi2kz_value = degrees(math.acos(cos2kz_value));
    update();
}

function change1xx() {
    phi1xx_value = getNegativeDeg(phi1xx_value);
    update();
}

function change1kz() {
    phi1kz_value = getNegativeDeg(phi1kz_value);
    update();
}

function change2xx() {
    phi2xx_value = getNegativeDeg(phi2xx_value);
    update();
}

function change2kz() {
    phi2kz_value = getNegativeDeg(phi2kz_value);
    update();
}

function getNegativeDeg(deg) {
    return (-1) * deg;
}

function update() {
    updatePhis();

    calcZs();
    showZs();
}

degrees = function (radians) {
    var fl = parseFloat(radians);
    var deg = fl * 180 / Math.PI;
    return math.round(deg, 5)
};

radians = function (degrees) {
    return degrees * Math.PI / 180;
};

basicFormFromPolar = function (module, degrees) {
    return math.type.Complex.fromPolar(module, radians(degrees))
}

round = function (n, length = 5) {
    return math.round(n, length)
}

function updatePhis() {
    var ending = "°";
    document.getElementById("phi1xx").innerHTML = round(phi1xx_value) + ending;
    document.getElementById("phi1kz").innerHTML = round(phi1kz_value) + ending;
    document.getElementById("phi2xx").innerHTML = round(phi2xx_value) + ending;
    document.getElementById("phi2kz").innerHTML = round(phi2kz_value) + ending;
}

function calcZs() {
    z1x = basicFormFromPolar(u1x_value / i1x_value, phi1xx_value);
    z1k = basicFormFromPolar(u1k_value / i1k_value, phi1kz_value);
    z2x = basicFormFromPolar(u2x_value / i2x_value, phi2xx_value);
    z2k = basicFormFromPolar(u2k_value / i2k_value, phi2kz_value);
    z = math.subtract(z1x, z1k);
    z = math.multiply(z2x, z);
    z = math.sqrt(z);

    a11 = math.divide(z1x, z);
    a12 = math.divide(math.multiply(z1k, z2x), z);
    a21 = math.divide(1, z);
    a22 = math.divide(z2x, z);

    zt1 = math.divide(math.subtract(a11, 1), a21);
    zt2 = math.divide(math.subtract(a22, 1), a21);
    zt3 = math.divide(1, a21);
    zp4 = a12;
    zp5 = math.divide(a12, math.subtract(a22, 1));
    zp6 = math.divide(a12, math.subtract(a11, 1));
    z1s = math.sqrt(math.multiply(z1x, z1k));
    z2s = math.sqrt(math.multiply(z2x, z2k));
}

function showZs() {
    document.getElementById("z1x").innerHTML = round(z1x);
    document.getElementById("z1k").innerHTML = round(z1k);
    document.getElementById("z2x").innerHTML = round(z2x);
    document.getElementById("z2k").innerHTML = round(z2k);
    document.getElementById("z").innerHTML = round(z);
    document.getElementById("a11").innerHTML = round(a11);
    document.getElementById("a12").innerHTML = round(a12);
    document.getElementById("a21").innerHTML = round(a21);
    document.getElementById("a22").innerHTML = round(a22);
    document.getElementById("zt1").innerHTML = round(zt1);
    document.getElementById("zt2").innerHTML = round(zt2);
    document.getElementById("zt3").innerHTML = round(zt3);
    document.getElementById("zp4").innerHTML = round(zp4);
    document.getElementById("zp5").innerHTML = round(zp5);
    document.getElementById("zp6").innerHTML = round(zp6);
    document.getElementById("z1s").innerHTML = round(z1s);
    document.getElementById("z2s").innerHTML = round(z2s);
}