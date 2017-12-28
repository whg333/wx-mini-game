console.log("main.js")

let ctx   = canvas.getContext('2d')

export default class Main {
    constructor() {
        this.paint()
    }

    paint() {
        ctx.font = "20px Georgia"
        ctx.fillText('hello world', 10, 50)

        ctx.font = "30px Verdana"
        // 创建渐变
        var gradient = ctx.createLinearGradient(0, 0, window.innerWidth, 0)
        gradient.addColorStop("0","magenta")
        gradient.addColorStop("0.5","blue")
        gradient.addColorStop("1.0","red")
        // 用渐变填色
        ctx.fillStyle = gradient
        ctx.fillText("微信小游戏", 10, 90)
    }
}