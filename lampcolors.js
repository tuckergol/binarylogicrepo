
for (let i = 0; i  < Array.from(document.getElementsByClassName("ls_r")).length; i ++) {
    const element = document.getElementsByClassName("ls_r")[i];
    element.addEventListener("click", function() {
        if(element.innerHTML == "0") {
            element.innerHTML = "1";
            rBin[i] = 1;
        } else {
            element.innerHTML = "0";
            rBin[i] = 0;
        }
    })
}

var rBin = [];

var rBits = Array.from(document.getElementsByClassName("ls_r"));
rBits.forEach(e => {
    rBin.push(0);
});

function uRedHex() {
    var redHex = document.getElementById("rHex")
    redHex.innerHTML = parseInt(rBin.join(''), 2).toString(16).toUpperCase();    
}


for (let i = 0; i  < Array.from(document.getElementsByClassName("ls_g")).length; i ++) {
    const element = document.getElementsByClassName("ls_g")[i];
    element.addEventListener("click", function() {
        if(element.innerHTML == "0") {
            element.innerHTML = "1";
            gBin[i] = 1;
        } else {
            element.innerHTML = "0";
            gBin[i] = 0;
        }
    })
}

var gBin = [];

var gBits = Array.from(document.getElementsByClassName("ls_g"));
gBits.forEach(e => {
    gBin.push(0);
});

function uGreenHex() {
    var greenHex = document.getElementById("gHex")
    greenHex.innerHTML = parseInt(gBin.join(''), 2).toString(16).toUpperCase();    
}

for (let i = 0; i  < Array.from(document.getElementsByClassName("ls_b")).length; i ++) {
    const element = document.getElementsByClassName("ls_b")[i];
    element.addEventListener("click", function() {
        if(element.innerHTML == "0") {
            element.innerHTML = "1";
            bBin[i] = 1;
        } else {
            element.innerHTML = "0";
            bBin[i] = 0;
        }
    })
}

var bBin = [];

var bBits = Array.from(document.getElementsByClassName("ls_b"));
bBits.forEach(e => {
    bBin.push(0);
});

function uBlueHex() {
    var blueHex = document.getElementById("bHex")
    blueHex.innerHTML = parseInt(bBin.join(''), 2).toString(16).toUpperCase();    
}

setInterval(() => {
    uGreenHex()
    uRedHex()
    uBlueHex()
}, 50);

// // // // // // // // // // //

var xRGB = {
    r: parseInt(rBin.join(''), 2),
    g: parseInt(gBin.join(''), 2),
    b: parseInt(bBin.join(''), 2)
}

function uRGB () {
    xRGB = {
        r: parseInt(rBin.join(''), 2),
        g: parseInt(gBin.join(''), 2),
        b: parseInt(bBin.join(''), 2)
    }
    return xRGB    
}

var c_pv = document.getElementById("cPreview")

setInterval(() => {
    c_pv.style.backgroundColor = `rgb(${uRGB().r}, ${uRGB().g}, ${uRGB().b})`
}, 50)
