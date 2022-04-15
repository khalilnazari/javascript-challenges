// dropdown nav toggle
const dropdownNav = document.querySelector('.dropdown-nav'); 
const dropdownBtn = document.querySelector('.dropdown-btn'); 
dropdownBtn.addEventListener('click', () => {
    dropdownNav.classList.toggle('show')
})

// container 
const container = document.querySelector('.container'); 
const containerWidth = container.clientWidth; 

const navItem = document.querySelector('.nav-item')

// inlne nav
const inlineNav = document.querySelector('.inline-nav'); 
const inlineNavChildren = inlineNav.children; 
const inlineNavLength = inlineNavChildren.length; 
const inlineNavLastChild = inlineNavChildren[inlineNavLength -1]

// dropdown nav
const dropdownNavChildren = dropdownNav.children; 
const dropdownNavLength = dropdownNavChildren.length; 
const dropdownNavLastChild = dropdownNavChildren[dropdownNavLength -1]
const dropdownNavLastChildClone = dropdownNavLastChild.cloneNode(true); 


let navItemWidth =0;
let addItem =[]; 
// loop on inline-nav children
[...inlineNavChildren].forEach( navItem => {
    navItemWidth += navItem.clientWidth;  
    // if inline-nav width is bigger than container width remove inline nav and add to dropdown
    if (navItemWidth + 50 > containerWidth) {
        addItem.push(navItem)
        navItem.remove(); 
    } 
});
appendToNav(addItem)



window.addEventListener('resize', () => {

    const container = document.querySelector('.container'); 
    const containerWidth = container.clientWidth; 

    const navItem = document.querySelector('.nav-item')
    const navItemWidth = navItem.clientWidth; 


    // inline nav children
    const inlineNavChildren = inlineNav.children; 
    const inlineNavLength = inlineNavChildren.length; 
    const inlineNavLastChild = inlineNavChildren[inlineNavLength -1]
    const inlineNavLastChildClone = inlineNavLastChild.cloneNode(true); 

    if ((navItemWidth * (inlineNavLength + 1)) > containerWidth) {
        inlineNavLastChild.remove(); 
        dropdownNav.appendChild(inlineNavLastChildClone)
    } 

    const dropdownNavChildren = dropdownNav.children; 
    const dropdownNavLength = dropdownNavChildren.length; 
    const dropdownNavLastChild = dropdownNavChildren[dropdownNavLength -1]
    const dropdownNavLastChildClone = dropdownNavLastChild.cloneNode(true); 

    if ((navItemWidth * (inlineNavLength + 1)) < containerWidth) {
        dropdownNavLastChild.remove(); 
        inlineNav.appendChild(dropdownNavLastChildClone)
    }
})


function appendToNav(addItem) {
    let reversedItems = addItem.reverse(); 
    reversedItems.forEach(item => {
        dropdownNav.insertBefore(item, dropdownNav.firstChild);
    })
} 