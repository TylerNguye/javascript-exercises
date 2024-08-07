const findTheOldest = function(people) {
    return people.sort((a, b) => {
        const age1 = ("yearOfDeath" in a ? a.yearOfDeath : new Date().getFullYear()) - a.yearOfBirth
        const age2 = ("yearOfDeath" in b ? b.yearOfDeath : new Date().getFullYear()) - b.yearOfBirth
        return age1 > age2 ? -1 : 1
    })[0]
};
// Do not edit below this line
module.exports = findTheOldest;
