
const distanceFromHqInBlocks= function (number1){

    let number2=42
    if (number1<number2) {
        return number2 - number1
    }else{
        return number1-number2
    }
}
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(34)
console.log(50,42)

const distanceFromHqInFeet=function (number1){
    distanceFromHqInBlocks(number1);

return distanceFromHqInBlocks(number1) *264


}
distanceFromHqInFeet(43,42)
distanceFromHqInFeet(50,42)
const distanceTravelledInFeet = function(number1,number2) {
    if (number1<number2) {
        return (number2 - number1)*264
    }else{
        return (number1-number2)*264
    }
};
const calculatesFarePrice = function(start,destination) {
    let feetTraveled=distanceTravelledInFeet(start,destination)
    if (feetTraveled <=400) {
        return 0
    }else if (feetTraveled <=2000){
        feetTraveled-=400
        return feetTraveled * 0.02
    }else if (feetTraveled <=2500){
        return 25
    }else {
    return 'cannot travel that far'
}
}