// BubbleSort implemented with Javascript
function bubbleSort(data){	
  for(var i = 0; i < data.length - 1; i++){
    for(var j = i + 1; j < data.length; j++){
      if(data[j] < data[i]){
	var temp = data[j];
	data[j] = data[i];
	data[i] = temp;
      }
    }
  }
  return data;
};

