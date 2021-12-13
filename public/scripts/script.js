console.log("Starting script..");

// creating the cared array here
const cardsList = [{
        title: "Very Cute Puppy 2",
        image: "https://i.pinimg.com/originals/2f/27/f1/2f27f1e84d23cef81a758b0563fed639.jpg",
        desciption: "Demo desciption about puppy 2"
    },
    {
        title: "Very Cute Puppy 3",
        image: "https://www.a2048.com/wp-content/uploads/2019/07/bc4a27df619fe52ade14f0d5a82d0f69.jpg",
        desciption: "Demo desciption about puppy 3"
    }
]

const addCards = (items) => {
    items.forEach(element => {
        '<div class="col s12 m7">' +
        '<div class="card"><div class="card-image"> <img src="' + item.image + '">' + '<span class="card-title">' + item.title + '</span></div>' + '<div class="card-content"><p>' + item.desciption + '</p></div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

addCards()

// $(document).ready(function () {
//     addCards(cardList);
// });