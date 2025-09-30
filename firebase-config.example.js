// Firebase Configuration Example
// انسخ هذا الملف إلى firebase-config.js وأدخل إعداداتك الخاصة

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "your-api-key-here",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};

// تصدير الإعدادات
export default firebaseConfig;

/* 
للحصول على هذه الإعدادات:
1. اذهب إلى Firebase Console: https://console.firebase.google.com/
2. اختر مشروعك أو أنشئ مشروع جديد
3. اذهب إلى Project Settings > General
4. في قسم "Your apps" اختر Web app
5. انسخ الإعدادات وضعها هنا
6. احفظ الملف باسم firebase-config.js
*/
