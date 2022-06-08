function findMaxPair(arr)
{
    arr.sort((a,b) => (a-b));

    let ans =0;
    for(let i= 0; i<arr.length; i= i+2)
    {
        ans += arr[i];
    }

    return  ans;
};

arr = [5, 4, 2, 1, 3, 6];
console.log(findMaxPair(arr));



//TC - O(nlogn)
//SC - O(1)