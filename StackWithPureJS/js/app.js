

var stack = {

	stackElements: [],

	addElement: function(){

		var input = document.getElementById('elementInput');
		var stackHolder = document.getElementById('stackHolder');
		var element = input.value;

		if (element >= 0 && element <= 100){

			if (element){

			var node = document.createElement('div');
			node.className = 'stack';
			node.innerHTML = element;

			stackHolder.prepend(node);
			this.stackElements.push(element);

			input.value = '';
			this.setLengthOnSite();

			} else {

				alert('Please insert an element.');

			}

		} else {

			alert('Numbers in the stack between 1 and 100.');
			document.getElementById('elementInput').value = '';

		}		

	},

	removeElement: function(){

		if (this.getLength() > 0){

			this.stackElements.pop();
			var stackHolder = document.getElementById('stackHolder');
			stackHolder.removeChild(stackHolder.firstChild);
			this.setLengthOnSite();

		}

	},

	clearStack: function(){

		this.stackElements = [];
		var stackHolder = document.getElementById('stackHolder');
		while (stackHolder.firstChild){
			stackHolder.removeChild(stackHolder.firstChild);
		}
		this.setLengthOnSite();

	},

	getLength: function(){

		return this.stackElements.length;

	},

	setLengthOnSite: function(sizeOfStack){

		var lengthHolder = document.getElementsByTagName('span')[0];
		lengthHolder.innerHTML = this.getLength();

	}

}