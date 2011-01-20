/*
	jCrawl: a pseudorandom methodical webcrawler.
	by jiva
*/

/* Initialize default delay value */
var minDelay = 1000;
var maxDelay = 2000;
var theDelay = 1500;

/* Initialize setTimeout() variable */
var t;

/* Entry point for the jCrawl extension */
function jInit()
{
	try
	{
		/* Get a minimum delay */
		minDelay = prompt("Enter the minimum delay in milliseconds", "1000");
		if(isNaN(minDelay))
		{
			window.alert("NaN: Using minimum delay value of 1000");
		}
		minDelay = parseInt(minDelay);
		
		/* Get a maximum delay */
		maxDelay = prompt("Enter the maximum delay in milliseconds", "2000");
		if(isNaN(maxDelay))
		{
			window.alert("NaN: Using maximum delay value of 2000");
		}
		maxDelay = parseInt(maxDelay);
		
		/* Set a random delay between the two numbers */
		theDelay = Math.round(minDelay + Math.random() * (maxDelay - minDelay));
		
		/* Get started */
		jPre();
	}
	catch(err)
	{
		window.alert("Error in jInit()\n\n" + err.description);
	}
}

/* jPre */
function jPre()
{
	try
	{
		/* Wait until all objects are loaded on the page */
		content.window.onload = jCrawl();
	}
	catch(err)
	{
		window.alert("Error in jPre()\n\n" + err.description);
	}
}

/* Pseudorandomly pick a link on the page, then go to it */
function jCrawl()
{
	try
	{
		/* Add some delay */
		t = window.setTimeout("jPre();", theDelay);
		
		/* Pick a random link */
		var r = Math.floor(Math.random() * content.document.links.length);
		
		/* Make sure link isn't null and go to it*/
		if(content.document.links[r] != null)
		{
			content.window.location = content.document.links[r];
		}
	}
	catch(err)
	{
		window.alert("Error in jCrawl()\n\n" + err.description);
	}
}

/* Clear the timeout and kills execution */
function jKill()
{
	clearTimeout(t);
}