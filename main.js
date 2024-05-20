const ratio = .1;
const options = {
    root : null,
    rootMargin : '0px',
    threshold : ratio
}
const hendlesInterst = function (entries, observer) {
    entries.forEach( function (entry) {
        if (entry.entersectionRation > ratio) {
            entry.target.classList.add('.reveils-visible')
            observer.unobserve(entry.target)
        }
    });
}

const observer = new IntersectionObserver(hendlesInterst, option)
document.querySelectorAll('.reveils').forEach( function (r) {
    observer.observe(r)
})