// getting data that we need from HTML

const menuList = document.querySelector(".menu-section");
const loader = document.querySelector(".loader");
const searchInput = document.querySelector("#search-input");
const ButtonList = document.querySelector(".nav-bar");
let menuItems = null;
searchInput.addEventListener("input" , searchItemByName );

// create a async function for Load Data from API

const fetchMenuItems = async () => {
  
  // try and catch for Error Handeling (if User Doesnt Have network or anythink else)

   try{

    // getting data from Axios Library 

    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s")
    const data = response.data;
    menuItems = data.meals;
    
// reduce method for Save Categories in Accumolator

let categories = menuItems.reduce((acc , item) => {
if(item.strCategory && !acc.includes(item.strCategory)){  // if for Stop Repetition
  acc.push(item.strCategory)
}
return acc;
} , ["all"])

// adding Them to HTML from Accumolator


categories.forEach(item => {
  ButtonList.innerHTML += ` <div 
  class="nav-bar-item"
  data-category = ${item}
  onclick="filterMenuItems(this)">
        <p>${item}</p>
      </div>`; });
  // this is for when datas loaded , loader of site be hide 
    loader.style.display = 'none'
    displayMenuItems(menuItems);
  
  }
  catch(error){
    menuList.innerHTML = `<h2 class="not-found-text">${error.message}</h2>`
  }
}

fetchMenuItems()



const displayMenuItems = (items) => {

  // error handeling of Search Input

  menuList.innerHTML = ""
  if(items.length === 0){
    menuList.innerHTML = `<h4 class=
    "not-found-text">Text Doesnt Exist</h4>`;
  }
  
  // adding datas to Menu Section in html with (map method)

  items.map((item) => {
    let menuItem = `
      <div class="menu-item">
        <div class="menu-item-img"><img src="${item.strMealThumb}" alt="${item.strMeal}"></div>
        <p>${item.strMeal}</p>
      </div>
    `;
    menuList.innerHTML += menuItem;
  })
}
// search with input (this function will work when user is using input event on search input = Line 8)

function searchItemByName () {

  // filtering item that we need with (filter method)
  
  let searchedText = searchInput.value.toLowerCase().trim();
const filteredItems = menuItems.filter((item) => {
  let matchedItems = item.strMeal.toLowerCase().includes(searchedText)
  return matchedItems;
})
displayMenuItems(filteredItems)

}
function filterMenuItems  (item)  {
  // add active class when i click category buttons = Line 40

  let allButtons = ButtonList.querySelectorAll(".nav-bar-item");
  allButtons.forEach((e) => {
    e.className = "nav-bar-item"});
    item.classList.add("active");
    // matching data
    let dataCategori = item.dataset.category;
  let filteredCategori = menuItems.filter(item => {
    const matchedItems = item.strCategory.toLowerCase() === dataCategori.toLowerCase();
    return matchedItems;
  })
  displayMenuItems(filteredCategori)
  searchInput.value = ''
  if(dataCategori == "all"){
    displayMenuItems(menuItems)
  }

}