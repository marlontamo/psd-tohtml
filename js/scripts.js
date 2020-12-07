jQuery(function(){
  
   let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
   if(!isMobile){
   jQuery('#navigation').removeClass('fixed-top');
   }else{
    jQuery('#navigation').addClass('fixed-top');
   }
});