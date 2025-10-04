@echo off
title نظام الشهادات الصحية - خادم محلي
color 0A

echo ========================================
echo    نظام الشهادات الصحية
echo    تشغيل الخادم المحلي
echo ========================================
echo.

:: إنهاء أي عمليات Python سابقة
echo جاري إنهاء العمليات السابقة...
taskkill /f /im python.exe >nul 2>&1
taskkill /f /im py.exe >nul 2>&1
timeout /t 2 >nul

:: تشغيل الخادم
echo جاري تشغيل الخادم على البورت 8080...
echo.
echo الموقع سيكون متاح على:
echo http://localhost:8080
echo.
echo اضغط Ctrl+C لإيقاف الخادم
echo ========================================
echo.

:: تشغيل الخادم وفتح المتصفح
start "" "open-site.html"
py -m http.server 8080

pause
