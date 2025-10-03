# أوامر Netlify CLI لحل مشكلة HTTPS

## تثبيت Netlify CLI
```bash
npm install -g netlify-cli
```

## تسجيل الدخول
```bash
netlify login
```

## ربط المشروع
```bash
netlify link
```

## نشر مباشر
```bash
netlify deploy --prod
```

## تفعيل HTTPS إجباري
```bash
netlify api updateSite --data '{"force_ssl": true}'
```

## فحص الموقع
```bash
netlify open:site
```

## فحص إعدادات الأمان
```bash
netlify status
```
