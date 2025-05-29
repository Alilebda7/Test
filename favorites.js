favouriteButton.addEventListener('dblclick', () => {
    const reference = `(${surahNumber}:${ayahNum})`;
    // Get Arabic and English text separately
    const verseSection = document.getElementById('verse-content');
    const arabic = verseSection.querySelector('.verse')?.innerText || '';
    const english = verseSection.querySelector('.transelation')?.innerText || '';
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = favorites.some(v => v.reference === reference);

    if(exists){
        favorites = favorites.filter(v => v.reference !== reference);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert("Verse removed from favorites.");
        console.log(`${reference} Removed from favorites:`);
    } else {
        favorites.push({arabic, english, reference});
        localStorage.setItem('favorites', JSON.stringify(favorites));   
        alert('Verse added to favorites!');
        console.log("Saved to favorites:", reference);
    }
    showFavorites();
    updateHeartIcon();
});


// Shows favorites

function showFavorites() {
  const list = document.getElementById('favoritesList');
  list.innerHTML = ''; // Clear previous render

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favorites.length === 0) {
    const li = document.createElement('li');
    li.innerHTML = '<em>No favorites yet.</em>';
    list.appendChild(li);
    updateHeartIcon();
    return;
  }

  favorites.forEach(v => {
    const li = document.createElement('li');
    li.className = 'favorite-item';
    li.innerHTML = `
      <span class="arabic">${v.arabic || ''}</span>
      <span class="transelation">${v.english || ''}</span>
      <span class="verse-number">${v.reference}</span>
      <button class="remove-btn" data-ref="${v.reference}">🗑️ Remove</button>
    `;
    list.appendChild(li);
  });

  // Add event listeners to remove buttons
  const removeButtons = list.querySelectorAll('.remove-btn');
  removeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const ref = this.getAttribute('data-ref');
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites = favorites.filter(v => v.reference !== ref);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      showFavorites();
      updateHeartIcon();
    });
  });

  updateHeartIcon();
}

function updateHeartIcon() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const reference = `(${window.surahNumber}:${window.ayahNum})`;
  const heartIcon = document.querySelector('.fa-heart');
  if (!heartIcon) return;
  if (favorites.some(v => v.reference === reference)) {
    heartIcon.classList.remove('fa-regular');
    heartIcon.classList.add('fa-solid');
    heartIcon.style.color = 'red';
  } else {
    heartIcon.classList.remove('fa-solid');
    heartIcon.classList.add('fa-regular');
    heartIcon.style.color = 'white';
  }
}

// Call showFavorites on page load to display stored favorites
showFavorites();
