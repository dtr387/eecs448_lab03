document.addEventListener("DOMContentLoaded", () => {
    let wall = document.querySelector("#wall");
    let change = document.querySelector("#change");
    change.addEventListener("click", () => {
        let borderRed = parseInt(document.querySelector("#red1").value);
        let borderGreen = parseInt(document.querySelector("#green1").value);
        let borderBlue = parseInt(document.querySelector("#blue1").value);
        let borderWidth = document.querySelector("#width");
        let backgroundRed = parseInt(document.querySelector("#red2").value);
        let backgroundGreen = parseInt(document.querySelector("#green2").value);
        let backgroundBlue = parseInt(document.querySelector("#blue2").value);
        borderRed = setNaN0(borderRed);
        borderGreen = setNaN0(borderGreen);
        borderBlue = setNaN0(borderBlue);
        borderWidth = setNaN0(parseInt(borderWidth.value))
        backgroundRed = setNaN0(backgroundRed);
        backgroundGreen = setNaN0(backgroundGreen);
        backgroundBlue = setNaN0(backgroundBlue);
        wall.style.borderWidth = borderWidth+"px";
        wall.style.borderStyle = "solid";
        wall.style.backgroundColor = "rgb(" +backgroundRed + "," + backgroundGreen + "," + backgroundBlue + ")";
        wall.style.borderColor = "rgb("+borderRed+","+ borderGreen+","+ borderBlue+")";
    })
    function setNaN0(couldNaN)
    {
        if(isNaN(couldNaN))
        {
            couldNaN = 0;
            return (couldNaN);
        }
        return(couldNaN);
    }
} )