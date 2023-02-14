console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
function addItem(item){
  console.log('in addItem', item);
  basket.push(item);
  return true;
}//end addItem
console.log('is the item added?', addItem('oranges'));
console.log('is the item added?', addItem('milk'));
console.log('is the item added?', addItem('juice'));

console.log(basket);



function listItems(){
  console.log('in listItems');
  for(let i=0; i<basket.length; i++){
  console.log(basket[i]);
  }
}
listItems();


function








