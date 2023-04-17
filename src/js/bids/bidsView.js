function renderContainer(bids_length) {
  const markup = `  <div class="container p-0 mb-5">
                        <div class="heading-1">Заявки</div>
                    </div>

                    <!-- panels-wrapper -->
                    <div class="panels-wrapper">
                        <div id="bids-holder" class="container p-0">
                    <!-- bids wil be here -->

                        </div>
                    </div><div class="container p-0 mb-5">
                        <div class="heading-3">Доступ к последним 20 заявкам. На сервере еще ${
                          bids_length - 20
                        } заявок</div>
                    </div>`;
  document.querySelector("#app").insertAdjacentHTML("afterbegin", markup);
}
function renderBid(bid) {
  const markup = `<div class="panel panel--no-hover">
                        <div class="panel__bidid">${bid.id}</div>
                        <div class="panel__bidname">${bid.name}</div>
                        <div class="panel__bidphone">${bid.phone}</div>
                    </div>`;
  document
    .querySelector("#bids-holder")
    .insertAdjacentHTML("afterbegin", markup);
}

export function renderBids(bids) {
  renderContainer(bids.length);
  for (let i = 0; i < 20; i++) {
    renderBid(bids[i]);
  }
  /*
  bids.forEach((bid) => {
    renderBid(bid);
  });
*/
}
