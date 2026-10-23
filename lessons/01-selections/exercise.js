// Lesson 01 · Selections
//
// Key ideas:
//   d3.select('css selector')     → the FIRST matching element
//   d3.selectAll('css selector')  → ALL matching elements
//   Then chain methods to change them:
//     .text('...')           set the text
//     .style('color', 'red') set a CSS property
//     .attr('id', 'x')       set an HTML/SVG attribute
//     .classed('name', true) add (true) or remove (false) a class
//     .append('li')          add a child element and select it
//     .on('click', fn)       run fn when the element is clicked
//
// Each method returns the selection, so you can chain them:
//   d3.select('#thing').text('Hi').style('color', 'blue');

import * as d3 from 'd3';

// 1. Change the text of #greeting to "Hello, d3."
d3.select('#greeting').text('Hello, d3.');

// 2. Make every <li> in #tools the color steelblue.
d3.selectAll('#tools li').style('color', 'steelblue');


// 3. Add the "highlight" class to the SECOND <li> in #skills only.
//    Hint: CSS selectors work here, e.g. 'li:nth-child(2)'.
d3.select('#skills li:nth-child(2)').classed('highlight', true);


// 4. Append a new <li> to #todo with the text "Learn data joins".
d3.select('#todo').append('li').text('Learn data joins');



// 5. When #toggle-button is clicked, toggle "highlight" on every <li> in #toggle-list.
//    Hint: .classed('highlight', function () { return !d3.select(this).classed('highlight'); })
//    Simpler hint: keep a variable `on` that flips between true and false.
d3.select('#toggle-button').on('click', function () {
  d3.selectAll('#toggle-list li').classed('highlight', function () {
    return !d3.select(this).classed('highlight');
  });
});