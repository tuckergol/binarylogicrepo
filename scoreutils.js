function initStorage() {
    const u_dat = localStorage;
    return u_dat
}

function updateStorage(utar, udat) {
    localStorage.setItem(utar,udat);
}

function scorePoint(points = 1) {
    const st = initStorage()
    if(st.getItem("score") == null) { st.setItem("score",0); }
    var oldScore = st.getItem("score")
    st.setItem("score",oldScore+points)
}