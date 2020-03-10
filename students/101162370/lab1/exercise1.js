//EX-1

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }

//console.log(titleCase("George Brown College"));


//EX-3

function str3(str){
    if (str.length > 2){
        return str.slice(-3) + str.slice(0, -3);
    } else {
        return str;
    }
}

//console.log(str3("Python"));
//console.log(str3("JavaScript"));
//console.log(str3("Hi"));

//EX-4

function typeOfAngle(angle){
    if (angle >= 0 && angle < 90){
        return "Acute Angle";
    }
    if (angle === 90){
        return "Right Angle";
    }
    if (angle > 90 && angle < 180){
        return "Obtuse Angle";
    }
    if (angle === 180){
        return "Straight Angle";
    }
}

//console.log(typeOfAngle(47))
//console.log(typeOfAngle(90))
//console.log(typeOfAngle(145))
//console.log(typeOfAngle(180))