function intToBinary(integer) {
    var f = integer
    if (f === 0) {
      return '0'
    }
  
    let binary = ''
    while (f > 0) {
      binary = (f % 2) + binary
      f = Math.floor(f / 2)
    }
  
    return binary;
  }
function initStorage() {
    const u_dat = localStorage
    return u_dat
}

function updateStorage(utar, udat) {
    localStorage.setItem(utar,udat);
}

function scorePoint(points = 1) {
    const st = initStorage()
    if(st.getItem("score") == null) { st.setItem("score",0); }
    const oldScore = parseInt(st.getItem("score"))
    st.setItem("score",oldScore+points)
}

function getScore() {
    const st = initStorage()
    const l = st.getItem("score")
    return intToBinary(l)
}

const sl = initStorage()
if(sl.getItem("score") == null) { sl.setItem("score",0); }