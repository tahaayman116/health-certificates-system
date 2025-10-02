# إعداد شهادة SSL مجانية

## الطريقة 1: استخدام Cloudflare (الأسهل)
1. إنشاء حساب مجاني على Cloudflare.com
2. إضافة النطاق الخاص بك
3. تغيير DNS servers إلى Cloudflare
4. تفعيل SSL/TLS في إعدادات Cloudflare
5. اختيار "Full" أو "Full (strict)" SSL mode

## الطريقة 2: Let's Encrypt (للخوادم المخصصة)
```bash
# تثبيت Certbot
sudo apt update
sudo apt install certbot python3-certbot-apache

# الحصول على شهادة SSL
sudo certbot --apache -d yourdomain.com -d www.yourdomain.com

# تجديد تلقائي
sudo crontab -e
# إضافة هذا السطر:
0 12 * * * /usr/bin/certbot renew --quiet
```

## الطريقة 3: استخدام مزود الاستضافة
معظم مزودي الاستضافة يوفرون شهادات SSL مجانية:
- cPanel: SSL/TLS > Let's Encrypt
- Plesk: SSL/TLS Certificates
- DirectAdmin: SSL Certificates

## التحقق من الشهادة
بعد التثبيت، تحقق من:
- https://www.ssllabs.com/ssltest/
- https://www.whynopadlock.com/

## إعدادات إضافية للأمان
```apache
# في .htaccess
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
Header always set Content-Security-Policy "upgrade-insecure-requests"
```
