const hashLinks = document.querySelectorAll('.hash-route-link')

const app = document.querySelector('#app')

const routes = {
    "": {
        title: "Page Not Found",
        data: "./404page.html",
    },
    "#home": {
        title: "Kasim Pasaoglu | Home",
        data: "./home.html",
    },
    "#learningExercises": {
        title: "Kasim Pasaoglu | Exercises",
        data: "./learningExercises.html",
    },
    "#contact": {
        title: "Kasim Pasaoglu | Contact",
        data: "./contact.html",
    },
}



function checkRoute(hash = window.location.hash) {
    if (!hash) {
        hash = "#home";
    }

    const route = routes[hash] || routes[""];

    if (!routes[hash]) {
        document.title = routes[""].title;
        fetch(routes[""].data)
            .then(res => res.text())
            .then(data => app.innerHTML = data)
            setActiveLink(hash)
            .catch(error => console.error('Error:', error));
        } else {
            document.title = route.title;
            fetch(route.data)
            .then(res => res.text())
            .then(data => {
                app.innerHTML = data;
                setActiveLink(hash)
                if (hash === "#home") {
                    fetchHomeContent();
                    fetchAccomplishments();
                }
                if (hash === "#learningExercises") {
                    fetchProjectsHero()
                    fetchProjects()
                }
                if (hash === "#contact") {
                    fecthContactHero()
                }
            })
            .catch(error => console.error('Error:', error));
    }
}

// Home Content Start

function fetchHomeContent() {
    fetch('src/data/aboutme.json')
        .then(response => response.json())
        .then(data => {
            const titleElement = document.querySelector('#homeTitle');
            const textElement = document.querySelector('#homeText');

            titleElement.innerHTML = data.title;
            textElement.innerHTML = data.text;
        })
        .catch(error => console.error('Error fetching home content:', error));
}

// Home Content End

// List of Accomplishments Start

function fetchAccomplishments() {
    fetch('src/data/accomplishments.json')
        .then(response => response.json())  
        .then(data => {
            const accordionSub = document.querySelector('#accordionSub');
            accordionSub.innerHTML = ''

            data.forEach((accomplishment, index) => {

                const item = document.createElement('div');
                item.className = 'accordion-item';

                const header = document.createElement('h6');
                header.className = 'accordion-header';
                header.id = `heading${index}`;

                const button = document.createElement('button');
                button.className = 'accordion-button collapsed';
                button.type = 'button';
                button.setAttribute('data-bs-toggle', 'collapse');
                button.setAttribute('data-bs-target', `#collapse${index}`);
                button.setAttribute('aria-expanded', 'false');
                button.setAttribute('aria-controls', `collapse${index}`);
                button.textContent = accomplishment.category.toUpperCase();

                header.appendChild(button);
                item.appendChild(header);

                const collapse = document.createElement('div');
                collapse.id = `collapse${index}`;
                collapse.className = 'accordion-collapse collapse';
                collapse.setAttribute('aria-labelledby', `heading${index}`);
                collapse.setAttribute('data-bs-parent', '#accordionSub');

                const body = document.createElement('div');
                body.className = 'accordion-body';

                if (accomplishment.items) {
                    const list = document.createElement('ul');
                    accomplishment.items.forEach((item, subIndex) => {
                        const listItem = document.createElement('li');
                        listItem.textContent = item;
                        list.appendChild(listItem);
                    });
                    body.appendChild(list);
                }

                collapse.appendChild(body);
                item.appendChild(collapse);
                accordionSub.appendChild(item);
            });
        })
        .catch(error => console.error('Error fetching accomplishments:', error));  
}

// List of Accomplishments End

// Exercises Hero Start

function fetchProjectsHero() {
    fetch('src/data/projectshero.json')
        .then(res => res.json())
        .then(data => {
            const titleElement = document.querySelector("#projectsHeroTitle")
            const text1Element = document.querySelector("#projectsHeroText1")
            const text2Element = document.querySelector("#projectsHeroText2")

            titleElement.innerHTML = data.title
            text1Element.innerHTML = data.text1
            text2Element.innerHTML = data.text2
        })
        .catch(error => console.error('Error fetching projects hero content:', error))
}

// Exercises Hero End



// Exercises Cards Start

function fetchProjects() {
    fetch('src/data/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.querySelector('#projectsContainer');
            projectsContainer.innerHTML = ''
            data.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'col-md-4 my-3';

                projectCard.innerHTML = `
                    <div class="card h-100 shadow rounded-4">
                        <img src="${project.img}" alt="${project.title}" class="card-img-top rounded-top-4">
                        <div class="card-body d-flex flex-column align-items-center">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <a href="${project.link}" target="_blank" class="w-50 mt-auto align-self-center btn btn-primary">Go To Page</a>
                        </div>
                    </div>
                `;

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
}

// Exercises Cards End

// Contact Hero Start
function fecthContactHero() {
    fetch('src/data/contacthero.json')
    .then(res => res.json())
    .then(data => {
        const titleElement = document.querySelector("#contactHeroTitle")
        const textElement = document.querySelector('#contactHeroText')

        titleElement.innerHTML = data.title
        textElement.innerHTML = data.text
    })
    .catch(error => console.error('Error fetching contact hero content:', error))
}
// Contact Hero End

// Navbar active class change
function setActiveLink(hash) {
    hashLinks.forEach(link => {
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
// Navbar active class change

hashLinks.forEach(item => item.addEventListener("click", (event) => {
    event.preventDefault()
    const hash = item.getAttribute('href')
    window.location.hash = hash
    checkRoute(hash)
    setActiveLink(hash)
}))

window.addEventListener('hashchange', () => {
    checkRoute();
});

checkRoute()