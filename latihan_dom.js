const button = document.getElementById("button_klik");
button.onclick = function() {
    document.body.classList.toggle('biru-muda');
}

//buat tombol baru pake js
const button_baru = document.createElement('button');
const isi_button_baru = document.createTextNode('warna random');
button_baru.appendChild(isi_button_baru);
button_baru.setAttribute('type', 'button');

//simpan tombol baru
button.after(button_baru);

//kasih event tombol baru
button_baru.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

//nambah 2 slider lagi
const slider1 = document.querySelector('input[name=slider1]');
const slider2 = document.querySelector('input[name=slider2]');
const slider3 = document.querySelector('input[name=slider3]');


    slider1.addEventListener('change', function() {
        const r = slider1.value;
        const g = slider2.value;
        const b = slider3.value;
        document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
    });
    
    slider2.addEventListener('change', function() {
        const r = slider1.value;
        const g = slider2.value;
        const b = slider3.value;
        document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
    });
    
    slider3.addEventListener('change', function() {
        const r = slider1.value;
        const g = slider2.value;
        const b = slider3.value;
        document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
    });
    
    

