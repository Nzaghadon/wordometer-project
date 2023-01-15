// JavaScript source code
const words = document.getElementById('input');
const count = document.getElementById('count');


words.addEventListener('input', function countWord() {
    let res = [];
    let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
    str.map((s) => {
        let trimStr = s.trim();
        if (trimStr.length > 0) {
            res.push(trimStr);
        }
    })
    count.innerText = res.length;
})


