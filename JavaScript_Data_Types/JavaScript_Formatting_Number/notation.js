var views = 4500000000;

let compact_Indian_Views = views.toLocaleString('en-IN', { notation: "compact" });
let compact_USA_Views = views.toLocaleString('en-us', {notation: "compact"})


console.log("Original:", views);
console.log("Compact Indian Format:", compact_Indian_Views);
console.log("Compact USA Format:", compact_USA_Views)