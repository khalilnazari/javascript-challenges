// menu content
const menu = [
	{
		id: 1,
		title: "buttermilk pancakes",
		category: "breakfast",
		price: 15.99,
		img: "./images/item-1.jpeg",
		desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
	},
	{
		id: 2,
		title: "diner double",
		category: "lunch",
		price: 13.99,
		img: "./images/item-2.jpeg",
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
	},
	{
		id: 3,
		title: "godzilla milkshake",
		category: "shakes",
		price: 6.99,
		img: "./images/item-3.jpeg",
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
	},
	{
		id: 4,
		title: "country delight",
		category: "breakfast",
		price: 20.99,
		img: "./images/item-4.jpeg",
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
	},
	{
		id: 5,
		title: "egg attack",
		category: "lunch",
		price: 22.99,
		img: "./images/item-5.jpeg",
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
	},
	{
		id: 6,
		title: "oreo dream",
		category: "shakes",
		price: 18.99,
		img: "./images/item-6.jpeg",
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
	},
	{
		id: 7,
		title: "bacon overflow",
		category: "breakfast",
		price: 8.99,
		img: "./images/item-7.jpeg",
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
	},
	{
		id: 8,
		title: "american classic",
		category: "lunch",
		price: 12.99,
		img: "./images/item-8.jpeg",
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
	},
	{
		id: 9,
		title: "quarantine buddy",
		category: "shakes",
		price: 16.99,
		img: "./images/item-9.jpeg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 10,
		title: "Steack dinner",
		category: "steaks",
		price: 16.99,
		img: "./images/item-10.jpeg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	}
];

// selectors 
const menuWrapper = document.querySelector('.menu-wrapper'); 
const filterBtn = document.querySelector('.filter-buttons'); 

// after DOM is loaded 
window.addEventListener('DOMContentLoaded', () => {
	// filter buttons
	displayFilterButton()
	
	// menu itmes 
	displayMenu(menu); 
	
	// filter menu
	const filter_btn = document.querySelectorAll('.filter-btn'); 
	filterMenu(menu, filter_btn)
})

// loop filter buttons
function filterMenu(menuItems, filter_btn) {
	Array.from(filter_btn).forEach(btn => {
		// Click event for each button
	
		btn.addEventListener('click', (e) => {
			// id of button which the categor name
			const category = e.currentTarget.dataset.category; 

			// filter
			let filteredItem = menuItems.filter((item) => {
				if(item.category === category) {
					return item;
				} 
			})

			// check which category is selected
			if(category === 'all') {
				displayMenu(menuItems)
			} else {
				displayMenu(filteredItem)
			}
		})
	})
}

// map menu array to html 
function displayMenu(menuItem) {
	let menuHTML = menuItem.map(item => {
		return `
			<div class="menu-item" data-category="${item.category}">
				<div class="item-image">
					<img src="${item.img}" alt="menu image">
				</div>
				<div class="text">
						<header class="title">
								<h4>${item.title}</h4>
								<h4 class="price">${item.price}</h4>
						</header>
						<p>${item.desc}</p>
				</div>
			</div>`; 
	})

	menuWrapper.innerHTML= menuHTML.join(""); 
}



// map filter buttons 
function displayFilterButton() {

	let uniqueCategories = getUniqueCategories(); 

	let filterbuttons = uniqueCategories.map(category => {
		return `<button class="filter-btn" data-category="${category}">${category}</button> `
	})

	filterBtn.innerHTML = filterbuttons.join('')
}


function getUniqueCategories () {
	// let uniqueCategory =  [...new Set(menu.map(item => item.category))];
	let uniqueRecord =  menu.reduce((values, index) => {
		
		if(!values.includes(index.category)){
			values.push(index.category)
		}
		return values
	},['all']); 

	return uniqueRecord;
}