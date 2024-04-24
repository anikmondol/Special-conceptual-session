
const allBtn = document.getElementsByClassName('add-btn');

for (let btn of allBtn) {
  btn.addEventListener('click', function (event) {


    // mulputinson in dom
    const name = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;



    // set element in html file
    const selectedPlayersContainer = document.getElementById('selected-players-container');
    const div = document.createElement('div');

    div.classList.add('selected-players')
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p1.innerText = name;
    p2.innerText = price;
    p3.innerText = category;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);


    selectedPlayersContainer.appendChild(div);


    // call updateTotalCost function
    updateTotalCost(price);

    // call updateGrandTotal function
    updateGrandTotal();
  })
}




// updateGrandTotal function

function updateGrandTotal(status) {
  const totalCoast = getConvertNumber('total-cost');

  if (status) {
    const inputValue = document.getElementById('coupon-code').value;

    if (inputValue == 'anik') {
      const disCount = totalCoast * 0.20;
      document.getElementById('grand-total').innerText = totalCoast - disCount;
      document.getElementById('apply-btn').setAttribute(disable, false);
    }else{
      alert('please enter valid coupon code')
    }
  } else {
    document.getElementById('grand-total').innerText = totalCoast;
  }




}





// updateTotalCost function

function updateTotalCost(value) {
  const totalCoast = getConvertNumber('total-cost');
  document.getElementById('total-cost').innerText = parseInt(value) + totalCoast;

}










// getConvertNumber in html file
function getConvertNumber(id) {
  const element = document.getElementById(id).innerText;
  const convertElement = parseInt(element);
  return convertElement;
}


