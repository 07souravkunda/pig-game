var currentScore,globalScore,active,previousDice;
var gamePlay,score;

init();
document.querySelector('.new-btn').addEventListener('click',init);
document.querySelector('.roll-btn').addEventListener('click',function() {
	if(gamePlay===true){
	var dice;
	dice=Math.floor((Math.random()%0.6)*10)+1;
	document.querySelector('.dice').style.display='block';
	document.querySelector('.dice').src='dice-'+dice+'.png';
	if(dice===1 || (dice===6 && previousDice===6))
	{
		previousDice=0;
		nextPlayer();
	}
	else{
		currentScore[active]+=dice;
		previousDice=dice;
	}
	document.getElementById('current-'+active).textContent=currentScore[active];
}
});
document.querySelector('.hold-btn').addEventListener('click',function(){
	if(gamePlay===true){
	globalScore[active]+=currentScore[active];
	document.getElementById('global-'+active).textContent=globalScore[active];
	if(globalScore[active]>=score)
	{
		document.querySelector('.dice').style.display='none';
		document.querySelector('#player-'+active).textContent='WINNER!';
		document.querySelector('.player-'+active+'-panel').classList.add('winner');
		gamePlay=false;
	}
	else
	{
		nextPlayer();
	}
}

});
document.querySelector('.set-btn').addEventListener('click',function(){
	if(gamePlay===true)
		score=prompt('Enter the winning score',100);
});
function nextPlayer() {
	if(active===0)
		active=1;
	else
		active=0;
	currentScore[0]=0;
	currentScore[1]=0;
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display='none';

}
function init(){
	document.querySelector('#player-0').textContent='player 1';
	document.querySelector('#player-1').textContent='player 2';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.getElementById('global-0').textContent='0';
	document.getElementById('global-1').textContent='0';
	document.querySelector('.dice').style.display='none';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	currentScore=[0,0],globalScore=[0,0],active=0,previousDice=0;
	gamePlay=true,score=100;
}