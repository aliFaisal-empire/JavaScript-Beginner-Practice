/** 

1) Topic: Online Store Discount Calculator (If-Else Statement)


 Description:

You are tasked with creating a simple discount calculator for an online store. The store offers discounts based on the total purchase amount. Customers can avail different discounts depending on their total spending. Your goal is to implement a JavaScript program that takes the total purchase amount as input and calculates the discounted amount (if any) based on the 

following rules:

If the total purchase amount is less than $50, no discount is applied.
If the total purchase amount is between $50 and $100 (both inclusive), apply a 5% discount.
If the total purchase amount is between $100 and $200 (both inclusive), apply a 10% discount.
If the total purchase amount is $200 or more, apply a 15% discount.

Tasks:
Implement the JavaScript function to calculate the discounted amount based on the input.
Display / console.log the “discounted amount & total amount + discount amount “ 

**/




// Function to calculate the discounted amount
function calculateDiscountedAmount(totalAmount) {
  let discount = 0;

  if (totalAmount < 50) {
    discount = 0; // No discount for purchases less than $50
  } else if (totalAmount <= 100) {
    discount = totalAmount * 0.05; // 5% discount for purchases between $50 and $100
  } else if (totalAmount <= 200) {
    discount = totalAmount * 0.1; // 10% discount for purchases between $100 and $200
  } else {
    discount = totalAmount * 0.15; // 15% discount for purchases of $200 or more
  }

  const discountedAmount = totalAmount - discount;
  return { discountedAmount, totalAmount, discount };
}

// Example usage:
const totalAmount = 150; // You can change this to any total purchase amount
const result = calculateDiscountedAmount(150);
//   console.log(`Total Amount: $${result.totalAmount}`);
//   console.log(`Discount Amount: $${result.discount}`);
//   console.log(`Discounted Amount: $${result.discountedAmount}`);

console.log(`Total Amount: $${result.totalAmount},Discount: ${result.discount}% and after discount Total Discounted Amount: $${result.discountedAmount}`);
