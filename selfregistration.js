function calculateAge(){
    var userinput=document.getElementById("DOB").value;
    var dob=new Date(userinput);
    console.log(dob)

    if(userinput==null || userinput==''){  
        document.getElementById("message").innerHTML = "**Enter a date please!";    
        return false;   
      } else{
        var dobdobYear = dob.getYear();  
        var dobdobMonth = dob.getMonth();  
        var dobdobDate = dob.getDate();  

        var now = new Date();  //current date
   
    var currentYear = now.getYear();  
    var currentMonth = now.getMonth();  
    var currentDate = now.getDate();

    var yearAge = currentYear - dobdobYear;  
    //console.log(yearAge);

      }
      
      
      if(yearAge>=18 && yearAge<= 44){
          window.location.replace("https://selfregistration.cowin.gov.in");

      }else{
          document.write("You are not eligible for selfRegistration...");
      }
}