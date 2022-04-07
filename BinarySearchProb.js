
function findClosest(arr, target)
{
	let n = arr.length;

	
	if (target <= arr[0])
    {
		return arr[0];
    }

	if (target >= arr[n - 1])
    {
		return arr[n - 1];

    }
	let i = 0, j = n-1, mid = 0;
	while (i+1 < j)
	{
		mid = parseInt((i + j) / 2);

		if (arr[mid] == target)
			return arr[mid];

		
		if (target < arr[mid])
		{
	
			
			if (mid > 0 && target > arr[mid - 1])
				return getClosest(arr[mid - 1],
								arr[mid], target);
			
			
			j = mid;			
		}

		
		else
		{
			if (mid < n - 1 && target < arr[mid + 1])
				return getClosest(arr[mid],
								arr[mid + 1],
								target);			
			i = mid + 1; 
		}
	}

	return arr[mid];
}


function getClosest(val1, val2, target)
{
	if (target - val1 >= val2 - target)
		return val2;	
	else
		return val1;	
}


let arr = [ 1, 2,  5, 6, 6, 8, 9 ];
let target = 11;

console.log(findClosest(arr, target));




