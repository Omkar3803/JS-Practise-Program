function countSort(arr)
{
    const max = Math.max(...arr);

    let freq = new Array(max + 1).fill(0);

    for(let i=0; i<arr.length; i++)
    {
        freq[arr[i]]++;
    }

    for(let i =1; i<freq.length; i++)
    {
        freq[i] += freq[i -1];
    }

    let res = new Array(arr.length).fill(0);

    for(let i=arr.length-1; i>=0; i--)
    {
        res[freq[arr[i]]-1] = arr[i];
        freq[arr[i]]--;
    }
    return  res;

};

let arr = [4, 2, 3, 8, 2, 3, 1];
