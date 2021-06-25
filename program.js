
function clock(){
    var date=new Date();
    var hours=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var midday;
    var mash=date.getMonth()+1;
    var taric=date.getDate();
    var bochor=date.getFullYear();

    hours=updatetime(hours);
    min=updatetime(min);
    sec=updatetime(sec);

    if(hours>=12)
    midday="PM";
    else
    midday="AM";
     
    var showtime;
    if(hours>12)
    showtime=hours-12;
    else
    showtime=hours;
    document.getElementById("clock").innerHTML= "<span>" +showtime + "</span>" +" : "+ "<span>"
    + min +"</span>"+ " : " +"<span>" +sec+"</span>"+" "+"<span>"+midday+"</span>";
    
    document.getElementById("tmb").innerHTML=taric+" / "+mash+" / "+bochor;


    var time=setTimeout(function(){
        clock();
    },1000);
    
   if(hours<12)
   var greeting="Good Morning";
   else if(hours>=12 && hours<=18)
   var greeting="Good Afternoon";
   else if(hours>18 && hours<=20)
   var greeting="Good Evening";
   else
   var greeting="Good Night";

   document.getElementById("greet").innerHTML=greeting;

    function updatetime(k){
        if(k<10)
        return "0"+ k;
        else
        return k;
    }
}
clock();
