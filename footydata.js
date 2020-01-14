$(document).ready(function(){
    
         fetchData()
      
})
function fetchData(){
  const proxyurl = "https://cors-anywhere.herokuapp.com/"; //proxy server
  const url = "https://www.football-data.co.uk/mmz4281/1920/E0.csv"; // url fetching data
  fetch(proxyurl + url) 
  .then(response => response.text())
  .then(item=>{parseData(item)})
 .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}
function parseData(item){
  
 // console.log(item);
  let itemSplit=item.split(/\r\n|\n/);
 // console.log(itemSplit);
  let header= itemSplit[0].split(',');
  let lines =[];
 // console.log(header);
 for(let i=1;i<itemSplit.length;i++){
   let data=itemSplit[i].split(',');
   if (data.length == header.length) {

   /* let temp = [];
    for (let j = 0; j < header.length; j++) {
      temp.push(header[j] + ":" + data[j]);
    }*/
    let obj={
      Div:data[0],
      Date:data[1],
      Time:data[2],
      HomeTeam:data[3],
      AwayTeam:data[4],
      FTHG:data[5],
      FTAG:data[6]
    }
    lines.push(obj);
  }
 
 }
 
 console.log(lines);
}
