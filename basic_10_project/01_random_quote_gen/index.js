// quotes 
const smileQuotes = [
    "Smile every morning because a happy face can make your whole day brighter and spread positivity to everyone around you.",
    "A simple smile can change someone’s mood, heal a sad heart, and remind people that kindness still exists.",
    "Never forget to smile, because your smile might be the small light someone needs in their darkest moment.",
    "Life becomes easier when you learn to smile through challenges and keep a positive attitude in every situation.",
    "Your smile is powerful enough to brighten someone’s day, even if you never realize how much it matters.",
    "Smiling costs nothing, but it gives happiness, builds connections, and spreads positive energy wherever you go.",
    "Every smile you share creates a ripple of happiness that can travel further than you ever imagine.",
    "Smile more often because life is too short to stay serious and miss the beautiful moments around you.",
    "A genuine smile reflects a peaceful heart and a mind that chooses positivity over negativity every day.",
    "Even on difficult days, try to smile because hope grows stronger when you keep your spirit positive.",
    "Your smile can silently encourage someone who is struggling and remind them that things will eventually get better.",
    "Smile with confidence and let the world see the happiness that lives inside your heart.",
    "Sometimes the best way to handle problems is simply to smile and move forward with courage.",
    "Smiling is a beautiful habit that makes you feel better and makes others feel comfortable around you.",
    "Let your smile be the reason someone believes that kindness and positivity still exist in this world.",
    "A warm smile can break barriers, start friendships, and bring peace to even the most stressful moments.",
    "Choose to smile today because happiness often begins with a simple positive expression on your face.",
    "Your smile is like sunshine that can warm hearts and brighten lives in the most unexpected ways.",
    "When you smile, you spread hope, joy, and positivity without saying a single word.",
    "Keep smiling because every smile you share adds a little more happiness to the world."
];
const btn = document.querySelector("button");
const quote = document.getElementById("quote")


function handleQuote(event) {
 let randomIndex = Math.floor(Math.random()*20 )
 quote.textContent=smileQuotes[randomIndex]
}

btn.addEventListener("click", handleQuote, false)