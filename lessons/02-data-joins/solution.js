// Lesson 02 · Data joins — solution
import * as d3 from 'd3';

// 1. One element per data item
const chartTypes = ['Bar', 'Line', 'Area', 'Scatter', 'Donut'];

d3.select('#chart-types')
  .selectAll('li')
  .data(chartTypes)
  .join('li')
  .text(d => d);

// 2. Data drives size
const signups = [
  { month: 'January', value: 42 },
  { month: 'February', value: 58 },
  { month: 'March', value: 35 },
  { month: 'April', value: 71 },
  { month: 'May', value: 64 },
];

const rows = d3.select('#html-bars')
  .selectAll('div')
  .data(signups)
  .join('div')
  .attr('class', 'bar-row');

rows.append('span').attr('class', 'label').text(d => d.month);
rows.append('div').attr('class', 'bar').style('width', d => `${d.value * 5}px`);

// 3. Keep the page in sync as data changes
let items = [
  { id: 1, name: 'Tokens' },
  { id: 2, name: 'Axes' },
  { id: 3, name: 'Tooltips' },
];
let nextId = 4;

function render() {
  d3.select('#live-list')
    .selectAll('li')
    .data(items, d => d.id)
    .join(
      enter => enter.append('li').classed('entering', true),
      update => update.classed('entering', false),
      exit => exit.remove()
    )
    .text(d => d.name); // join() also reorders the elements to match the array, so Shuffle works
}

d3.select('#add').on('click', () => {
  items.push({ id: nextId, name: `Item ${nextId}` });
  nextId += 1;
  render();
});

d3.select('#remove').on('click', () => {
  items = items.slice(1);
  render();
});

d3.select('#shuffle').on('click', () => {
  items = d3.shuffle(items.slice());
  render();
});

render();
