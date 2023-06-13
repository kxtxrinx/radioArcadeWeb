window.onscroll = function() {
    headerScroll()
};

var header = document.getElementById("mainHeader");
var h1 = document.getElementById('chooseOptText')

var sticky = header.offsetTop;

function headerScroll() {
    if (window.scrollY > sticky) {
        header.style.backgroundColor = "rgb(0,0,0,0.4)"
    } else {
        header.style.backgroundColor = "rgb(0,0,0,0)"
    }
}

//TODO
function h1Over(){
    h1.classList.add("animate__pulse")
}