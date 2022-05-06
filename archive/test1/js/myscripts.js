var main = document.getElementById("main")

main.addEventListener("click", doStuff)


function doStuff() {
    main.innerHTML("Feck Off")
    delay(1000).then(() => main.innerHTML("Hello again :)"))
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }