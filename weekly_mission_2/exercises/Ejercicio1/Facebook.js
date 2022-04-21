const user = {
    email:"pepe.peca@gmail.com",
    gender:"male",
    birth_date:"16 September 2001",
    name:"Moises",
    last_name:"Vanegas",
    location:"Mexico",
    getEmailName: function () {
        return `Username: ${this.name} ${this.last_name} , Email: ${this.email} .`
    },
    getGenLocation: function () {
        return `Gender: ${this.gender} , Location: ${this.location}.`
    }
}
console.log("\n",user.getEmailName());
console.log(user.getGenLocation());

const post = {
    date:"30 December 2021",
    tot_reactions: 428,
    comments: 149,
    shares:53,
    reach: 524,
    getInteractions: function() {
        return this.tot_reactions + this.comments + this.shares
    }
}
console.log("\nDate of Creation: " + post.date);
console.log("Total Interactions in the post: " + post.getInteractions());

const biography = {
    name: "Moises",
    last_name: "Vanegas",
    education: "ESCOM IPN",
    lives: "Mexico City",
    from: "Mexico",
    relationship: "Single",
    followers: 173,
    employement: "Pull & Bear",
    friends: 1290,
    getGeneralInfo: function(){
        return `My name is ${this.name} ${this.last_name}, i live in ${this.lives} actually i'm working in ${this.employement} and studying at ${this.education} and i'm ${this.relationship}.`
    },
    getFriendsFollowers: function(){
        return `Friends: ${this.friends}, Followers: ${this.followers}`
    }
}
console.log("\n",biography.getGeneralInfo());
console.log(biography.getFriendsFollowers());