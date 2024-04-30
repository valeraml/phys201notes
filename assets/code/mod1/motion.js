/////////////////////////////////////
//linear motion
////////////////////////////////////

var glb_size = 8
var bound_box = [-glb_size,glb_size,glb_size,-glb_size]

var linear_board = JXG.JSXGraph.initBoard('linear_jxgbox', {
  boundingbox: [-1, 1, 10, -1],
  axis: false
});

// Create a slider for controlling the position
var linear_slider = linear_board.create('slider', [[0, -0.5], [8, -0.5], [0, 0, 9]]);

// Create a line
var line = linear_board.create('line', [[0, 0], [8, 0]]);

// Create tick marks along the line
for (var i = 0; i <= 8; i++) {
  var tick = linear_board.create('point', [i, 0], {visible: false});
  linear_board.create('ticks', [line, tick], {drawLabels: true, label: {offset: [0, -10]}});
}

// Create a point on the line
var point = linear_board.create('glider', [function() {
  return linear_slider.Value();
}, 0, line], {name: 'P'});

////////////////////////////////////
// proj motion
////////////////////////////////////

var proj_board = JXG.JSXGraph.initBoard('proj_jxgbox', {
  boundingbox: [-1, 10, 10, -1],
  axis: true
});

// Create a slider for controlling time
var proj_slider = proj_board.create('slider', [[0, 9], [9, 9], [0, 0, 2]]);
var v0 = 10
var theta = 45 * Math.PI / 180;
var g = 9.8

var proj_curve = proj_board.create('curve',
    [function(t){ return v0*Math.cos(theta)*t;},
     function(t){ return v0*Math.sin(theta)*t - 0.5*g*t*t;},
      0, 5]
);

var proj_point = proj_board.create('glider', [function() {
  return v0*Math.cos(theta)*proj_slider.Value();
}, function() {
  return v0*Math.sin(theta)*proj_slider.Value() - 0.5 * g * Math.pow(proj_slider.Value(), 2);
}, proj_curve], {name: 'P'});
/*
// Function to launch the projectile
function launchProjectile() {
  var initialVelocity = 10
  var launchAngle = 45
  
  var radianAngle = launchAngle * Math.PI / 180; // Convert to radians
  var g = 9.8; // Acceleration due to gravity
  
  // Calculate the x and y coordinates of the projectile
  var x = initialVelocity * Math.cos(radianAngle) * proj_slider.Value();
  var y = initialVelocity * Math.sin(radianAngle) * proj_slider.Value() - 0.5 * g * Math.pow(proj_slider.Value(), 2);
  
  // Update the position of the point
  point.setPosition(JXG.COORDS_BY_USER, [x, y]);
}

// Create a point representing the projectile
var point = proj_board.create('point', [0, 0], {name: 'Projectile'});
*/
/////////////////////////////////////
// circular motion
//////////////////////////////////////

var circular_board = JXG.JSXGraph.initBoard('circular_jxgbox',{
    boundingbox:  bound_box,
    axis: true
});
var cir_slider = circular_board.create('slider', [[-6, -6], [5.5, -6], [0, 0, 2*Math.PI]]);
      
      // Create a point on the circle
var circle = circular_board.create('circle', [[0, 0], 4]);
var point = circular_board.create('glider', [function() {
        return 3*Math.cos(cir_slider.Value());
      }, function() {
        return 3*Math.sin(cir_slider.Value());
      }, circle], {name: 'P'});

//////////////////////////////////////
//Rotational motion
//////////////////////////////////////

var rot_board = JXG.JSXGraph.initBoard('rot_jxgbox', {
    boundingbox: bound_box,
    keepaspectratio: false,
    axis: false
  });
  
  var view = rot_board.create('view3d',
    [[-6, -3], [8, 8],
    [[-5, 5], [-5, 5], [-5, 5]]],
    {
        xPlaneRear: {visible: false},
        yPlaneRear: {visible: false},
        zPlaneRear: {visible: false},
        xAxis: {visible: false},
        yAxis: {visible: false},
        zAxis: {visible: false}
  
    });
  
    var point_attr = { withLabel: false, label: { offset: [5, 5] } },
    // Cube
    p = [], // Vertices of the cube
    faces = [],
  
    // Icosahedron
    i, j,
    phi = (1 + Math.sqrt(5)) * 0.5,
    pol_attr = { borders: { strokeWidth: 0.5 }, fillColor: 'red' },
    q = [],
    f = [];
  
  if (true) {
    // Cube
    i = phi;
    p.push(view.create('point3d', [-i, -i, -i], point_attr).element2D);
    p.push(view.create('point3d', [-i, i, -i], point_attr).element2D);
    p.push(view.create('point3d', [i, i, -i], point_attr).element2D);
    p.push(view.create('point3d', [i, -i, -i], point_attr).element2D);
  
    p.push(view.create('point3d', [-i, -i, i], point_attr).element2D);
    p.push(view.create('point3d', [-i, i, i], point_attr).element2D);
    p.push(view.create('point3d', [i, i, i], point_attr).element2D);
    p.push(view.create('point3d', [i, -i, i], point_attr).element2D);
  
    faces.push(rot_board.create('polygon', [p[0], p[1], p[2], p[3]]));
    faces.push(rot_board.create('polygon', [p[4], p[5], p[6], p[7]]));
    faces.push(rot_board.create('polygon', [p[0], p[1], p[5], p[4]]));
    faces.push(rot_board.create('polygon', [p[2], p[3], p[7], p[6]]));
  
    faces.push(rot_board.create('polygon', [p[0], p[3], p[7], p[4]]));
    faces.push(rot_board.create('polygon', [p[1], p[2], p[6], p[5]]));
  }