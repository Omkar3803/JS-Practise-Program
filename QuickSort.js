function partiton(arr, low, high)
{
    let pivot = arr[high]; //arr[low]

    let i = (low- 1 );

    for (let j = low;j<high; j++ )
    {
        if (arr[j] < pivot) 
        {
            //swap
            i++
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
    }

    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    return i+1;
}



function sort(arr, low, high)
{
    if(low< high)
    {
        let pi = partiton(arr, low, high);
        sort(arr, low, pi-1);
        sort(arr, pi+1, high);
    }
};

let arr = [10, 7 , 8, 9, 1, 5 ];
sort(arr, 0, arr.length-1);
console.log(arr);