import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
export default function CategoryChart({ data }) {
  return <ResponsiveContainer width="100%" height={245}><BarChart data={data} layout="vertical" margin={{ left: 5, right: 15 }}><CartesianGrid horizontal={false} strokeDasharray="3 3" opacity={0.4} /><XAxis type="number" domain={[0, 100]} hide /><YAxis type="category" dataKey="name" axisLine={false} tickLine={false} width={75} /><Tooltip /><Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={16} fill="#14b8a6" /></BarChart></ResponsiveContainer>;
}
