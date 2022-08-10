//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here

const recipe = {
  title: "Biryani",
  servings: 2,
  ingredients: ["Rice", "Chicken", "Oil"],
};

console.log("-", recipe.title);
console.log("- Serves:", recipe.servings);
console.log("- Ingredient:");
for (const item of recipe.ingredients) {
  console.log("-", item);
}

console.log(`-----------------------------------------`);

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here

const bookArray = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
  {
    title: "The Lord of the Rings",
    author: "John Snow",
    alreadyRead: false,
  },
  { title: "The Rabbit", author: "King Daniel", alreadyRead: false },
];

for (const item of bookArray) {
  console.log(`${item.title} by ${item.author}`);

  bookArray.alreadyRead
    ? console.log(`You already read "${item.title}" by ${item.author}`)
    : console.log(`You still need to read "${item.title}" by ${item.author}`);
}
