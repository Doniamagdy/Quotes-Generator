var quotes = [
<<<<<<< HEAD
=======
 {
    quote:"Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek. ",
    author: "Barack Obama",
  },
  {
    quote:"Every success story is a tale of constant adaption, revision and change. ",
    author: "Richard Branson",
  },
  {
    quote:"What you do has far greater impact than what you say. ",
    author: "Stephen Covey",
  },
   {
    quote:"The way to get started is to quit talking and begin doing. ",
    author: "Walt Disney",
  },
   {
    quote:"Always remember that you are absolutely unique. Just like everyone else. ",
    author: "Margaret Mead",
  },
>>>>>>> 7a968d4ba6876fcf4801fcfa2dc45e63ef0f9d12
  {
    quote: "Be yourself; everyone else is already taken. ",
    author: "Oscar Wilde ",
  },
  {
    quote: "So many books, so little time. ",
    author: "Frank Zappa ",
  },
  {
    quote: "We accept the love we think we deserve. ",
    author: "Stephen Chbosky ",
  },
  {
    quote: "A room without books is like a body without a soul. ",
    author: "Marcus Tullius Cicero",
  },
  {
<<<<<<< HEAD
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever. ",
    author: "Mahatma Gandhi",
  },
=======
    quote:"Live as if you were to die tomorrow. Learn as if you were to live forever. ",
    author: "Mahatma Gandhi",
  }
 
  
>>>>>>> 7a968d4ba6876fcf4801fcfa2dc45e63ef0f9d12
];

function showQuote() {
  var index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[index].quote;
  document.getElementById("author").innerHTML = quotes[index].author;
}
