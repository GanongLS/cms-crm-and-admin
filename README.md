# CMS + CRM Modular Monolith (Laravel + Embedded React)

Project ini adalah **CMS + CRM Modular Monolith** berbasis **Laravel** dengan **embedded React SPA** untuk area admin. Seluruh sistem berjalan dalam **satu codebase dan satu deployment**, namun dipisahkan secara logis menggunakan **subdomain**.

Project ini ditujukan sebagai:

* Portfolio engineer (arsitektur clean & scalable)
* Pondasi aplikasi bisnis nyata

---

## ✨ Fitur Utama

* Modular Monolith Architecture (CMS, CRM, Auth, Shared)
* Multi-subdomain dalam satu Laravel app
* CMS Public Site (React SPA)
* CMS Admin (React / Hybrid)
* CRM App (React SPA)
* CRM Admin (React SPA)
* SSO Auth lintas subdomain (Laravel Sanctum)
* Role & Permission
* API terstruktur (Resource-based)

---

## 🧱 Arsitektur Singkat

Semua subdomain mengarah ke **satu instance Laravel**:

| Subdomain              | Fungsi                      |
| ---------------------- | --------------------------- |
| `ganin.test`           | Public CMS (landing, pages) |
| `admin.ganin.test`     | CMS Admin                   |
| `crm.ganin.test`       | CRM App                     |
| `crm-admin.ganin.test` | CRM Admin                   |

Autentikasi menggunakan **Sanctum (cookie-based)** dan session shared antar subdomain.

---

## 🛠 Tech Stack

### Backend

* PHP 8.x
* Laravel
* Laravel Sanctum
* Spatie Permission

### Frontend

* React (SPA untuk admin)
* Vite
* Axios

### Infrastructure

* Nginx
* MySQL / MariaDB
* Redis (optional)

---

## ⚙️ Environment Configuration

Contoh konfigurasi penting di file `.env`:

```env
SANCTUM_STATEFUL_DOMAINS=ganin.test,admin.ganin.test,crm.ganin.test,crm-admin.ganin.test
CORS_ALLOWED_ORIGINS=http://ganin.test,http://admin.ganin.test,http://crm.ganin.test,http://crm-admin.ganin.test
SESSION_DOMAIN=.ganin.test
```

> ⚠️ **Penting**: pastikan `SESSION_DOMAIN` menggunakan prefix titik (`.`) agar cookie bisa diakses lintas subdomain.

---

## 🌐 Nginx Local Development Setup

Semua subdomain diarahkan ke folder `public/` Laravel yang sama.

### Contoh Server Block Nginx

```nginx
server {
    listen 80;
    server_name ganin.test admin.ganin.test crm.ganin.test crm-admin.ganin.test;

    root /path/ke/project/public;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_pass unix:/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}
```

Tambahkan ke `/etc/hosts`:

```text
127.0.0.1 ganin.test
127.0.0.1 admin.ganin.test
127.0.0.1 crm.ganin.test
127.0.0.1 crm-admin.ganin.test
```

Restart Nginx setelah konfigurasi:

```bash
sudo systemctl restart nginx
```

---

## 🚀 Instalasi & Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/GanongLS/cms-crm-and-admin.git
cd cms-crm-and-admin
```

### 2. Install Dependency

```bash
composer install
npm install
```

### 3. Setup Environment

```bash
cp .env.example .env
php artisan key:generate
```

Edit `.env` sesuai konfigurasi database & domain lokal.

### 4. Database

```bash
php artisan migrate --seed
```

### 5. Build Frontend

```bash
npm run dev
# atau
npm run build
```

### 6. Jalankan Aplikasi

Jika menggunakan Nginx, cukup akses:

* [http://ganin.test](http://ganin.test)
* [http://admin.ganin.test](http://admin.ganin.test)
* [http://crm.ganin.test](http://crm.ganin.test)
* [http://crm-admin.ganin.test](http://crm-admin.ganin.test)

---

## 📁 Struktur Modular (Simplified)

```
/modules
  /CMS
  /CRM
  /Auth
  /Shared
/resources
  /js/admin   # React SPA
/routes
```

Setiap module memiliki:

* Controller
* Routes
* Models
* Policies

---

## 🔐 Authentication & Security

* Auth: Laravel Sanctum (cookie-based)
* Session shared lintas subdomain
* CSRF protected
* Role & Permission (Spatie)

---

## 🧪 Testing (Optional)

```bash
php artisan test
```

---

## 🗺 Roadmap Singkat

* [ ] Polishing CMS Admin UI
* [ ] CRM filtering & pagination
* [ ] Activity log
* [ ] Feature tests
* [ ] Docker support

---

## 📌 Catatan

Project ini menggunakan pendekatan **Modular Monolith** agar:

* Mudah dikembangkan oleh tim kecil
* Deployment sederhana
* Siap diekstrak ke microservice di masa depan

---

## Diagram route target

Browser (dalam laravel monolith)
  ├─ ganin.test        → CMS Public
  ├─ admin.ganin.test  → CMS Admin (React)
  ├─ crm.ganin.test    → CRM App
  └─ crm-admin.ganin.test → CRM Admin
          


## 👤 Author

**GanongLS**
CMS + CRM Modular Monolith Portfolio Project

---

> Jika project ini dibuka ulang di masa depan dan terasa "bingung", mulai dari README ini 🙂
