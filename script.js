

function arrayNumber(){
    var largest=0;
    var number=0;
   let array=[100,200,300,400,500];
    for(i=0;i<array.length;i++){
    number=array[i];
    largest=Math.max(largest,number); 
    }
    //console.log(Math.max(...array))
  document.getElementById("largestNumber").append(largest)


}