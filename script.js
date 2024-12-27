
      let data = [
         {
             movieName : "Bhool Bhulaiya",
             actor : "akshay kumar",
             actress : " ameesha patel",
             category : "horror"
         },
         {
             movieName : "Chandramukhi",
             actor : "rajinkanth",
             actress : "jyotika",
             category : "horror"
         },
         {
             movieName : "Stree",
             actor : "raajkumar rao",
             actress : "shradhha kapoor",
             category : "thrill"
         },
         {
             movieName : "Laxmi",
             actor : "akshay kumar",
             actress : "kiara advani",
             category : "horror"
         },
         {
             movieName : "Ghajini",
             actor : "akshay kumar",
             actress : "kiara advani",
             category : "thrill"
         },
         {
             movieName : "Dhoom",
             actor : "akshay kumar",
             actress : "kiara advani",
             category : "thrill"
         },
         {
             movieName : "Kesari",
             actor : "akshay kumar",
             actress : "parinithi chopara",
             category : "thrill"
         },
         {
             movieName : "Agneepath",
             actor : "akshay kumar",
             actress : "kiara advani",
             category : "thrill"
         },
         {
             movieName : "Welcome",
             actor : "Akshay Kumar",
             actress : "Katrina Kaif",
             category : "comedy"
         },
         {
             movieName : "Hera pheri",
             actor : "Akshay Kumar",
             actress : "kahkashan patel",
             category : "comedy"
         },
         {
             movieName : "Dhamaal",
             actor : "arshad warsi",
             actress : "mallika sherawat",
             category : "comedy"
         },
         {
             movieName : "3Idoits",
             actor : "amir khan",
             actress : "karina kapoor",
             category : "comedy"
         }
     ]

     function movieDetails(x){

         if(x == "horror"){

             let myfunc = data.map((val)=>{
                 if(val.category == 'horror'){
                     return val.movieName
                 }
                 else{
                     return 0
                 }
             })
             createNode(myfunc)
             console.log(myfunc,"myfunc");
         }
         else if(x =="thrill"){
             let myfunc = data.map((val) =>{
                 if(val.category == 'thrill'){
                 return val.movieName
                 }
                 else{
                     return 0
                 }
             })
             createNode(myfunc)
             console.log(myfunc,"myfunc");
         }
         else if(x == "comedy"){
             let myfunc = data.map((val) =>{
                 if(val.category == 'comedy'){
                     return val.movieName
                 }
                 else{
                     return 0
                 }
             })
             createNode(myfunc)
             console.log(myfunc,"myfunc");
         }

         function createNode(x){
             let info = document.getElementById("container")
             info.style.height = "400px"
             info.style.width = "800px"
             info.style.color = "white"
             info.style.marginTop = "60px"
             info.style.marginLeft = "200px"
             info.style.backgroundColor = "grey"
             info.style.borderRadius = "5px"
             info.style.textAlign = "center"
             info.style.fontSize = "larger"
             info.style.display = "flex"
             info.style.justifyContent = "center"
             info.style.alignItems = "center"
             
             info.innerHTML = ""
             for(i=0;i<x.length;i++){
                 if(x[i] != 0){
                     if(info.innerHTML == ""){
                         info.innerHTML = x[i]
                     }
                     else{
                         info.innerHTML += "<br>" + x[i] 
                     }
                 }
             }
         }
     }
     