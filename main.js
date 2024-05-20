const ratio = .1;
const option = {
    root : null,
    rootMargin : '0px',
    threshold : ratio
}
const hendlesInterst = function (entrie, observer) {
    entrie.forEach( function (entry) {
        if (entry.entersectionRation > ratio) {
            entry.target.classList.add('.reveils-visible')
            observer.unobserve(entry.target)
        }
    });
}