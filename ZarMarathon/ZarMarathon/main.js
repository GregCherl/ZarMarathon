const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Граната','Катана '],
    attack: function(){
        console.log(this.name + 'Fight...');
    }
};

function createPlayer(player1, name, life){
    const $root = document.querySelector('.root');

    const $player1 = document.createElement('div');
    $player1.classList.add('player1')

    const $progressbar = document.createElement('div');
    $character.classList.add('character');

    const $life = document.classList('div');
    $life.stryle.width-'100%';
    $life.classList.add('life');

    const $name = document.createElement('div');
    $name.innerText = 'Scorpion';
    $name.classList.add('name');

    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    $img.alt = 'Scorpion';

    $root.appendChild($player1);
    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    $progressbar.appendChild('$life');
    $progressbar.appendChild('$name');
    $character.appendChild($img);
}

createPlayer('plauer1', 'Scorpion', 50);
createPlayer('player2', 'Liukang', 80);