let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter( (name) => {
    return name.length > 0 && name.length != ''
});

employersNames = employersNames.map( (item) => {
    return item.toLowerCase().trim();
});



const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

function calcCash(own = 0) {    
    const everyCash = [...arguments];
    let total = own;
    for (let i = 0; i < everyCash[1]; i++) {
        total += +everyCash[1][i];
    }
    return total;
}

const money = calcCash(cash);

function makeBusiness(owner, cash, emp, director = 'Victor') {
    
    let sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);
    console.log('And we have a sponsors: ');
    console.log(sumSponsors);
    console.log('Note. Be careful with ' + eu[0] + ". It's a huge risk.");
}
makeBusiness('Sam', money, employersNames);