const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

// API URL manzili (Ikkita qiya chiziq '://' va 'https' borligini tasdiqlang)
const url = "https://api.quotable.io/random"; 

let getQuote = async () => {
    // Yuklanish holatini ko'rsatish
    quote.innerText = "Loading...";
    author.innerText = "Please wait";
    
    try {
        // Fetch() dan foydalanish (asynchronous/await bilan ishlash osonroq)
        const response = await fetch(url);
        
        // Agar javob 'OK' (200) bo'lmasa, xato tashlash
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Ma'lumotlarni sahifaga joylash
        quote.innerText = data.content;
        author.innerText = data.author;

    } catch (err) {
        // Tarmoq yoki boshqa xatoliklarni ushlash
        quote.innerText = "Error while fetching quote.";
        author.innerText = "Please check console and network.";
        console.error("Fetch Error:", err);
    }
};

// Sahifa yuklanganda va tugma bosilganda funksiyani chaqirish
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);


