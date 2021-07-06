let list = document.querySelectorAll('.list-item');
for(let i=0; i<list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = 'list-item';
        }
        list[i].className = 'list-item active';
    }
}