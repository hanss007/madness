const baseUrl = process . env . Base_url
 asynchronicznych funkcji fetchQuery ( ścieżka , params = NULL ) { niech url
   jeśli ( params ! == NULL ) { 
    url = ` $ {baseUrl} / $ {ścieżka} / $ {params} ` } else { 
    url = ` $ {baseUrl } / $ {ścieżka} ` } const
      
       
     
  
  response = czekaj na pobranie ( ` $ {url} ` ) const data = czekaj na odpowiedź . json () zwraca dane
 } eksportuj { baseUrl , fetchQuery } 