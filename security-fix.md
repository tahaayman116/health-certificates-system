# 🚨 حل مشكلة "Dangerous Site" فوراً

## المشكلة:
الموقع يظهر تحذير "Dangerous site" في Chrome بسبب Google Safe Browsing

## الحلول الفورية:

### 1. تغيير اسم الموقع على Netlify
```
الاسم الحالي: healthcertificates
الاسم الجديد: seha-inquiry-system
```

### 2. إضافة ملف robots.txt
```
User-agent: *
Allow: /
Sitemap: https://seha-inquiry-system.netlify.app/sitemap.xml
```

### 3. إضافة ملف security.txt
```
Contact: mailto:admin@example.com
Preferred-Languages: ar, en
Canonical: https://seha-inquiry-system.netlify.app/.well-known/security.txt
```

### 4. تحديث Meta Tags للأمان
```html
<meta name="robots" content="index, follow">
<meta name="googlebot" content="index, follow">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'">
```

### 5. إضافة Privacy Policy
- صفحة سياسة الخصوصية
- شروط الاستخدام
- معلومات الاتصال

### 6. تقديم طلب مراجعة لـ Google
```
https://www.google.com/safebrowsing/report_error/
```

## خطوات التنفيذ:

1. **غير اسم الموقع في Netlify Dashboard**
2. **أضف الملفات المطلوبة**
3. **انشر التحديثات**
4. **قدم طلب مراجعة لـ Google**
5. **انتظر 24-48 ساعة**

## روابط مفيدة:
- Google Search Console: https://search.google.com/search-console
- Google Safe Browsing: https://safebrowsing.google.com/
- Netlify Dashboard: https://app.netlify.com/

## ملاحظة مهمة:
المشكلة قد تكون بسبب كلمة "certificates" التي تثير شك Google
