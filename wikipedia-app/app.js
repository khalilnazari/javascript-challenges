const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results');

// submit form
formDOM.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = inputDOM.value;

  // feild is empty 
  if (!value) {
    resultsDOM.innerHTML = `<div class='error'>please enter valid search term</div>`;
    return;
  }

  // fetch data
  fetchData(value);
});


// fetchData
const fetchData = async (searchValue) => {

  // loading....
  resultsDOM.innerHTML = `<div class="loading"></div>`;

  // try catch block 
  try {
    const response = await fetch(`${url}${searchValue}`);
    const data = await response.json();
    const results = data.query.search;

    // if no result 
    if (results.length < 1) {
      resultsDOM.innerHTML = `<div class='error'>no matching results. Please try again.</div>`;
      return;
    }

    // display result
    renderResults(results);
  } catch (error) {
    console.log(error);
    resultsDOM.innerHTML = `<div class='error'>there was an error...</div>`;
    return;
  }
};

// renderResults
const renderResults = (list) => {
  const cardsList = list.map((item) => {
    const { title, snippet, pageid } = item;
    return `<a href="http://en.wikipedia.org/?curid=${pageid}" target="_blank">
              <h4>${title}</h4>
              <p>${snippet}</p>
            </a>`;
  }).join('');

  resultsDOM.innerHTML = `<div class="articles">${cardsList}</div></div>`;
};
