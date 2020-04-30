let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z']
let vowels = ['a', 'e', 'i', 'o', 'u' ]

function audioPlay(idAudio) {
	let audio = new Audio('assets/audio/' + idAudio + '-apolo.mp3')
	console.log('idAudio ' + idAudio)
	audio.play()
}

function htmlRender() {

}
