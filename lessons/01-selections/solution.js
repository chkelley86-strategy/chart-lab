// Lesson 01 · Selections — solution
import * as d3 from 'd3';

// 1. Change text
d3.select('#greeting').text('Hello, d3.');

// 2. Style many elements at once
d3.selectAll('#tools li').style('color', 'steelblue');

// 3. Add a class to one element
d3.select('#skills li:nth-child(2)').classed('highlight', true);

// 4. Append a new element
d3.select('#todo').append('li').text('Learn data joins');

// 5. Respond to clicks
let on = false;
d3.select('#toggle-button').on('click', () => {
  on = !on;
  d3.selectAll('#toggle-list li').classed('highlight', on);
});
