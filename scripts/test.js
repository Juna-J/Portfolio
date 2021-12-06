const [red, green, blue] = [255, 244, 236];
const section1 = document.getElementById("1");

window.addEventListener("scroll", () => {
  const scroll = 1 + (window.scrollY || window.pageYOffset);

  let minScroll = 0;
  let maxScroll = section1.offsetHeight;

  let rRange = [255, 231];
  var r = Math.round(
    ((scroll - minScroll) * (rRange[1] - rRange[0])) / (maxScroll - minScroll) +
      rRange[0]
  );

  let bRange = [244, 207];

  var g = Math.round(
    ((scroll - minScroll) * (bRange[1] - bRange[0])) / (maxScroll - minScroll) +
      bRange[0]
  );

  let gRange = [236, 188];

  var b = Math.round(
    ((scroll - minScroll) * (gRange[1] - gRange[0])) / (maxScroll - minScroll) +
      gRange[0]
  );

  console.log("uncl", r, b, g);

  console.log("my color", `rgb(${r}, ${g}, ${b})`);

  // const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  // rgb(231 207 188)
});
