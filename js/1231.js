let html = document.querySelector("#html-text");
let style = document.querySelector("#styleText");

let originalString = `先画花的茎
.stem {
    position: absolute;
    height: 0;
    width: 6px;
    background: var(--dark-green);
    bottom: 10%;
    left: 50%;
    margin-left: -3px;
    border-radius: 0 0 3px 3px;
    transition: height 1s;
}
.stem {
  height: 200px;
}
.thorns>div{
    width: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    position: absolute;
}
.thorns>div:first-child {
    border-right: 10px solid var(--dark-green);    
    position: absolute;
    left: 44%;
    top: 50%;
}
.thorns>div:nth-child(2) {
    border-left: 10px solid var(--dark-green);
    right: 44%;
    top: 60%;
}
.thorns>div:nth-child(3) {
    border-right: 10px solid var(--dark-green);
    left: 44%;
    top: 70%;
}
再画花的叶
.leaves>div{
    position: absolute;
    height: 60px;
    width: 35px;
}
.leaves>div:first-child {
    border-radius: 0 30px 0 30px;
    transform: rotate(-20deg);
    top: 55%;
    left: 28%;
    transition: background 1s, box-shadow 1s 1s;
    background: var(--dark-green);
    box-shadow: inset 5px 5px var(--light-green);
}
.leaves>div:nth-child(2) {
    border-radius: 30px 0 30px 0;
    transform: rotate(20deg);
    top: 45%;
    right: 28%;
    transition: background 1s, box-shadow 1s 1s;
    background: var(--dark-green);
    box-shadow: inset -5px 5px var(--light-green);
}
最后画花瓣
.petals>div:first-child {
    position: absolute;
    height: 100px;
    width: 50px;
    border-radius: 10px 10px 20px 20px;
    transition: background 1s;
    background: var(--light-pink);
    top: 15%;
    left: 50%;
    margin-left: -25px;
}
.petals>div:not(:first-child) {
    position: absolute;
    height: 100px;
    width: 40px;
}
.petals>div:nth-child(2) {
    transform-origin: bottom right;
    border-radius: 0 35px 0 35px;
    transition: background 1s, transform 1s 1s;
    background: var(--medium-pink);
    transform: rotate(-6deg);
    top: 15%;
    left: 30%;
}
.petals>div:nth-child(3) {
    transform-origin: bottom left;
    border-radius: 35px 0 35px 0;
    transition: background 1s, transform 1s 1s;
    background: var(--medium-pink);
    transform: rotate(6deg);
    top: 15%;
    right: 30%;
}
.petals>div:nth-child(4) {
    transform-origin: bottom right;
    border-radius: 0 35px 0 35px;
    transition: background 1s, transform 1s 1s;
    background: var(--dark-pink);
    transform: rotate(-18deg);
    top: 15%;
    left: 30%;
}
.petals>div:nth-child(5) {
    transform-origin: bottom left;
    border-radius: 35px 0 35px 0;
    transition: background 1s, transform 1s 1s;
    background: var(--dark-pink);
    transform: rotate(18deg);
    top: 15%;
    right: 30%;
}
.dead-petals>div:first-child {
    background: var(--medium-pink);
    left: 35%;
    transition: transform 8s, top 8s;
    transform: rotate(-45deg);
    top: 90%;
}
.dead-petals>div:nth-child(2) {
    background: var(--dark-pink);
    left: 50%;
    transition: transform 8s 2s, top 8s 2s;
    transform: rotate(-20deg);
    top: 90%;
}
.wishes>div:first-child {
    transform: translate(-60%);
}
.wishes>div:nth-child(2) {
    transform: translate(-35%);
}
.wishes>div:nth-child(3) {
    transform: translate(-95%);
}
.wishes>div:nth-child(4) {
    transform: translate(-40%);
}
.wishes > img:first-of-type {
    transform: translate(-600%);
}
.wishes > img:nth-of-type(2) {
    transform: translate(-270%);
}`;

let styleString = "";
let tempString = "";

let writeIntoStyle = false;

let n = 0;
let step = () => {
    setTimeout(() => {
        if (originalString[n] === "#" || originalString[n] === '.') {
            writeIntoStyle = true;
        } else if (originalString[n] === "}") {
            writeIntoStyle = false;
            tempString += "}\n";
            styleString += tempString;
            tempString = ""; // 清空临时字符串以便下一次使用
        }
        if (writeIntoStyle) {
            tempString += originalString[n];
        }

        style.innerHTML = styleString;

        if (n < originalString.length - 1) {
            n += 1;
            step();
        }
    }, 1); // 这里的延迟（1ms）仍然保留，以模拟逐步执行的效果
};

const patterns = {
    'H': ["*   *", "*   *", "*****", "*   *", "*   *"],
    'A': ["  *  ", " * * ", "*****", "*   *", "*   *"],
    'P': ["**** ", "*   *", "**** ", "*    ", "*    "],
    'Y': ["*   *", " * * ", "  *  ", "  *  ", "  *  "],
    'M': ["*   *", "** **", "* * *", "*   *", "*   *"],
    'O': ["*****", "*   *", "*   *", "*   *", "*****"],
    'T': ["*****", "  *  ", "  *  ", "  *  ", "  *  "],
    'E': ["*****", "*    ", "*****", "*    ", "*****"],
    'R': ["**** ", "*   *", "**** ", "*  * ", "*   *"],
    'D': ["**** ", "*   *", "*   *", "*   *", "**** "],
    'S': ["*****", "*    ", "*****", "    *", "*****"],
    'N': ["*   *", "**  *", "* * *", "*  **", "*   *"],
    'K': ["*   *", "*  * ", "* *  ", "*  * ", "*   *"],
    ' ': ["     ", "     ", "     ", "     ", "     "]
};

function animateText() {
    const parts = ["THANKS", "MOMMY"];
    const height = 5;
    let partIndex = 0;
    let index = 0;

    function displayNextPart() {
        if (partIndex >= parts.length) {
            return; // 所有部分已展示完毕，停止函数
        }

        const part = parts[partIndex];
        let content = '';

        // 清空之前的内容
        html.textContent = '';

        // 重新构建当前部分及之前部分的内容
        for (let i = 0; i <= partIndex; i++) {
            for (let row = 0; row < height; row++) {
                if (i === partIndex) {
                    const line = [...parts[i].substring(0, index)].map(char => patterns[char][row]).join(' ');
                    content += line + '\n';
                } else {
                    const line = [...parts[i]].map(char => patterns[char][row]).join(' ');
                    content += line + '\n';
                }
            }
            if (i < partIndex) {
                content += '\n'; // 在已完成的部分后添加换行
            }
        }

        html.textContent = content;

        if (index < part.length) {
            index++; // 更新当前部分的字符索引
        } else {
            index = 0; // 重置字符索引为下一部分
            partIndex++; // 移动到下一个部分
            if (partIndex < parts.length) {
                content += '\n'; // 在部分完成后添加换行，但不在最后一部分后添加
            }
        }
        setTimeout(displayNextPart, 500); // 设置动画速度
    }

    displayNextPart(); // 开始动画
}

window.onload = () => {
    animateText(); // 开始动画
    step(); // 保留原有的动画效果
};
