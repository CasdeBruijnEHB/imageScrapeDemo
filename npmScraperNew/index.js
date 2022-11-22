const express = require('express')
const app = express()
const port = 3000
var path = require('path')
/************************/
/****Scaper*****/
var Scraper = require('./node_modules/images-scraper/src/google/scraper');
let google = new Scraper();


/*
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
*/


/*********Express*******/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/Public/indexAPI.html'));
})

app.get('/getData/:searchitem', async(req, res) => {
  console.log("searching...")
  //The actual scraping goes on here
  let searchItem= req.params.searchitem;
  let results = await google.scrape(`${searchItem}`, 2); // Or ['banana', 'strawberry'] for multi-queries
    
  console.log("Params", searchItem)
  res.send(results)
})

app.get('/getData', async(req, res) => {
  console.log("searching...")
  //The actual scraping goes on here
  let results = await google.scrape('Kendrick Lamar', 2); // Or ['banana', 'strawberry'] for multi-queries
  
  //console.log(results)
  res.send(results)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
