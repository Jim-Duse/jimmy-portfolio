//HTMLinner - myJob - Descriptions
fetch('./jobDescription.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Request unavailable');
            }
            return response.json();
        })
        .then(data => {
            const jobItem = data.jobDescriptionFH;
            console.log(jobItem);
                const xpParseUl = document.createElement('ul');
                jobItem.forEach(function(item) {
                const xpParseLi = document.createElement('li');
                xpParseLi.textContent = item;
                xpParseUl.appendChild(xpParseLi);
            });
            const listContainer = document.getElementById('xp-js-dist-init');
            listContainer.appendChild(xpParseUl);
        })


//ResumeMenu - jimmy.dev
var divResumeChild = document.getElementsByClassName("expandTrigger");
var x;

for (x = 0; x < divResumeChild.length; x++) {
    divResumeChild[x].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}