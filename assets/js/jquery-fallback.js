// jQuery Fallback for Netlify
// Load jQuery if not already loaded

(function() {
    // Check if jQuery is already loaded
    if (typeof jQuery === 'undefined' || typeof $ === 'undefined') {
        console.log('jQuery not found, loading fallback...');
        
        // Create script element for jQuery
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
        script.integrity = 'sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==';
        script.crossOrigin = 'anonymous';
        
        script.onload = function() {
            console.log('jQuery loaded successfully');
            // Initialize any jQuery-dependent functions
            if (typeof initializeJQueryFunctions === 'function') {
                initializeJQueryFunctions();
            }
        };
        
        script.onerror = function() {
            console.error('Failed to load jQuery from CDN');
            // Fallback: create basic $ function for essential operations
            createBasicJQuery();
        };
        
        document.head.appendChild(script);
    } else {
        console.log('jQuery already loaded');
    }
    
    // Basic jQuery replacement for essential functions
    function createBasicJQuery() {
        window.$ = window.jQuery = function(selector) {
            if (typeof selector === 'function') {
                // Document ready
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', selector);
                } else {
                    selector();
                }
                return;
            }
            
            var elements;
            if (typeof selector === 'string') {
                elements = document.querySelectorAll(selector);
            } else if (selector.nodeType) {
                elements = [selector];
            } else {
                elements = selector;
            }
            
            return {
                length: elements.length,
                each: function(callback) {
                    for (var i = 0; i < elements.length; i++) {
                        callback.call(elements[i], i, elements[i]);
                    }
                    return this;
                },
                on: function(event, handler) {
                    this.each(function() {
                        this.addEventListener(event, handler);
                    });
                    return this;
                },
                val: function(value) {
                    if (value !== undefined) {
                        this.each(function() {
                            this.value = value;
                        });
                        return this;
                    }
                    return elements[0] ? elements[0].value : '';
                },
                text: function(text) {
                    if (text !== undefined) {
                        this.each(function() {
                            this.textContent = text;
                        });
                        return this;
                    }
                    return elements[0] ? elements[0].textContent : '';
                },
                html: function(html) {
                    if (html !== undefined) {
                        this.each(function() {
                            this.innerHTML = html;
                        });
                        return this;
                    }
                    return elements[0] ? elements[0].innerHTML : '';
                },
                hide: function() {
                    this.each(function() {
                        this.style.display = 'none';
                    });
                    return this;
                },
                show: function() {
                    this.each(function() {
                        this.style.display = '';
                    });
                    return this;
                },
                addClass: function(className) {
                    this.each(function() {
                        this.classList.add(className);
                    });
                    return this;
                },
                removeClass: function(className) {
                    this.each(function() {
                        this.classList.remove(className);
                    });
                    return this;
                }
            };
        };
        
        console.log('Basic jQuery replacement created');
    }
})();

// Fix for Hijri date functions
window.ReleaseDateGregorian1 = {
    toHijri: function() {
        // Basic Hijri conversion fallback
        var today = new Date();
        var hijriYear = today.getFullYear() - 579;
        var hijriMonth = today.getMonth() + 1;
        var hijriDay = today.getDate();
        return hijriDay + '/' + hijriMonth + '/' + hijriYear;
    }
};

window.ReleaseDateGregorian = new Date();

// Initialize functions when DOM is ready
function initializeJQueryFunctions() {
    // Add any jQuery-dependent initialization here
    console.log('jQuery functions initialized');
}
