let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z']
let vowels = ['a', 'e', 'i', 'o', 'u' ]

let formattedWord = []

function audioPlay(idAudio) {
	let audio = new Audio('assets/audio/' + idAudio + '-apolo.mp3')

	audio.play()

	formattingWord(idAudio)

	console.log('idAudio ' + idAudio)
}

function formattingWord(id) {
	formattedWord.push(id)
	let reducedArray = (accumulator, currentValue) => accumulator + currentValue
	let finalWord = formattedWord.reduce(reducedArray)
	console.log('finalWord ' + finalWord)
	console.log('formattedWord ' + formattedWord)


	words.forEach( function(key) {
		if(key == finalWord) {
			console.log('workd')
		} else {
			// console.log('key ' + key)
			// console.log('reducedArray ' + reducedArray)
			// console.log('key type ' + typeof key)
			// console.log('key reducedArray ' + typeof reducedArray)
		}
	})
}

function htmlRender() {

}
