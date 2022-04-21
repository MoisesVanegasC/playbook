console.log("\n");
const repo = {
    name: "NodeJS",
    author: "MoisesVanegasC",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 210,
    forks: 150,
    issues_open: 20,
    issues_close: 190,
    getTotalIssues: function (){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function (){
        return `This repository ${this.name} was created by ${this.author}`
    }
}
console.log("Nombre del repo: " + repo.name)
console.log("Issues Totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo(),"\n")

const issue = {
    title : "JavaScript 2.0",
    repositoryNameAssociated: "NodeJS",
    status: "Active",
    numberofComments: 23,
    labels: 217,
    author: "GregC",
    dateCreated: "January 26th , 2022",
    lastUpdated: "Yesterday",
    getTitleAndAuthor: function (){
        return `Title: ${this.title} ,Author: ${this.author}`
    },
    getGeneralInfo: function (){
        return `This issue ${this.title} was created by ${this.author}`
    }
}

console.log("Nombre del issue: " + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo());

const pull_request = {
    title: "Code Comments",
    branchName: "Hello",
    dateCreated: "February 24th 2022",
    status: "Active",
    repositoryNameAssociated: "NodeJS",
    getStatus: function () {
        return `Status: ${this.status}`
    },
    getTitleandAuthor: function (){
        return `Title: ${this.title} ,Author: ${this.branchName}`
    },
}