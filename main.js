window.onload = () => {
    for(let elt of document.getElementsByClassName("collapsible"))
        elt.hidden = true;
};

document.getElementById("switch").onclick = () => {
    let icon = document.getElementById("favicon");
    if (icon.href === window.location.origin + "/images/joy.png")
        icon.href = window.location.origin + "/images/bird.png";
    else
        icon.href = window.location.origin + "/images/joy.png";
};

document.getElementById("opener").onclick = () => {
    for(let elt of document.getElementsByClassName("collapsible"))
        elt.hidden = false;
};
