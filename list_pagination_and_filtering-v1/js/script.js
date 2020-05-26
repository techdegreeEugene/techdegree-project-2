//grabbing elements for the student list and button creation
const pageClass = document.querySelector('.page');
const allStudentList = document.getElementsByClassName("student-item cf");
const pageButDiv = document.createElement('div');
const pageButUl = document.createElement('ul');
const resultsDiv = document.createElement('div');

// Creating pagination buttons
pageButDiv.className = 'pagination';
pageButDiv.appendChild(pageButUl);
pageClass.appendChild(pageButDiv);



// Show the selected students
const showPage = (list, page) => {
  for(let i = 0; i < allStudentList.length; i++) { //Hide everything
    allStudentList[i].style.display = 'none';
  } 
  if(list.length === 0) {
    resultsDiv.style.display = 'block';
  }
  else {
    let first = ((page - 1) * 10); //Show based on which button is chosen
    let last = (first + 10);
    for(let i = first; i < last && i < list.length; i++) {
      list[i].style.display = '';
    }
    resultsDiv.style.display = 'none';
  }
};

// Generate, append and add functionality to pagination buttons
const appendPageLinks = (studList) => {
  let numStudents = studList.length;
  let numPages = Math.floor(numStudents / 10) + 1;
  let selectedButton = 1;
  

  showPage(studList, selectedButton);

  // Create new button for each page
  for(let i = 0; i < numPages; i++) {
    let pagButton = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.href = '#';
    // Make first button active
    if(i === 0) {
      anchor.className = 'active';
    }
    anchor.textContent = i + 1; // Buttons text will start at 1 instead of 0
    pagButton.appendChild(anchor);
    pageButUl.appendChild(pagButton);
  }

  // Update page when new page button clicked
  pageButUl.addEventListener('click', (e) => { //Look for which button the user chose
    let previousButton = document.querySelector('.active');
    previousButton.className = '';
    selectedButton = e.target.textContent; //Program reads which button is chosen
    e.target.className = 'active';
    showPage(studList, selectedButton);
  });
};


// Call the function on load
appendPageLinks(allStudentList);