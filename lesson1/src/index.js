import employersNames from './first';
import {money, eu, rus} from './second';

class MakeBusiness {
    constructor(owner, cash, emp, director = 'Victor') {
        this.owner = owner;
        this.cash = cash;
        this.emp = emp;
        this.director = director;
    }
    consoleInfo() {
        let sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
        console.log('And we have a sponsors: ');
        console.log(...sumSponsors);
        console.log('Note. Be careful with ' + eu[0] + ". it`s a huge risk.");
    }
}
let makeBusiness = new MakeBusiness('Sam', money, employersNames);

makeBusiness.consoleInfo();