list = [5,6,2,3,0,-3,-4,5,30,45,600,12,7,3,8,5,1,8,3,6,44,5,99]
def bubbleSort(data):
	for i in range(len(data)):
		for i in range(len(data) - 1 - i):
			if data[i + 1] < data[i]:
				temp = data[i + 1]
				data[i + 1] = data[i]
				data[i] = temp

result = bubbleSort(list)
print(list)