@echo off
echo تشغيل Chrome مع تجاهل أخطاء SSL
echo.
echo سيتم فتح Chrome مع إعدادات خاصة لتجاهل تحذيرات SSL
echo هذا للاختبار فقط!
echo.
pause

start chrome.exe --ignore-certificate-errors --ignore-ssl-errors --allow-running-insecure-content --disable-web-security --user-data-dir="C:\temp\chrome_dev"

echo.
echo تم فتح Chrome مع إعدادات الاختبار
echo يمكنك الآن زيارة موقعك بدون تحذيرات
pause
