const keywords = [
    "ad",
    "ads",
    "advertisement",
    "advertisements",
    "publicite",
    "publicites",
    "publicité",
    "publicités",
    "adsense",
    "sponsorise",
    "sponsorises",
    "sponsorisé",
    "sponsorisés",
    "pub",
    "pubs",
    "googleadservices",
    "doubleclick",
    "googlesyndication",
    "pubmatic",
    "adnxs",
    "revcontent",
    "taboola",
    "outbrain",
    "ligatus",
    "adblade",
    "sharethrough",
    "openx",
    "rubiconproject",
    "criteo",
    "adroll",
    "c1.adform",
    "cat.nl3",
    "amazon-adsystem",
    "adsafeprotected",
    "adform",
    "celtra",
    "ayads"
];

function atom() {
    const elements = document.querySelectorAll('*');
    const scripts = document.querySelectorAll('script');
    const propsList = [
        "href",
        "src",
        "alt",
        "accept",
        "autocomplete",
        "autofocus",
        "aria-label",
        "contenteditable",
        "for",
        "id",
        "max",
        "multiple",
        "name",
        "placeholder",
        "readonly",
        "step",
        "style",
        "tabindex",
        "title",
        "type",
        "value"
    ]
    elements.forEach(element => {
        propsList.forEach(prop => {
            const propValue = element[prop];
            if (propValue) {
                if (keywords.some(keyword => propValue.toString().includes(keyword))) {
                    if(prop === "style"){
                        element.style.backgroudImage = "none !important"
                    }
                     else element.remove();
                }
            }
        });
        const elementClasses = element.classList;
        if (elementClasses && elementClasses.length > 0) {
            for (const className of elementClasses) {
                if (keywords.some(keyword => className.includes(keyword))) {
                    element.remove();
                    break;
                }
            }
        }
    });
}

setInterval(atom, 1000);


