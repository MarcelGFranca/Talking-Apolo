/**
 * @file Main js file on program.
 * @author Marcel Garcia França
 * @version 0.2
 */

let formattedWord = []
let reducedArray
let finalWord

function clearFormattedWord() {
	formattedWord = [];
	renderHeader(null)
}

function removeSyllabeFormattedWord() {
	formattedWord.pop()
	renderHeader(null)
	for (const [key, value] of formattedWord) {
		renderHeader( (key + value) )
	}
	reducedArray = (accumulator, currentValue) => accumulator + currentValue
	finalWord = formattedWord.reduce(reducedArray)
}

function addSyllabeFormattedWord(id) {
	formattedWord.push(id)
	reducedArray = (accumulator, currentValue) => accumulator + currentValue
	finalWord = formattedWord.reduce(reducedArray)
}

function audioPlay(idAudio) {
	let audio = new Audio('assets/audio/' + idAudio + '.mp3')
	audio.play()
	addSyllabeFormattedWord(idAudio)
	renderHeader(idAudio)
}

function searchFormattedWord() {
	axios.get('https://pixabay.com/api/?key=16309043-af699687042223e3c6eb97108&q=' + finalWord + '&image_type=photo&pretty=true&safesearch=true&image_type=photo&lang=pt')
		.then(function (response) {
			finalImg = response.data.hits[0].webformatURL

		})
		.then(function (error) {
			console.log(error)
		})
		.then(function () {
			Swal.fire({
				imageUrl: finalImg,
				title: 'A palavra é ',
				text: finalWord,
				timer: 4000
			})
		})
	formattedWord = []
	renderHeader(null)
}



window.onload = function() {
	renderHtml()
}

