async function init() {
    await includeHTML();
}


async function includeHTML() {
    let inclusion = document.querySelectorAll('[include-html]');
    for (let i = 0; i < inclusion.length; i++) {
        const element = inclusion[i];
        file = element.getAttribute("include-html");
        let response = await fetch(file);
        if (response.ok) {
            element.innerHTML = await response.text();
        } else {
            element.innerHTML = 'Page not found.';
        }
    }
}