var i = 0;
var kickOut=7;
var imageStar

while(kickOut > 0)
{

   var input = prompt("Enter num here. you have " + kickOut + " left");
   var star = document.createElement("star");
   //var img = document.createElement("img");
        //star.src = "C:/Users/Training/Downloads/Star.png";
       // img.src = "image.png";
var src = document.getElementById(star);

 
   if(input > 0 && input <= 7)
   {

                    if(input==1){
                    alert("You're a 1 general");
                    document.write()
                    src.appendChild(star);
                    

                    }else if (input==2){
                    document.write("You a 2 star general ");
                    


                    }else if (input==3){
                    document.write("You a 3 star general");

                    }else if (input==4){
                    document.write("You a 4 star general");

                    }else if (input==5){
                    document.write("You a 5 star general");

                    }else if (input==6){
                    document.write("You a 6 star general");

                    }else if (input==7){
                    document.write("So Sobolious... SEEEEEVEEEEN!!!!!");
                    
                }

               break;	
       }else
	{
		
        //;i++;
        
        var answer = kickOut-1;
        kickOut--;
		//
     //  document.getElementById('crap').innerText="You have "+kickOut+ " tries remaining.";
    }
    
//i++;    
}

//document.write(" You have "+kickOut+ " tries remaining. ");
