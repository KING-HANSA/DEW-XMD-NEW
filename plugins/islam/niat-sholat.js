exports.default = {
   names: ['Islam'],
   tags: ['niatsholat'],
   command: ['niatsholat'],
   start: (m, {
      conn
   }) => {
      conn.adReply(m.chat, niatsholat, cover, m);
   }
};

const niatsholat = ` 
*Niat Sholat*

1. *Niat Sholat Subuh*
اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala*
Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala

2. *Niat Sholat Dzuhur*
اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala*
Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala

3. *Niat Sholat Ashar*
اُصَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala*
Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala

4. *Niat Sholat Maghrib*
اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala*
Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala

5. *Niat Sholat Isya*
اُصَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala*
Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala

_Suatu ibadah akan diterima bila memenuhi dua hal, yaitu niat dan contoh dari rasulullah saw:_
*_"إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ ...[رواه البخاري ومسلم]رَ"_*

Artinya: *_Sesungguhnya (sahnya) amal itu tergantung kepada niat ... [Hadits Riwayat al-Bukhari dan Muslim]_*
`