div {
    font-family: 'Mukta', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    min-height: 100vh;
    background: $bg;
  }
  
  
  
  button { 
      padding: 0.7em 2em;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      outline: none;
      color: #FFFFFF;
      background-color: #32BF9A;
      border: none;
      border-radius: 15px;
      box-shadow: 0 3px #31a27f;
      justify-items: center;
      font-size: 20px;
      }
  
  button:hover { 
      background-color: #31a27f;
      box-shadow: 0 3px #32BF9A;
  
  }
  
  button:active { 
      margin-top: 2px;
      margin-bottom: -2px;
      background-color: #32BF9A;
      box-shadow: 0  -2px 0 0 lightgray;
  }



  #countdown{
var div=document.getElementById('timer')
 
setTimeout(()=>{
     div.innerHTML=10
       setTimeout(()=>{
           div.innerHTML=9
           setTimeout(()=>{
              div.innerHTML=8
               setTimeout(()=>{
                   div.innerHTML=7
                   setTimeout(()=>{
                      div.innerHTML=6
                       setTimeout(()=>{
                          div.innerHTML=5
                           setTimeout(()=>{
                             div.innerHTML=4
                               setTimeout(()=>{
                                  div.innerHTML=3
                                   setTimeout(()=>{
                                      div.innerHTML=2
                                       setTimeout(()=>{
                                          div.innerHTML=1
                                           setTimeout(()=>{
                                               div.innerHTML=0
                                               setTimeout(()=>{
                                                   div.innerHTML='mern full stack developer';
                                               },1000)
                                           },1000)
                                       },1000)
                                   },1000)
                                 
                               },1000)
                           },1000)
                       },1000)
                   },1000)
               },1000)
           },1000)
       },1000)
    }  },1000)