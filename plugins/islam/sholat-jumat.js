exports.default = {
   names: ['Islam'],
   tags: ['solatjumat'],
   command: ['solatjumat', 'sojum'],
   start: (m, {
      conn
   }) => {
      conn.adReply(m.chat, sojum, 'https://akuislam.com/wp-content/uploads/2023/01/Niat-Solat-Jumaat@2x-768x321.png', m);
   }
};

const sojum = `Apakah solat Jumaat?
Solat jumaat adalah solat fardhu, dua rakaat yang dilakukan pada hari Jumaat untuk menggantikan solat Zuhur. Niat solat jumaat juga berbeza dengan solat fardhu yang lain. Ia haruslah dilakukan secara berjemaah selepas mendengar khutbah Jumaat.

*Syarat wajib solat Jumat*
Islam – tidak wajib bagi orang kafir
Baligh – tidak wajib bagi kanak-kanak belum baligh
Berakal – tidak wajib bagi orang yang gila
Merdeka – tidak wajib ke atas hamba abdi
Lelaki – tidak diwajibkan berjemaah untuk orang perempuan
Sihat – tidak wajib berjemaah bagi orang yang uzur, dan berhalangan
Bermastautin atau bermukim – tidak wajib berjemaah bagi orang yang musafir

*Syarat sah solat Jumat*
- Didirikan di dalam waktu Zuhur
- Tempat mendirikan solat Jumaat itu mestilah di suatu tempat yang telah ditetapkan seperti masjid, dewan, padang, dan sebagainya
- Mestilah berjemaah dengan sekurang-kurangnya 40 orang yang beriman yang tinggal di kawasan itu
- Didahului dengan dua khutbah

*“Usolli fardol jum’ati rak’ataini makmuman lillahi taala”*

`