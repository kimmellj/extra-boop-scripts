/**
 {
 "api": 1,
 "name": "UTC Date to EST",
 "description": "Convert UTC Date to EST",
 "author": "Jamie Kimmell",
 "icon": "clock",
 "tags": "date,convert"
 }
 **/
function UTC2EST (date) {
    const dateObj = new Date(date.trim());
    return dateObj.toLocaleString("en-US", { timeZone: "America/New_York"});
}

function main (input) {
    input.text = UTC2EST(input.text);
}
