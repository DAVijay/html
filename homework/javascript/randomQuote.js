const quotes = ["Be yourself; everyone else is already taken. --- Oscar Wilde ",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. --- Marilyn Monroe ",
    "So many books, so little time. --- Frank Zappa",
    "Three can keep a secret, if two of them are dead.	-- Benjamin Franklin",
    "To be or not to be, that is the question.	--- William Shakespeare",
    "If at first you don’t succeed, try, try again.  --- W. E. Hickson",
    "If you build it, they will come.  --- Joe Jackson ",
    "If you want something done right, do it yourself.   --- Charles-Guillaume Étienne",
    "I'm gonna make him an offer he can't refuse.   --- Vito Corleone"
]

let quote = document.getElementById('a')
let click = document.querySelector('button')


click.addEventListener('click', () => {

    let i = Math.floor(Math.random() * quotes.length)
    console.log(i)
    quote.textContent = quotes[i]
    quote.style.display = 'block'
})

