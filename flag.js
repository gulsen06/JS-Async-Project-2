const getirUlke = async (ülke) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${ülke}`);
    if (!res.ok) {
      throw new Error("url de hata var");
    }
    const data = await res.json();
    console.log(data[0]);
    ekranaBastir(data[0]);
  } catch (error) {
    console.log(error);
  }
};
// getirUlke("Turkey");
// getirUlke("Germany");
// getirUlke("Peru");
let dizi = ["turkey", "peru", "japan", "germany", "belgium", "canada"];
dizi.forEach((ülke) => getirUlke(ülke));
const ekranaBastir = (ülke) => {
  document.querySelector(".countries").innerHTML += `
    <div class="card w=50 shadow-lg">
    <img src=${ülke.flags.svg} class="card-img-top">
    </div>
    <div class="card-body">
    
    
    <h5>${ülke.name.common}</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="me-2 fas fa-lg fa-landmark"></i>  ${
      ülke.capital
    }  </li>
    <li class="list-group-item"><i class="me-2 fas fa-lg fa-comments"></i>${Object.values(
      ülke.languages
    )}</li>
    <li class="list-group-item"><i class="me-2 fas fa-lg fa-money-bill-wave"></i>${
      Object.values(ülke.currencies)[0].name
    }  ${Object.values(ülke.currencies)[0].symbol}</li>
    
    </ul>
    </div>
    
    `;
};

//!ekrana bastırılacak dizi elemanlarının key leri farklı farklıysa===>>
//!!!! Object.values()öğeleri, nesnede bulunan numaralandırılabilir  bir dizi döndürür, istenen nesne nin içindeki object in value larını yaz, bu value lar ,object.value sayesinde dizi içinde toplanır
//? Object.values(country.currencies)=currencies in value larını bir dizide toplar
//! TRY: nin value sini dizi yapar 0 indexli: [{name: 'Turkish lira', symbol: '₺'}]. TRY key i silinir
//? Object.values(country.languages)=languages in value larını bir dizide toplar[eng,span..] Eng key i silinir
