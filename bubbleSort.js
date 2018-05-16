// BubbleSort implemented with Javascript
function bubbleSort(data){	
  for(var i = 0; i < data.length - 1; i++){
    for(var j = 0; j < data.length - 1 - i; j++){
      if(data[j + 1] <= data[j]){
	var temp = data[j];
	data[j] = data[j + 1];
	data[j + 1] = temp;
      }
    }
  }
};

