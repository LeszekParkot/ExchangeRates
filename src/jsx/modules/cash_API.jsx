const apiUrl = "https://api.nbp.pl/api/exchangerates/tables/a/";

let caschData = fetch(apiUrl).then((data)=> {
   if (data.ok) {
      return data.json()
   }else {
      throw new Error("Błąd sieci")
   }
}).then((data)=> data[0].rates).catch((err)=>{
   console.log("Błąd ", err);
});


export {caschData};
