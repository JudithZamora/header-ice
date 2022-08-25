const open = document.getElementById('open');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const close = document.getElementById('close');

open.addeverntlistener('click', () =>{open.classlist.add('show');
alert('prueba');
});

overlay.addeverntlistener('click', () =>{open.classlist.add('show');
});
popup.addeverntlistener('click', () =>{open.classlist.add('show');
});
close.addeverntlistener('click', () =>{open.classlist.remove('show');
});


