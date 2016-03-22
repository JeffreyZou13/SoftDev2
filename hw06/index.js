/* Jeffrey Zou
*  SoftDev2 pd3
*  HW06 - The Best Defense Against Tyranny...
*  2016-03-22
*/

var democratData = [['Iowa', 44], ['New Hampshire', 24], ['Nevada', 35], ['South Carolina', 53],
 ['Alabama', 53], ['Arkansas', 32], ['Colorado', 66], ['Georgia', 102], ['Massachusetts', 91],
 ['Minnesota', 77], ['Oklahoma', 38], ['Tennessee', 67], ['Texas', 222], ['Vermont', 16], ['Virginia', 95], ['American Samoa', 6],
 ['Kansas', 33], ['Louisiana', 51], ['Nebraska', 25], ['Maine', 25], ['Michigan', 127], ['Mississippi', 34], ['Northern Marianas', 6],
 ['Florida', 198], ['Illinois', 135], ['Missouri', 64], ['North Carolina', 104], ['Ohio', 141]];

var democraticUnallocated = [['Arizona', 85], ['Idaho', 27], ['Utah', 37], ['Alaska', 20],
  ['New York', 291], ['Connecticut', 70], ['Delaware', 31], ['Maryland', 118],
  ['Hawaii', 34], ['Washington State', 118], ['Wisconsin', 96], ['Wyoming', 18],
  ['Pennsylvania', 210], ['Rhode Island', 33], ['Indiana', 92], ['Guam', 12], ['West Virginia', 37],
  ['Kentucky', 61], ['Oregon', 74], ['Virgin Islands', 12], ['Puerto Rico', 67], ['California', 546], ['Montana', 27], ['New Jersey', 142],
  ['New Mexico', 43], ['North Dakota', 23], ['South Dakota', 25], ['District of Columbia', 45]];

var repData = [["California", 172], ["Texas", 155], ["Florida", 99], ["New York", 95],
  ["Georgia", 76], ["North Carolina", 72], ["Pennsylvania", 71], ["Illinois", 69],
  ["Ohio", 66], ["Michigan", 59], ["Tennessee", 58], ["Arizona", 58], ["Indiana", 57], ["Missouri", 52],
  ["New Jersey", 51], ["Alabama", 50], ["South Carolina", 50], ["Virginia", 49], ["Kentucky", 46], ["Louisiana", 46],
  ["Washington", 44], ["Oklahoma", 43], ["Massachusetts", 42], ["Wisconsin", 42], ["Mississippi", 40], ["Utah", 40], ["Arkansas", 40],
  ["Kansas", 40], ["Minnesota", 38], ["Maryland", 38], ["Colorado", 37], ["Nebraska", 36], ["West Virginia", 34],
  ["Idaho", 32], ["Iowa", 30], ["Nevada", 30], ["South Dakota", 29], ["Wyoming", 29], ["Oregon", 28], ["Connecticut", 28],
  ["North Dakota", 28], ["Alaska", 28], ["Montana", 27], ["New Mexico", 24], ["New Hampshire", 23],
  ["Puerto Rico", 23], ["Maine", 23], ["Hawaii", 19], ["District of Columbia", 19], ["Rhode Island", 19], ["Vermont", 16],
  ["Delaware", 16], ["Virgin Islands", 9], ["American Samoa", 9], ["Northern Marianas", 9], ["Guam", 9]];

var repAllocated = ["Iowa", "New Hampshire", "South Carolina", "Nevada", "Alabama", "Alaska", "Arkansas", "Georgia", "Massachussets", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Kentucky", "Louisiana", "Maine", "Puerto Rico", "Hawaii", "Idaho", "Michigan", "Mississippi", "District of Columbia", "Wyoming", "Florida", "Illinois", "Missouri", "North Carolina", "Northern Marianas", "Ohio"];



var stuff = d3.select('.chart')
  .selectAll('div')
    .data(democratData.concat(democraticUnallocated))
  .enter().append('div')
  .style('width', function(d) {
      return parseInt(d[1]) * 15 +'px';})
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


var change = function () {
  console.log('changing');
  var selected = d3.select('.chart')
    .selectAll('div')
      .data(repData);
  selected.exit().remove();
  selected.enter().append('div')
  .style('width', function(d) {
    return d[1] * 10 + 'px';
  })
  .style('background-color', function(d) {
    if (repAllocated.indexOf(d[0]) != -1) {
      return '#990000';
    }
    else {
      return '#8B0000';
    }
  })
}


document.getElementsByClassName('chart')[0].addEventListener('click', change);
