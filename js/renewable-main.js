function renderChoices(choice) {
    // var cardPicture = '';
    // function pickPic(object){
    //     if (object.roast === "light") {
    //         cardPicture = "img/light-coffee.jpeg"
    //     } else if (object.roast === "medium") {
    //         cardPicture = "img/medium-coffee.jpeg"
    //     } else {
    //         cardPicture = "img/dark-coffee.jpeg"
    //     }
    //     return cardPicture;
    // }
    //
    // // console.log(pickPic(coffee));

    var html = '<div class="col mb-4">';
    html += '<div class="card p-2">';
    html += '<div class="row no-gutters">';
    html += '<div class="col">';
    html += '<img src="' + pickPic(coffee) + '" class="card-img" alt="coffee">';
    html += '</div>'
    html += '<div class="col-md-8">'
    html += '<div class="card-body p-0 text-center h-100 d-flex justify-content-center flex-column">';
    html += '<h4 class="headings">' + coffee.name + '</h4>';
    html += '<p class="sizing">' + coffee.roast + '</p>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    return html;
}