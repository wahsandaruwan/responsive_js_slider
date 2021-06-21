// -----Variables-----
var slide = document.querySelectorAll('.slide');
var rbtn = document.querySelectorAll('.mn-btn');

// -----Click Event for Manual Button-----
rbtn.forEach(function(item, index){
    item.addEventListener('click', function(){
        console.log(index);
        radioNav(index);
    });
});

// -----Funtion for Manual Button Navigation-----
function manButtonNav(index){
    for(var i = 0; i < slide.length; i++){
        if(i !== index){
            console.log(i);
            slide[i].style.display = "none";
            rbtn[i].classList.remove("active");
        }
        else{
            slide[index].style.display = "";
            rbtn[index].classList.add("active");
        }
    }
}