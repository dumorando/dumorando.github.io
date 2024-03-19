const loadCSS = (css) => {
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = css;
    document.head.appendChild(link);
}

loadCSS("https://dumo.is-a.dev/snail.css");
