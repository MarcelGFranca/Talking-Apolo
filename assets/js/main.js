let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z']
let vowels = ['a', 'e', 'i', 'o', 'u' ]

let formattedWord = []

  // let textInput = document.querySelector('.sound-button')                                      
  let timeout = null                                      
                                     
  document.addEventListener('click', function(e) {                                      
    clearTimeout(timeout)    
    timeout = setTimeout(function() {                                      
      formattedWord = []                                      
    }, 10000)                                      
  })   

function audioPlay(idAudio) {
	let audio = new Audio('assets/audio/' + idAudio + '.mp3')

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
			Swal.fire({
				imageUrl: 'assets/images/' + finalWord + '.jpg',
				imageWidth: 500,
				imageHeight: 500,
				title: 'A palavra é ',
				timer: 4000
			})
			formattedWord = []
		}
	})
}

function htmlRender() {

}
