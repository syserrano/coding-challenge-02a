// product name
const productName = "Star Paper"
console.log(`The product is called ${productName}.`)

let costPerUnit = 2.5;

const BASE_PRICE = 7;

let discountRate = 0.1;

const SALES_TAX_RATE = 0.07;

const FIXED_MONTHLY_COSTS = 100;

// discounted price before tax
let discountedPrice = BASE_PRICE * (1 - discountRate);
console.log(`Discounted price before tax is $${discountedPrice.toFixed(2)}.`);

// final price with tax
let finalPriceWithTax = discountedPrice * (1 + SALES_TAX_RATE);
console.log(`Final price with tax is $${finalPriceWithTax.toFixed(2)}.`);

// profit per unit
let profitPerUnit = finalPriceWithTax - costPerUnit;
console.log(`Profit per unit is $${profitPerUnit.toFixed(2)}.`);

// break even units
let breakEvenUnits = Math.ceil(FIXED_MONTHLY_COSTS / profitPerUnit);
console.log(`Break even units needed per month: ${breakEvenUnits}.`);

// is the product profitable?
let isProfitable = profitPerUnit > 0;
console.log(`Is the product profitable? ${isProfitable}.`);
