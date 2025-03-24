function search() {
    // var text = document.getElementById('search_hero').value.toLowerCase();
    const tr = document.getElementsByTagName('tr');
    for (let i = 1; i < tr.length; i++) {
        const heroName = tr[i].getElementsByTagName('td')[1].textContent.toLowerCase();
        if (heroName.includes(text)) {
            tr[i].style.display = '';
        } else {
            tr[i].style.display = 'none';
        }
    }
}

// document.getElementById('search_hero').addEventListener('input', search);