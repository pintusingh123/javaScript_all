step for intalling sass => 
1 npm install -g sass
2 sass --version
3 Project Structure Change karo
{ 
Tumhara project abhi shayad aisa hai:

project
 ├── index.html
 ├── index.css
 └── index.js

Isko aisa bana do:

project
 ├── index.html
 ├── index.scss
 ├── index.css
 └── index.js

👉 index.scss tum likhoge
👉 index.css automatically generate hoga
}
4 {
    HTML me CSS hi Link hoga (SCSS nahi)

HTML me CSS file hi link hogi:

<link rel="stylesheet" href="./index.css">

⚠️ SCSS ko directly HTML me link nahi kar sakte.
}
5{
    
1️⃣ Node.js Install hona chahiye
Pehle check karo:

node -v
agar version aa gaya to Node installed hai.
Agar nahi hai to Node.js install karo.

2️⃣ Sass Install karo
Terminal / VS Code terminal me project folder open karo:

npm install -g sass
Check karo:

sass --version
3️⃣ Project Structure Change karo
Tumhara project abhi shayad aisa hai:

project
 ├── index.html
 ├── index.css
 └── index.js
Isko aisa bana do:

project
 ├── index.html
 ├── index.scss
 ├── index.css
 └── index.js
👉 index.scss tum likhoge
👉 index.css automatically generate hoga

4️⃣ HTML me CSS hi Link hoga (SCSS nahi)
HTML me CSS file hi link hogi:

<link rel="stylesheet" href="./index.css">
⚠️ SCSS ko directly HTML me link nahi kar sakte.

5️⃣ SCSS → CSS Compile karo
Terminal me command run karo:

sass index.scss index.css --watch
Iska matlab:

index.scss → index.css
Aur --watch ka matlab:

👉 file change hote hi automatically CSS update ho jayega.
}