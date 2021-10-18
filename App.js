let image = document.querySelector('#image')
let hand = document.querySelector('#hand')
let booster = document.querySelector('#boost')
let title = document.querySelector('#title > span')
let subtitle = document.querySelector('#subtitle')
let status = document.querySelector('#status > bold')
let i=0

let motivate = [
	'Tips : sewa lapangan untuk bertengkar',
	'Wow tampaknya kamu kesel sekali sama dia',
	'Saya ramal kamu punya dendam 7 turunan',
	'apakah utang beliau belum dibayar?'
]
let stats = [
	{title:'sehat sejahtera',max:0},
	{title:'dendam',max:100},
	{title:'bonyok',max:250},
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

	let boosted = setInterval(x => {
		play()
		hand.style.display = "none"
		setTimeout(x=>hand.style.display = "block",0)
		title.innerHTML = ++i
	},100)

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
    image.src = "https://pbs.twimg.com/media/E55nN63VIAIbwnB.jpg";
  }
}

function play() {
  let audio = document.getElementById("audio");
  audio.play();
}