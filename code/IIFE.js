// IIFE (Immediately Invoked Function Expression), một biểu thức hàm được gọi ngay lập tức sau khi được định nghĩa
// Cấu trúc cơ bản IIFE
(function () {
  // code bên trong IIFE
})();
// Function Expression: `function() {...}` là một hàm định nghĩa nhưng không có tên (anonymous function).
// Immediately Invoked: `()` ngay sau biểu thức hàm sẽ kích hoạt hàm đó chạy ngay lập tức.
// IIFE là hàm "private"
// Dùng ; trước IIFE

/* 
Lợi ích của IIFE:
1. Tránh ô nhiễm không gian tên (Namespace Pollution): Biến và hàm được định nghĩa trong IIFE sẽ không bị lộ ra bên ngoài,
tránh xung đột tên biến với các thành phần khác của mã nguồn.
2. Tạo ngữ cảnh (Scope) riêng biệt IIFE tạo ra một scope riêng biệt, giúp cách ly mã bên trong với bên ngoài
*/

(function () {
  var x = "Hello world!";
  console.log(x);
})();
// "Hello world!"

(() => {
  console.log("NOW!");
})();

//console.log(x);
//Lỗi: x is not defined

let i = 0;
(function myFunction() {
  i++;
  console.log(i);
  if (i < 10) {
    myFunction();
  }
})();

const app = {
  cars: [],
  add(car) {
    this.cars.push(car);
  },
  edit(index, car) {
    this.cars[index] = car;
  },
  delete(index) {
    this.cars.splice(index, 1);
  },
};

// Để bảo vệ dữ liệu (toàn vẹn dữ liệu)

const app1 = (function () {
  // Private
  const cars = [];
  return {
    get(index) {
      return cars[index];
    },
    add(car) {
      this.cars.push(car);
    },
    edit(index, car) {
      this.cars[index] = car;
    },
    delete(index) {
      this.cars.splice(index, 1);
    },
  };
})();

/*
splice(): thay đổi mảng gốc mảng mà nó được gọi, có thể xóa, thêm, hoặc thay thế phần tử. --> Linh hoạt và hữu ích trong việc thao tác với mảng.
*/
// 1. Xóa phần tử từ mảng
let arr1 = ["a", "b", "c", "d", "e", "f"];
let removed = arr1.splice(2, 2);
console.log(arr1); // ['a','b','e','f']
console.log(removed); // ['c','d']

// 2. Thêm phần tử vào mảng
let arr2 = ["a", "b", "c", "d", "e"];
arr2.splice(2, 0, "x", "y");

// 3. Thay thế phần tử trong mảng
let arr3 = ["a", "b", "c", "d"];
arr3.splice(1, 2, "x", "y");

// 4. Sử dụng số âm trong `start`
let arr4 = ["a", "b", "c", "d"];
arr4.splice(-2, 1);
console.log(arr4); //["a","b","d"]
