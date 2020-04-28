/* || FlexBox Experiments --------------------- */

function createDiv(HR, TC, country) {
    const flexContainer = document.querySelector("#" + country + "-flex");    /* Pointing to Parent Div */
    let x = document.getElementById(country + "-flex").childElementCount;    /* Counting number of child divs */
    let flexDiv = document.createElement("div");    /* Creating new div element */
    flexDiv.className = "flex";     /* giving new div a classname */
    flexDiv.id = ("flex-" + (x+1));     /* giving new div a id */
    flexContainer.appendChild(flexDiv);     /* appending new div to parent div */

    let spacerDiv = document.createElement("div");
    spacerDiv.className = "spacer";
    flexDiv.appendChild(spacerDiv);

    let midDiv = document.createElement("div");
    midDiv.className = "mid";
    midDiv.id = ("mid-" + (x+1));
    flexDiv.appendChild(midDiv);

    let rightDiv = document.createElement("div");
    rightDiv.className = "right";
    rightDiv.id = ("right-" + (x+1));
    flexDiv.appendChild(rightDiv);

    let a = document.createElement("a");
    /* TODO: make href input, input parameter to function, or loop through an href array.*/
    a.href = HR;
    midDiv.appendChild(a);

    let img = document.createElement("img");
    img.src = HR;
    img.id = ("image-" + (x+1));
    a.appendChild(img);

    let p = document.createElement("p");
    p.className = "right";
    /* TODO: make text input, input parameter to function, or loop through a text array. */
    p.textContent = TC;
    p.id = ("right-" + (x+1));
    rightDiv.appendChild(p);
}

/* Creating entry of posts, each with the image location (HRe), text content (TCe) and country (countrye) */
let entryObjects = [
    {HRe: "../assets/images/F1210019.JPG",
    TCe: "Hello World",
    countrye: "korea"},
    {HRe: "../assets/images/F1190025.JPG",
    TCe: "Hey World",
    countrye: "korea"},
    {HRe: "../assets/images/20180415-DSC01685-3.jpg",
    TCe: "Good Morning World",
    countrye: "korea"},
    {HRe: "../assets/images/20180409-DSC01624-2.jpg",
    TCe: "Wassup World",
    countrye: "korea"}
]
/* looping through each entry in the entryObjects array. */
for (i=0; i<entryObjects.length;i++) {
    createDiv(entryObjects[i].HRe, entryObjects[i].TCe, entryObjects[i].countrye);
}
/* TODO: <input> field for user input of photos and text? */

