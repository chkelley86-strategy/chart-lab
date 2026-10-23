// Lesson 03 · SVG basics — solution
import * as d3 from 'd3';

// 1. Draw shapes
const shapes = d3.select('#shapes');

shapes.append('rect')
  .attr('x', 20).attr('y', 20)
  .attr('width', 120).attr('height', 80)
  .attr('fill', 'steelblue');

shapes.append('circle')
  .attr('cx', 220).attr('cy', 60).attr('r', 40)
  .attr('fill', 'orange');

shapes.append('line')
  .attr('x1', 20).attr('y1', 160)
  .attr('x2', 380).attr('y2', 160)
  .attr('stroke', 'gray').attr('stroke-width', 2);

shapes.append('text')
  .attr('x', 20).attr('y', 190)
  .text('y grows downward');

// 2. Groups and margins
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const marginsSvg = d3.select('#margins');

const inner = marginsSvg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

inner.append('rect')
  .attr('x', 0).attr('y', 0)
  .attr('width', 400 - margin.left - margin.right)
  .attr('height', 200 - margin.top - margin.bottom)
  .attr('fill', 'none')
  .attr('stroke', 'steelblue')
  .attr('stroke-dasharray', '4 4');

// 3. Your first bar chart, by hand
const signups = [
  { month: 'Jan', value: 42 },
  { month: 'Feb', value: 58 },
  { month: 'Mar', value: 35 },
  { month: 'Apr', value: 71 },
  { month: 'May', value: 64 },
];

const width = 480;
const height = 260;
const m = { top: 20, right: 20, bottom: 30, left: 20 };
const innerWidth = width - m.left - m.right;
const innerHeight = height - m.top - m.bottom;
const barGap = 12;
const barWidth = (innerWidth - barGap * (signups.length - 1)) / signups.length;
const pxPerSignup = 2.8;

const chart = d3.select('#bar-chart')
  .append('g')
  .attr('transform', `translate(${m.left}, ${m.top})`);

chart.selectAll('rect')
  .data(signups)
  .join('rect')
  .attr('x', (d, i) => i * (barWidth + barGap))
  .attr('width', barWidth)
  .attr('height', d => d.value * pxPerSignup)
  .attr('y', d => innerHeight - d.value * pxPerSignup)
  .attr('fill', 'steelblue');

chart.selectAll('text.month')
  .data(signups)
  .join('text')
  .attr('class', 'month')
  .attr('x', (d, i) => i * (barWidth + barGap) + barWidth / 2)
  .attr('y', innerHeight + 20)
  .attr('text-anchor', 'middle')
  .attr('font-size', 12)
  .text(d => d.month);

// Stretch: value labels and a baseline
chart.selectAll('text.value')
  .data(signups)
  .join('text')
  .attr('class', 'value')
  .attr('x', (d, i) => i * (barWidth + barGap) + barWidth / 2)
  .attr('y', d => innerHeight - d.value * pxPerSignup - 6)
  .attr('text-anchor', 'middle')
  .attr('font-size', 12)
  .attr('font-weight', 600)
  .text(d => d.value);

chart.append('line')
  .attr('x1', 0).attr('x2', innerWidth)
  .attr('y1', innerHeight).attr('y2', innerHeight)
  .attr('stroke', '#59636e');
