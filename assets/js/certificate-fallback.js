// Fallback JavaScript for Certificate Page
// يتم تحميل هذا الملف إذا فشل تحميل الملفات الخارجية

// التحقق من تحميل jQuery
if (typeof jQuery === 'undefined') {
    console.log('jQuery not loaded, loading fallback...');
    
    // إضافة jQuery من CDN محلي أو بديل
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    script.onload = function() {
        console.log('jQuery loaded successfully');
        initializePage();
    };
    document.head.appendChild(script);
} else {
    console.log('jQuery already loaded');
    initializePage();
}

// تهيئة الصفحة
function initializePage() {
    // التأكد من أن DOM جاهز
    $(document).ready(function() {
        console.log('Certificate page initialized');
        
        // إضافة أي وظائف مطلوبة هنا
        setupFormValidation();
        setupPrintFunctionality();
    });
}

// إعداد التحقق من النماذج
function setupFormValidation() {
    // إضافة تحقق أساسي من النماذج
    $('form').on('submit', function(e) {
        var isValid = true;
        
        // التحقق من الحقول المطلوبة
        $(this).find('[required]').each(function() {
            if (!$(this).val().trim()) {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            alert('يرجى ملء جميع الحقول المطلوبة');
        }
    });
}

// إعداد وظيفة الطباعة
function setupPrintFunctionality() {
    // إضافة زر طباعة إذا لم يكن موجوداً
    if ($('.print-btn').length === 0) {
        var printBtn = $('<button type="button" class="btn btn-primary print-btn no-print" style="margin: 10px;">طباعة الشهادة</button>');
        printBtn.on('click', function() {
            window.print();
        });
        $('.certificate-container, .card-body').first().append(printBtn);
    }
}

// وظائف مساعدة
function showLoading() {
    if ($('.loading-spinner').length === 0) {
        var spinner = $('<div class="loading-spinner" style="margin: 20px auto; display: block;"></div>');
        $('body').append(spinner);
    }
}

function hideLoading() {
    $('.loading-spinner').remove();
}

function showAlert(message, type = 'info') {
    var alertClass = 'alert-' + type;
    var alert = $('<div class="alert ' + alertClass + ' alert-dismissible fade show" role="alert">' +
        message +
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>');
    
    $('body').prepend(alert);
    
    // إزالة التنبيه تلقائياً بعد 5 ثوان
    setTimeout(function() {
        alert.fadeOut();
    }, 5000);
}

// التحقق من حالة الاتصال
function checkConnectivity() {
    return navigator.onLine;
}

// معالجة الأخطاء العامة
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('JavaScript Error:', {
        message: msg,
        source: url,
        line: lineNo,
        column: columnNo,
        error: error
    });
    
    // عرض رسالة خطأ للمستخدم إذا كان الخطأ خطيراً
    if (msg.includes('Firebase') || msg.includes('network')) {
        showAlert('حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.', 'warning');
    }
    
    return false;
};

// إضافة دعم للمتصفحات القديمة
if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement) {
        return this.indexOf(searchElement) !== -1;
    };
}

if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        if (typeof start !== 'number') {
            start = 0;
        }
        
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
