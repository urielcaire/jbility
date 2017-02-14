# jBility
### Author: Uriel Cairê Balan Calvi
jBility is a free set of accessibility functions that uses JQuery.  
The goal is to allow people with low vision to see your website's content.

# What does jBility?
Currently jBility has three functions:

1 **Contrast**: Changes the css of your page, highlighting texts and links. This function uses cookies to work. By default, the cookie die when browser is closed.

2 **Increase Font**: Increases all fonts of your page.

3 **Decrease Font**: Decreases all fonts of your page.

These functions make it easier to view a page's content.

#Example
To see a simple page with jBility working, download or clone jBility project and move it to your localhost and then just access it.

#Installation
1 Download or clone jBility project and copy the **jbility.js** file to YOUR project folder. Reference it in your HTML.

2 Download the [latest JQuery] version to your project and reference it in your html.

3 Copy/move **img** folder to your project's root.

4 Insert the code below on your footer or before close body:
``` html
	<div class="acess-container">
        <div id="jbbutton" title="Accessibility"><img src="img/acessc50.png"></div>
        <div id="acess-icons">
            <div class="acess-icon"><img id="contrast" title="Contrast" src="img/contraste40.png"/></div>
            <div class="acess-icon"><img id="increaseFont" title="Increase Font" src="img/fontsma40.png"/></div>
            <div class="acess-icon"><img id="decreaseFont" title="Decrease Font" src="img/fontsme40.png"/></div>
        </div>
    </div>
```
5 Copy all the content of **style.css** to your project's stylesheet.

### Enjoy it!

[latest JQuery]: http://jquery.com/