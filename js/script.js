/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 **quotes` array 
 **This array is a collection of objects that include quotes, sources, citations, and dates. 
***/
const quotes = [
	{
		quote:  `Posterity! You will never know, how much it cost the present generation, to preserve your freedom! I hope you will make a good use of it.`, 
		source:  `John Adams`, 
		citation: `Letter to Abigail Adams`, 
		date: `26 April 1777`
	},
	{
		quote: `What country can preserve its liberties if its rulers are not warned from time to time that their people preserve the spirit of resistance? Let them take arms.`, 
		source: `Thomas Jefferson`, 
		citation: `Letter to William S. Smith`, 
		date: `1787`
	},
	{
		quote: `There is nothing so likely to produce peace as to be well prepared to meet an enemy.`, 
		source: `George Washington`, 
		citation: `Letter to Eldridge Gerry`, 
		date: `29 January 1780`
	},
	{
		quote: `From the east to the west blow the trumpet to arms! Through the land let the sound of it flee; Let the far and the near all unite, with a cheer, In defense of our Liberty Tree.`, 
		source: `Thomas Paine`, 
		citation: `Liberty Tree -- Pennsylvania Magazine`, 
		date: `1775`
	},
	{
		quote: `Our unalterable resolution should be to be free.`, 
		source: `Samuel Adams`, 
		citation: `Letter to James Warren`, 
		date: `16 April 1776`
	},
];


/***
 * *getRandomQuote` function
 ** This function generates a random number between 0 and the highest indexed object. It will automatically update the highest value to match the highest indexed objects position within the array.
***/

function getRandomQuote() {
		const randomNumber = Math.floor(Math.random() * (quotes.length - 0) + 0 ) ;
		return quotes[randomNumber];
}


/***
 * *PrintQuote` function
 **This function calls the getRandomQuote() function and uses the number generated to output a random quote from the array of objects.
***/

function printQuote() {
	const randomQuote = getRandomQuote();
	let html = `
		<p class="quote">${randomQuote.quote}</p>
		<p class="source">${randomQuote.source}, 
	`;
	
	if (randomQuote.citation) {
		html += `
			<span>${randomQuote.citation}, </span>
		`;
	}
	
	if (randomQuote.date) {
		html += `
			<span>${randomQuote.date}</span>
		`;
	}
	
	html += `
		</p>
	`;
	
	return document.getElementById('quote-box').innerHTML = html;
	
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);