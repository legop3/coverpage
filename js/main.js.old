

// // module aliases
// var Engine = Matter.Engine,
//     Render = Matter.Render,
//     Runner = Matter.Runner,
//     Bodies = Matter.Bodies,
//     Composite = Matter.Composite;

// // create an engine
// var engine = Engine.create();

// // create a renderer
// var render = Render.create({
//     element: document.getElementById("gamebox"),
//     engine: engine,
//     options: {
//         background: '#00fffff',
//         wireframes: false
//     }
// });

// // create two boxes and a ground
// var boxA = Bodies.rectangle(450, 400, 80, 8);
// var boxB = Bodies.rectangle(450, 50, 8, 80);
// var boxC = Bodies.rectangle(450, 40, 8, 80);
// var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// // add all of the bodies to the world
// Composite.add(engine.world, [boxA, boxB, boxC, ground]);

// // run the renderer
// Render.run(render);


// var canvas = document.createElement('canvas'),
//     context = canvas.getContext('2d');

// canvas.width = 800;
// canvas.height = 600;

// document.body.appendChild(canvas);

// (function render() {
//     var bodies = Composite.allBodies(engine.world);

//     window.requestAnimationFrame(render);

//     context.fillStyle = '#fff';
//     context.fillRect(0, 0, canvas.width, canvas.height);

//     context.beginPath();

//     for (var i = 0; i < bodies.length; i += 1) {
//         var vertices = bodies[i].vertices;

//         context.moveTo(vertices[0].x, vertices[0].y);

//         for (var j = 1; j < vertices.length; j += 1) {
//             context.lineTo(vertices[j].x, vertices[j].y);
//         }

//         context.lineTo(vertices[0].x, vertices[0].y);
//     }

//     context.lineWidth = 1;
//     context.strokeStyle = '#999';
//     context.stroke();
// })();

// (function run() {
//     window.requestAnimationFrame(run);
//     Engine.update(engine, 1000 / 60);
// })();


// // create runner
// var runner = Runner.create();

// // run the engine
// Runner.run(runner, engine);
function dropdown() {
    if (document.getElementById("dropdown").classList.contains("dropdown-hide")){
        document.getElementById("dropdown").classList.remove("dropdown-hide")
        document.getElementById("dropdown").classList.add("dropdown-show")
        // document.getElementById("logo").classList.add("skew")
    } else {
        document.getElementById("dropdown").classList.remove("dropdown-show")
        document.getElementById("dropdown").classList.add("dropdown-hide")
        // document.getElementById("logo").classList.remove("skew")

    }
}

function coordinate(event) {
    var x = event.clientX
    var y = event.clientY
    // console.log(x, y)
    var animationspeed = Math.abs(x-(screen.width/2) + y-(screen.height/2))
    console.log(animationspeed)
    document.getElementById("logo").style.animationDuration = animationspeed + "ms"
}