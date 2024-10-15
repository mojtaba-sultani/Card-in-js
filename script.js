let dropdownMenu=document.querySelector("#dropdown-menu");
let menu=document.querySelector("#menu");


menu.addEventListener("click",()=> {
    dropdownMenu.classList.toggle("hidden");
})



function createCard() {
    
    const card=document.createElement("div");
    card.classList="flex flex-col col-span-1 bg-stone-200 p-4 rounded-md h-[510px] hover:bg-stone-300 hover:scale-105 cursor-pointer"
    const imageCard=document.createElement("img");
    imageCard.setAttribute("src","https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI");
    imageCard.classList="w-full rounded-md h-1/2";
    const discription=document.createElement("div");
    // --------------------------------------
    card.appendChild(imageCard);
    card.appendChild(discription);
    
    discription.classList="mt-3 w-full flex justify-center flex-col text-2xl items-center p-4 h-1/2"
    
    const title=document.createElement("h2");
    title.classList="text-3xl font-bold"
    title.textContent="title"
    
    const paragraph=document.createElement("p");
    paragraph.classList="my-2 text-justify"
    paragraph.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, asperiores!"

    const button=document.createElement("button");
    button.classList="bg-blue-500 p-4 rounded-md w-full hover:bg-blue-700 text-white"
    button.textContent="click";

    discription.appendChild(title);
    discription.appendChild(paragraph)
    discription.appendChild(button);

    let cardParent=document.querySelector("#card-parent");
    cardParent.appendChild(card);
}
for (let i = 0; i < 10; i++) {
    createCard()
}
