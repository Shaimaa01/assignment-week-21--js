//assignment 1 in json

// assignment 2
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText); // Log only the relevant data
    console.log("Data Loaded");
    useData(this.responseText);
  }
};

// assignment 3
function useData(jsonData) {
  const mainData = JSON.parse(jsonData);
  console.log(mainData);

  // parent div for all article
  const div = document.createElement("div");
  div.setAttribute("id", "data");
  document.body.appendChild(div);

  for (let i = 0; i < mainData.length; i++) {
    mainData[i].department = "all";

    articleArray = Object.entries(mainData[i]).map(([key, value]) => {
      return `${key}:${value}`;
    });

    // child div for each article contain all article detalis
    const articleDiv = document.createElement("div");
    div.appendChild(articleDiv);

    // article title
    const articleTitle = document.createElement("h2");
    articleTitle.textContent = articleArray[3].slice(articleArray[3].indexOf(":")+1) ;
    articleDiv.appendChild(articleTitle);
   

    // article content
    const articleContent = document.createElement("p");
    articleContent.textContent = articleArray[4].slice(articleArray[4].indexOf(":")+1);
    articleDiv.appendChild(articleContent);

    // article Author
    const author = document.createElement("p");
    author.textContent = articleArray[1];
    articleDiv.appendChild(author);

    // article Category
    const category = document.createElement("p");
    category.textContent = articleArray[2];
    articleDiv.appendChild(category);
  }
  console.log(mainData);
  const updatedData = JSON.stringify(mainData);
  console.log(updatedData);
}
