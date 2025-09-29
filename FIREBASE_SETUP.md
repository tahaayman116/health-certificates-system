# 🔥 دليل ربط Firebase بالمشروع

## الخطوة 1: إنشاء مشروع Firebase

### 1️⃣ اذهب إلى Firebase Console
- افتح الرابط: https://console.firebase.google.com/
- سجل دخول بحساب Google

### 2️⃣ إنشاء مشروع جديد
1. اضغط على **"إنشاء مشروع"** أو **"Create a project"**
2. اكتب اسم المشروع: `health-certificates` (أو أي اسم تريده)
3. اختر ما إذا كنت تريد تفعيل Google Analytics (اختياري)
4. اضغط **"إنشاء مشروع"**
---

## الخطوة 2: تفعيل الخدمات المطلوبة

### 🗃️ تفعيل Firestore Database
13. فعّل الخدمة المطلوبة:
   - **Firestore Database** (لحفظ بيانات الشهادات والصور)
   - ~~**Storage**~~ (لن نحتاجه - سنحفظ الصور كـ Base64)
   - **Authentication** (اختياري)

4. انسخ إعدادات المشروع من Project Settings > General > Your apps
5. حدث الملفات التالية بإعداداتك:
   - `admin-dashboard.html` (السطر 335-340)
   - `1.html` (السطر 1243-1248)

---

## الخطوة 3: إعداد قواعد الأمان

### 🔒 قواعد Firestore فقط
1. اذهب إلى **Firestore Database > Rules**
2. استبدل القواعد الموجودة بهذا:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /certificates/{document} {
      allow read, write: if true;
    }
  }
}
```

3. اضغط **"نشر"** أو **"Publish"**

> **ملاحظة**: لا نحتاج لإعداد Storage لأننا نحفظ الصور كـ Base64 في Firestore مباشرة

---

## الخطوة 4: الحصول على إعدادات المشروع
1. اضغط على أيقونة **الإعدادات** ⚙️ (بجانب Project Overview)
2. اختر **"إعدادات المشروع"** أو **"Project settings"**
3. انزل لأسفل حتى قسم **"تطبيقاتك"** أو **"Your apps"**
4. اضغط على أيقونة **الويب** `</>`
5. اكتب اسم التطبيق: `health-certificates-web`
6. **لا تختر** "إعداد Firebase Hosting" (سنستخدم Netlify)
7. اضغط **"تسجيل التطبيق"**

### 📋 نسخ الإعدادات
ستظهر لك شاشة تحتوي على كود مشابه لهذا:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

**انسخ هذه القيم!** ستحتاجها في الخطوة التالية.

---

## الخطوة 5: تحديث ملفات المشروع

### 📝 الملفات التي تحتاج تحديث:
1. `admin-dashboard.html` (السطر 335-340)
2. `1.html` (السطر 1243-1248)

### 🔄 كيفية التحديث:
في كل ملف من الملفات أعلاه، ابحث عن هذا القسم:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // ضع API Key هنا
    authDomain: "your-project-id.firebaseapp.com", // ضع Auth Domain هنا
    projectId: "your-project-id", // ضع Project ID هنا
    storageBucket: "your-project-id.appspot.com", // ضع Storage Bucket هنا
    messagingSenderId: "123456789012", // ضع Messaging Sender ID هنا
    appId: "1:123456789012:web:abcdef1234567890" // ضع App ID هنا
};
```

واستبدل القيم بالقيم الفعلية من Firebase Console.

---

## الخطوة 6: اختبار الاتصال

### ✅ التحقق من عمل Firebase:
1. افتح المشروع على localhost:3003
2. سجل دخول كأدمن
3. حاول إضافة شهادة جديدة
4. إذا تم الحفظ بنجاح، فـ Firebase يعمل!

### 🔍 في حالة وجود أخطاء:
- افتح **Developer Tools** في المتصفح (F12)
- اذهب إلى تبويب **Console**
- ابحث عن رسائل خطأ تبدأ بـ Firebase

---

## مثال كامل للإعدادات

```javascript
// مثال للإعدادات الصحيحة (استبدل بقيمك الفعلية)
const firebaseConfig = {
    apiKey: "AIzaSyBGH7X9Y2Z3A4B5C6D7E8F9G0H1I2J3K4L5",
    authDomain: "health-certificates-12345.firebaseapp.com",
    projectId: "health-certificates-12345",
    storageBucket: "health-certificates-12345.appspot.com",
    messagingSenderId: "987654321098",
    appId: "1:987654321098:web:1a2b3c4d5e6f7g8h9i0j"
};
```

---

## 🎯 نصائح مهمة

1. **احتفظ بنسخة احتياطية** من إعدادات Firebase
2. **لا تشارك** إعدادات Firebase مع أحد
3. **تأكد من المنطقة الجغرافية** لقاعدة البيانات والتخزين
4. **اختبر الاتصال** قبل النشر على Netlify

---

## 🆘 في حالة المشاكل

### مشكلة: "Firebase is not defined"
- تأكد من تحديث جميع الملفات الثلاثة
- تأكد من صحة إعدادات Firebase

### مشكلة: "Permission denied"
- تحقق من قواعد Firestore و Storage
- تأكد من أنها مضبوطة على `allow read, write: if true;`

### مشكلة: "Project not found"
- تأكد من صحة `projectId` في الإعدادات
- تأكد من أن المشروع موجود في Firebase Console

---

## 💡 ميزات النظام الجديد (بدون Storage)

### ✅ المزايا:
- **توفير في التكلفة**: لا نحتاج Firebase Storage
- **سرعة في التحميل**: الصور محفوظة مع البيانات
- **بساطة في الإعداد**: خدمة واحدة فقط (Firestore)
- **نسخ احتياطية محلية**: البيانات محفوظة في localStorage أيضاً

### ⚠️ ملاحظات مهمة:
- **حجم الصور**: يُفضل أن تكون أقل من 5MB
- **ضغط تلقائي**: النظام يضغط الصور تلقائياً لتوفير المساحة
- **حد Firestore**: كل document يمكن أن يكون حتى 1MB
- **الجودة**: الصور مضغوطة بجودة 80% (قابلة للتعديل)

### 🔧 إعدادات الضغط (قابلة للتخصيص):
في ملف `admin-dashboard.html` السطر 399، يمكنك تغيير:
```javascript
function compressImage(file, maxWidth = 300, quality = 0.8)
```
- `maxWidth`: العرض الأقصى للصورة (افتراضي: 300px)
- `quality`: جودة الضغط (افتراضي: 0.8 = 80%)

---

بعد إتمام هذه الخطوات، سيكون مشروعك متصل بـ Firebase ويمكن حفظ واسترجاع البيانات والصور من السحابة! 🎉
