"use client";
import {useEffect,useRef,useState} from "react";

// Self-contained decorative canvas: no third-party particle dependency.
export default function IKParticleLogo(){
 const canvas=useRef<HTMLCanvasElement>(null);
 const frame=useRef<number>(0);
 const burst=useRef(0);
 const [active,setActive]=useState(false);
 useEffect(()=>{
  const c=canvas.current;if(!c)return;
  const ctx=c.getContext("2d");if(!ctx)return;
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dots=Array.from({length:30},(_,i)=>({a:(i*2.39996),r:13+(i%6)*3,phase:i*.67,speed:.3+(i%5)*.12}));
  let running=true;let start=performance.now();
  function draw(now:number){
   if(!running||!ctx||!c)return;
   const t=(now-start)/1000;const dpr=Math.min(window.devicePixelRatio||1,2);
   const w=112,h=112;
   if(c.width!==Math.round(w*dpr)||c.height!==Math.round(h*dpr)){c.width=Math.round(w*dpr);c.height=Math.round(h*dpr)}
   ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
   const b=burst.current; if(b>0)burst.current=Math.max(0,b-.018);
   dots.forEach((p,i)=>{
    const a=p.a+(reduced?0:t*p.speed);
    const radius=p.r+(b*22);
    const x=56+Math.cos(a)*radius;
    const y=56+Math.sin(a)*radius*.75;
    const opacity=.25+.5*(.5+.5*Math.sin(t*2+p.phase));
    ctx.beginPath();ctx.fillStyle=`rgba(${i%3===0?'255,217,128':'92,226,255'},${opacity})`;
    ctx.arc(x,y, i%6===0?1.9:1.1,0,Math.PI*2);ctx.fill();
    if(i%5===0){ctx.strokeStyle=`rgba(93,225,255,${opacity*.28})`;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(56+(x-56)*.7,56+(y-56)*.7);ctx.stroke()}
   });
   if(!reduced||burst.current>0)frame.current=requestAnimationFrame(draw);
  }
  frame.current=requestAnimationFrame(draw);
  return()=>{running=false;cancelAnimationFrame(frame.current)};
 },[]);
 function activate(e:React.MouseEvent<HTMLSpanElement>){
  e.preventDefault();e.stopPropagation();
  burst.current=1;setActive(false);requestAnimationFrame(()=>setActive(true));
  window.setTimeout(()=>setActive(false),850);
  // Preserve the header link's expected return-to-top behavior.
  window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"} as ScrollToOptions);
 }
 return <span className={`ik-logo ${active?"ik-logo-burst":""}`} role="button" tabIndex={0} aria-label="IK logo: activate particle effect and return to top" onClick={activate} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();burst.current=1;setActive(true);window.scrollTo({top:0,behavior:"smooth"});window.setTimeout(()=>setActive(false),850)}}}>
   <canvas className="ik-particles" ref={canvas} aria-hidden="true"/>
   <span className="ik-logo-word">IK.</span>
 </span>
}
