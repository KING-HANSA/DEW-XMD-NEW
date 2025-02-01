exports.default = {
   names: ['Islam'],
   tags: ['adzan'],
   command: ['adzan'],
   start: (m, {
      conn
   }) => {
      conn.adReply(m.chat, adzan, cover, m);
   }
};

const adzan = `
Arab:

(٢x) اَللهُ اَكْبَرُ،اَللهُ اَكْبَرُ
(٢x) أَشْهَدُ اَنْ لاَ إِلٰهَ إِلَّااللهُ
(٢x) اَشْهَدُ اَنَّ مُحَمَّدًا رَسُوْلُ اللهِ
(٢x) حَيَّ عَلَى الصَّلاَةِ
(٢x) حَيَّ عَلَى الْفَلاَحِ
(١x) اَللهُ اَكْبَرُ ،اَللهُ اَكْبَرُ
(١x) لَا إِلَهَ إِلَّااللهُ

Latin:

Allaahu Akbar, Allaahu Akbar (2x)
Asyhadu allaa illaaha illallaah. (2x)
Asyhadu anna Muhammadar rasuulullah. (2x)
Hayya 'alashshalaah (2x)
Hayya 'alalfalaah. (2x)
Allaahu Akbar, Allaahu Akbar (1x)
Laa ilaaha illallaah (1x)

Artinya :

Allah Maha Besar, Allah Maha Besar
Aku menyaksikan bahwa tiada Tuhan selain Allah
Aku menyaksikan bahwa nabi Muhammad itu adalah utusan Allah
Marilah Sholat
Marilah menuju kepada kejayaan
Allah Maha Besar, Allah Maha Besar
Tiada Tuhan selain Allah

Kemudian, untuk lafadz adzan subuh ada kalimat yang ditambahkan, yakni

Arab: اَلصَّلاَةُ خَيْرٌ مِنَ النَّوْمِ

Latin: Ash-shalaatu khairum minan-nauum

Artinya: Sholat itu lebih baik dari pada tidur

dan dibaca 2x setelah lafadz Hayya 'alalfalaah

Nah, semoga kita semua bisa memaknai lafadz adzan dengan betul ya!
`