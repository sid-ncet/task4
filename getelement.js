var item=document.getElementsByClassName('list-group-item')
console.log(item)
item[2].style.background= "green"
for(var i=0;i<item.length;i++){
    item[i].style.fontWeight='bold'
}