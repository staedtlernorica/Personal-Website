alert('script is loaded');

function plusOne(){
  current = parseInt(document.getElementById('counter').innerHTML);
  document.getElementById('counter').innerHTML = current + 1;
};

function minusOne(){
  current = parseInt(document.getElementById('counter').innerHTML);
  document.getElementById('counter').innerHTML = current - 1;
};
