//assignment 1 in json

// assignment 2
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();


myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText); // Log only the relevant data
    console.log("Data Loaded");
     useData(this.responseText)
    
  }
};

// assignment 3
function useData(jsonData){
  const  mainData= JSON.parse(jsonData)
  console.log(mainData)
  for(let i=0;i<mainData.length;i++){
    mainData[i].department = "all"

  }
  console.log(mainData);
const updatedData = JSON.stringify(mainData)
console.log(updatedData)
}



