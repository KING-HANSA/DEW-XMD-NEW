exports.default = {
   names: ['Islam'],
   tags: ['bacaansholat'],
   command: ['bacaansholat'],
   start: (m, {
      conn
   }) => {
      conn.adReply(m.chat, bacaansholat, cover, m);
   }
};

const bacaansholat = `
1. Takhbiratul ikhram

*Allâhu Akbar*

2. Iftitah

*Allaahu akbar Kabiroo Walhamdulillaahi Katsiiraa, Wa Subhaanallaahi Bukratan Wa’ashiilaa, Innii Wajjahtu Wajhiya Lilladzii Fatharas Samaawaati Wal Ardha Haniifan Musliman Wamaa Anaa Minal Musyrikiin. Inna Shalaatii Wa Nusukii Wa Mahyaaya Wa Mamaatii Lillaahi Rabbil ‘Aalamiina. Laa Syariikalahu Wa Bidzaalika Umirtu Wa Ana Minal Muslimiin*

3. Ruku

*Subhana rabbiyal adhimi wa bihamdihi* 3x

4. I-tidal berdiri setelah Ruku

*Sami allahu liman hamidah*

5. Sujud

*Subhana rabbiyal a-laa wa bi hamdih*

6. Duduk di antara dua sujud 

*Rabighfirlii, Warhamnii, Wajburnii, Warfa’ni, Warzuqnii, Wahdini, Wa’aafinii, Wa’fuannii*

7. Membaca Tasyahud awal

*Attahiyyaatul mubaarakaatush shalawaatuth thoyyibaatulillaah. Assalaamu•alaika ayyuhan nabiyyu warahmatullaahi wabarakaatuh, Assalaamu•alaina waalaa ibaadillaahishaalihiin. Asyhaduallaa ilaaha illallaah, wa asyhadu anna Muhammad Rasuulullaah. Allahumma shalli •alaa sayyidinaa muhammad*

8. Membaca Tasyahud Akhir

*Attahiyyaatul mubaarakaatush shalawaatuth thoyyibaatulillaah. Assalaamu•alaika ayyuhan nabiyyu warahmatullaahi wabarakaatuh, Assalaamu•alaina waalaa ibaadillaahishaalihiin. Asyhaduallaa ilaaha illallaah, wa asyhadu anna Muhammad Rasuulullaah. Allahumma shalli •alaa sayyidinaa muhammad Wa alaa aali sayyidina muhammad. Kamaa shallaita 'alaa sayyidinaa Ibraahim wa'alaa aali sayyidinaa ibraahim wabaarik 'alaa sayyidinaa muhammad wa 'alaa aali sayyidina muhammad. Kamaa baarakta 'alaa sayyidinaa ibraahiim wa 'alaa aali sayyidina Ibraahiim fil•aalamiina innaka hamiidum majiid*

9. salam

*Assalaamu alaikum wa rahmatullah* 2x kanan kiri
`