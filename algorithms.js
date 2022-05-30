
export function drawLineDDA(x1, y1, x2, y2) {


    const xLine = []
    const yLine = []


    let dx = Math.abs(x2 - x1)
    let dy = Math.abs(y2 - y1)
    let step;
    if (dx >= dy)
        step = dx;
    else
        step = dy;

    dx = dx / step;
    dy = dy / step;
    let xi, yi;
    xi = x1;
    yi = y1;
    let i = 1;
    xLine.push(xi)
    yLine.push(yi)
    while (i <= step) {

        xi = xi + dx;
        yi = yi + dy;
        i = i + 1;
        xLine.push(Math.round(xi))
        yLine.push(Math.round(yi))

    }


    const resultado = { 'x': xLine, 'y': yLine }

    return resultado

}
export function drawLineBasic(x1, y1, x2, y2) {
    const xLine = []
    const yLine = []


    const dx = Math.abs(x2 - x1)
    const dy = Math.abs(y2 - y1)
    const m = dy / dx
    if (m >= 0 && m <= 1) {
        let xi
        let yi
        let i = x1
        yi = y1
        while (i <= x2) {
            xi = i;
            xLine.push(xi)
            yLine.push(yi)
            yi = Math.round(yi + m);

            i = i + 1;
        }
    }

    const resultado = { 'x': xLine, 'y': yLine }

    return resultado

}

export function drawLineBres(x1, y1, x2, y2) {
    const xLine = []
    const yLine = []


    const m_new = 2 * (y2 - y1)
    let slope_error_new = m_new - (x2 - x1);
    let y = y1
    for (let x = x1; x <= x2; x++) {

        yLine.push(y)
        xLine.push(x)

        // Add slope to increment angle formed
        slope_error_new += m_new;

        // Slope error reached limit, time to
        // increment y and update slope error.
        if (slope_error_new >= 0) {
            y++;
            slope_error_new -= 2 * (x2 - x1);
        }
    }


    const resultado = { 'x': xLine, 'y': yLine }
    console.log(resultado)


    return resultado

}
function drawCircle(x0, y0, x, y) {
    const xLine = []
    const yLine = []
    xLine.push(x0 + x)
    yLine.push(y0 + y)

    xLine.push(x0 - x)
    yLine.push(y0 + y)

    xLine.push(x0 - x)
    yLine.push(y0 - y)

    xLine.push(x0 + x)
    yLine.push(y0 - y)


    xLine.push(x0 + y)
    yLine.push(y0 + x)

    xLine.push(x0 - y)
    yLine.push(y0 + x)

    xLine.push(x0 + y)
    yLine.push(y0 - x)

    xLine.push(x0 - y)
    yLine.push(y0 - x)

    const resultado = { 'x': xLine, 'y': yLine }


    return resultado

}



export function drawCircleMidPoint(x0, y0, r) {
    let xLine = []
    let yLine = []

    let x = r
    let y = 0

    let puntos = drawCircle(x0, y0, x, y)

    xLine = xLine.concat(puntos.x)
    yLine = yLine.concat(puntos.y)

    let p = 1 - r

    while (x > y) {
        y += 1


        if (p <= 0) {
            p = p + 2 * y + 1

        }
        else {
            x -= 1
            p = p + 2 * y - 2 * x + 1
        }
        let puntos = drawCircle(x0, y0, x, y)

        xLine = xLine.concat(puntos.x)
        yLine = yLine.concat(puntos.y)

    }
    const resultado = { 'x': xLine, 'y': yLine }
    return resultado


}




export function drawCircleBres(x0, y0, r) {
    let xLine = []
    let yLine = []

    let x = 0
    let y = r
    let d = 3 - (2 * r)

    let puntos = drawCircle(x0, y0, x, y)

    xLine = xLine.concat(puntos.x)
    yLine = yLine.concat(puntos.y)

    while (y >= x) {
        x++;
        if (d > 0) {
            y--;
            d = d + 4 * (x - y) + 10;
        }
        else {
            d = d + 4 * x + 6;
        }

        puntos = drawCircle(x0, y0, x, y)

        xLine = xLine.concat(puntos.x)
        yLine = yLine.concat(puntos.y)


    }



    const resultado = { 'x': xLine, 'y': yLine }
    console.log(puntos)


    return resultado


}


export function calcularLinea(x1, y1, x2, y2, tipo) {

    let resultado

    if (tipo == 'basic') {
        resultado = drawLineBasic(x1, y1, x2, y2)

    }


    if (tipo == 'bres') {
        resultado = drawLineBres(x1, y1, x2, y2)
    }
    if (tipo == 'dda') {
        resultado = drawLineDDA(x1, y1, x2, y2)
    }

    console.log(resultado)
    return resultado
}

export default calcularLinea