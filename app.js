  const l=document.getElementById('l');
  const r=document.getElementById('r');
  const u=document.getElementById('u');
  const d=document.getElementById('d');
  const bord=document.getElementById('bord');
  const rock=document.getElementById('rock');
  const alien=document.getElementById('alien');
  const sco=document.getElementById('score');
  const time=document.getElementById("time");
  const hit=document.getElementById('hit');
  const banner=document.getElementById('banner');
  const p=document.getElementById("pause");
  const bansc=document.getElementById("bansc");
 
 
 
  var posh=0;
  var posv=0;
  
  var alh,alv,sh,sv,slh,su;
  
  var score=0;
  var speed=6;
  sco.innerText=`score : ${score}`;
  
  let height=bord.clientHeight;
  let width=bord.clientWidth;
  let rheight=rock.clientHeight;
  let rwidth=rock.clientWidth;
  
  function ran(){
    let x=Math.floor(Math.random()*100);
    x=x%((width-40)/40);
    let y=Math.floor(Math.random()*100);
    y=y%((height-40)/40);
    alv=y*40;
    alh=x*40;
    //console.log(y+"  "+x)
    alien.style.marginLeft=`${alh}px`;
    alien.style.marginTop=`${alv}px`;
  }
  ran();
  
  
  
  function moveup(){
    su=setInterval(()=>{
    rock.style="transform:rotate(0deg)";
    posv=posv-1;
     if(posv<=-5){
      posv=height-rheight;
    }else if(posv>=height-rheight){
      posv=-5;
    }
    position();
    check();
    },speed);
  }
  function moveleft(){
    slh=setInterval(()=>{
    rock.style="transform:rotate(270deg)";
    posh-=1;
    if(posh<=-5){
      posh=width-rwidth;
    }else if(posh>=width-rwidth){
      posh=-5;
    }
    position()
    check();
    },speed);
  }
  function moveright() {
    sh=setInterval(()=>{
    rock.style="transform:rotate(90deg)";
    posh+=1;
    if(posh<=-5){
      posh=width;
    }else if(posh>=width){
      posh=-5;
    }
    position();
    check();
    },speed);
  }
  function movedown() {
     sv=setInterval(()=>{
     rock.style="transform:rotate(180deg)";   
     posv=posv+1;
     if(posv<=-5){
      posv=height-rheight;
     }else if(posv>=height-rheight){
      posv=-5;
     }
     position()
     check();
     },speed);
  }
  
  
  let prepo;
  function move(x){
    prepo=x;
    flag=1;
    clearinterval();
    clearInterval(i);
    tie();
    p.style="background-image:radial-gradient(gray,black)";
switch (x){
 case 1:  
   moveup();
    break;
   
 case 2:
    moveleft();
    break;
 
 case 3:
    moveright();
    break;
 
 case 4:   
     movedown();
     break;
  }
  }
  function clearinterval(){
    clearInterval(sv);
    clearInterval(su);
    clearInterval (slh);
    clearInterval(sh);
  }
  function position(){
    rock.style.marginLeft=`${posh}px`;
    rock.style.marginTop=`${posv}px`;
  }
  function check(){
    if((posh>=alh-26 && posh<=alh+25)  && (posv>=alv-25 && posv<=alv+25)){
      hit.pause();
      hit.play();
      ran();
      score++;
      sco.innerText=`score : ${score}`;
    }
  }
  
  
var min=2;
var sec=0;
let i;
time.innerText=`time : ${min}:${sec}`;
  
  
  
  
  function tie(){
 i=setInterval(()=>{
  sec-=1;
if(sec<0){
  sec=59;
  min -= 1;
}
if(min==0 &&sec<=10){
  time.style="color:red";
}
  if(min==0 && sec==0){
  clearInterval(i);
  time.innerText=`time : ${min}:${sec}`;
  banner.style="animation:upd 1s 1;top:0vh";
  bansc.innerText=`score : ${score}`;
  clearinterval();
  disable();
  }
  time.innerText=`time : ${min}:${sec}`;
  },1000);
}

  let flag=1;
  function pause(){
    //alert(prepo+ "touck"+flag);
    if(flag==1){
      p.style="background-image:radial-gradient(orange,red)";
    clearInterval(sv);
    clearInterval(su);
    clearInterval (slh);
    clearInterval(sh);
    clearInterval(i);
    flag=0
  }else{
    p.style="background-image:radial-gradient(gray,black)";
    clearinterval();
    clearInterval(i);
    tie();
    flag=1;
   switch (prepo){
      case 1:moveup();
             break;
      case 2:moveleft();
            // tie();
             break;
      case 3:moveright();
            // tie();
             break;
      case 4:movedown();
            // tie();
             break;
         }
    
  }
    
  }
  function disable(){
    l.disabled=1;
    u.disabled=1;
    r.disabled=1;
    d.disabled=1;
    p.disabled=1;
  }
  function enable(){
    l.disabled=0;
    u.disabled=0;
    r.disabled=0;
    d.disabled=0;
    p.disabled=0;
  }
  function rmbanner(){
    time.style="color:white";
   banner.style="animation:dup 1s 1;top:100vh";
   posh=0;
   posv=0;
   position();
   ran();
   score=0;
   min=2;
   sec=0;
   sco.innerText=`score : ${score}`;
   time.innerText=`time : ${min}:${sec}`;
   enable();
   time.innerText=`time : ${min}:${sec}`;
  }
  
  
