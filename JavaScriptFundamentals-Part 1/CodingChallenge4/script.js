const calTip = (bill) => {
    var tip = bill >= 50 && bill <= 300 ? bill * 0.2 : bill * 0.15;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
}

const bills = [275, 40, 430];

bills.forEach(calTip);
