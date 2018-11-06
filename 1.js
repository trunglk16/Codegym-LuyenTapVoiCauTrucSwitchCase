var browser = prompt("What browser are you using?");
switch (browser) {
    case "Edge":
    alert("You'v got the Edge");
        break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "opera":
        alert("Okay we support these browers too");
        break;
    default:
        alert( 'We hope that this page looks ok!' );
}

