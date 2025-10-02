# تعطيل تحذير Chrome مؤقتاً

## الطريقة 1: إضافة استثناء
1. اكتب في شريط العنوان: `chrome://flags/#allow-insecure-localhost`
2. اختر "Enabled"
3. أعد تشغيل Chrome

## الطريقة 2: تشغيل Chrome مع معاملات خاصة
```bash
# Windows
chrome.exe --ignore-certificate-errors --ignore-ssl-errors --allow-running-insecure-content

# Mac
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --ignore-certificate-errors --ignore-ssl-errors --allow-running-insecure-content

# Linux
google-chrome --ignore-certificate-errors --ignore-ssl-errors --allow-running-insecure-content
```

## الطريقة 3: استخدام متصفح آخر مؤقتاً
- Firefox: أكثر تساهلاً مع الشهادات
- Edge: يمكن تجاوز التحذير بسهولة
- Safari: على Mac

## ⚠️ تحذير
هذه الحلول للاختبار فقط. للإنتاج، يجب استخدام شهادة SSL صحيحة.
