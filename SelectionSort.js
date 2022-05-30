function selectionSort(inputArr)
{
    var i, j , minIdx;

    for(i=0; i<inputArr.length -1; i++)
    {
        minIdx = i; //index of minimum element

        for(j=i+1 ; j< inputArr.length ; j++)
        {
            if(inputArr[j]<inputArr[minIdx])
            {
                minIdx =j;
            }
        }
        //swap
        var temp =inputArr[minIdx];
        inputArr[minIdx] = inputArr[i];
        inputArr[i]= temp;

        console.log(inputArr);
    }
}
const arr = [3, 4, 2, 1, 7];
//console.log(selectionSort(arr));
selectionSort(arr);