var quotes = [
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
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever. ",
    author: "Mahatma Gandhi",
  },
];

function showQuote() {
  var index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[index].quote;
  document.getElementById("author").innerHTML = quotes[index].author;
}
