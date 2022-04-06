function Sum3(arr)
{
    arr.sort((a,b) => a-b);

    for(let i= 0; i<arr.length; i++)
    {
        if(i == 0 || arr[i] != arr[i-1])
        {
            twoSum(arr, i);
        }
    }
};

function twoSum(arr, i)
{
    var seen = new Set();

    for(let j = i+1; j< arr.length; j++)
    {
        let val = -(arr[i] + arr[j]);
        if(seen.has(val))
        {
            console.log(val + "" + arr[i]+ ""+arr[j]);
            while(j + 1 < arr.length && arr[j] == arr[j+1]){
                ++j;
            }
        }
        seen.add(arr[j]);
    }
};
arr = [-1, 0, 1, 2, -1,  4];
Sum3(arr);