// Lesson 03 · SVG basics
//
// Shapes you'll use most:
//   rect    x, y (top-left corner), width, height, fill
//   circle  cx, cy (center), r (radius), fill
//   line    x1, y1, x2, y2, stroke, stroke-width
//   text    x, y (baseline), text-anchor ('start' | 'middle' | 'end'), fill
//   g       a group; move everything inside with transform="translate(x, y)"
//
// With d3 you set these with .attr():
//   svg.append('rect').attr('x', 20).attr('y', 20).attr('width', 100).attr('height', 50).attr('fill', 'steelblue');

import * as d3 from 'd3';

// ---------------------------------------------------------------------------
// 1. Draw shapes (SVG is 400 wide × 200 tall)
// ---------------------------------------------------------------------------
const shapes = d3.select('#shapes');

// TODO: a steelblue rectangle at x=20, y=20, 120 wide, 80 tall
shapes.append('rect')
  .attr('x', 20)
  .attr('y', 20)
  .attr('width', 120)
  .attr('height', 80)
  .attr('fill', 'steelblue');

// TODO: an orange circle centered at (220, 60) with radius 40
shapes.append('circle')
  .attr('cx', 220)
  .attr('cy', 60)
  .attr('r', 40)
  .attr('fill', 'orange');

// TODO: a gray line from (20, 160) to (380, 160), stroke-width 2
shapes.append('line')
  .attr('x1', 20)
  .attr('y1', 160)
  .attr('x2', 380)
  .attr('y2', 160)
  .attr('stroke', 'gray')
  .attr('stroke-width', 2);

// TODO: the text "y grows downward" at (20, 190)
shapes.append('text')
  .attr('x', 20)
  .attr('y', 190)
  .attr('text-anchor', 'start')
  .attr('fill', 'black')
  .text('y grows downward');


// ---------------------------------------------------------------------------
// 2. Groups and margins
// ---------------------------------------------------------------------------
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const marginsSvg = d3.select('#margins');

// TODO: append a <g> with transform `translate(${margin.left}, ${margin.top})`
// TODO: inside that g, draw a rectangle at x=0, y=0 that fills the inner area:
//       width  = 400 - margin.left - margin.right
//       height = 200 - margin.top - margin.bottom
//       Give it fill 'none' and a stroke so you can see the "plot area".
// Notice: (0, 0) inside the group is now 40px in and 20px down.
const plotArea = marginsSvg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

plotArea.append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 400 - margin.left - margin.right)
  .attr('height', 200 - margin.top - margin.bottom)
  .attr('fill', 'none')
  .attr('stroke', 'black');


// ---------------------------------------------------------------------------
// 3. Your first bar chart, by hand
// ---------------------------------------------------------------------------
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
const innerWidth = width - m.left - m.right;    // 440
const innerHeight = height - m.top - m.bottom;  // 210
const barGap = 12;
const barWidth = (innerWidth - barGap * (signups.length - 1)) / signups.length;
const pxPerSignup = 2.8; // 71 signups × 2.8 ≈ 199px, just under innerHeight

const chart = d3.select('#bar-chart')
  .append('g')
  .attr('transform', `translate(${m.left}, ${m.top})`);

// TODO: join `signups` to <rect> elements inside `chart`. For each bar:
//   x      = i * (barWidth + barGap)
//   width  = barWidth
//   height = d.value * pxPerSignup
//   y      = innerHeight - height     ← bars grow UP from the bottom, so y starts high
//   fill   = 'steelblue'

// TODO: join `signups` to <text> elements for the month labels under each bar:
//   x = i * (barWidth + barGap) + barWidth / 2, y = innerHeight + 20, text-anchor 'middle'
//   Hint: selectAll('text.month') and .attr('class', 'month') keep these separate from the value labels.

// Stretch: add the value above each bar, and a baseline <line> along the bottom.
// Reflect: which numbers here would break if the data changed? Scales (week 2) fix exactly that.
