document.onreadystatechange = function () {
  const loaderModalOpener = document.querySelector(".port-nav-load--global");
  if(document.readyState !== "complete") {
      loaderModalOpener.classList.add("open");
  } else {
      loaderModalOpener.classList.remove("open")
  }
}
//JSON FETCH - HTMLINNER - MYJOB - DESCRIPTIONS - JIMMY.DEV
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

//RESUMEMENU - JIMMY.DEV
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

//USER - SUBMIT - CONTROLLER
const checkText = document.getElementById("checkValtext");
const submitChecker = document.getElementById("checkVal");

checkText.addEventListener('input', function() {
  if(checkText.value.trim() === '') {
    submitChecker.disabled = true;
  } else {
    submitChecker.disabled = false;
  }
});

//USER - SUBMIT - CONTROLLER - TIMER
function submitNotify() {
  const modalOpener = document.querySelector(".port-mail-load--container-modal");
  modalOpener.classList.add("open");
  document.documentElement.scrollTop = 0;
  let loadApivar = document.getElementById("loadApi");
  let loadTextvar = document.getElementById("loadText");
  let loadFinvar = document.getElementById("loadFinal");

  setTimeout(function() {loadApivar.innerHTML = "API server connecting..."}, 1000);
  setTimeout(function() {loadTextvar.innerHTML = "Checking the text format..."}, 4000);
  setTimeout(function() {loadFinvar.innerHTML = "Finalizing..."}, 10000);

  setTimeout(function() {modalOpener.classList.remove("open")}, 20000);
}

//USER SCROLL - CONTROLLER
function saveScrollPosition() {
    //current scroll position
    if (window.scrollY !== 0) {
        history.replaceState(null, null, '#' + window.scrollY);
    }
}
//Restore the scroll position
function restoreScrollPosition() {
    const hash = window.location.hash;
    if (hash) {
        const scrollPosition = parseInt(hash.substring(1), 10);
        if (!isNaN(scrollPosition)) {
            window.scrollTo(0, scrollPosition);
        }
    }
}
window.addEventListener('scroll', saveScrollPosition);
window.addEventListener('load', restoreScrollPosition);