
  /*  function lol() {

         var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.terrarity.io/wallets/lunaburn", true);
//Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

    document.getElementById("p").innerHTML=xhr.response
      var num =JSON.parse(xhr.response).luna[0].burned/1000000
       console.log(JSON.parse(xhr.response).luna[0].burned/1000000);
        
      var yo=num.toString().split(".");
       var commas = yo[0].toLocaleString("en-US");
      var commat = commas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(commat.concat("."+yo[1]));
        // Request finished. Do processing here.
    }

   if ( this.status === 0){
         document.getElementById("p").innerHTML = "welcome " +xhr.response;
  
   }
}
           var today=new Date()
xhr.send();
              
             }*/
      
      
      
      
       function lol() {
//console.log("yoooo")
         var xhr = new XMLHttpRequest();
//xhr.open("GET", "https://api.terrarity.io/wallets/lunaburn", true);
         
         
      //   xhr.open("GET", "https://columbus-fcd.terra.dev/v1/txs?offset=0&limit=10&account=terra1sk06e3dyexuq4shw77y3dsv480xv42mq73anxu", true);
         // xhr.open("GET", "https://terra-classic-fcd.publicnode.com/v1/txs?offset=0&limit=10&account=terra1sk06e3dyexuq4shw77y3dsv480xv42mq73anxu", true);
         xhr.open("GET", "https://columbus-fcd.terra.dev/v1/txs?limit=10&account=terra19kwnqcjgej5pl3wttuv5xllpvjrjmy79tt2f9l", true);
       //  https://terra-classic-fcd.publicnode.com/v1/txs?account=terra1sk06e3dyexuq4shw77y3dsv480xv42mq73anxu
       //  xhr.open("GET", "https://columbus-fcd.terra.dev/v1/txs?offset=0&limit=10&account=terra19kwnqcjgej5pl3wttuv5xllpvjrjmy79tt2f9l", true);
//Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

   // document.getElementById("p").innerHTML=xhr.response *** check this out
  //   console.log(JSON.parse(xhr.response).txs[0].raw_log)

var cool=JSON.parse(xhr.response).txs[0].raw_log

console.log(JSON.parse(cool)[0].events[0].attributes[0].value)
      
     // var transactions=JSON.parse(xhr.response).txs
      
    /*  for (items in transactions){
        
        if(transactions[items].sender == "terra1hq2yvwr6m39hafsnyqsuj5h4swtuxqr8m5c4k0"){
       console.log(items+":"+transactions[items].qty/1000000 +":"+transactions[items].ts.split(",")[0]) 
          
             console.log(transactions[items])
        }
      }*/
   
    }

   if ( this.status === 0){
         document.getElementById("p").innerHTML = "welcome " +xhr.response;
  
   }
}
           var today=new Date()
xhr.send();
              
             }
      














   
       /*function lol() {

         var xhr = new XMLHttpRequest();
xhr.open("GET", "https://columbus-fcd.terra.dev/v1/txs?offset=0&limit=10&account=terra19kwnqcjgej5pl3wttuv5xllpvjrjmy79tt2f9l", true);
//Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

   // document.getElementById("p").innerHTML=xhr.response *** check this out
     console.log(JSON.parse(xhr.response).txs[2].logs[0].events[0].attributes[1].value.split("u")[0]/1000000)
// console.log(JSON.parse(xhr.response).txs[2].logs[0].events[3].attributes[1].value)
       console.log(JSON.parse(xhr.response).txs)
      
           console.log(JSON.parse(xhr.response).txs[0])
     
      var sweet;
      var transact=JSON.parse(xhr.response).txs
      for (ninja in transact){
        
    
          
             console.log(transact[ninja])
           console.log(transact[ninja].timestamp.split("T")[0].replace(/-/g,'/'))
       sweet=transact[ninja].timestamp.split("T")[0].replace(/-/g,'/').split("/")
        console.log(sweet[2]+"/"+sweet[1]+"/"+sweet[0])
      }
      
   
      
      
      var transactions=JSON.parse(xhr.response).txs
      
      for (items in transactions){
        
        if(transactions[items].sender == "terra1hq2yvwr6m39hafsnyqsuj5h4swtuxqr8m5c4k0"){
       console.log(items+":"+transactions[items].qty/1000000 +":"+transactions[items].ts.split(",")[0]) 
          
             console.log(transactions[items])
        }
      }
   
    }

   if ( this.status === 0){
         document.getElementById("p").innerHTML = "welcome " +xhr.response;
  
   }
}
           var today=new Date()
xhr.send();
              
             }
      
    //  lol();*/

