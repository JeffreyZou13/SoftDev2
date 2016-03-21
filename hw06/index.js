/* Jeffrey Zou
*  SoftDev2 pd3
*  HW05 - The Best Defense Against Tyranny...
*  2016-03-21
*/

var democratData = [['Iowa', 44], ['New Hampshire', 24], ['Nevada', 35], ['South Carolina', 53],
 ['Alabama', 53], ['Arkansas', 32], ['Colorado', 66], ['Georgia', 102], ['Massachusetts', 91],
 ['Minnesota', 77], ['Oklahoma', 38], ['Tennessee', 67], ['Texas', 222], ['Vermont', 16], ['Virginia', 95],
 ['Kansas', 33], ['Louisiana', 51], ['Nebraska', 25], ['Maine', 25], ['Michigan', 127], ['Mississippi', 34],
 ['Florida', 198], ['Illinois', 135], ['Missouri', 64], ['North Carolina', 104], ['Ohio', 141]];

var democraticUnallocated = [['Arizona', 85], ['Idaho', 27], ['Utah', 37], ['Alaska', 20],
  ['New York', 291], ['Connecticut', 70], ['Delaware', 31], ['Maryland', 118],
  ['Hawaii', 34], ['Washington State', 118], ['Wisconsin', 96], ['Wyoming', 18],
  ['Pennsylvania', 210], ['Rhode Island', 33], ['Indiana', 92], ['West Virginia', 37],
  ['Kentucky', 61], ['Oregon', 74], ['California', 546], ['Montana', 27], ['New Jersey', 142],
  ['New Mexico', 43], ['North Dakota', 23], ['South Dakota', 25], ['District of Columbia', 45]];

d3.select('.chart')
  .selectAll('div')
    .data(democratData.concat(democraticUnallocated))
  .enter().append('div')
  .style('width', function(d) {
      return parseInt(d[1]) * 10 +'px';})
   .style('background-color', function(d) {
     if (democraticUnallocated.indexOf(d) == -1) {
       console.log(democraticUnallocated.indexOf(d[0]));
       return '#007FFF';
     }
     else {
       return '#01044B';
     }
   })
  .text(function(d) { return d; });

var change = function(e) {
  d3.select('.chart')
    .selectAll('div')
      //Later
}
