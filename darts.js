'use strict';

class Darts {
    constructor(arrayNames) {
        this.players = this.initPlayersMap(arrayNames);
    }

    throw(points, grade) {
        if (typeof(points) === 'number' && typeof(grade) === 'number') {
            let result = points * grade;
            return result;
        } else {
            throw  new TypeError('wrong type, enter Number type arguments');
        }

    }

    getScore(playerName) {
        if (this.players.has(playerName)) {
            return this.players.get(playerName);
        }
        else {
            throw new Error('there is no such key');
        }
    }

    setScore(playerName, points, grade) {
        if (this.players.has(playerName)) {
            let newScore = this.getScore(playerName) + this.throw(points, grade);
            this.players.set(playerName, newScore);
            return newScore;
        }
        else {
            throw new Error('there is no such key');
        }

    }

    initPlayersMap(arrayNames) {
        let playersMap = new Map();
        arrayNames.forEach(function (item) {
            playersMap.set(item, 0);
        });
        return playersMap;
    }
}

module.exports = Darts;

let tmp = new Darts(["Anna", "Misha", "Oleg"]);
tmp.setScore("Anna", 20, 2);
tmp.getScore("Anna");