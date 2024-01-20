import "./TripStyles.css";
import TripData from "./TripData";


function Trip() {
  return (
    <div className="trip">
      <h1 style={{marginTop:"80px"}}>Diğer Tesisler</h1>
      <p style={{fontSize:"20px",fontWeight:"300",marginBottom:"70px"}}></p>
      <div className="tripcard">
         <TripData 
            image={"https://www.meram.bel.tr/upload/medya/MG_4299_1200.jpg"}
            heading="Yeniyol Trafik Parkı"
            text="Revize çalışmasına 01.06.2020 tarihinde başlamış olup, 5026 m² proje alanı içerisinde 12 adet kameriye, 1 adet oyun grubu, 1 adet kafeterya, 1 adet bay-bayan ve engelli wc ile trafik eğitim alanı yapılmıştır. 1070 m bordür, 1840 m² parke, 225 mtül ferforje yapımı ve 903 m² asfalt kaplaması yapılmış olan parkta 1475 m² çim ekimi, 270 adet ağaç (Ihlamur, süs elması, erguvan, ladin vb.), 336 adet gül, 8300 adet mevsimlik bitki dikimi ile peyzaj çalışması tamamlanmıştır."
         />
         <TripData 
            image={"https://www.meram.bel.tr/upload/medya/MRM_1758_1200.jpg"}
            heading="Harmancık Pazar Yeri ve Sosyal Tesisi"
            text="Harmancık, Lalebahçe ve Karahüyük mahallelerimize hizmet verecek tesisimiz toplamda 4.844 m²’lik bir inşaat alanı vardır Yapımı gerçekleştirilen tesisin 3.116 m²’sini oluşturan kapalı pazar alanın da sebze ve tuhafiye olmak üzere 79 esnafımız 155 tezgah kurmaktadır. Pazar alanı dışında ise 1060 m²’den oluşan Meram Belediye Spor Klübümüz uhdesinde futsal, voleybol, basketbol, badminton, cimnastik, taekwando, judo, güreş, okçuluk, wushu, fitness vb. birçok farklı branşta hemşehrilerimizin spor yapabilecekleri 4 ayrı Spor Salonu yer almaktadır. Ayrıca tesiste 141 m² Emekliler Lokali ve 442 m²’den oluşan 5 bağımsız Ticari Alan bulunmaktadır."
         />
         <TripData 
            image={"https://www.meram.bel.tr/upload/medya/DJI_0002_1200.jpg"}
            heading="Yenice Parkı"
            text="YENİCE PARKI 10,336 TOPLAM İNŞAAT ALANI OLUP İÇERİSİNDE ; 
            - KAFEMERAM 
            - SÜS HAVUZLARI 
            -YEŞİL ALANLAR
             -KAMERİYELER 
             -ÇOCUK OYUN ALANLARI VE FİTNESS GRUPLARI 
             -HIZ DÖNENCESİ 
             -YÜRÜYÜŞ YOLLARI 
             BULUNMAKTADIR. "
         />
       </div>
    </div>
  );
}

export default Trip;