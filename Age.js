var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("How old are you?"));
     floatDays = parseFloat(floatAge*365.25);
     floatMonths = parseFloat(floatAge*12);
     intWeeks = parseInt (floatDays/7)
     intFortnights = parseInt (floatDays/14)
     alert("Your Age is " + floatAge + " years")
     alert("Your Age is " + floatDays + " days")
     alert("Your Age is " + floatMonths + " months")
     alert("Your Age is " + intWeeks + " weeks")
     alert("Your Age is " + intFortnights + " fortnights")