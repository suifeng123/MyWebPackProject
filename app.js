import b from "./a.js"
import "./test.css"
import img from "./wang.jpg"

new Image().src =  img
(() => {
	let a = 23
	console.log(a)
	console.log(b)
})()