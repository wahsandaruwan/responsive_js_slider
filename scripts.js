// -----Variables-----
var slide = document.querySelectorAll('.slide');
var rbtn = document.querySelectorAll('.mn-btn');
var count = 1;
var slideInt;

// -----Iterate All Navigation Buttons-----
rbtn.forEach(function(item, index){
    // Click Event for Buttons
    item.addEventListener('click', function(){
        manButtonNav(index);
    });
});

// -----Funtion for Manual Navigation-----
function manButtonNav(index){
    for(var i = 0; i < slide.length; i++){
        // Set Slide and Navigation Button
        if(i !== index){
            slide[i].classList.remove("curr");
            rbtn[i].classList.remove("active");
        }
        else{
            slide[index].classList.add("curr");
            rbtn[index].classList.add("active");
        }
    }
    // Clear Interval
    clearInterval(slideInt);
    slideInt = setInterval(nextImage, 5000);
}

// -----Funtion for Automatic Navigation-----
function nextImage(){
    var curr = document.querySelector('.curr');
    var act = document.querySelector('.active');
    // Unset Slide and Nav Button
    curr.classList.remove('curr');
    act.classList.remove('active');
    // Set Next Slide and Navigation Button
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

// -----Slide Interval-----
slideInt = setInterval(nextImage, 5000);