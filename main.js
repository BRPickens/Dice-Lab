

document.addEventListener('DOMContentLoaded', function(){
    // Create Button that makes dice 
    var button = document.createElement('Button');
    var buttonText = document.createTextNode('Generate Die');
    button.appendChild(buttonText);
    document.body.appendChild(button);
    // Create Dice
    button.addEventListener('click', function(){
        var diceContainer = document.createElement('div');
        document.body.appendChild(diceContainer);
        diceContainer.className = 'dice';
        // Roll Dice
        dice = {
            value: 6,
            roll: function () {
              var randomNumber = Math.floor(Math.random() * this.value) + 1;
              return randomNumber;
            }
          }
          function printNumber(number) {
            dice.innerHTML = number;
          }
          diceContainer.onclick = function() {
            var result = dice.roll();
            printNumber(result);
            console.log(result)
          };
    });
    var rollButton = document.createElement('button');
    var rollButtonText = document.createTextNode('Roll Dice');
    rollButton.appendChild(rollButtonText);
    document.body.appendChild(rollButton);

});


// var Dice = function (value, roll) {
//     this.value = 6;
//     this.roll = Math.floor(Math.random() * this.sides) + 1;;
//     this.div = document.createElement('div')
//     var h1 = document.createElement('h1');
//     h1.innerHTML = this.roll;
//     var h3 = document.createElement('h3');
//     h3.innerHTML = this.email;
//     this.div.appendChild(h1);
//     this.div.appendChild(h3);
//     document.body.appendChild(this.div);
// }

// var dice = function(value, roll) {
//     this.value = 6
//     this.roll = Math.floor(Math.random() * this.value) + 1; return;
// }