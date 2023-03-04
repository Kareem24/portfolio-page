const data = [
  {
    id: '1',
    title: 'Tonic',
    image: 'images/Snapshoot-Portfolio.svg',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident itaque
            odit, atque ab, repudiandae reiciendis inventore necessitatibus architecto omnis, quasi`,
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
            odit, atque ab, repudiandae reiciendis inventore necessitatibus architecto omnis, `,
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
const projectDiv = document.querySelector('.center');
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
        <div class="project-row d-flex pop-up">
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

// form validation
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const messageInput = document.querySelector('.text-area');
const nameError = document.querySelector('.name-error');
const nameValid = document.querySelector('.name-valid');
const emailError = document.querySelector('.email-error');
const emailValid = document.querySelector('.email-valid');
const messageError = document.querySelector('.message-error');
const messageValid = document.querySelector('.message-valid');
const submitBtn = document.getElementById('submit-btn');
function disableBtn(value) {
  submitBtn.disabled = value;
  submitBtn.classList.add('disable');
}

// console.log(nameInput,emailInput,messageInput,nameError,emailError,messageError);
nameInput.addEventListener('input', () => {
  const name = nameInput.value;
  if (name.length === 0) {
    nameError.innerHTML = 'Name is required';
    nameValid.innerHTML = `<span class='bad'><i class='bx bxs-error-alt'></i></span>`;
    disableBtn(true);
    return false;
  }
  if (!name.match(/^[A-za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write full name';
    nameValid.innerHTML = `<span class='bad'><i class='bx bxs-error-alt'></i></span>`;
    disableBtn(true);

    return false;
  } else {
    nameError.innerHTML = ' ';
    nameValid.innerHTML = `<span class='good'><i class='bx bxs-check-circle'></i></span>`;
    disableBtn(false);
    submitBtn.classList.remove('disable');

    return true;
  }
});
// validate email
emailInput.addEventListener('input', () => {
  const email = emailInput.value;
  if (email.length === 0) {
    emailError.innerHTML = 'Email is required';
    emailValid.innerHTML = `<span class='bad'><i class='bx bxs-error-alt'></i></span>`;
    disableBtn(true);

    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email is not valid';
    emailValid.innerHTML = `<span class='bad'><i class='bx bxs-error-alt'></i></span>`;
    disableBtn(true);

    return false;
  } else {
    emailError.innerHTML = ' ';
    emailValid.innerHTML = `<span class='good'><i class='bx bxs-check-circle'></i></span>`;
    disableBtn(false);
    submitBtn.classList.remove('disable');
    return true;
  }
});
// message validation
messageInput.addEventListener('input', () => {
  const message = messageInput.value;
  const required = 15;
  const left = required - message.length;
  if (message.length === 0) {
    messageError.innerHTML = 'message is required';
    messageValid.innerHTML = `<span class='bad'><i class='bx bxs-error-alt'></i></span>`;
    disableBtn(true);
  }
  if (left > 1) {
    messageError.innerHTML = left + ' more characters required';
    messageValid.innerHTML = `<span class='bad'><i class='bx bxs-error-alt'></i></span>`;
    disableBtn(true);
  }
  if (left < 0) {
    messageError.innerHTML = '';
    messageValid.innerHTML = `<span class='good'><i class='bx bxs-check-circle'></i></span>`;
    disableBtn(false);
    submitBtn.classList.remove('disable');
  }
});
