var tagname=document.getElementsByTagName('li')
console.log(tagname)
console.log(tagname[1])
tagname[1].style.background= "green"

for(var i=0;i<tagname.length;i++){
    tagname[i].style.fontWeight='bold'
}

var item=document.getElementsByClassName('list-grp-item')
console.log(item)
item[0].style.fontWeight='bold'