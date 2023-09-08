let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



function loadTime() {
            
    let dateObject = new Date();

    let day= dateObject.getDay();
    document.querySelector('[data-testid="currentUTCTime"]').innerHTML = dateObject.getTime();

   
    
    document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML= days[day];


    
        
    }

setInterval(loadTime,1000);
