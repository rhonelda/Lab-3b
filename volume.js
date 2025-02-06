// 3. Volume of Equilateral Triangle Prism
function volumeOfEquilateralTrianglePrism(side, height) {
    let areaOfTriangle = (Math.sqrt(3) / 4) * Math.pow(side, 2);
    return areaOfTriangle * height;
}