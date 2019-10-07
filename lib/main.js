var coll = $('.collapsible').get();

$(() => {
    for (let elt of coll)
        elt.hidden = true;
});

$("#switch").on("click", () => {
    let icon = $("#favicon");
    icon.prop("href", icon.prop("href").match(/\/\w+\/.+/) == "/images/joy.png" ? "/images/bird.png" : "/images/joy.png");
});

$("#opener").on("click", () => {
    for (let elt of coll)
        elt.hidden = false;
});