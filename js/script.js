// document.getElementById('player-body').addEventListener('click', function(event){
//     let text = event.target.parentNode.children[0].innerText;
//     console.log(text);
// })

let players = document.getElementsByClassName('btn-player');

for (const player of players) {
    player.addEventListener('click', function(event){
        let text = event.target.parentNode.children[0].innerText;
        let listAll = document.querySelectorAll('#list-body li');

        if(listAll.length <5 ){
            let listBody = document.getElementById('list-body');
            player.setAttribute('disabled', 'true');

         let li = document.createElement('li');
            li.innerText = text;
            listBody.appendChild(li);
        }
        else{
            alert("You cant choice more then 5 players");
        }
    })
}

// _______________________________________



function inputValue(inptId){
    let inptValue = document.getElementById(inptId);
    let inptValueString = inptValue.value;
    let inptNumber = parseFloat(inptValueString);

    inptValue.value = '';
    if(isNaN(inptNumber)){
        alert("Enter valid number amount");
        return inptNumber;
    }
    else
    {
        return inptNumber;
    }

}



document.getElementById('btn-calculate').addEventListener('click',function(){

    let playerCost = inputValue('amount-inpt');
    let list = document.querySelectorAll('#list-body li');
    let PlayerExpenses = playerCost * list.length;

    let player_expenses = document.getElementById('player-expenses');
    player_expenses.innerText = PlayerExpenses;
    
})


document.getElementById('btn-total').addEventListener('click', function(){
    
    let player_expenses = document.getElementById('player-expenses');
    let player_expensesString = player_expenses.innerText;
    let player_expensesValue = parseFloat(player_expensesString);


    let managerCost = inputValue('manager-inpt');
    let coachCost = inputValue('coach-inpt');

    let totalCost = (player_expensesValue + managerCost + coachCost);

    let total = document.getElementById('total-cost');
    total.innerText = totalCost;

})

