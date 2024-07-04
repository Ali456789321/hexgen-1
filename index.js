const svgs = document.querySelectorAll(".svgs");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry.target);  // Log the target element
        console.log(entry.isIntersecting);  // Log if the element is intersecting

        if (entry.isIntersecting) {
            entry.target.classList.add("svg-rot");
        } else {
            entry.target.classList.remove("svg-rot");
        }
    });
});

svgs.forEach(ele => {
    observer.observe(ele);
});
