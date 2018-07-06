// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {

	const GridHeight = document.getElementById('inputHeight');
	const GridWdht = document.getElementById('inputWeight');
	const ColorPicker = document.getElementById('colorPicker');
	let Canvas = document.getElementById('pixelCanvas');

	Canvas.innerHTML =''

	for(var i = 0; i < GridHeight.value ;  i++){
		let gTr = document.createElement('tr');
		for(var j = 0; j < GridHeight.value ;  j++){
			let gTd = document.createElement('td');
			gTr.appendChild(gTd)
		}
		Canvas.appendChild(gTr)
	}

	let allTd = document.querySelectorAll('td');
	for(let i = 0; i < allTd.length; i++){
		allTd[i].onmouseover = function() {
			if(this.classList.value == 'active'){
			}else{
				this.style.background = '#ccc'
			}
		}
		allTd[i].onmouseout = function() {
			if(this.classList.value == 'active'){
			}else{
				this.style.background = '#fff'
			}
		}

		allTd[i].onclick = function() {
			this.style.background = ColorPicker.value
			this.classList.add('active')
		}

	}


// Your code goes here!

}

