// mencetak ke layar
function insert(num) {
    document.form.layar.value = document.form.layar.value + num;
}

// hapus
function hapus() {
    var hasilakhir = document.form.layar.value;
    document.form.layar.value = hasilakhir.substring(0,hasilakhir.length-1);
}
// pembersih
function clean() {
    document.form.layar.value = "";
}
// fungsi hitung
function hasil(){
    var hasilakhir = document.form.layar.value;
    document.form.layar.value = eval(hasilakhir);
}




// button

    document.querySelector('kembali').addEventListener('click', () => {
        
        window.location.href = 'index.html';
    });


