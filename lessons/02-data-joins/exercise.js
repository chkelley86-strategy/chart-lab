// Lesson 02 · Data joins
//
// The pattern you'll use in every chart:
//
//   d3.select(container)
//     .selectAll('li')        // 1. select the elements that SHOULD match the data (none exist yet — that's fine)
//     .data(myArray)          // 2. bind the data
//     .join('li')             // 3. create missing elements, remove extras, return all of them
//     .text(d => d);          // 4. set properties from each item's data (d = that item)
//
// Inside any method you can pass a function instead of a value:
//   (d, i) => ...   d is the data item, i is its index.
//
// Keys: .data(myArray, d => d.id) tells d3 how to match items to elements,
// so when the array is reordered or shrinks, the right elements move or leave.

import * as d3 from 'd3';

// ---------------------------------------------------------------------------
// 1. One element per data item
// ---------------------------------------------------------------------------
const chartTypes = ['Bar', 'Line', 'Area', 'Scatter', 'Donut'];

// TODO: create one <li> per chart type inside #chart-types, with the name as text.
d3.select('#chart-types').selectAll('li').data(chartTypes).join('li').text(d => d);

// ---------------------------------------------------------------------------
// 2. Data drives size
// ---------------------------------------------------------------------------
const signups = [
  { month: 'January', value: 42 },
  { month: 'February', value: 58 },
  { month: 'March', value: 35 },
  { month: 'April', value: 71 },
  { month: 'May', value: 64 },
];

// TODO: inside #html-bars, create one <div class="bar-row"> per item.
//       Inside each row, append:
//         - a <span class="label"> with the month
//         - a <div class="bar"> whose width is value * 5 pixels (e.g. '210px')
// Hint: after .join('div'), use .attr('class', 'bar-row'), then
//       row.append('span')... and row.append('div')... on the same selection.
//       Save the joined selection in a const so you can append to it twice.
d3.select('#html-bars')
  .selectAll('div')
  .data(signups)
  .join('div')
  .attr('class', 'bar-row');

rows.append('span')
  .attr('class', 'label')
  .text(d => d.month);

rows.append('div')
  .attr('class', 'bar')
  .style('width', d => `${d.value * 5}px`);

// ---------------------------------------------------------------------------
// 3. Keep the page in sync as data changes
// ---------------------------------------------------------------------------
let items = [
  { id: 1, name: 'Tokens' },
  { id: 2, name: 'Axes' },
  { id: 3, name: 'Tooltips' },
];
let nextId = 4;

function render() {
  // TODO: join `items` to <li> elements in #live-list, using d => d.id as the key,
  //       and set each li's text to d.name.
  //
  // Stretch: use the long form of join to see enter vs. update:
  //   .join(
  //     enter => enter.append('li').classed('entering', true),
  //     update => update.classed('entering', false),
  //     exit => exit.remove()
  //   )
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
