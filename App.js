var leitzins = document.getElementById("leitzins");
var wertpapiere = document.getElementById("wertpapiere");
var inflation = document.getElementById("inflation");
var leitzinsLabel = document.getElementById("leitzinsLabel");
var wertpapiereLabel = document.getElementById("wertpapiereLabel");
var inflationLabel = document.getElementById("inflationLabel");

var xAxis = ["M0", "M3"];
var yAxis = [35, 65];

var leitzinsChange = 0;
var wertpapiereChange = 0;
var inflationChange = 0;

leitzins.oninput = function() {
    leitzinsLabel.innerHTML = this.value + "%";
    leitzinsChange = 18 * (this.value / 10)
    update()
}
wertpapiere.oninput = function() {
    wertpapiereLabel.innerHTML = this.value + ".-";
    wertpapiereChange = 7 * (this.value / 100000000000)
    update()

}
inflation.oninput = function() {
    inflationLabel.innerHTML = this.value + "%";
    var divisor = 100;
    if (this.value < 0){
        divisor = 20;
    }
    inflationChange = 10 * (this.value / divisor)
    update()
}

var colors = ["#55BB55", "#5555BB"];

update()

function update(){
    console.log(leitzinsChange, wertpapiereChange, inflationChange)
    yAxis[0] = 35 + leitzinsChange + wertpapiereChange + inflationChange
    yAxis[1] = 65 - leitzinsChange - wertpapiereChange - inflationChange
    new Chart("geldmengenChart", {
        type: "bar",
        data: {
            labels: xAxis,
            datasets: [{
                backgroundColor: colors,
                data: yAxis, 
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
              display: false
            }
          }
      });
}