
let count=0;
function increment()
{
     count=count+1;
     let count1=document.getElementById("h2").innerText=count;
     console.log(count1,"People enterd in the train");
}

function decrement()
{
     count=count-1;
     let count1=document.getElementById("h2").innerText=count;
     console.log(count1,"People enterd in the train");
}


function save()
{
   console.log(count);
}