const parentele = document.getElementById("parent")

function handleBg(e) {
    console.log(e.target.id);
    const child = e.target
    const parent = document.querySelector("#parent");
    parent.style.backgroundColor=child.id
     
}
parentele.addEventListener("click", handleBg, false)