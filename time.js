function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }

     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;     
     
     //12 hour format
     hh = (hh >= 12)? hh - 12 : hh;
     
     let time = hh + ":" + mm + ":" + ss + " " + session;
     console.log(time);
     document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000); 
  }
 console.log(currentTime());
  // currentTime();