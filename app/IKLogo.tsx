"use client";

import {useEffect, useRef} from "react";

export default function IKLogo(){
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const wrapperRef=useRef<HTMLSpanElement>(null);
  const burstRef=useRef<(()=>void)|null>(null);
  useEffect(()=>{
    const canvas=canvasRef.current;
    const wrapper=wrapperRef.current;
    if(!canvas||!wrapper)return;
    const ctx=canvas.getContext("2d");
    if(!ctx)return;
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame=0, raf=0, particles:{x:number;y:number;vx:number;vy:number;life:number;max:number;radius:number;hue:number}[]=[];
    const resize=()=>{const r=wrapper.getBoundingClientRect();const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(r.width*dpr);canvas.height=Math.round(r.height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0)};
    resize();
    const observer=new ResizeObserver(resize);observer.observe(wrapper);
    const spawn=(count:number)=>{
      const w=wrapper.clientWidth,h=wrapper.clientHeight;
      for(let i=0;i<count;i++){
        const a=Math.random()*Math.PI*2,s=0.7+Math.random()*2.8;
        particles.push({x:w*(.2+Math.random()*.6),y:h*(.25+Math.random()*.5),vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:0,max:24+Math.random()*35,radius:.7+Math.random()*1.7,hue:Math.random()>.35?190:42});
      }
    };
    const draw=()=>{
      frame++;const w=wrapper.clientWidth,h=wrapper.clientHeight;
      ctx.clearRect(0,0,w,h);
      if(frame%8===0&&particles.length<55)spawn(1);
      particles=particles.filter(p=>p.life<p.max);
      for(const p of particles){p.x+=p.vx;p.y+=p.vy;p.vx*=.984;p.vy*=.984;p.life++;
        const alpha=(1-p.life/p.max)*.9;
        ctx.beginPath();ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
        ctx.fillStyle=p.hue===190?`rgba(97,231,255,${alpha})`:`rgba(255,215,123,${alpha})`;
        ctx.shadowColor=p.hue===190?"#54e6ff":"#ffd780";ctx.shadowBlur=8;ctx.fill();
      }
      ctx.shadowBlur=0;raf=requestAnimationFrame(draw);
    };
    if(!reduce){spawn(15);raf=requestAnimationFrame(draw)}
    burstRef.current=()=>{if(reduce)return;spawn(90);wrapper.classList.remove("ik-logo-burst");void wrapper.offsetWidth;wrapper.classList.add("ik-logo-burst");window.setTimeout(()=>wrapper.classList.remove("ik-logo-burst"),850)};
    return ()=>{cancelAnimationFrame(raf);observer.disconnect();burstRef.current=null};
  },[]);
  return <span ref={wrapperRef} className="ik-logo" aria-label="IK dot logo"><span className="ik-logo-text">IK<span className="ik-logo-dot">.</span></span><canvas ref={canvasRef} className="ik-logo-particles" aria-hidden="true"/><button type="button" className="ik-logo-click" aria-label="Animate IK logo" title="Animate IK logo" onClick={()=>burstRef.current?.()}/></span>;
}
