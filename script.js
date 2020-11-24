
var images = [], x = -1;
images[0] = "images/paz_250x110103131473.jpg";
images[1] = "images/250X110668568400.jpg";
images[2] = "images/banner_atar.jpg";

var headers = [];
headers[0] = "שטחי מסחר פז סנטר";
headers[1] = "טיפז";
headers[2] = "yellow click&pick;";



function displayNextHeaderAndImage() {
    x = (x === images.length - 1) ? 0 : x + 1;

    document.getElementById("img2_id").src = images[x];
    document.getElementById("head2_id").innerHTML = headers[x];
}



function startTimer() {
    setInterval(displayNextHeaderAndImage, 5000);
}

