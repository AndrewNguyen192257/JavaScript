// Ví dụ call() 1:

var year = 2023;
function getDate(month, day) {
  return `${this.year}-${month}-${day}`;
}

const obj = { year: 2024 };

console.log(getDate.call(null, 3, 8));
console.log(getDate.call(obj, 3, 8));
console.log(getDate.apply(obj, [3, 8]));
console.log(getDate.bind(obj)(3, 8));

//    2023-3-8 chạy trong browser sẽ đúng đáp án
//    2024-3-8
//    2024-3-8
//    2024-3-8

// Ví dụ call() 2:

const girl = {
  amount: 100,
  unit: "USD",
};

function goShopping(item, quantity, price) {
  const totalCost = quantity * price;
  if (this.amount < totalCost) {
    console.log(`Not enough money to buy the product!`);
  } else {
    console.log(
      `Girl went shopping and bought ${quantity} ${item} for ${totalCost} ${this.unit}`
    );
  }
}

goShopping.call(girl, "shoes", 2, 100);

// Girl make a boy friend

const boy = {
  amount: 100000,
  unit: "USD",
};

goShopping.call(boy, "shoes", 2, 100);

// Ví dụ apply():

goShopping.apply(boy, ["shoes", "3", "1000"]);

// Ví dụ bind():

const boundShopping = goShopping.bind(boy);
// goShopping.bind(boy).("Iphone 14", 1, 1200)
boundShopping("Iphone 14", 1, 1200);

// Ví dụ nâng cao, tình huống ứng dụng:

/*
function log(msg) {
    console.log(msg)
}
log(1)
log(1,2)
*/

// Sử dụng apply để in ra bất kỳ số lượng tham số, thay vì viết từng hàm,
//sử dụng đối tượng arguments đây là một đối tượng tương tụ mảng (array-like) chứa tất cả tham số truyền vào hàm.

function logApply() {
  console.log.apply(console, arguments);
}
logApply(1);
logApply(1, 2);
