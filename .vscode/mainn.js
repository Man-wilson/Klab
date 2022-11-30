
constItem = [
    {
        name: 'Bike',
        price:100,
    };
    {
        name: 'Tv',
        price:200,
    };
    {
        name: 'Album',
        price:10,
    };
    {
        name: 'Book',
        price:5,
    };
    {
        name: 'Phone',
        price:500,
    };
    {
        name: 'Computer',
        price:1000,
    };
]

const cheapItem = items.reduce((a,b) => (a.price < b.price ? a:b));
const expensiveItem = items.reduce((a,b) => (a.price > b.price ? a:b));
const totalPrice = items.reduce((total, item) =>total + item.price, 0);
const totalPriceGreaterThan10 = items.filter(v => v.price> 10).reduce((total,item) => total + item.price,0);