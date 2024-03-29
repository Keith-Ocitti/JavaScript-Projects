// local reviews data
const reviews = [
  {
    id: 1,
    name: "Keith Ocitti",
    job: "web developer",
    img: "images/ivan.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Martha Musiimire",
    job: "web designer",
    img: "images/musiimire.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Edgar Asiimwe",
    job: "FLASK DEVELOPER",
    img: "images/edgar.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 1;
//load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click", function () {
  if (currentItem < reviews.length) {
    currentItem++;
    showPerson(currentItem);
  } else if (currentItem > reviews.length - 1) {
    currentItem = 0;
    showPerson(currentItem);
  }
});

///show prev person
prevBtn.addEventListener("click", function () {
  if (currentItem > 0) {
    currentItem--;
    showPerson(currentItem);
  } else if (currentItem == 0) {
    currentItem = reviews.length - 1;
    showPerson(currentItem);
  }
});

//random button
randomBtn.addEventListener("click", function () {
  const currentPerson = Math.floor(Math.random() * reviews.length);
  showPerson(currentPerson);
});
