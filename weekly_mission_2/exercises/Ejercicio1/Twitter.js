const user = {
    user: "Moises",
    username: "@Masca",
    following: 125,
    followers: 268,
    date_created: "June 2014",
    birth_date: "17/September/1995",
    age: 26,
    getGeneralInfo: function() {
        return `This account name is ${this.user} was created in ${this.date_created} with ${this.followers} followers and ${this.following} following`
    }
}
console.log("\n",user.getGeneralInfo());

const trending_topic = {
    total_tweets: 73.052,
    users_interac: 29.608,
    valuation: 627.865,
    impacts: 364.330,
    getGeneralInfo: function() {
        return `This trend has impacted to ${this.impacts} users and has a valuation of ${this.valuation}.`
    },
    getMoreInfo: function() {
        return `This trend has an interaction with users of ${this.users_interac} and a total of tweets of ${this.total_tweets}.`
    }
}
console.log("\n",trending_topic.getGeneralInfo());
console.log(trending_topic.getMoreInfo());

const hashtag = {
    total_tuits: 4483,
    users: 2599,
    reach: 7.867,
    retuits: 2298,
    answers: 2012,
    getGeneralInfo: function() {
        return `This hasthtag has been retweeted ${this.retuits} and has been replied ${this.answers} with ${this.users} users.`
    },
    getMoreInfo: function() {
        return `This hashtag has reached ${this.reach} with ${this.total_tuits} total tweets.`
    }
}
console.log("\n",hashtag.getGeneralInfo());
console.log(hashtag.getMoreInfo());