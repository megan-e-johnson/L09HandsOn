let newAlbert = new XMLHttpRequest();
newAlbert.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let alObj = JSON.parse(this.responseText);
    document.getElementById("name").innerHTML = alObj.name;
    document.getElementById("birth").innerHTML = alObj.birthday;
  };
}
newAlbert.open("GET", "einstein.json", true);
newAlbert.send();

function getBio() {
    const alBio = new XMLHttpRequest();
    alBio.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let alObj2 =JSON.parse(this.responseText);
            document.getElementById("loadBio").innerHTML = alObj2.bio; 
        }
    };
    alBio.open("GET", "einstein.json", true);
    alBio.send();
}