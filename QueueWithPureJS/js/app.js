

var queue = {

	queueElements: [],

	addElement: function(){

		var input = document.getElementById('elementInput');
		var queueHolder = document.getElementById('queueHolder');
		var element = input.value;

		if (element >= 0 && element <= 100){

			if (element){

			var node = document.createElement('div');
			node.className = 'queue';
			node.innerHTML = element;

			queueHolder.append(node);
			this.queueElements.push(element);

			input.value = '';
			this.setLengthOnSite();

			} else {

				alert('Please insert an element.');

			}

		} else {

			alert('Numbers in the queue between 1 and 100.');
			document.getElementById('elementInput').value = '';

		}		

	},

	removeElement: function(){

		if (this.getLength() > 0){

			this.queueElements.pop();
			var queueHolder = document.getElementById('queueHolder');
			queueHolder.removeChild(queueHolder.firstChild);
			this.setLengthOnSite();

		}

	},

	clearQueue: function(){

		this.queueElements = [];
		var queueHolder = document.getElementById('queueHolder');
		while (queueHolder.firstChild){
			queueHolder.removeChild(queueHolder.firstChild);
		}
		this.setLengthOnSite();

	},

	getLength: function(){

		return this.queueElements.length;

	},

	setLengthOnSite: function(sizeOfQueue){

		var lengthHolder = document.getElementsByTagName('span')[0];
		lengthHolder.innerHTML = this.getLength();

	}

}