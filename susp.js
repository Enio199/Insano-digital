var susp = window.document.getElementById('susp')
var amb = window.document.getElementById('material-symbols-outlined')

amb.addEventListener('click', clicou)

function clicou() {
    
    if (susp.style.display == 'block') {
        susp.style.display = 'none'
    }
    else {
        susp.style.display = 'block'
    }
}