let formattedWord = []
let reducedArray
let finalWord

// let timeout = null                                      

// document.addEventListener('click', function(e) {                                      
// 	clearTimeout(timeout)    
// 	timeout = setTimeout(function() {                                      
// 		formattedWord = []                                      
// 	}, 10000)                                      
// })   

function clearFormattedWord() {
	formattedWord = [];
	renderHeader(null)
}

function audioPlay(idAudio) {
	let audio = new Audio('assets/audio/' + idAudio + '.mp3')
	audio.play()
	formattingWord(idAudio)
	renderHeader(idAudio)
	console.log('idAudio ' + idAudio)
}

function searchFormattedWord() {
	axios.get('https://pixabay.com/api/?key=16309043-af699687042223e3c6eb97108&q=' + finalWord + '&image_type=photo&pretty=true&safesearch=true&image_type=photo&lang=pt')
		.then(function (response) {
			console.log(response.data.hits[0].webformatURL)
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

function formattingWord(id) {
	formattedWord.push(id)
	reducedArray = (accumulator, currentValue) => accumulator + currentValue
	finalWord = formattedWord.reduce(reducedArray)
	console.log('finalWord ' + finalWord)
	console.log('formattedWord ' + formattedWord)

	// words.forEach( function(key) {
	// 	if(key == finalWord) {

	// 		axios.get('https://pixabay.com/api/?key=16309043-af699687042223e3c6eb97108&q=' + finalWord + '&image_type=photo&pretty=true&safesearch=true&image_type=photo&lang=pt')
	// 			.then(function (response) {
	// 				console.log(response.data.hits[0].webformatURL)
	// 				finalImg = response.data.hits[0].webformatURL
	// 			})
	// 			.then(function (error) {
	// 				console.log(error)
	// 			})
	// 			.then(function () {
	// 				Swal.fire({
	// 					imageUrl: finalImg,
	// 					title: 'A palavra é ',
	// 					text: finalWord,
	// 					timer: 4000
	// 				})
	// 			})
	// 		formattedWord = []
	// 	}
	// })
}

window.onload = function() {
	renderHtml()
}

