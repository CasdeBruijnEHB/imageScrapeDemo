

'use strict';

var Scraper = require('./node_modules/images-scraper/src/google/scraper');


let google = new Scraper();


let imageLinksArr=[];
async function getData(){
  console.log("searching...")
  //The actual scraping goes on here
  let results = await google.scrape('Kendrick Lamar', 10); // Or ['banana', 'strawberry'] for multi-queries
  console.log(results[0].url)
  console.log(results.length)
  //ADD THE IMAGE LINKS TO AN ARRAY
  for(let i=0; i<results.length;i++){
    imageLinksArr.push(results[i].url)
  }
  //Shoot the array to a new function
  //showResult(imageLinksArr);
 
  console.log(imageLinksArr);
  
}  

function showResult(data){
  console.log("Binnen! " + data)


}

//getData();



