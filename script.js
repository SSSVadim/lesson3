Array.prototype.myFilter = function(callback, contextArg){

	if (this == null){
		throw new Error ('Error, context null or undefined')
	}

	if (typeof(callback) !== 'function'){
		throw new Error ('Callback is not a function')
	}

	let result = [];
	let context = globalThis;

	if (contextArg !== undefined){
		context = contextArg;
	}

	for (let i = 0; i < this.length; i++){
		if (i in this){			
			if (callback.call(context, this[i], i, this)){
				result.push(this[i]);
			}						
		}
	}
	return result;
}

function createDebounceFunction(callback, delay) {	
	let idTimeout;
	return function() {		
		clearTimeout(idTimeout);
		idTimeout = setTimeout(callback, delay);
	}
}

