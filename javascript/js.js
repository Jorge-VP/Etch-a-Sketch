const $container = document.querySelector(".container");
const $buttonSquare = document.querySelector(".buttonSq");
const $buttonReload = document.querySelector(".buttonReload");
const $buttonDelete = document.querySelector(".buttonDelete");

$buttonSquare.addEventListener("click", () => {
    let squares = parseInt(prompt("Squares per side: "));
    if (squares > 100 || squares < 1) {
        squares = parseInt(prompt("Enter a number between 1 and 100: "));
    } 
    square(squares); 
})

$buttonReload.addEventListener("click", () => {
    location.reload();
});
$buttonDelete.addEventListener("click", () => {
    const $node = document.querySelectorAll(".square");
    arrayNode = [...$node];
    arrayNode.forEach(element => {
        element.classList.remove("colorNumber");
    })
});

//let squares = 16;

const square = function (squares) {
    let i = 1
    let side = 100/squares.toString() + "%";
    while (i <= squares*squares) {
        const $squareDiv = document.createElement("div");
        $squareDiv.className = "square";
        $squareDiv.id = `square_${i}`;
        $container.appendChild($squareDiv);    
        i++;
    }    
    const $node= document.querySelectorAll(".square");
    const arrayNode = [...$node];    
    arrayNode.forEach(element => { 
        element.style.width = side; 
        element.style.height = side;   
        element.addEventListener("mouseover", () => {
            element.classList.add("colorNumber");
        });                
    });
}

