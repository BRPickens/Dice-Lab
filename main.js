var die = [];

document.addEventListener('DOMContentLoaded', function(){
    // Die Button 
    var diceBtn = document.createElement('button');
    diceBtn.innerHTML = 'Generate Die';
    document.body.appendChild(diceBtn);
    //Roll Button
    var rollBtn = document.createElement('button');
    rollBtn.innerHTML = 'Roll Dice';
    document.body.appendChild(rollBtn);
    //SUM Button
    var sumBtn = document.createElement('button');
    sumBtn.innerHTML = 'Sum';
    document.body.appendChild(sumBtn); 
    //Die Function 
    diceBtn.addEventListener('click', function(){
        var newDie = new Die()
        die.push(newDie)
    })
    rollBtn.addEventListener('click', function(){
        die.forEach(function (d){
            d.roll()
        })
    })
    sumBtn.addEventListener('click', function(){
        var total = 0;

        for (var i = 0; i < die.length; i++) {
            total = total + die[i].value;
        }
        alert('Your sum amount is ' + total)

    })
    function Die (roll, value) {
        this.diceDiv = document.createElement('div')
        this.roll()
        this.diceDiv.className = 'dice';
        document.body.appendChild(this.diceDiv);
    }
    Die.prototype.roll = function () {
        var result = Math.floor(Math.random() * 6 + 1);
        this.value = result;
        this.diceDiv.innerText = result;
    }
    die.addEventListener('click', function(d){
        d.roll()
    })
    die.addEventListener('dblclick', function(remd) {
        remd.remove();
    })
});


