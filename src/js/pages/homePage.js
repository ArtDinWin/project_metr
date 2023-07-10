import filter from "./../filter/filterController";
import listing from "./../listing/listingController";
// import formatNumber from "./../utils/formatNumber";

export default async function (state) {
  document.querySelector("#app").innerHTML = "";
  await filter(state);
  listing(state);
}

// console.log(formatNumber(10000.5));
