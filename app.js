let b = document.getElementById("carogame");
let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = new Array("-", "-", "-", "-", "-");
}
let d = [];
function inbanco(){
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp";
        }
    }
}
inbanco();

b.innerHTML = data;

function changeValue1() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "x";
    inbanco();
    checktren();
    checkCheo();
    checkCheoNguoc();
    check();
    b.innerHTML = "<hr/>" + data;
}
function changeValue2() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "o";
    inbanco();
    checktren();
    checkCheo();
    checkCheoNguoc();
    check();
    b.innerHTML = "<hr/>" + data;
}
function check(){
    for (let i = 0; i < board.length ; i++) {
        for (j = 0 ; j <  board[i].length-2; j++){
            console.log("vi tri " + i + " " + j + " " +board[i][j])
            console.log(" ")
            if(board[i][j] === board[i][j+1] && board[i][j+1] === board[i][j+2] && board[i][j] != "-" && board[i][j] === "x"){
                alert("X thắng")
            }
            else if(board[i][j] === board[i][j+1] && board[i][j+1] === board[i][j+2] && board[i][j] != "-" && board[i][j] === "o"){
                alert("O thắng")
            }
        }

    }
}
function checktren() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length-2; j++) {
            console.log("vi tri " + i + " " + j + " " +board[j][i])
            console.log(" ")
            if (board[j][i] === board[j + 1][i] && board[j][i] === board[j + 2][i] && board[j][i] === "x") {
                alert("X thắng")
            }
            else if (board[j][i] === board[j + 1][i] && board[j][i] === board[j + 2][i] && board[j][i] === "o") {
                alert("O thắng")
            }
        }
    }

}
function checkCheo(){
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length-2; j++) {
            if(board[j][i] === board[j+1][i+1] && board[j+1][i+1] === board[j+2][i+2] && board[j][i] === "x"){
                alert("X thắng")
            }
            else if (board[j][i] === board[j + 1][i] && board[j][i] === board[j + 2][i] && board[j][i] === "o") {
                alert("O thắng")
            }
        }
        }
}
function checkCheoNguoc() {
    for (let i = 0; i < board.length - 2; i++) {
        for (let j = 4; j > 1; j--) {
            if (board[i][j] === board[i + 1][j - 1] && board[i][j] === board[i + 2][j - 2] && board[i][j] === "x") {
                alert("X thắng")
            }
            else if (board[i][j] === board[i + 1][j - 1] && board[i][j] === board[i + 2][j - 2] && board[i][j] === "o") {
                alert("O thắng")
            }
        }
    }
}