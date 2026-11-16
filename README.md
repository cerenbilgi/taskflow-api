# TASKFLOW - Görev ve Proje Yönetim Sistemi API

Node.js ve Express.js kullanılarak geliştirilmiş, ekip içi görev ve proje süreçlerinin yönetilmesini sağlayan RESTful API projesidir.

## Kullanılan Teknolojiler

- **Node.js** (Çalışma ortamı)
- **Express.js** (Web sunucusu ve routing altyapısı)
- **Postman** (API uç noktalarının testi)

## Kurulum ve Çalıştırma

Projeyi bilgisayarınıza indirip çalıştırmak için aşağıdaki adımları takip edin:

1. **Projeyi klonlayın veya indirin:**
   `git clone <repo-linkiniz>`
   `cd taskflow-api`

2. **Gerekli bağımlılıkları yükleyin:**
   `npm install`

3. **Sunucuyu çalıştırın:**
   `node src/app.js`
   Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışmaya başlayacaktır.

## API Uç Noktaları (Endpoints)

- `GET /api/tasks` — Tüm görevleri listeler
- `GET /api/tasks/:taskId` — Belirtilen ID'ye sahip görevin detayını getirir
- `POST /api/tasks` — Yeni bir görev oluşturur
- `PUT /api/tasks/:taskId` — Mevcut bir görevi günceller
- `DELETE /api/tasks/:taskId` — Belirtilen görevi sistemden siler

## Örnek Görev (Task) Veri Yapısı

    {
      "taskId": 1,
      "taskName": "Fonksiyonel analiz dokümanı hazırlanması",
      "taskSummary": "Yeni ürünler için gereksinim analizlerini içeren dokümanların yazılması.",
      "taskPriority": "High",
      "taskStatus": "Completed",
      "taskAssignee": "Ceren"
    }