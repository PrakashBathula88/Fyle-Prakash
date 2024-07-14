document.getElementById('japans').addEventListener('click', function() {
    changeImage('images/phone_msg.png');
});
document.getElementById('apples').addEventListener('click', function() {
    changeImage('images/phones.png');
});
document.getElementById('fyle').addEventListener('click', function() {
    changeImage('images/expensepng.png');
});

function changeImage(imagesrcdata) {
    var imgElement = document.getElementById('display-image');
    imgElement.src = imagesrcdata;
    imgElement.style.display = 'block';
}
function openModal() {
    document.getElementById('modal').style.display ='flex';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  

  window.onclick=function(event){
    if(event.target== document.getElementById('modal')){
        document.getElementById('modal').style.display='none';
    }
  }
  
  document.getElementById('imag_slider').addEventListener('click', function() {
    changeImage('images/girl1.png');
});
document.getElementById('imag_slider').addEventListener('click', function() {
    changeImage('images/hero.png');
});
document.getElementById('imag_slider').addEventListener('click', function() {
    changeImage('images/expensepng.png');
});

function change(imagesrcdata) {
  var img_ele = document.getElementById('display-image');
  img_ele.src = imagesrcdata;
  img_ele.style.display = 'block';
}

// document.querySelector('.form_subisiion').addEventListener('submit',function(event){
//     event.preventDefault();

//     event.target.reset();

// })