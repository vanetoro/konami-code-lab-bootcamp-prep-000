const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  var index = 0;

  document.body.addEventListener('keydown', function(event){
    var key = parseInt(event.which || event.detail);

  if(code[index] === key){
    index++;
  } else{
    index = 0;
  }
  
  if(index === code.length){
    alert('Hurray')}
  });
}


init();