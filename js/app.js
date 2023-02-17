const data = [
  {
    id: '1',
    title: 'Tonic',
    image: 'images/Snapshoot-Portfolio.svg',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident itaque
            odit, atque ab, repudiandae reiciendis inventore necessitatibus architecto omnis, quasi
            tenetur possimus deleniti facilis. Aut nostrum rem, excepturi repellat odit recusandae
            cumque nobis aliquam. Eius saepe debitis dolorum quaerat sed error, facilis id vero,
            excepturi sequi qui, natus vitae? lorem444`,
    technology: ['html', 'css', 'javascript'],
    live: 'hello.com',
    source: 'github.com',
  },
  {
    id: '2',
    title: 'Multi-Post Stories',
    image: 'images/second-project.svg',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
    technology: ['html', 'css', 'typescript'],
    live: 'hello.com',
    source: 'github.com',
  },
  {
    id: '3',
    title: 'Multi-Post Stories',
    image: 'images/third-project.svg',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident itaque
            odit, atque ab, repudiandae reiciendis inventore necessitatibus architecto omnis, quasi
            tenetur possimus deleniti facilis. Aut nostrum rem, excepturi repellat odit recusandae
            cumque nobis aliquam. Eius saepe debitis dolorum quaerat sed error, facilis id vero,
            excepturi sequi qui, natus vitae? lorem444`,
    technology: ['html', 'css', 'javascript', 'ruby'],
    live: 'hello.com',
    source: 'github.com',
  },
  {
    id: '4',
    title: 'Multi-Post Stories',
    image: 'images/forth-project.svg',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
    technology: ['html', 'css', 'javascript'],
    live: 'hello.com',
    source: 'github.com',
  },
];
const closeIcon = 'images/Icon.svg';

const showMenu = document.querySelector('#hamburger');
const hideMenu = document.querySelector('#close-btn');
const navlinks = document.querySelector('.links');
const projectBtns = document.querySelectorAll('.see-project');
const projectDiv = document.querySelector('.pop-up');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');

showMenu.addEventListener('click', () => {
  navlinks.classList.add('show-nav');
  navlinks.classList.remove('hide-nav');
});
hideMenu.addEventListener('click', () => {
  navlinks.classList.add('hide-nav');
});
window.addEventListener('scroll', () => {
  navlinks.classList.add('hide-nav');
});

// iterating through the see project btn
const showProject = projectBtns.forEach(projectBtn => {
  projectBtn.addEventListener('click', () => {
    data.find(project => {
      const { id, title, description, live, technology, source, image } = project;
      const technologies = technology.map(tech => `<p class="lang-use">${tech}</p>`).join('');
      if (projectBtn.dataset.id === id) {
        projectDiv.classList.remove('d-none');
        modal.classList.remove('d-none');
        body.classList.add('hidden');
        projectDiv.innerHTML = `
        <div class="project-text-col">
          <h2 class="heading-dark">${title}</h2>
          <div class="d-flex subtitle">
            <div class="topic-text d-flex">
              <p class="bold-dark">CANOPY</p>
              <div class="dot"></div>
              <p class="bold-light">Backend Dev</p>
              <div class="dot"></div>
              <p class="bold-light">2015</p>
            </div>
            <div class="modal-btn">
              
              <button type="button" class="close-modal">
              <img src=./images/closing-modal.png alt="close button" width="20" height="20" />
              </button>
            </div>
          </div>
          <div class="image-col">
            <img src=${image} alt="" />
          </div>
        </div>
        <div class="pop-up-description">
          <p class="description-text desc-text ">
            ${description}
          </p>
          <div class="btn-lang">
            <div class=" d-flex pop-up-language">
              ${technologies}
            </div>

            <div class="pop-up-btns d-flex">
              <a href="${live}">
                <button
                  type="button"
                  class="btn-light pop-up-btn d-flex"
                  aria-label="click to see the site preview"
                >
                  see live <img src="./images/go-live.png" alt="" width="15" height="15" />
                </button>
              </a>
              <a href="${source}">
                <button
                  type="button"
                  class="btn-light pop-up-btn d-flex"
                  aria-label="click to see source code"
                >
                  see source
                  <img src="./images/github.png" alt="" width="15" height="15" />
                </button>
              </a>
            </div>
          </div>
        </div>
      `;
      }
    });
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
      projectDiv.classList.add('d-none');
      modal.classList.add('d-none');
      body.classList.remove('hidden');
    });
  });
});
