//scroll-top
$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 60){
        $('#topBtn').fadeIn();
      }
       else{
        $('#topBtn').fadeOut();
      }
    });
  
    $("#topBtn").click(function(){
      $('html ,body').animate({scrollTop : 0},800);
    });
  });
  


//for menu

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle(){
if (MenuItems.style.maxHeight == "0px")
{

    MenuItems.style.maxHeight = "200px";
}

else 
{

    MenuItems.style.maxHeight = "0px";
}

}

//for product gallery

var productImg =document.getElementById("productImg");
var smallImg =document.getElementsByClassName("small-img");

smallImg[0].onclick =function(){

    productImg.src = smallImg[0].src
}
smallImg[1].onclick =function(){

    productImg.src = smallImg[1].src
}
smallImg[2].onclick =function(){

    productImg.src = smallImg[2].src
}
smallImg[3].onclick =function(){

    productImg.src = smallImg[3].src
}


