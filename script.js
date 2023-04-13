let arr=document.getElementById("band");
// console.log(arr);
let res=arr.getElementsByTagName("li")
let result=[];
for(let i=0;i<res.length;i++){
    result.push(res[i].innerText);
}
result.sort()
console.log(result);