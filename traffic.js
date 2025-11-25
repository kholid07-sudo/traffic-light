//elemen

const lampuMerah= document.getElementById("lampu-merah")
const lampuKuning= document.getElementById("lampu-kuning")
const lampuHijau= document.getElementById("lampu-hijau")
const tombolMulai= document.getElementById("mulai")
const tombolBerhenti= document.getElementById("berhenti")
const btnMerah= document.getElementById("btn-merah")
const btnKuning= document.getElementById("btn-kuning")
const btnHijau= document.getElementById("btn-hijau")
const textStatus= document.getElementById("status")


let intervalOtomatis;
//interval ialah jarak waktunya, satuannya itu "ms" jadi 1000ms=1s
let indexLampu = 0;
const urutan= ["merah", "kuning", "hijau"];

//fungsi matikan semua
function matikanSemua() {
    lampuMerah.classList.remove("nyala")
    lampuKuning.classList.remove("nyala")
    lampuHijau.classList.remove("nyala")
}

//fungsi nyalakan lampu sesuai warna
function nyalakanLampu(warna){
    matikanSemua();
//switch/pilih ketika (warna)... 
    switch (warna){
        //jika warna adalah merah
        case "merah":
        //maka .. lakukan hal berikut
        lampuMerah.classList.add("nyala")
        textStatus.textContent="Status: Merah - Berhenti"
        //selesai
        break;
        case "kuning":
            lampuKuning.classList.add("nyala")
            textStatus.textContent="Status: Kuning - Hati-Hati"
            break;

            case "hijau" :
                lampuHijau.classList.add("nyala")
                textStatus.textContent= "Status: Hijau - Let's Gooo"
                break;
    }
}

//fungsi mode otomatis
function jalanOtomatis(){
    const warna= urutan[indexLampu];
    nyalakanLampu(warna);
    indexLampu++;
    if(indexLampu >= urutan.length){
        indexLampu = 0;
    }
}

//event tombol mulai
tombolMulai.addEventListener("click", function(){
    clearInterval(intervalOtomatis); //memebersihkan interval sebelumnya
    indexLampu=0;
    //jalan otomatis
    jalanOtomatis();

    //jalankan fungsi jalanOtomatis(), setiap 2 detik
    intervalOtomatis = setInterval(jalanOtomatis, 1000); //ganti setiap 2detik
})
//event tombol berhenti
tombolBerhenti.addEventListener("click",function(){
    clearInterval(intervalOtomatis);
    matikanSemua();
    textStatus.textContent = "Status: Mati"
});

//event tombol manual
btnMerah.addEventListener("click", function(){
    clearInterval(intervalOtomatis)
    nyalakanLampu("merah")
})

btnKuning.addEventListener("click", function(){
    clearInterval(intervalOtomatis)
    nyalakanLampu("kuning")
})
btnHijau.addEventListener("click", function(){
    clearInterval(intervalOtomatis)
    nyalakanLampu("hijau")
})
