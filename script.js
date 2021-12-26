let count = parseInt(document.getElementById("countId").innerText);
let incrementBtn = document.getElementById('increment-btn');
let saveBtn = document.getElementById('save-btn');

if(count === 0){
    saveBtn.disabled = true;
}

function increment() {
    count += 1;
    document.getElementById("countId").innerText = count;
    saveBtn.disabled = false;
}

let totalCount = 0;
function saveme() {
    totalCount += count;
    count = 0;
    document.getElementById("countId").innerText = count;
    document.getElementById("totalCount").innerText = totalCount;
}

//45.12