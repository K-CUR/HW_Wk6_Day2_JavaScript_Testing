const Park = function (name, ticketPrice, collectionOfDinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.collectionOfDinosaurs.push(dinosaur);
}

// Park.prototype.removeDinosaur = function(dinosaur){
//     position = this.collectionOfDinosaurs.indexOf(dinosaur);
//     this.collectionOfDinosaurs.splice(position, 1);
// }

Park.prototype.removeDinosaur = function(){
    this.collectionOfDinosaurs.pop();
}

Park.prototype.findMostPopularDinosaur = function(){
    let visitorNumbers = [];
    for (let dinosaur of this.collectionOfDinosaurs){
        visitorNumbers.push(dinosaur.guestsAttractedPerDay);
    }
    visitorNumbers = visitorNumbers.sort((a,b)=>b-a);
    
    for (let dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.guestsAttractedPerDay === visitorNumbers[0])
    return dinosaur.species
    }
}




module.exports = Park;