 
 //creating ele
 let newele = document.createElement("h2");
 
 newele.textContent = "thsi is owsm"
 newele.id = "dynamic"
console.log(newele);

//select ele
 let static =  document.getElementById("static");
// static.before(newele)
static.after(newele)

 
const newele2 = document.createElement("h3");
newele2.textContent = "this is third ele";
newele2.id = "static2"
newele2.className ="static2-c"
newele2.style.backgroundColor = "blue"
// newele2.className +="static3-c"

// newele2.classList.add("diwali")
// newele2.classList.remove("diwali")

 //dynmaic values set for selected ele 
// newele.after(newele2)
// newele.before(newele2)

//geting and seting atribute value .........
// newele2.setAttribute("atributName", "value")
// newele2.getAttribute("atributeName") //return given atribut value


//dynamic value set inside a empty alements =>
    
const unorderlist  = document.getElementById("listing")

//manually values set karna ===> { 

//listOne 
// const listing = document.createElement("li");
//  listing.textContent = "milk";
//  listing.id="milk"
// //listTwo
// const listing2 = document.createElement("li");
// listing2.textContent="cake"

// //listthree
// const listing3 = document.createElement('li');
// listing3.textContent="icecream"

// //listingFour
// const listing4 = document.createElement('li');
// listing4.textContent = "panner"

 //appending ele in other empty ele
//  unorderlist.append(listing,listing2) //last me jake add or append krta hai
 
// unorderlist.prepend(listing3) //starting mai jake add or append krat hai

//one way for unorderlist ele selected 
// const milk = document.getElementById("milk")
// milk.after(listing4)

//secodn way by indexing for selecting and apending data
// unorderlist.children[1].after(listing4)

// }

//dynamic and best way for appending data in any ul

const arr = ['milk', "iceCream", "cake", "juic" , "rice"]
const unorderlist2  = document.getElementById("listing")
 const Fragment = document.createDocumentFragment();

for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food
    Fragment.append(list)
   
}
//optimize way
 unorderlist2.append(Fragment)

 //deleting any ele or list 
 


