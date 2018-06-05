const escola = "coder";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf("d"));

console.log(escola.substring(1));
console.log(escola.substring(0,3));
console.log("escola ".concat(escola).concat("!"));
console.log("escola " + escola +"!");
console.log("3" + 2);
console.log(escola.replace("e", 3));
console.log(escola.replace(/\w/g,3)); //expressão regular cursos regex!!!

console.log(escola.fontsize(10));
console.log("Ana,Maria,Pedro".split(","));
console.log("Ana,Maria,Pedro".split(/,/)); //regex