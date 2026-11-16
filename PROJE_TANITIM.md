# TASKFLOW - Proje Tanıtım Dokümanı

## 1. Projenin Amacı
Bu proje, yazılım geliştirme süreçlerinde ekip içerisindeki görevlerin, sorumlulukların ve iş durumlarının tek bir merkezden takip edilebilmesini sağlayan bir **Görev ve Proje Yönetim Sistemi REST API** uygulamasıdır.

## 2. Senaryo
Bir yazılım ekibi; yürütülen fonksiyonel analiz, geliştirme ve test süreçlerindeki görevleri kayıt altına almak, görevlere öncelik seviyesi (`High`, `Medium`, `Low`) atamak, sorumlu kişileri belirlemek ve görev durumlarını (`To Do`, `Work in Progress`, `Completed`) anlık olarak güncellemek istemektedir. TASKFLOW API bu temel ihtiyaçlara hızlı ve standart bir REST mimarisi ile çözüm sunar.

## 3. Sistem Özellikleri ve Mimari
- **RESTful Mimari:** HTTP metotları (`GET`, `POST`, `PUT`, `DELETE`) ve standart HTTP durum kodları (`200`, `201`, `404`) kullanılarak tasarlanmıştır.
- **CRUD Operasyonları:** Görev ekleme, tüm görevleri listeleme, ID bazlı görev sorgulama, görev güncelleme ve görev silme işlemleri eksiksiz desteklenmektedir.
- **Logger Middleware:** Sisteme gelen her HTTP isteğinin metodu, hedef URL adresi ve zaman damgası (`ISO Timestamp`) ara katman yazılımı (middleware) aracılığıyla anlık olarak konsola kaydedilmektedir.
- **Veri Yönetimi:** Görev verileri bellek içi (in-memory) JSON veri yapısında yönetilmektedir.

## 4. Test Süreci
Geliştirilen tüm API uç noktaları Postman aracı kullanılarak test edilmiş ve doğrulama ekran görüntüleri `screenshots/` klasörü altında dokümante edilmiştir.