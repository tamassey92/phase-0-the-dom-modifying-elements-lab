const removeMain = document.getElementById('main');
removeMain.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');

newHeader.textContent = 'Taylor is the champion!';