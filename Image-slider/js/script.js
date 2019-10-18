var mainImage = $("#mainImage");

var data = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
var index = 0;

function changeImage() {
    mainImage.attr("src", data[index]);
    index++;

    if (index == data.length)
    {
        index = 0;
    }
}

setInterval(changeImage, 2000);

$("#image1").click(function () {
    mainImage.attr("src", $(this).attr("src"));
});

$("#image2").click(function () {
    mainImage.attr("src", $(this).attr("src"));
});

$("#image3").click(function () {
    mainImage.attr("src", $(this).attr("src"));
});

$("#image4").click(function () {
    mainImage.attr("src", $(this).attr("src"));
});

