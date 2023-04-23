//your JS code here. If required.
const ulList = document.querySelector('ul').children;
let level = 0;
for (let i = 0; i < ulList.length; i++){
  if (ulList[i].id == 'level') {
    alert('The level of the element is: ' + level);
    break;
  }
  level++;
  
}
