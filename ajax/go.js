//Ajax use -->
//div to change is called mainContent


function goToMeteor(){
     $('#mainContent').fadeOut('slow',function(){
     $('#mainContent').load('meteor.html').fadeIn('slow');
     });
}

function goToJava(){
     $('#mainContent').fadeOut('slow',function(){
     $('#mainContent').load('java.html').fadeIn('slow');
     });
}

function goToNode(){
     $('#mainContent').fadeOut('slow',function(){
     $('#mainContent').load('node.html').fadeIn('slow');
     });
}

function goToAndroid(){
     $('#mainContent').load('android.html')
}


console.log('loaded');
