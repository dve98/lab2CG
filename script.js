import { drawLineBasic, drawLineBres, drawLineDDA, drawCircleMidPoint } from "./algorithms.js";
const WIDTH = 800;
const HEIGHT = WIDTH;
const BSIZE = 10;
const BNUM = HEIGHT / BSIZE




function sketch(processing) {

  processing.setup = function () {
    processing.frameRate(2); // fps
    processing.size(WIDTH, HEIGHT);
  }
  processing.drawCanvas = function (world) {

    for (let i = 0; i < BNUM; i += 1) {
      for (let j = 0; j < BNUM; j += 1) {
        processing.fill(84, 84, 69);
        processing.rect(j * BSIZE, i * BSIZE, BSIZE, BSIZE)

      }
    }
    const form = document.getElementById('datos');

    const tipo = form.elements['tipo'].value;
    const x1 =parseInt(form.elements['x1'].value);  
    const x2 =parseInt(form.elements['x2'].value);  
    const y1 =parseInt(form.elements['y1'].value);  
    const y2 =parseInt(form.elements['y2'].value);  
    const radio =parseInt(form.elements['radio'].value);  


    let linea;
    if (tipo == 'cMidp') {
      linea = drawCircleMidPoint(x1, y1, radio)
      
    }
    if (tipo == 'lBasic') {
      linea = drawLineBasic(x1, y1, x2,y2)
      
    }
    if (tipo == 'lDDA') {
      linea = drawLineDDA(x1, y1, x2,y2)
      
    }
    if (tipo == 'lBres') {
      linea = drawLineBres(x1, y1, x2,y2)
      
    }
    if (tipo == 'cBres') {
      linea = drawCircleMidPoint(x1, y1, radio)
      
    }



    let contador = linea.x.length

    while (contador >= 0) {
      const x = linea.x
      const y = linea.y


      processing.fill(255, 255, 204);
      processing.rect(x[contador] * BSIZE, y[contador] * BSIZE, BSIZE, BSIZE) // Draw diagonal line
      contador -= 1
    }

  }
  processing.onTic = function (world) {
  }

  processing.onMouseEvent = function (world, event) {
    return world;
  }

  // ******************** De aquí hacia abajo no debe cambiar nada. ********************

  // Esta es la función que pinta todo. Se ejecuta 60 veces por segundo. 
  // No cambie esta función. Su código debe ir en drawGame
  processing.draw = function () {
    processing.drawCanvas(processing.state);
    processing.state = processing.onTic(processing.state);
  };
  // Esta función se ejecuta cada vez que presionamos una tecla. 
  // No cambie esta función. Su código debe ir en onKeyEvent
  processing.keyPressed = function () {
    processing.state = processing.onKeyEvent(processing.state, processing.keyCode);
  }
  // Esta función se ejecuta cada vez movemos el mouse. 
  // No cambie esta función. Su código debe ir en onKeyEvent
  processing.mouseMoved = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "move", mouseX: processing.mouseX, mouseY: processing.mouseY });
  }

  // Estas funciones controlan los eventos del mouse. 
  // No cambie estas funciones. Su código debe ir en OnMouseEvent
  processing.mouseClicked = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "click", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mouseDragged = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "drag", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mousePressed = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "press", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mouseReleased = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "release", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }
  // Fin de los eventos del mouse


}

const canvas = document.getElementById("canvas");
const instance = new Processing(canvas, sketch);