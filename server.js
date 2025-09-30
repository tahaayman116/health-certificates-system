const express = require('express');
const path = require('path');
const app = express();
const PORT = 3003;

// تقديم الملفات الثابتة
app.use(express.static(__dirname));

// إعداد CORS للسماح بالطلبات من النطاقات المختلفة
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

// الصفحة الرئيسية - توجه إلى صفحة تسجيل الدخول
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin-login.html'));
});

// صفحة تسجيل الدخول
app.get('/admin-login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin-login.html'));
});

// لوحة التحكم
app.get('/admin-dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin-dashboard.html'));
});

// صفحة الشهادات الصحية
app.get('/1.html', (req, res) => {
    res.sendFile(path.join(__dirname, '1.html'));
});

// صفحة الإجازات المرضية
app.get('/medical-leaves.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'medical-leaves.html'));
});

// صفحة عرض الشهادة
app.get('/certificate.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'certificate.html'));
});

// صفحة 404
app.get('/404.html', (req, res) => {
    res.sendFile(path.join(__dirname, '404.html'));
});

// معالج للصفحات غير الموجودة
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// تشغيل الخادم
app.listen(PORT, () => {
    console.log(`🚀 الخادم يعمل على: http://localhost:${PORT}`);
    console.log(`📋 لوحة التحكم: http://localhost:${PORT}/admin-dashboard.html`);
    console.log(`🏥 الشهادات الصحية: http://localhost:${PORT}/1.html`);
    console.log(`📅 الإجازات المرضية: http://localhost:${PORT}/medical-leaves.html`);
    console.log(`🔐 تسجيل الدخول: http://localhost:${PORT}/admin-login.html`);
});
