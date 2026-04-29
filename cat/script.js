function toggleMenu() {
    // This finds the menu whether you named it 'navLinks' or 'mobileMenu'
    const menu = document.getElementById("navLinks") || document.getElementById("mobileMenu");
    
    if (menu) {
        menu.classList.toggle("active");
    }
}

function toggleAnswer(element) {
    const question = element.parentElement;
    const answer = question.querySelector('.answer');
    const icon = element.querySelector('i');

    document.querySelectorAll('#questions .question.open').forEach(openQuestion => {
        if (openQuestion !== question) {
            openQuestion.classList.remove('open');
            openQuestion.querySelector('.answer').style.display = 'none';
            const openIcon = openQuestion.querySelector('h2 i');
            if (openIcon) {
                openIcon.classList.replace('fa-minus', 'fa-plus');
            }
        }
    });

    const isOpen = question.classList.toggle('open');
    answer.style.display = isOpen ? 'block' : 'none';
    if (icon) {
        icon.classList.toggle('fa-plus', !isOpen);
        icon.classList.toggle('fa-minus', isOpen);
    }
}


function toggleMenu() {
    // This finds the mobile menu by ID
    const nav = document.getElementById("navLinks");
    if (nav) {
        nav.classList.toggle("active");
    }
}