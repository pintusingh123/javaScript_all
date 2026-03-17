function store(e){
  // localStorage.setItem("name", "pintu singh")// used for set data
 // let name =  localStorage.getItem("name"); //used for get data by key 
//  localStorage.removeItem("name") used for remove data
e.preventDefault();
const form = document.querySelector("form")
const key = document.getElementById("key").value
const value = document.getElementById("value").value
// console.log(key,value); 
localStorage.setItem(key,value)

form.reset()
 new Swal({
    icon: "success",
    title:"successfully submit your Data",
    showConfirmButton:false,
    toast:true,
    position: "top-end",
    timerProgressBar:true,
    timer:3000

 })
}