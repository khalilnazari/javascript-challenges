// article container
const articlesContainer = document.querySelector('.articles');

// darkmode button
const darkModeBtn = document.getElementById('btn-darkmode')
// lightmode button
const lightModeBtn = document.getElementById('btn-lightmode')

// hide lightmode button by default
lightModeBtn.style.display = 'none'; 

// darkmode button
darkModeBtn.addEventListener('click', () => {
    document.documentElement.classList.add('dark-theme');
    lightModeBtn.innerText = "Light Mode"; 
    lightModeBtn.style.display = 'inline'; 
    darkModeBtn.style.display = 'none'; 
});

// lightmode button
lightModeBtn.addEventListener('click', () => {
    document.documentElement.classList.remove('dark-theme');
    lightModeBtn.innerText = "Dark Mode"
    darkModeBtn.style.display = 'inline'; 
    lightModeBtn.style.display = 'none';
});

// map article data
const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join('');

articlesContainer.innerHTML = articlesData;