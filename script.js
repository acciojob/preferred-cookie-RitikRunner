//your JS code here. If required.
const btn = document.getElementById("button")
const fntclr = document.getElementById("fontcolor")
const fntsz = document.getElementByID("fontsize")

btn.addEventListener("click",()=>{
	document.cookie = "fontcolor" fntclr.value
	document.cookie = "fontsize" fntsz.value
})