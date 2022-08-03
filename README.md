# Frontend Mentor - Expenses chart component solution

This is weather app used api from [openweathermap.org](https://openweathermap.org)

to use it you need to registrate and get "api_key" and paste it to this.API_key in weather.js file

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Paste here api code](#paste-api-code-example)
- [Author](#author)


## My process

### Built with

- HTML5 markup
- Bootstrap
- JavaScript ES6 for functionality

### What I learned

I learned more about using async and await to fetch data form remote API.

To see how you can add code snippets, see below:

Better know of pseudo classes:
```js
async, await
```

### paste api code example
This is line where you need to paste api key code:
```js
constructor(city) {
    this.city = city;
    // paste api_key code
    this.API_key = '';
    this.part = 'daily';
    this.units = 'metric'
  }

```

## Author

- Author - [Malzagic on GitHub](https://github.com/Malzagic)
