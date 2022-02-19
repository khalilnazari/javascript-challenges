// local data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLi_BSePjHLv0mWV4jUzOwNwO8Ce_G79Yal19X-9pRK5_H4kQpSxCe6hjBfP2_Ku6bKM&usqp=CAU",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-q3WWsLEVdDsXEddGHxpoE00Y2knvcEJ5pAmjsoUM2DFPFxfZO7_Y2GjBunSUmlbJds&usqp=CAU",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/cache/3.JPG-nggid03125-ngg0dyn-591x591-00f0w010c010r110f110r010t010.JPG",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];



// select data elements 
const img = document.querySelector("#person-img")
const author = document.querySelector('#author')
const job = document.querySelector('#job')
const info = document.querySelector('#info')

// select action buttons 
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')
let currentItem = 0; 

/** once document is loaded map the data to html.  **/  
window.addEventListener('DOMContentLoaded', () => {
  showItem(); 
})

// pervious person
prevBtn.addEventListener('click', () => {
  currentItem--; 
  if(currentItem < 0) {
    currentItem = reviews.length -1; 
  }
  showItem(); 
})

// Next person
nextBtn.addEventListener('click', () => {
  currentItem++; 
  if(currentItem > reviews.length -1) {
    currentItem = 0; 
  }
  showItem(); 
})


// random person
randomBtn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * reviews.length);
  currentItem = randomNumber; 
  showItem(); 
})


// show Person
function showItem () {
  const item = reviews[currentItem];
  img.src = item.img; 
  author.innerText = item.name;
  job.innerText = item.job; 
  info.innerText = item.text; 
}
