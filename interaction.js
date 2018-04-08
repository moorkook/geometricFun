document.querySelector('body').addEventListener('click', function(el) {
  let clickedScale = el.target;
  for (var i = 0; i < scalesArray.length; i++) {
    if(scalesArray[i].node == clickedScale) {
      gradientSteps[1].animate(10000, '>', 0).update({color: '#821211'}).loop(1000, true);
      gradientSteps[0].animate(10000, '>', 0).update({color: '#825C58'}).loop(1000, true);
    }
  }
})
