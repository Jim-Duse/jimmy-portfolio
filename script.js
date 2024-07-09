//JSON Fetch - HTMLinner - myJob - Descriptions - jimmy.dev
fetch('./jobDescriptionVault.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Request unavailable');
            }
            return response.json();
        })
        .then(data => {
          //Pull - JSON Objects
            const jobItem_fh = data.jobDescriptionFH;
            const jobItem_cvs = data.jobDescriptionCVS;
            const jobItem_wfargo = data.jobDescriptionWFargo;

            //console.log(jobItem_cvs);

                const xpParseUl_fh = document.createElement('ul');

                jobItem_fh.forEach(function(item) {
                const xpParseLi = document.createElement('li');
                xpParseLi.textContent = item;
                xpParseUl_fh.appendChild(xpParseLi);
                })

                const xpParseUl_cvs = document.createElement('ul');

                jobItem_cvs.forEach(function(item) {
                const xpParseLi = document.createElement('li');
                xpParseLi.textContent = item;
                xpParseUl_cvs.appendChild(xpParseLi);
                });

                const xpParseUl_wfargo = document.createElement('ul');

                jobItem_wfargo.forEach(function(item) {
                const xpParseLi = document.createElement('li');
                xpParseLi.textContent = item;
                xpParseUl_wfargo.appendChild(xpParseLi);
                });

            const listContainer_fh = document.getElementById('xp-js-dist-init-fh');
            listContainer_fh.appendChild(xpParseUl_fh);

            const listContainer_cvs = document.getElementById('xp-js-dist-init-cvs');
            listContainer_cvs.appendChild(xpParseUl_cvs);

            const listContainer_wfargo = document.getElementById('xp-js-dist-init-wfargo');
            listContainer_wfargo.appendChild(xpParseUl_wfargo);
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