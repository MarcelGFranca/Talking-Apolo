/**
 * @file Render buttons on html index.
 * @author Marcel Garcia França
 * @version 0.3
 */

let consonants = ['b', 'c', 'd', 'f', 'g', /*'h' */, 'j', /*'k'*/, 'l', 'm', 'n', 'p', 'qu', 'r', 's', 't', 'v', /*'x', 'z'*/]
let vowels = ['a', 'e', 'i', 'o', 'u', 'ão']
let inexistentEncounters = ['yi', 'quu', 'kão', 'wão', 'yão']
let renderDashboard = ''
let renderHeaderHTMLButton = ''

/**
 * @function Rendering the html on index via JavaScript.
 *
 * @param { String } renderDashboard - String with the html code to be rendered.
 */
function renderHtml() {

	renderDashboard += '<div class="card-column">'

	vowels.forEach (function (vowelKey) {
		renderDashboard += renderButton(vowelKey, null)
	})

	renderDashboard += '</div>'

	consonants.forEach (function (consonantKey) {
		renderDashboard += '<div class="card-column">'
		renderButton(null, consonantKey)
			// renderDashboard += renderButton(null, consonantKey)
			vowels.forEach (function (vowelKey) {
			renderDashboard += renderButton(vowelKey, consonantKey)
		})
		renderDashboard += '</div>'
	})
	document.getElementById('project-main').innerHTML = renderDashboard
}

/**
 * @function Render the html of the header of the index.
 * If the value is passed as null, the item is rendered without marking or value.
 */
function renderHeader(id) {
	if (id == null) {
		document.getElementById('project-selected').innerHTML = ''
		renderHeaderHTMLButton = ''
	} else {
		renderHeaderHTMLButton += renderHeaderButton(id)
		document.getElementById('project-selected').innerHTML = renderHeaderHTMLButton
	}
}

/**
 * @function Render an empty button.
 */
function renderEmptyButton() {
	return `<div class="card-button"><a class="sound-button-empty"><span></span></a></div>`
}

/**
 * @function Render buttons.
 *
 * @returns Return a String based if the data entered is an consonant or a vowel.
 */
function renderButton(idVowel, idConsonant) {
	if (idVowel == null) {
		return `<div class="card-button"><a class="sound-button" onclick="audioPlay('${idConsonant}')"><span>${idConsonant}</span></a></div>`
	} else if (idConsonant == null){
		return `<div class="card-button"><a href="#" class="sound-button" onclick="audioPlay('${idVowel}')"><span>${idVowel}</span></a></div>`
	} else if (idConsonant == null && idVowel == null){
		return `<div class="card-button"><a class="sound-button" onclick="audioPlay()"><span>+</span></a></div>`
	}else {
		return `<div class="card-button"><a class="sound-button" onclick="audioPlay('${idConsonant}${idVowel}')"><span>${idConsonant}${idVowel}</span></a></div>`
	}
}

function renderHeaderButton(id) {
	return `<div class="header-selected"><a class="sound-button" onclick="audioPlay('${id}')"><span>${id}</span></a></div>`
}
