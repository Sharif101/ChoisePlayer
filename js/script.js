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
            alert("error");
        }
    })
}

