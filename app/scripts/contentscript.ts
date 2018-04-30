// Enable chromereload by uncommenting this line:
import 'chromereload/devonly'

document.addEventListener('click', function (e) {
    // e.target: イベント発生源
    if (e.path[0].innerText) {
        console.log('=>' + String(e.path[0].innerText))
    } else if (e.path[0].value) {
        console.log('=>' + String(e.path[0].value))
    } else if (e.path[0].alt) {
        console.log('=>' + String(e.path[0].alt))
    } else {
    }
}, false);