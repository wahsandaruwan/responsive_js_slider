// -----Variables-----
var slide = document.querySelectorAll('.slide');
var rbtn = document.querySelectorAll('.mn-btn');
var count = 1;
var slideInt;

// -----Click Event for Manual Button-----
rbtn.forEach(function(item, index){
    item.addEventListener('click', function(){
        console.log(index);
        manButtonNav(index);
    });
});

// -----Funtion for Manual Button Navigation-----
function manButtonNav(index){
    for(var i = 0; i < slide.length; i++){
        if(i !== index){
            console.log(i);
            slide[i].classList.remove("curr");
            rbtn[i].classList.remove("active");
        }
        else{
            slide[index].classList.add("curr");
            rbtn[index].classList.add("active");
        }
    }
    clearInterval(slideInt);
    slideInt = setInterval(nextImage, 5000);
}

// -----Funtion for Navigate Next Image-----
function nextImage(){
    var curr = document.querySelector('.curr');
    var act = document.querySelector('.active');
    curr.classList.remove('curr');
    act.classList.remove('active');
    if(curr.nextElementSibling){
        curr.nextElementSibling.classList.add('curr');
        console.log(curr.nextElementSibling)
        act.nextElementSibling.classList.add('active');
    }
    else{
        slide[0].classList.add('curr');
        rbtn[0].classList.add('active');
    }
}

// Slide Interval
slideInt = setInterval(nextImage, 5000);