var console_error = `Uncaught Error: TICKET NEED $50
   at KFC.ticket (`
var console_error1 = 'KFC-crazy-thursday.js:50:1'
var console_error0 = `)
   at `
var console_ticket = `
 ticket      @ `
var KFC = 'KFC-crazy-thursday.js:50'

var styleConsoleError = ``
var styleConsoleError1 = `
color: rgb(255,255,255);
text-decoration:underline;
`
var styleConsoleError2 = `
color: rgb(78,161,225);
text-decoration:underline;
`
var footer = document.getElementById("footer")

var tempDate = new Date();
var day = tempDate.getDay();

























if(day == 4){
footer.innerHTML = footer.innerHTML + `今天是星期四，所以请v我50￥`
console.error(`%c${console_error}`+`%c${console_error1}`+ `%c${console_error0}` +`%c${console_error1}` + `%c${console_ticket}` + `%c${KFC}`, styleConsoleError, styleConsoleError1, styleConsoleError, styleConsoleError1, styleConsoleError, styleConsoleError2)}