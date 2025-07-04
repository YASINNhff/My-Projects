// Create a fake Database for Practice On it

const usersData = [
  {
    src: "assets/images/photo_2025-03-24_05-02-29 copy.jpg",
    Name: "Yasin Shaterpour",
    Job: "Developer",
    Description:
      " adipisicing elit. Aliquam earum voluptatum sequi eius quisquam in explicabo sed, quas deleniti voluptas, maxime.",
  },
  {
    src: "assets/images/young-bearded-man-with-striped-s.jpg",
    Name: "Asghar Bashash",
    Job: "Velgard",
    Description:
      "Lorem ipsum oluptatum sequi eius quisquam in explicabo sed, quas deleniti voluptas, maxime.",
  },
  {
    src: "assets/images/Hidden costs of being black_0d81.jpg",
    Name: "Nigga Karmand",
    Job: "Pache Khari",
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam earum voluptatum sequi eius quisquam in explicabo sed, quas deleniti voluptas, maxime.",
  },
  {
    src: "assets/images/close-up-portrait-of-smiling-han.jpg",
    Name: "Ahmad Basigi",
    Job: "Sandis Khordan",
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit in explicabo sed, quas deleniti voluptas, maxime.",
  },
  {
    src: "assets/images/360_F_224869519_aRaeLneqALfPNBzg.jpg",
    Name: "Ahmad Teyaki",
    Job: "Najar",
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam earum voluptatum sequi eius ",
  },
];
let currentIndex = 0 ;

    
const nextButton = document.querySelector(".next-button")
const previousButton = document.querySelector(".previous-button")


function showComment (){
    let Item = document.querySelector(".Comment-box");
    let currentUser = usersData[currentIndex];
    let CommentItem = `<div class="Comment-image">
    <img src="${currentUser.src}">
    </div>
    <div class="info-box">
    <div class="Comment-Name"> <h1>${currentUser.Name}</h1></div>
    <div class="Comment-Job">${currentUser.Job}</div>
    <div class="Comment-Description">${currentUser.Description}</div>
    </div>`;
    
    Item.innerHTML = CommentItem;
    
}
window.addEventListener("DOMContentLoaded" ,showComment)


// Event Listeners

// Go To Previous Event

previousButton.addEventListener("click" , () => {

    currentIndex--;
    if(currentIndex < 0){
        currentIndex = usersData.length - 1
    }
    // Update Intialaze
    showComment();
    

})

// Go To Next Event


nextButton.addEventListener("click" , () => {

    currentIndex++;
    if(currentIndex > usersData.length - 1){
        currentIndex = 0;
    }
     // Update Intialaze
    showComment()
})

