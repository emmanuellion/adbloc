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
    "adform"
];

function blockAds(requestDetails) {
    const url = requestDetails.url.toLowerCase();
    if (keywords.some(keyword => url.includes(keyword))) {

        return { cancel: true };
    }
    return { cancel: false };
}

chrome.webRequest.onBeforeRequest.addListener(
    blockAds,
    { urls: ["<all_urls>"] },
    ["blocking"]
);
