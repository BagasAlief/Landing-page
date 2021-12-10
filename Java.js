alert("Anda Harus Mengisi From Terlebih dahulu")
function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    var angka = document.getElementById("angka").value;
    if (nama != "" && email!="" && alamat !="") {
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}