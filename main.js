const portfolio = `
                                                           
    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝                                               

`;
const portfolio_diff=`
 visitor@portfolio:~$ getent user
    NAME: HIGEWENGEL ALEMAYEHU
    EDUCATION: BSc COMPUTER SCIENCE 
    CERTIFICATIONS: GRAPHIC DESIGN 
    SKILLS: PYTHON, JAVA, C++, DATABASE
            RESTFULL API, PHP, JAVASCRIPT
            ADOBE ILLUSTRATOR, ADOBE PHOTOSHOP
    SOFT-SKILLS: COMMUNICATION, TEAMWORK, PROBLEM SOLVING
    EMAIL: BLOOMFREEMAN2@GMAIL.COM
    CHOOSE PROFESSION:
`
const output = document.getElementById("terminal");

let i = 0;
let j = 0;

function typeDiff() {
  if (j < portfolio_diff.length) {
        output.textContent += portfolio_diff[j];
        j++;
        setTimeout(typeDiff, 5);
    } else {
    // const br = document.createElement("br");
    // output.appendChild(br);

    const link = document.createElement("a");
    link.href = "dev.html";
    link.textContent = "           1.Backend Developer Portfolio\n";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.style.color = "#ffffff";
    link.style.textDecoration = "none";
    output.appendChild(link);

    const link1 = document.createElement("a");
    link1.href = "support.html";
    link1.textContent = "           2.Technical Support Portfolio\n";
    link1.target = "_blank";
    link1.rel = "noopener noreferrer";
    link1.style.color = "#ffffff";
    link1.style.textDecoration = "none";

    output.appendChild(link1);

    const link2 = document.createElement("a");
    link2.href = "graphic.html";
    link2.textContent = "           3.Graphic Design Portfolio";
    link2.target = "_blank";
    link2.rel = "noopener noreferrer";
    link2.style.color = "#ffffff";
    link2.style.textDecoration = "none";


    output.appendChild(link2);

    const style = document.createElement("style");
    style.textContent = `
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    `;
    document.head.appendChild(style);

    const cursor = document.createElement("span");
    cursor.textContent = "█";
    cursor.style.color = "#55f58a";
    cursor.style.animation = "blink .85s step-start infinite";
    output.appendChild(cursor);
  }
}

function typeText() {
    if (i < portfolio.length) {
        output.textContent += portfolio[i];
        i++;
        setTimeout(typeText, 5);
    }
    else{typeDiff();console.log("done");}
    

}

typeText();
