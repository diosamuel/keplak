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
    	image.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbobo.grid.id%2Fread%2F081940948%2Fsering-dijadikan-meme-woman-yelling-at-a-cat-kucing-bernama-smudge-ini-punya-jutaan-followers%3Fpage%3Dall&psig=AOvVaw3-5AO0Br5UznQLEXA5uq50&ust=1664873718364000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjz6YXYw_oCFQAAAAAdAAAAABAE";
  	}
  }
}

function play() {
  audio.play();
}
