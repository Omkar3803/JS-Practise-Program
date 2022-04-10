function bucketSort(arr, numberOfBucket)
{
    let bucket =  new Array(numberOfBucket);

    for(let i =0; i< numberOfBucket; i++)
    {
        bucket[i] = [];
    }

    for(let i=0; i<arr.length; i++)
    {
        let idx = Math.floor(10* arr[i]);
        bucket[idx].push(arr[i]);
    }

    for(let i=0; i< numberOfBucket; i++)
    {
        bucket[i].sort();
    }

    let index = 0;
    for(let i =0; i<bucket.length; i++)
    {
        for(let j=0; j< bucket[i].length; j++)
        {
            arr[index] = bucket[i][j];
            index++;
        }
    }
    return arr;
}