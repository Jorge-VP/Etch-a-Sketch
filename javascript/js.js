const $container = document.querySelector(".container");
const $buttonSquare = document.querySelector(".buttonSq");
const $buttonReload = document.querySelector(".buttonReload");
const $buttonDelete = document.querySelector(".buttonDelete");
const $checkColors = document.querySelector(".checkbox");

// squars per side function
$buttonSquare.addEventListener("click", () => {
    let squares = parseInt(prompt("Squares per side: "));
    if (squares > 100 || squares < 1) {
        squares = parseInt(prompt("Enter a number between 1 and 100: "));
    } 
    square(squares); 
})

// reload function
$buttonReload.addEventListener("click", () => {
    location.reload();
});

// delete function
$buttonDelete.addEventListener("click", () => {
    const $node = document.querySelectorAll(".square");
    arrayNode = [...$node];
    arrayNode.forEach(element => {
        element.style.backgroundColor = "transparent";
    })
});

//squares function
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
        if ($checkColors.checked)  {
            element.addEventListener("mouseenter", () => {
                element.style.backgroundColor = setBackground();                     
            }); 
                      
        } 
        else {
            element.addEventListener("mouseenter", () => {
                element.style.backgroundColor = "green";                 
            });
                       
        }
    });
}

// generate random color function
const generateRandomColor = function () {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    return rgbColor;
}

// set bg color function
const setBackground = function() {
    const newColor = generateRandomColor();
    return newColor;
}




