def twoNumberSum(array, targetSum):
    cache = {}
    for item in array:
        val = targetSum - item
        print(item)
        if (!!cache[val]):
            return [val, item]
        else:
            cache[item] = True
    return []


twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)


def isValidSubsequence(array, sequence):
    # Write your code here.
	current_element_index = 0
	current_element = sequence[current_element_index]

	print("x- {0}".format(current_element))

	for x in range(len(array)):
		print("x- {0}".format(current_element))
		if((current_element == array[x]) and (current_element_index < len(sequence)){
			current_element_index += 1
		}
	if(current_element_index == len(sequence)):
		return True
	else:
		return False
