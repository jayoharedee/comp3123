const angle_Type = (angle) => {
    let message = (angle > 0 && angle < 90) ? "Acute angle" :
    (angle == 90) ? 'Right angle' :
    (angle > 90 && angle < 180) ? 'Obtuse angle':
    (angle == 180) ? 'Straight angle' : ""

    return message;
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))