# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot



Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: http://127.0.0.1:5502/index.html?
- Live Site URL: ](https://emmytweg.github.io/coding-conference/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow




### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Nothing new</h1>
```
```css
  .ticket::before,
        .ticket::after {
            content: "";
            position: absolute;
            width: 40px;
            height: 40px;
            background: #05032B;
            border-radius: 120px;
            left: 80%;
            transform: translateX(-50%) ;
            z-index: 2;
           border: 1px solid #ff6f61;
                }

}
```
```js
document.querySelector('.upload-box').addEventListener('click', function () {
    document.getElementById('avatar').click();
});

}
 const reader = new FileReader();
            reader.onload= function(e){
              imgUpload.src = e.target.result;
    imgUpload.style.width= '50px';
    imgUpload.style.height= '50px';
            };
            reader.readAsDataURL(file)
```




## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - https://www.frontendmentor.io/profile/Emmytweg
- Twitter - https://x.com/Emmanue86212569

