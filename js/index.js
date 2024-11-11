var lastIndex = -1;
function showNewQuote() {
    var quotes =
        [
            '"Be yourself; everyone else is already taken." <br> ― Oscar Wilde',
            '"So many books, so little time."<br> ― Frank Zappa',
            '"A room without books is like a body without a soul."<br> ― Marcus Tullius Cicero',
            '"You only live once, but if you do it right, once is enough".<br> ― Mae West',
            '"Be the change that you wish to see in the world."<br> ― Mahatma Gandhi'
        ];

    var randomIndex;
    var htmlCode = '';
    
    do {
        randomIndex = Math.floor(Math.random() * quotes.length)
    } while (randomIndex === lastIndex);

    htmlCode = `<p class = "fs-2 text-black text-center mt-4 lh-lg"> ${quotes[randomIndex]} </p>`;
    document.getElementById('demo').innerHTML = htmlCode;
    lastIndex = randomIndex;
}


