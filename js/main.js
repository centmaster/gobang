
let canvas = wx.createCanvas();
let ctx = canvas.getContext('2d');
let bg = wx.createImage();
bg.src = '../images/bg.jpg';
let width = canvas.width;
let height = canvas.height;
console.log('test ', width, height, bg)
ctx.drawImage(bg, width, height, 0, 0);

export default class Main {
    constructor() {

    }
}