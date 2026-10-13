"use client";

import { useEffect, useState } from "react";

const COUNT = 64;
type Series = { name: string; color: string; min: number; max: number; unit: string; decimals: number; values: number[] };
const definitions = [
  { name: "IOPS", color: "#5eeaff", min: 300000, max: 500000, unit: "", decimals: 0 },
  { name: "Throughput", color: "#b59aff", min: 2000, max: 3000, unit: " MB/s", decimals: 0 },
  { name: "Latency", color: "#61f4b9", min: 0.1, max: 0.9, unit: " ms", decimals: 2 },
];
function initialSeries(): Series[] {
  return definitions.map((d, i) => ({ ...d, values: Array.from({ length: COUNT }, (_, j) => {
    const center = (d.min + d.max) / 2;
    const swing = (d.max - d.min) * (0.19 * Math.sin(j * 0.25 + i) + 0.11 * Math.sin(j * 0.59 + i * 2));
    return Math.min(d.max, Math.max(d.min, center + swing));
  }) }));
}
export default function LiveTelemetry() {
  const [series, setSeries] = useState<Series[]>(initialSeries);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setSeries(previous => previous.map(s => {
        const last = s.values[s.values.length - 1];
        const midpoint = (s.min + s.max) / 2;
        const range = s.max - s.min;
        const next = Math.max(s.min + range * 0.005, Math.min(s.max - range * 0.005,
          last + (Math.random() - 0.5) * range * 0.20 + (midpoint - last) * 0.055));
        return { ...s, values: [...s.values.slice(1), next] };
      }));
    }, 260);
    return () => window.clearInterval(timer);
  }, []);
  return <div className="telemetry-panel glass" aria-label="Animated simulated telemetry display; no live infrastructure connection">
    <div className="telemetry-heading"><span className="live-dot"/> LIVE TELEMETRY <span className="telemetry-connected" style={{marginLeft:"auto"}}>CONNECTED</span></div>
    {series.map(s => {
      const width = 330, height = 96;
      const points = s.values.map((v, i) => `${(i / (COUNT - 1) * width).toFixed(2)},${(height - 8 - (v - s.min) / (s.max - s.min) * (height - 16)).toFixed(2)}`).join(" ");
      const current = s.values[s.values.length - 1];
      return <div className="telemetry-row" key={s.name}>
        <div className="telemetry-meta"><span>{s.name}</span><strong style={{ color: s.color }}>{current.toLocaleString("en-US", { minimumFractionDigits: s.decimals, maximumFractionDigits: s.decimals })}{s.unit}</strong></div>
        <svg viewBox="0 0 330 96" preserveAspectRatio="none" role="img" aria-label={`${s.name} simulated moving trend`}>
          <path d="M0 24H330 M0 48H330 M0 72H330" stroke="#b7d9ed" strokeOpacity=".22" fill="none"/>
          <polyline points={points} stroke={s.color} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" style={{ filter: `drop-shadow(0 0 3px ${s.color})` }}/>
          <circle cx="330" cy={height - 8 - (current - s.min) / (s.max - s.min) * (height - 16)} r="3.5" fill={s.color}/>
        </svg>
      </div>;
    })}

  </div>;
}
