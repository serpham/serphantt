const elementsToHide1 = [
    document.getElementById("sad"),
    document.getElementById("descrsad"),
    document.getElementById("name"),
    document.getElementById("description"),
    document.getElementById("aboutme"),
    document.getElementById("kwadratb"),
    document.getElementById("avatrka"),
    document.getElementById("discord"),
    document.getElementById("github"),
    document.getElementById("telegram"),
    document.getElementById("bug"),
    document.getElementById("lol"),
    document.getElementById("py"),
    document.getElementById("avapy"),
    document.getElementById("figma"),
    document.getElementById("avafigma"),
    document.getElementById("htmlcssjs"),
    document.getElementById("htmlava"),
    document.getElementById("bla"),
    document.getElementById("alb"),
    document.getElementById("bal"),
    document.getElementById("bas"),
];

const elementsToShow1 = [
    document.getElementById("project"),
    document.getElementById("project1"),
    document.getElementById("avatarka"),
    document.getElementById("kwadratb2"),
    document.getElementById("Devhub"),
    document.getElementById("discord1"),
    document.getElementById("descr"),
];


document.getElementById("layers").onclick = function() {

    elementsToHide1.forEach(function(el) {
        el.style.display = "none";
    });

    elementsToShow1.forEach(function(el) {
        el.style.display = "block";
    });
};


const elementsToHide2 = [
    document.getElementById("project"),
    document.getElementById("project1"),
    document.getElementById("avatarka"),
    document.getElementById("kwadratb2"),
    document.getElementById("Devhub"),
    document.getElementById("discord1"),
    document.getElementById("descr"),
    document.getElementById("sad"),
    document.getElementById("descrsad"),
    document.getElementById("bug"),
    document.getElementById("lol"),
    document.getElementById("py"),
    document.getElementById("avapy"),
    document.getElementById("figma"),
    document.getElementById("avafigma"),
    document.getElementById("htmlcssjs"),
    document.getElementById("htmlava"),
    document.getElementById("bla"),
    document.getElementById("alb"),
    document.getElementById("bal"),
    document.getElementById("bas"),
];

const elementsToShow2 = [
    document.getElementById("name"),
    document.getElementById("description"),
    document.getElementById("aboutme"),
    document.getElementById("kwadratb"),
    document.getElementById("avatrka"),
    document.getElementById("discord"),
    document.getElementById("github"),
    document.getElementById("telegram"),
];


document.getElementById("asd").onclick = function() {

    elementsToHide2.forEach(function(el) {
        el.style.display = "none";
    });

    elementsToShow2.forEach(function(el) {
        el.style.display = "block";
    });
};

const elementsToHide3 = [
    document.getElementById("name"),
    document.getElementById("description"),
    document.getElementById("aboutme"),
    document.getElementById("kwadratb"),
    document.getElementById("avatrka"),
    document.getElementById("discord"),
    document.getElementById("github"),
    document.getElementById("telegram"),
    document.getElementById("project"),
    document.getElementById("project1"),
    document.getElementById("avatarka"),
    document.getElementById("kwadratb2"),
    document.getElementById("Devhub"),
    document.getElementById("discord1"),
    document.getElementById("descr"),
    document.getElementById("sad"),
    document.getElementById("descrsad"),
];

const elementsToShow3 = [
    document.getElementById("bug"),
    document.getElementById("lol"),
    document.getElementById("py"),
    document.getElementById("avapy"),
    document.getElementById("figma"),
    document.getElementById("avafigma"),
    document.getElementById("htmlcssjs"),
    document.getElementById("htmlava"),
    document.getElementById("bla"),
    document.getElementById("alb"),
    document.getElementById("bal"),
    document.getElementById("bas"),
];

document.getElementById("home").onclick = function() {

    elementsToHide3.forEach(function(el) {
        el.style.display = "none";
    });

    elementsToShow3.forEach(function(el) {
        el.style.display = "block";
    });
};