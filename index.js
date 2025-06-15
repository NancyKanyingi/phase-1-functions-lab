// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
   if(blockNumber>42)
    return blockNumber-42
}
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(blockNumber){
    if(blockNumber<42)
    return 42-blockNumber

}
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start,destination){
    if(start<destination){
        return (destination-start)*264;
    }
else{
    return(start-destination)*264;
}
console.log(distanceTravelledInFeet(3,2));
}
function calculatesFarePrice(start, destination) {
  const distance = Math.abs(destination - start) * 264;

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
