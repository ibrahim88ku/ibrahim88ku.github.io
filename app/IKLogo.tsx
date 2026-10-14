"use client";
import {useEffect,useRef} from "react";

type Particle={x:number;y:number;tx:number;ty:number;vx:number;vy:number;life:number;size:number};
export default function IKLogo(){
 const canvasRef=useRef<HTMLCanvasElement>(null);
 const logoRef=useRef<HTMLSpanElement>(null);
 const replay=useRef<()=>void>(()=>{});
 useEffect(()=>{
  const canvas=canvasRef.current, host=logoRef.current;
  if(!canvas||!host)return;
  const ctx=canvas.getContext("2d");if(!ctx)return;
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  let raf=0, timer=0, particles:Particle[]=[], start=0, running=false;
  const word=host.querySelector<HTMLElement>(".ik-world-word");
  // Draw the actual IK glyphs into an offscreen canvas and sample ONLY the text pixels.
  const mask=document.createElement("canvas");mask.width=256;mask.height=256;
  const mc=mask.getContext("2d",{willReadFrequently:true});
  const makePoints=()=>{
   if(!mc)return [] as {x:number;y:number}[];
   mc.clearRect(0,0,256,256);
   mc.font="800 92px Arial, sans-serif";mc.textAlign="center";mc.textBaseline="alphabetic";
   mc.fillText("IK",128,156);
   const pixels=mc.getImageData(0,0,256,256).data;
   const points:{x:number;y:number}[]=[];
   for(let y=70;y<172;y+=4)for(let x=65;x<190;x+=4){if(pixels[(y*256+x)*4+3]>125)points.push({x:x/4,y:y/4})}
   return points;
  };
  const points=makePoints();
  const resize=()=>{const d=Math.min(window.devicePixelRatio||1,2);const w=host.clientWidth,h=host.clientHeight;canvas.width=Math.round(w*d);canvas.height=Math.round(h*d);ctx.setTransform(d,0,0,d,0,0)};
  resize();const observer=new ResizeObserver(resize);observer.observe(host);
  const draw=(now:number)=>{
   if(!running)return;
   const elapsed=now-start;const w=host.clientWidth,h=host.clientHeight;
   ctx.clearRect(0,0,w,h);
   for(const p of particles){
    const pull=Math.min(1,elapsed/950);const ease=1-Math.pow(1-pull,3);
    p.x+=(p.tx-p.x)*(.055+ease*.13);p.y+=(p.ty-p.y)*(.055+ease*.13);
    const fade=elapsed>1250?Math.max(0,1-(elapsed-1250)/400):1;
    ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle=`rgba(123,235,255,${fade*.9})`;ctx.shadowColor="#7deaff";ctx.shadowBlur=6;ctx.fill();
   }
   ctx.shadowBlur=0;
   if(elapsed>900&&word)word.style.opacity=String(Math.min(1,(elapsed-900)/480));
   if(elapsed<1650)raf=requestAnimationFrame(draw);else{running=false;ctx.clearRect(0,0,w,h);if(word)word.style.opacity="1"}
  };
  replay.current=()=>{
   cancelAnimationFrame(raf);window.clearTimeout(timer);
   if(reduce){if(word)word.style.opacity="1";return}
   const w=host.clientWidth,h=host.clientHeight;
   particles=points.map(p=>{
    const tx=p.x/64*w,ty=p.y/64*h;
    const a=Math.random()*Math.PI*2,r=12+Math.random()*32;
    return {x:tx+Math.cos(a)*r,y:ty+Math.sin(a)*r,tx,ty,vx:0,vy:0,life:0,size:.45+Math.random()*.7};
   });
   if(word)word.style.opacity="0";
   start=performance.now();running=true;raf=requestAnimationFrame(draw);
  };
  timer=window.setTimeout(()=>replay.current(),180);
  return ()=>{cancelAnimationFrame(raf);clearTimeout(timer);observer.disconnect()};
 },[]);
 return <span className="ik-world-logo" ref={logoRef}>
   <img className="ik-world-back" src="/ik-globe-background.svg" alt="" aria-hidden="true"/>
   <svg className="ik-world-word" viewBox="0 0 64 64" aria-hidden="true"><text x="32" y="39" fontFamily="Arial,sans-serif" fontSize="23" fontWeight="800" textAnchor="middle" fill="#e7fbff">IK</text></svg>
   <canvas className="ik-world-particles" ref={canvasRef} aria-hidden="true"/>
   <button className="ik-world-button" type="button" aria-label="Replay IK text particle animation" title="Animate IK text" onClick={()=>replay.current()}/>
 </span>;
}
