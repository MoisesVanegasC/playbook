const profile = {
    name: "Esteban",
    carmodel: "Volskwagen Jetta",
    plate: "5FLXYZ",
    trips: 2.224,
    rating: 4.7,
    years: 2,
    languages: "English and Spanish",
    from: "Mexico City, Mexico",
    getDriverInfo: function() {
        return `My name is ${this.name}, i drive a ${this.carmodel} with plate ${this.plate}, I'm from ${this.from} and i speak ${this.languages}.`
    },
    getDriverInfo2: function() {
        return `I've made ${this.trips} trips in ${this.years} working in Uber.`
    }
}
console.log(profile.getDriverInfo());
console.log(profile.getDriverInfo2());

const trip = {
    payment_method: "Cash",
    total: "$24.39",
    type: "UberX",
    from: "El Rosario",
    to: "Av. Vallejo",
    driver_name: "Esteban",
    carmodel:"Volskwagen Jetta",
    day:"Today",
    time:"3:45 PM",
    getTripInfo: function(){
        return `This ${this.type} is driven by ${this.driver_name} in a ${this.carmodel} from ${this.from} to ${this.to}, ${this.day} at ${this.time}.`
    },
    getPaymentInfo: function() {
        return `This ${this.type} trip will be paid in ${this.payment_method} with a total of ${this.total}.`
    }
}
console.log(trip.getPaymentInfo());
console.log(trip.getTripInfo());