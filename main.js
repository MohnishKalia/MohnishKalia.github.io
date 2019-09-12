document.getElementById("switch").onclick = () => {
    let icon = document.getElementById("favicon");
    if (icon.href === window.location.origin + "/images/joy.png")
        icon.href = window.location.origin + "/images/bird.png";
    else
        icon.href = window.location.origin + "/images/joy.png";
};
