let storage = JSON.parse(localStorage.getItem('array'))
var arr = [];
for( let i = 0; i < storage.length; i++){
  arr.push(storage[i]);
}

function storePlayer(a,b,c,d=4.5,e='$0'){ //name, role, img, rating, cost --> plz pass in this order
  let playerNumber = {
    name: a,
    role: b,
    rating: d,
    cost: e,
    img: c
  }
  // debugger
  for(let a = 0; a < arr.length; a++){
    if(arr[a].name == playerNumber.name)
    return alert('Player already in cart')
  }
  arr.push(playerNumber);
  localStorage.setItem('array', JSON.stringify(arr));
}

function getPlayer(){
  let getArr = JSON.parse(localStorage.getItem('array'));
  for( let i = 0; i < getArr.length; i++){
    addPlayer(getArr[i]);
  }
}

function addPlayer(dum){
    
    let cart_row = document.getElementsByClassName('cart row')[0];
    
    let cardParent = document.createElement('div');
    cardParent.setAttribute('class', 'col-md-4')
  
    let player = document.createElement('div');
    player.setAttribute('class', 'card');
    player.setAttribute('style', 'width: 18rem;')
  
    let elem_tag = ['img', 'div', 'h5', 'h6', 'h6', 'p', 'button'];
    let elem_class = ['card-img-top', 'card-body', 'card-title', 'card-title', 'card-title', 'card-text', 'btn btn-danger'];
  
    for(let j = 0; j < 2; j++){
      if(j == 0) {
        let elem = document.createElement(elem_tag[j]);
        elem.setAttribute('class', elem_class[j])
        elem.setAttribute('src', dum.img);
        player.appendChild(elem);
      } else {
        let div = document.createElement(elem_tag[j]);
        div.setAttribute('class', elem_class[j])
        for(let k = 2; k < 7; k++) {
          if(k == 6){
            let elem = document.createElement(elem_tag[k]);
            elem.setAttribute('class', elem_class[k]);
            elem.setAttribute('type', 'button');
            elem.setAttribute('data-toggle', 'modal');
            elem.setAttribute('data-target', '#exampleModal');
            elem.innerHTML = 'Remove Player';
            div.appendChild(elem);
          } else {
            let elem = document.createElement(elem_tag[k]);
            elem.setAttribute('class', elem_class[k]);
            elem.innerHTML = dum[Object.keys(dum)[k-2]];
            div.appendChild(elem);
          }
        }
        player.appendChild(div);
      }
    }
    cardParent.appendChild(player);
    cart_row.appendChild(cardParent);

}

function removePlayer(p_name){
  this.parentElement.parentElement.remove();

  let z = JSON.parse(localStorage.getItem('array'));
  arr = [];
  for(let k = 0; k < Object.keys(z).length; k++){
    if(z[k].name == p_name) continue
    else{
      arr.push(z[k])
    }
  }
  localStorage.setItem('array',JSON.stringify(arr));
}
