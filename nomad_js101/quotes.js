const quotes = [
  {
    quote: 'aaaaaaaaaaaaaaaaaaaaaaaa',
    author: 'aaa',
  },
  {
    quote: 'bbbbbbbbbbbbbbbbbbbbbbbb',
    author: 'bbb',
  },
  {
    quote: 'ccccccccccccccccccccccccc',
    author: 'ccc',
  },
  {
    quote: 'dddddddddddddddddddddddddd',
    author: 'ddd',
  },
  {
    quote: 'eeeeeeeeeeeeeeeeeeeeeeeeee',
    author: 'eee',
  },
  {
    quote: 'fffffffffffffffff',
    author: 'fff',
  },
  {
    quote: 'gggggggggggggggggggggggg',
    author: 'gggg',
  },
  {
    quote: 'hhhhhhhhhhhhhhhhhhhhhh',
    author: 'hhhhhhhhhh',
  },
  {
    quote: 'ssssssssssssssssssssssss',
    author: 'sss',
  },
  {
    quote: 'ssssssssssssssssssssssss',
    author: 'sss',
  },
]
const quote = document.querySelector('#quotes span:first-child')
const author = document.querySelector('#quotes span:last-child')

//math.random()0~1 사이
//math.random()*10 1~ 10 사이
//Math.round(1.4) ==> 1 반올림
//Math.ceil(1.1) ==> 2 올림
//Math.floor(1.9) => 1 내림
//Math.floor(Math.random()*10)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
