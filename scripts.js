// -----Variables-----
var slide = document.querySelectorAll('.slide');
var rbtn = document.querySelectorAll('.rad-btn');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
var slideInt;
var intTime = 5000;

// -----Iterate All Navigation Buttons-----
rbtn.forEach(function(item, index){
    // Click Event for Buttons
    item.addEventListener('click', function(){
        manButtonNav(index);
    });
});

// -----Click Events for Arrows-----
// Right Arrows
rightArrow.addEventListener('click', function(e){
    e.preventDefault();
    nextSlide();
    clrInterval();
});
// Left Arrows
leftArrow.addEventListener('click', function(e){
    e.preventDefault();
    prevSlide();
    clrInterval();
});

// -----Funtion for Radio Navigation-----
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
    clrInterval();
}

// -----Funtion for the Next Slide-----
function nextSlide(){
    var curr = document.querySelector('.curr');
    var act = document.querySelector('.active');
    // Unset Current Slide and Nav Button
    curr.classList.remove('curr');
    act.classList.remove('active');
    // Set Next Slide and Navigation Button
    if(curr.nextElementSibling){
        curr.nextElementSibling.classList.add('curr');
        act.nextElementSibling.classList.add('active');
    }
    else{
        slide[0].classList.add('curr');
        rbtn[0].classList.add('active');
    }
}

// -----Funtion for the Previous Slide-----
function prevSlide(){
    var curr = document.querySelector('.curr');
    var act = document.querySelector('.active');
    // Unset Current Slide and Nav Button
    curr.classList.remove('curr');
    act.classList.remove('active');
    // Set Previous Slide and Navigation Button
    if(curr.previousElementSibling){
        curr.previousElementSibling.classList.add('curr');
        act.previousElementSibling.classList.add('active');
    }
    else{
        slide[slide.length - 1].classList.add('curr');
        rbtn[rbtn.length - 1].classList.add('active');
    }
}

// -----Function for Clear Slide Interval-----
function clrInterval(){
    clearInterval(slideInt);
    slideInt = setInterval(nextSlide, intTime);
}

// -----Automatic Slide Navigation-----
slideInt = setInterval(nextSlide, intTime);
