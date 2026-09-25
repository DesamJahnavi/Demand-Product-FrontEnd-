import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
export default function DemandChart({ data, socialFirst = false }) {
  return <ResponsiveContainer width="100%" height={280}><AreaChart data={data}><CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.5} /><XAxis dataKey="day" axisLine={false} tickLine={false} /><YAxis axisLine={false} tickLine={false} /><Tooltip />{socialFirst ? <><Area type="monotone" dataKey="mentions" stroke="#60a5fa" fill="rgba(96,165,250,.12)" strokeWidth={3} /><Area type="monotone" dataKey="demand" stroke="#a78bfa" fill="none" strokeWidth={2} /></> : <><Area type="monotone" dataKey="demand" stroke="#14b8a6" fill="rgba(20,184,166,.14)" strokeWidth={3} /><Area type="monotone" dataKey="mentions" stroke="#60a5fa" fill="none" strokeWidth={2} strokeDasharray="6 5" /></>}</AreaChart></ResponsiveContainer>;
}
