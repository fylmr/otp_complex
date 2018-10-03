document.addEventListener('DOMContentLoaded', function() {

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

function u1x() {
    u1x_value = math.complex(this.value);
    console.log(math.add(u1x_value, 1));
    update();
}

function i1x() {
    i1x_value = math.complex(this.value);
    update();
}

function u2x() {
    u2x_value = math.complex(this.value);
    update();
}

function i2x() {
    i2x_value = math.complex(this.value);
    update();
}

function u1k() {
    u1k_value = math.complex(this.value);
    update();
}

function i1k() {
    i1k_value = math.complex(this.value);
    update();
}

function u2k() {
    u2k_value = math.complex(this.value);
    update();
}

function i2k() {
    i2k_value = math.complex(this.value);
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
    phi1xx_value = 180 - phi1xx_value;
    update();
}

function change1kz() {
    update();
}

function change2xx() {
    update();
}

function change2kz() {
    update();
}

function update() {
    updatePhis();

}

degrees = function(radians) {
    var fl = parseFloat(radians);
    var deg = fl * 180 / Math.PI;
    return math.round(deg, 5)
};


function updatePhis() {
    document.getElementById("phi1xx").innerHTML = phi1xx_value + " град";
    document.getElementById("phi1kz").innerHTML = phi1kz_value + " град";
    document.getElementById("phi2xx").innerHTML = phi2xx_value + " град";
    document.getElementById("phi2kz").innerHTML = phi2kz_value + " град";
}