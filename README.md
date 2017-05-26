# jBility v1.1.5
![jBility logo](https://github.com/urielcaire/jbility/blob/master/img/jb.png "jBility")
### Author: Uriel Cairê Balan Calvi
jBility is a free set of accessibility functions that uses JQuery.  
The goal is to allow people with low vision to see your website's content.

# What does jBility?
Currently jBility has three functions:

1 **Contrast**: Changes the css of your page, highlighting texts and links. This function uses cookies to work. By default, the cookie die when browser is closed.

2 **Increase Font**: Increases all fonts of your page.

3 **Decrease Font**: Decreases all fonts of your page.

These functions make it easier to view a page's content.

# Example
To see a simple page with jBility working, download or clone jBility project and move it to your localhost and then just access it.
Or see now in [JQueryScript](http://www.jqueryscript.net/demo/jQuery-Plugin-For-Better-Page-Accessibility-Readability-jbility/ "jBility demo").

# Installation
1 Download the [latest JQuery] version to your project and reference it in your html.

2 Download or clone jBility project and copy the **jbility.js** file to YOUR project folder. Reference it in your HTML.

3 Copy/move **img** folder to your project's root.

4 Insert the code below on your footer or before close body:
``` html
<div class="acess-container">
	<div id="jbbutton" class="balloon" title="Accessibility"><span class="balloontext">Accessibility</span><img src="img/acessc50.png"></div>
	<div id="acess-icons">
		<div class="acess-icon balloon"><span class="balloontext">Contrast</span><img id="contrast" src="img/contraste40.png"/></div>
		<div class="acess-icon balloon"><span class="balloontext">Increase Font</span><img id="increaseFont" src="img/fontsma40.png"/></div>
		<div class="acess-icon balloon"><span class="balloontext">Decrease Font</span><img id="decreaseFont" src="img/fontsme40.png"/></div>
	</div>
</div>
```
5 Copy and reference the **jbility.css** in your project - make sure it will be the last referenced stylesheet.

## Enjoy it!
---
### Special thanks to [JQueryScript](http://www.jqueryscript.net/ "JQueryScript") for voluntarily posting my plugin and host my demo page for free.

[latest JQuery]: http://jquery.com/
