const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

function calcCash(own = 0) {      
    return own.reduce( (s,num) => {
        return s + num;
    }, 0);
}

const money = calcCash(cash); 

export {money, eu, rus};