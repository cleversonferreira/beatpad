//on mouse hover
$('.beatpad-button').on('mousedown',function(){

  if($('.pad-mix-repeat').is(':checked')){
  	var loopOn = true;
  }
  else{
  	var loopOn = false;	
  }

  $(this).css('background-color','rgba(0, 0, 255, 0.69)');
  $(this).css('box-shadow', '0px 0px 24px 0px rgba(0, 0, 255, 0.69)');
  $(this).css('-webkit-box-shadow', '0px 0px 24px 0px rgba(0, 0, 255, 0.69)');
  $(this).css('-moz-box-shadow', '0px 0px 24px 0px rgba(0, 0, 255, 0.69)');

  document.getElementById('audio-' + this.id).currentTime = 0;
  document.getElementById('audio-' + this.id).play();
  document.getElementById('audio-' + this.id).loop = loopOn;
 
});

//on mouse out
$('.beatpad-button').mouseup(function(){
  $(this).css('background-color','rgba(255, 255, 255, 0.77)');
  $(this).css('box-shadow', 'none');
});

//loop controll
$(document).ready(function(){
	if($('.pad-mix-repeat').is(':checked')){
		console.log('lol');
	}
});