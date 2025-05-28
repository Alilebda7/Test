const today = new Date();
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
const ayahNumber = (dayOfYear % 6236) + 1;

fetch(`https://api.alquran.cloud/v1/ayah/${ayahNumber}/editions/ar.alafasy,en.sahih`)
    .then(res => res.json())
    .then(data => {
        const arabic = data.data[0].text;
        const english = data.data[1].text;
        const surahNumber = data.data[0].surah.number;
        const ayahNum = data.data[0].numberInSurah;
        document.getElementById('verse-content').innerHTML = `
            <h2 class="verse">${arabic}</h2>
            <p class="transelation">${english}</p>
            <p class="verse-number">(${surahNumber}:${ayahNum})</p>
        `;
    });

// Gregorian calendar 
const now = new Date();
    const year = now.getFullYear();
        const month = now.getMonth() + 1;
            const day = now.getDate();
                const hour24 = now.getHours();
            const hour = hour24 % 12 === 0 ? 12 : hour24 % 12;
        const ampm = hour24 >= 12 ? 'PM' : 'AM';
    const minute = now.getMinutes();
const second = now.getSeconds();
    document.getElementById('gregorian').innerHTML = `
        <p class="Gregorian-calender">${year}/${month}/${day}  
        ${hour}:${minute}:${second} ${ampm}</p>
`;

// hijri calendar
const formatted = today.toLocaleDateString('en-GB').split('/').join('-');
fetch(`https://api.aladhan.com/v1/gToH?date=${formatted}`)
    .then(res => res.json())
    .then(data => {
        const hijri = data.data.hijri;
        const hijriDate = `${hijri.day} ${hijri.month.en} ${hijri.year}`;
            document.getElementById('hijri').innerHTML = `
        <p class="Hijri-calender">${hijriDate}</p>`
});


// Copy button functionality
const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', copyVerse);
function copyVerse(){
    const text = document.querySelector('#verse-of-the-day').innerText;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Verse copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}


// Favourite button functionality