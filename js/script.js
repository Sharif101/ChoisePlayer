// document.getElementById('player-body').addEventListener('click', function(event){
//     let text = event.target.parentNode.children[0].innerText;
//     console.log(text);
// })

let players = document.getElementsByClassName('btn-player');

for (const player of players) {
    player.addEventListener('click', function(event){
        let text = event.target.parentNode.children[0].innerText;
        console.log(text);
    })
}
