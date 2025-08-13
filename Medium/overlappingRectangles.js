/*
Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles.

Examples
overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
) ➞ 6

overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
) ➞ 10

overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
) ➞ 5

Notes
Coordinates can be positive or negative integers.
*/

function overlappingRectangles(rect1, rect2 ) {
  const rect1_x_start = Math.min(rect1[0].x, rect1[1].x);
  const rect1_y_start = Math.min(rect1[0].y, rect1[1].y);
  const rect1_x_end = Math.max(rect1[0].x, rect1[1].x);
  const rect1_y_end = Math.max(rect1[0].y, rect1[1].y);

  const rect2_x_start = Math.min(rect2[0].x, rect2[1].x);
  const rect2_y_start = Math.min(rect2[0].y, rect2[1].y);
  const rect2_x_end = Math.max(rect2[0].x, rect2[1].x);
  const rect2_y_end = Math.max(rect2[0].y, rect2[1].y);

  const overlapWidth = Math.max(0, Math.min(rect1_x_end, rect2_x_end) - Math.max(rect1_x_start, rect2_x_start));
  const overlapHeight = Math.max(0, Math.min(rect1_y_end, rect2_y_end) - Math.max(rect1_y_start, rect2_y_start));

  return overlapWidth * overlapHeight;
}

exports.solution = overlappingRectangles;