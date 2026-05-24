# 💎 Toko Perhiasan Emas - Website Professional

## Deskripsi Proyek

Website toko perhiasan emas yang modern, clean, dan fully functional. Dibangun dengan HTML5, CSS3, dan JavaScript Vanilla (tanpa framework dependencies).

### ✨ Fitur Utama

#### 1. **🏠 Halaman Beranda**
- Hero section dengan gradient emas yang menarik
- Animasi smooth dan engaging
- Call-to-action button untuk mengarahkan ke produk
- Section fitur unggulan (Emas 24K, Garansi, Pengiriman Aman, Layanan 24/7)

#### 2. **📦 Halaman Produk**
- Grid responsif menampilkan 8 produk perhiasan
- Kategori produk: Kalung, Gelang, Cincin, Anting, Set
- Informasi produk: nama, kategori, deskripsi, berat, kadar emas, harga
- Hover effects yang smooth dan interaktif

#### 3. **📊 Detail Produk (Modal)**
- Tampilan lengkap produk dengan deskripsi detail
- Spesifikasi teknis (berat, kadar emas)
- **Kode Produk Unik** untuk setiap item
- Tombol "Lihat Etalase" untuk melihat QR code

#### 4. **🔲 QR Code Generator**
- Generate QR code real-time dari kode produk
- QR code dapat ditunjukkan di toko untuk verifikasi
- Desain yang clean dan mudah dipindai

#### 5. **📞 Halaman Kontak**
- Informasi lengkap toko (alamat, telepon, email, jam operasional)
- Form kontak interaktif
- Validasi form client-side
- Social media links (Facebook, Instagram, WhatsApp, YouTube)

#### 6. **📱 Responsive Design**
- Mobile-first approach
- Hamburger menu untuk mobile
- Seamless experience di semua ukuran layar
- Tested pada: Desktop, Tablet, Mobile

---

## 📋 Struktur File

```
jewelry-store/
├── index.html          # File HTML utama
├── styles/
│   └── main.css       # Semua styling dan responsive design
├── js/
│   ├── script.js      # JavaScript functionality
│   └── qrcode.min.js  # Library QR code
└── README.md          # Dokumentasi ini
```

---

## 🎨 Design System

### Warna Utama
- **Primary Gold**: `#d4af37` - Warna emas utama
- **Primary Dark**: `#b8860b` - Emas gelap untuk hover
- **Primary Light**: `#ffd700` - Emas terang untuk aksen
- **Dark Background**: `#1a1a1a` - Latar belakang gelap
- **Light Background**: `#f5f5f5` - Latar belakang terang

### Typography
- Font: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Heading: Bold, 600-700 weight
- Body: Regular, 400-500 weight

### Spacing & Layout
- Grid-based layout untuk responsivitas
- Padding konsisten: 1rem, 2rem, 4rem
- Gap antar elemen: 1rem, 2rem, 3rem

---

## 🚀 Cara Menggunakan

### 1. **Clone Repository**
```bash
git clone https://github.com/fdlizak/jewelry-store.git
cd jewelry-store
```

### 2. **Buka di Browser**
Cukup buka file `index.html` dengan double-click atau:
```bash
open index.html  # macOS
start index.html # Windows
```

### 3. **Navigasi Website**
- **Beranda** → Lihat hero section dan fitur utama
- **Produk** → Browse semua perhiasan
- **Lihat Detail** → Klik produk untuk modal dengan info lengkap
- **QR Code** → Klik "Lihat Etalase" untuk generate QR code unik
- **Kontak** → Hubungi toko atau isi form kontak

---

## 🛠️ Customization

### Menambah Produk Baru
Edit `js/script.js`, tambahkan ke array `products`:
```javascript
{
    id: 9,
    name: 'Produk Baru',
    category: 'Kategori',
    description: 'Deskripsi detail',
    weight: 'X gram',
    kadar: '24 Karat',
    price: 'Rp X.XXX.000',
    emoji: '💎',
    code: 'KOD-UNK-009'
}
```

### Mengubah Warna
Edit `:root` di `styles/main.css`:
```css
:root {
    --primary-color: #d4af37;      /* Ubah warna emas */
    --dark-bg: #1a1a1a;            /* Ubah warna background */
}
```

---

## 🌐 Browser Support

✅ Chrome (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Edge (latest)  
✅ Mobile browsers  

---

## 📦 Dependencies

- **FontAwesome 6.4.0** - Icon library (CDN)
- **QRCode.js** - QR code generator (included)
- **JavaScript ES6** - Vanilla JS, no framework

---

## 🚀 Deployment

### Deploy ke Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy ke GitHub Pages
```bash
git push origin main
# Setting di GitHub: Settings > Pages > main branch
```

### Deploy ke Vercel
```bash
npm i -g vercel
vercel
```

---

## 📝 License

Free to use for personal and commercial projects.

---

## 💚 Built with ❤️

**Versi**: 1.0.0  
**Status**: Production Ready  

**Enjoy your jewelry store website! ✨💎**