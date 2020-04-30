let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z']
let vowels = ['a', 'e', 'i', 'o', 'u' ]

let formattedWord = ''

function audioPlay(idAudio) {
	let audio = new Audio('assets/audio/' + idAudio + '-apolo.mp3')
	formattedWord += idAudio
	audio.play()

	console.log('idAudio ' + idAudio)
	console.log('formattedWord ' + formattedWord)
}

function htmlRender() {

}
