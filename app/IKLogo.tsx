"use client";
import {useEffect,useRef} from "react";

type Dot={x:number;y:number;tx:number;ty:number;vx:number;vy:number;char:string;alpha:number};
export default function IKLogo(){
 const canvasRef=useRef<HTMLCanvasElement>(null);
 const hostRef=useRef<HTMLAnchorElement>(null);
 const burstRef=useRef<()=>void>(()=>{});
 useEffect(()=>{
  const canvas=canvasRef.current,host=hostRef.current;
  if(!canvas||!host)return;
  const ctx=canvas.getContext("2d");if(!ctx)return;
  const glyph=host.querySelector<HTMLElement>(".ik-world-word");
  const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let raf=0,timeout=0,phase:"gather"|"burst"|"idle"="idle",start=0;
  let dots:Dot[]=[];
  const mask=document.createElement("canvas");mask.width=256;mask.height=256;
  const mc=mask.getContext("2d",{willReadFrequently:true});
  const points:{x:number;y:number}[]=[];
  if(mc){mc.font="800 92px Arial,sans-serif";mc.textAlign="center";mc.textBaseline="alphabetic";mc.fillStyle="#fff";mc.fillText("IK",128,156);
   const data=mc.getImageData(0,0,256,256).data;
   for(let y=75;y<168;y+=4)for(let x=67;x<191;x+=4)if(data[(y*256+x)*4+3]>100)points.push({x:x/256,y:y/256});
  }
  function size(){const d=Math.min(devicePixelRatio||1,2);const w=host!.clientWidth,h=host!.clientHeight;canvas!.width=Math.round(w*d);canvas!.height=Math.round(h*d);ctx!.setTransform(d,0,0,d,0,0)}
  size();const observer=new ResizeObserver(size);observer.observe(host);
  function frame(t:number){
   const elapsed=t-start,w=host!.clientWidth,h=host!.clientHeight;
   ctx!.clearRect(0,0,w,h);
   for(const p of dots){
    if(phase==="gather"){
     p.x+=(p.tx-p.x)*.065;p.y+=(p.ty-p.y)*.065;
     p.alpha=Math.min(1,p.alpha+.018);
    }else{
     p.x+=p.vx;p.y+=p.vy;p.vx*=.989;p.vy*=.989;
     p.alpha=Math.max(0,1-elapsed/850);
    }
    ctx!.font="bold 8px 'JetBrains Mono',monospace";
    ctx!.fillStyle=`rgba(115,239,255,${p.alpha})`;
    ctx!.shadowColor="#57e9ff";ctx!.shadowBlur=7;
    ctx!.fillText(p.char,p.x,p.y);
   }
   ctx!.shadowBlur=0;
   if(phase==="gather"&&elapsed>950&&glyph)glyph.style.opacity=String(Math.min(1,(elapsed-950)/380));
   if(phase==="gather"&&elapsed>=1400){phase="idle";ctx!.clearRect(0,0,w,h);if(glyph)glyph.style.opacity="1";return}
   if(phase==="burst"&&elapsed>=850){phase="idle";ctx!.clearRect(0,0,w,h);if(glyph)glyph.style.opacity="1";window.location.hash="home";document.getElementById("home")?.scrollIntoView({behavior:reduce?"auto":"smooth"});return}
   raf=requestAnimationFrame(frame);
  }
  const gather=()=>{
   if(reduce){if(glyph)glyph.style.opacity="1";return}
   const w=host.clientWidth,h=host.clientHeight;
   dots=points.map(p=>{const tx=p.x*w,ty=p.y*h;return {x:Math.random()*w,y:Math.random()*h,tx,ty,vx:0,vy:0,char:Math.random()>.5?"1":"0",alpha:.2+Math.random()*.7}});
   if(glyph)glyph.style.opacity="0";
   cancelAnimationFrame(raf);phase="gather";start=performance.now();raf=requestAnimationFrame(frame);
  };
  burstRef.current=()=>{
   if(reduce){window.location.hash="home";document.getElementById("home")?.scrollIntoView({behavior:"auto"});return}
   cancelAnimationFrame(raf);clearTimeout(timeout);
   const w=host.clientWidth,h=host.clientHeight;
   dots=points.map(p=>{const x=p.x*w,y=p.y*h,a=Math.atan2(y-h/2,x-w/2)+(Math.random()-.5)*.85,velocity=1.5+Math.random()*3.7;
    return {x,y,tx:x,ty:y,vx:Math.cos(a)*velocity,vy:Math.sin(a)*velocity,char:Math.random()>.5?"1":"0",alpha:1};});
   if(glyph)glyph.style.opacity="0";
   phase="burst";start=performance.now();raf=requestAnimationFrame(frame);
  };
  timeout=window.setTimeout(gather,140);
  return ()=>{cancelAnimationFrame(raf);clearTimeout(timeout);observer.disconnect()};
 },[]);
 return <a href="#home" className="ik-world-logo" ref={hostRef} aria-label="Return to home with IK binary particle burst" title="Back to home" onClick={e=>{e.preventDefault();burstRef.current()}}>
  <img className="ik-world-back" src="/ik-globe-background.svg" alt="" aria-hidden="true"/>
  <svg className="ik-world-word" viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="39" fontFamily="Arial,sans-serif" fontSize="23" fontWeight="800" textAnchor="middle" fill="#e7fbff">IK</text></svg>
  <canvas className="ik-world-particles" ref={canvasRef} aria-hidden="true"/>
 </a>;
}
