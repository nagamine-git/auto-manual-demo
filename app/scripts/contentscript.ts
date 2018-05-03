// Enable chromereload by uncommenting this line:
import 'chromereload/devonly'

let last_location = '';

document.addEventListener('click', (e) => {
    // e.target: イベント発生源
    let current_location = location.href;
    if (last_location !== location.href) {
      console.log(location.href);
      last_location = location.href;
    }
    if (e.path[0].innerText) {
        console.log('=>' + String(e.path[0].innerText))
    } else if (e.path[0].value) {
        console.log('=>' + String(e.path[0].value))
    } else if (e.path[0].alt) {
        console.log('=>' + String(e.path[0].alt))
    } else {
    }
}, false);
