function boatsToSave(people , limit)
{
    //[2, 4, 5, 3, 3]
    //[2, 3, 3 ,4, 5]
    //Weight of the heaviest person <= limit(5)
    people.sort((a,b)=> a-b);

    let i=0;
    let j = people.length-1; //2
    let ans = 0; //4
    //[5], [4], [2,3],[3]

    while(i<=j)
    {
        ans++;
        if(people[i] + people[j] <= limit)
        {
            i++;
        }
         
        j--;
    }

    return  ans;
}

people = [2, 4, 5, 3, 3];
console.log(boatsToSave(people,5));