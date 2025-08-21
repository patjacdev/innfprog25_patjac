const name  = "Patrick";
const mail  = "patricja@hiof.no";

const emailLink = `<a href="mailto:${mail}">Send mail til ${name}</a>`;

document.getElementById("mailLink").innerHTML = emailLink;