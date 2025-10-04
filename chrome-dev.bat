@echo off
title Chrome للتطوير - تجاهل SSL
color 0B

echo ========================================
echo    فتح Chrome مع تجاهل أخطاء SSL
echo    للتطوير والاختبار المحلي فقط
echo ========================================
echo.

:: إنشاء مجلد مؤقت لبيانات Chrome
set CHROME_DATA_DIR=%TEMP%\chrome_dev_profile
if not exist "%CHROME_DATA_DIR%" mkdir "%CHROME_DATA_DIR%"

echo جاري فتح Chrome مع الإعدادات التالية:
echo - تجاهل أخطاء SSL
echo - تجاهل أخطاء الشهادات
echo - السماح بالمحتوى غير الآمن
echo - تعطيل أمان الويب (للتطوير فقط)
echo.

:: تشغيل Chrome مع إعدادات التطوير
start chrome.exe ^
  --ignore-certificate-errors ^
  --ignore-ssl-errors ^
  --allow-running-insecure-content ^
  --disable-web-security ^
  --disable-features=VizDisplayCompositor ^
  --user-data-dir="%CHROME_DATA_DIR%" ^
  --new-window ^
  "http://localhost:8080/admin-login.html"

echo.
echo تم فتح Chrome مع إعدادات التطوير
echo يمكنك الآن الوصول للموقع بدون تحذيرات SSL
echo.
echo تحذير: لا تستخدم هذا Chrome للتصفح العادي!
echo.
pause
