/* Jeffrey Zou
*  SoftDev2 pd3
*  HW05 - The Best Defense Against Tyranny...
*  2016-03-21
*/

var data = [4, 8, 15, 16, 23, 42];

d3.select('.chart')
  .selectAll('div')
    .data(data)
  .enter().append('div')
  .style('width', function(d) {
      return d3.scale.linear()
                .domain([0, d3.max(data)])
                .range([0,500]) +'px';})
  .text(function(d) { return d; });
