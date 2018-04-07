// Drawing the container of the pavage
var draw = SVG('scale').size('100vw', '100vh');

// Only if someone fucks up and need the original Scale path
var originalScale = "M 0 50 q 20 -20 30 -50 q 10 30 30 50 q -10 30 -30 50 q -20 -10 -30 -50";

// Get the number of line in relation with the size of the screen
const numberOfLine = parseInt(screen.height / 50) + 2;
// Vertical position for the scale, always starting at 0
let verStartPos = 0;

// Drawing of the gradient, who will be put inside each scale
var gradient = draw.gradient('linear', function(stop) {
  stop.at(0, '#088259')
  stop.at(1, '#094F4B')
}).from(1, 1).to(1, 0);

// The object that hold all the rows and scales
let rows = {};

// Help to alternate between odd and even
function isOdd(num) { return num % 2;}


// On choisit le nombre de ligne
// Le code se repetera autant de fois que de lignes
// sur odd, on a 16 scale
for (var i = 1; i <= numberOfLine; i++) {
  rows[i] = {};
  // If row is an odd one
  if(isOdd(i) == 1) {
    console.log(i);
    const scaleNumber = parseInt(screen.width / 60) + 1;
    const startHor = -30;
    let currentHor = startHor;
    for (var j = 1; j <= scaleNumber; j++) {
      rows[i][j] = draw.path('M ' + currentHor + ' ' + verStartPos + ' q 20 -20 30 -50 q 10 30 30 50 q -10 30 -30 50 q -20 -20 -30 -50')
      rows[i][j].fill(gradient)
      rows[i][j].stroke({ color: '#063836', width: 1, linecap: 'round', linejoin: 'round' });
      currentHor = currentHor + 60;
    }
    verStartPos = verStartPos + 50;
  // Else if the row is even
  } else {
    const scaleNumber = parseInt(screen.width / 60) + 1;
    const startHor = 0;
    let currentHor = startHor;
    for (var j = 1; j <= scaleNumber; j++) {
      rows[i][j] = draw.path('M ' + currentHor + ' ' + verStartPos + ' q 20 -20 30 -50 q 10 30 30 50 q -10 30 -30 50 q -20 -20 -30 -50')
      rows[i][j].fill(gradient)
      rows[i][j].stroke({ color: '#063836', width: 1, linecap: 'round', linejoin: 'round' });
      currentHor = currentHor + 60;
    }
    verStartPos = verStartPos + 50;
  }
}
