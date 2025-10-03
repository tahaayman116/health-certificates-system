# إعداد نطاق مخصص لحل مشكلة SSL

## الخيار 1: نطاقات مجانية
### Freenom (مجاني تماماً)
1. اذهب إلى freenom.com
2. ابحث عن اسم النطاق المطلوب
3. اختر .tk أو .ml أو .ga أو .cf
4. سجل مجاناً لمدة 12 شهر
5. في إعدادات DNS:
   - Type: CNAME
   - Name: www
   - Target: your-site.netlify.app
   - Type: A
   - Name: @
   - Target: 75.2.60.5 (Netlify IP)

### Netlify Setup
1. Site settings > Domain management
2. Add custom domain
3. أدخل النطاق الجديد
4. Netlify سيوفر SSL تلقائياً
5. انتظر 10-15 دقيقة للتفعيل

## الخيار 2: نطاقات مدفوعة رخيصة
### Namecheap (حوالي $1-2 سنوياً)
- .xyz: $1.16/سنة
- .site: $1.98/سنة  
- .online: $1.98/سنة
- .tech: $2.98/سنة

### GoDaddy
- .com: $12.99/سنة
- .net: $14.99/سنة
- .org: $14.99/سنة

## الخيار 3: Subdomain مجاني
### is-a.dev (للمطورين)
1. اذهب إلى is-a.dev
2. اطلب subdomain مجاني
3. مثل: yoursite.is-a.dev
4. SSL مجاني تلقائياً

### eu.org (مجاني)
1. اذهب إلى nic.eu.org
2. اطلب subdomain
3. مثل: yoursite.eu.org
4. مجاني تماماً

## خطوات التطبيق السريع:
1. احصل على نطاق مجاني من Freenom
2. أضفه في Netlify
3. انتظر تفعيل SSL
4. ✅ لا مزيد من تحذيرات Chrome!
