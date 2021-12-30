let image = document.querySelector('#image')
let hand = document.querySelector('#hand')
let booster = document.querySelector('#boost')
let title = document.querySelector('#title > span')
let subtitle = document.querySelector('#subtitle')
let status = document.querySelector('#status > bold')
let audio = new Audio('./assets/keplak.mp3');
let i=0

let motivate = [
	'Wow tampaknya kamu kesel sekali sama dia',
	'Saya ramal kamu punya dendam 7 turunan',
	'apakah utang beliau belum dibayar?',
	'tonjokin bang'
]
let stats = [
	{title:'masih sehat',max:0},
	{title:'dendam',max:50},
	{title:'bonyok',max:100},
	{title:'kritis',max:350},
	{title:'ugd',max:500},
	{title:'covid',max:600},
	{title:'meninggal',max:800},
	{title:'reikarnasi',max:2000}
]
let keplak = {
	minboost:50,
	timer:2
}
image.addEventListener('click', event => {
	play()
	hand.style.display = "block";
	setTimeout(x => hand.style.display = "none",100)
	title.innerHTML = ++i
	if(i >= keplak.minboost){
		booster.style.display = "block"
		keplak.minboost = i+50
	}
	let rawStats = stats.filter(x=>x.max <= i)
	let statsNow = rawStats[rawStats.length-1].title
	status.innerHTML = statsNow.toUpperCase()
})
function boost(){
	subtitle.style.display = "block"
	subtitle.innerHTML = motivate[Math.floor(Math.random()*motivate.length)].toUpperCase()
	booster.style.display = "none"
	let boosted = setInterval(x => {
		play()
		hand.style.display = "block"
		setTimeout(x=>hand.style.display = "none",100)
		title.innerHTML = ++i
	},200)

	let range = 0
	let timer = setInterval(x => {
		range++
		if(range >= keplak.timer){
			clearInterval(boosted)
			clearInterval(timer)
			hand.style.display = "none"
			booster.style.display = "none"
			subtitle.style.display = "none"
		}
	},1000)

}

function readImage() {
  let file    = document.querySelector('input[type=file]').files[0];
  let reader  = new FileReader();

  reader.onloadend = function () {
    image.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
  	if(!image.src){
    	image.src = "https://scontent.fcgk32-1.fna.fbcdn.net/v/t39.30808-6/cp0/e15/q65/p296x100/263682247_623523175496052_1357804224065394321_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=1480c5&_nc_ohc=vJJHFDmNRKkAX_uFbIt&_nc_ht=scontent.fcgk32-1.fna&oh=00_AT84r5dH875Z7vvAee4DUdfGOA-XpYAIdEpugRZR5zzfwA&oe=61D17A34";
  	}
  }
}

function play() {
  audio.play();
}
