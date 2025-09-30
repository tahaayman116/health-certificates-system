var showMessages = (function(message, type) {

    if (message.indexOf("&bull;") != 0)
        message = " &bull; " + message;

    $('#messageContainer').remove();

    switch (type) {
        case 'success':
            $("<div>", {
                    id: "messageContainer"
                }).append("<div class='alert alert-success'>" + message + "</div>")
                .appendTo($('.card-body:last').parents('.p-lg-4'));
            break;
        case 'info':
            $("<div>", {
                    id: "messageContainer"
                }).append("<div class='alert alert-info'>" + message + "</div>")
                .appendTo($('.card-body:last').parents('.p-lg-4'));
            break;
        case 'warning':
            $("<div>", {
                    id: "messageContainer"
                }).append("<div class='alert alert-warning'>" + message + "</div>")
                .appendTo($('.card-body:last').parents('.p-lg-4'));
            break;
        default:
            $("<div>", {
                    id: "messageContainer"
                }).append("<div class='alert alert-danger'>" + message + "</div>")
                .appendTo($('.card-body:last').parents('.p-lg-4'));
            break;
    }
    $('html, body').animate({
        scrollTop: $('#messageContainer:last').length > 0 ? $('#messageContainer:last').offset().top : $('.card-body:last').offset().top
    }, 600);
});

// Generate a nonce for inline scripts
const nonce = (Math.random() + 1).toString(36).substring(7);

// Add nonce to inline scripts
document.querySelectorAll('script').forEach(script => {
    if (!script.src) {
        script.nonce = nonce;
    }
});

let script = document.createElement('script');
let baladyBusinessUrl = "https://baladybusiness-stg.momra.gov.sa/container/unifiedInbox/";
let baladyBusinessBasicUrl = "https://baladybusiness-stg.momra.gov.sa/container/providers";
var loc = window.location.origin;
if (loc.toLocaleLowerCase().search('//qc') > -1 ||
    loc.toLocaleLowerCase().search('//gisappsqc') > -1 ||
    loc.toLocaleLowerCase().search('//baladyconstruction-qc') > -1 ||
    loc.toLocaleLowerCase().search('//baladyconstruction-dev') > -1 ||
    loc.toLocaleLowerCase().search('//gisappsdev') > -1) {
    loc = "https://qcapps.momra.gov.sa";
    baladyBusinessUrl = "https://baladybusiness-qc.momra.gov.sa/container/unifiedInbox/"
    baladyBusinessBasicUrl = "https://baladybusiness-qc.momra.gov.sa/container/providers";
} else if (loc.toLocaleLowerCase().search('//baladyapps') > -1 ||
    loc.toLocaleLowerCase().search('//stg') > -1 ||
    loc.toLocaleLowerCase().search('//baladyconstruction-stg') > -1 ||
    loc.toLocaleLowerCase().search('//localhost') > -1 ||
    loc.toLocaleLowerCase().search('//gisappstg') > -1
) {
    loc = "https://baladyapps.momra.gov.sa";
    baladyBusinessUrl = "https://baladybusiness-stg.momra.gov.sa/container/unifiedInbox/";
    baladyBusinessBasicUrl = "https://baladybusiness-stg.momra.gov.sa/container/providers";
} else if (loc.toLocaleLowerCase().search('//precommercial') > -1 ||
    loc.toLocaleLowerCase().search('//prebaladyapps') > -1 ||
    loc.toLocaleLowerCase().search('//prebusiness') > -1 ||
    loc.toLocaleLowerCase().search('//baladyconstruction-pre') > -1 ||
    loc.toLocaleLowerCase().search('//gisapppre') > -1 ||
    loc.toLocaleLowerCase().search('//preconstruction') > -1 ||
    loc.toLocaleLowerCase().search('//construction-pre') > -1) {
    loc = "https://prebaladyapps.momra.gov.sa";
    baladyBusinessUrl = "https://prebusiness.momra.gov.sa/container/unifiedInbox/";
    baladyBusinessBasicUrl = "https://prebusiness.momra.gov.sa/container/providers";
} else if (loc.toLocaleLowerCase().search('//commercial.balady') > -1 ||
    loc.toLocaleLowerCase().search('//apps.balady') > -1 ||
    loc.toLocaleLowerCase().search('//prepolicyui') > -1 ||
    loc.toLocaleLowerCase().search('//policyui.momrah') > -1 ||
    loc.toLocaleLowerCase().search('//construction.balady') > -1 ||
    loc.toLocaleLowerCase().search('//business.balady') > -1 ||
    loc.toLocaleLowerCase().search('//baladyconstruction') > -1 ||
    loc.toLocaleLowerCase().search('//gisapps') > -1) {
    loc = "https://apps.balady.gov.sa";
    baladyBusinessUrl = "https://business.balady.gov.sa/container/unifiedInbox/";
    baladyBusinessBasicUrl = "https://business.balady.gov.sa/container/providers";
}
let fullLoc = window.location.pathname.toLocaleLowerCase();

if (fullLoc.search('eservices/building') > -1 ||
    loc.search('//construction.balady') > -1 ||
    loc.search('//preconstruction') > -1) {

    let lstLoc = fullLoc.split('/');

    if (lstLoc.length > 0 && (lstLoc.length == 4 || lstLoc.length == 2 || lstLoc[lstLoc.length - 1] == 'index')) {
        $(function() {
            addRiyadhServicesMsg();
        });
    }
}

const contentPath = "/content/";
let cdnPath = document.currentScript.src.substring(0, document.currentScript.src.toLowerCase().indexOf(contentPath) + contentPath.length);
let counttt = Math.floor(100000 + Math.random() * 900000);

//append ticket and handling exception file 
script.src = cdnPath + "Support.js?v=" + counttt + "";
document.head.appendChild(script);

// Add Google Analytics 
let key = 'G-69XYTDF1T2';
let googleScript = document.createElement('script');
googleScript.async = true;
googleScript.src = `https://www.googletagmanager.com/gtag/js?id=${key}`;
document.head.appendChild(googleScript);

let content = `
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${key}');
`

let gtagScript = document.createElement('script');
gtagScript.append(content);
document.head.appendChild(gtagScript);

//append css file for some enhancement and Top Menu
let linkCss = document.createElement("LINK");
linkCss.setAttribute("rel", "stylesheet");
linkCss.setAttribute("type", "text/css");
linkCss.setAttribute("href", cdnPath + "enhancement.css?v=" + counttt + "");
document.head.appendChild(linkCss);

//***************/append css file for new Balady-Business-Identity\***************//
if (
    document.referrer &&
    (
        (document.referrer.endsWith('?baladybusiness') || document.referrer.endsWith('&baladybusiness') || document.referrer.indexOf('&baladybusiness&') != -1 || document.referrer.indexOf('?baladybusiness&') != -1) ||
        (document.referrer.toLowerCase().indexOf('/extraservices/') != -1)
    ) &&
    document.location.href.toLowerCase().indexOf('/extraservices/') == -1 && !document.location.href.endsWith('?baladybusiness') && !document.location.href.endsWith('&baladybusiness') && document.location.href.indexOf('&baladybusiness&') == -1 && document.location.href.indexOf('?baladybusiness&') == -1
) {
    if (document.location.href.indexOf('?') != -1) {
        if ((document.location.href.toLowerCase().indexOf('engoffice/portal') != -1) && getUrlQueryStringParametersFromReferrer('providerid')) {
            document.location.href = baladyBusinessUrl + getUrlQueryStringParametersFromReferrer('providerid') + '/0';
        } else if ((document.referrer.toLowerCase().indexOf('ratingservices/rating') != -1)) {
            document.location.href = baladyBusinessBasicUrl;
        } else window.history.pushState('', '', document.location + '&baladybusiness');
    } else window.history.pushState('', '', document.location + '?baladybusiness');
}
if (document.location.href.toLowerCase().indexOf('engoffice/portal') != -1) {
    document.location.href = baladyBusinessBasicUrl;
}

// Ensure jQuery is loaded
if (typeof jQuery === 'undefined') {
    console.error('jQuery is not loaded');
} else {
    (function($) {
        'use strict';

        // Your existing code wrapped in jQuery ready
        $(function() {
            // Check for baladybusiness parameter
            if (getUrlQueryStringParameters("baladybusiness")) {
                $("link[href*='unified_identity_assets/css']").remove();
                $("script[src*='unified_identity_assets/js']").remove();

                let linkCss = document.createElement("LINK");
                linkCss.setAttribute("rel", "stylesheet");
                linkCss.setAttribute("type", "text/css");
                linkCss.setAttribute("href", cdnPath + "BaladyBusiness/BaladyBusinessUI.css?v=" + counttt);
                document.head.appendChild(linkCss);

                appendEvent();

                // Hide back-btn in Firefox
                $(".page-top-fixed .page-options-btns .btn.btn-form-prev:not(.btn-back):has(svg)").css("display", "none");
            }

            // Handle Ajax completion
            $(document).ajaxStop(function() {
                setTimeout(appendEvent, 1000);
            });

            // Handle Enter key
            $(document).on("keypress", function(event) {
                var keyPressed = event.keyCode || event.which;
                if (keyPressed === 13 && $(event.target).hasClass('btn-step')) {
                    console.log("enter clicked");
                    event.preventDefault();
                    return false;
                }
            });
        });

        // Make functions available globally
        window.appendEvent = function() {
            $('.page-container a').off('click').on('click', applyBaladyBusinessOnHref);
            $('.balady__bus__sec a').off('click').on('click', applyBaladyBusinessOnHref);
            $('.page-options-btns a').off('click').on('click', applyBaladyBusinessForBtnOnHref);
        };

        window.getUrlQueryStringParameters = function(sParam) {
            var sPageURL = window.location.search.substring(1),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0].toLowerCase() === sParam.toLowerCase()) {
                    return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                }
            }
            return false;
        };

    })(jQuery);
}

function addRiyadhServicesMsg() {
    let msg = `<div id="messageContainer"><div class="alert alert-info my-4"><b>عزيزي المستفيد... </b>  في حال ان طلبكم داخل منطقة الرياض <a href="https://balady.alriyadh.gov.sa/Pages/Balady/Default.aspx" class="btn btn-secondary btn-sm">اضغط هنا</a></div></div>`;
    $('.section').find('.container:first').prepend(msg);
}

function appendEvent() {
    $('.page-container a').on('click', applyBaladyBusinessOnHref);
    $('.balady__bus__sec a').on('click', applyBaladyBusinessOnHref);

    $('.page-options-btns a').on('click', applyBaladyBusinessForBtnOnHref);
}

//***************/append css file for new Balady-Business-Identity\***************//

$(document).on("keypress", function(event) {

    var keyPressed = event.keyCode || event.which;
    if (keyPressed === 13 && $(event.target).hasClass('btn-step')) {
        console.log("enter clicked");
        event.preventDefault();
        return false;
    }
});

$(function() {
    $('.breadcrumb:not(.breadcrumb-baladyui) > li > a').not('#generalDaemTicketBtn').removeAttr('href');
    $('a.nav-link.pr-0.m-0.leading-none.d-flex').removeAttr("href");
    $('a.nav-link.pr-0.m-0.leading-none.d-flex').css('cursor', 'pointer');

});

function getUrlQueryStringParameters(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName, i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0].toLowerCase() === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

function getUrlQueryStringParametersFromReferrer(sParam) {
    var sPageURL = document.referrer.split('?')[1],
        sURLVariables = sPageURL.split('&'),
        sParameterName, i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0].toLowerCase() === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

function hasQueryParams(url) {
    return url.includes('?');
}

function applyBaladyBusinessOnHref() {
    var getHref = $(this).attr('href');
    if (!getHref || getHref == undefined || getHref.length == 0 || getHref.search('#') === 0 || getHref.indexOf('&baladybusiness') > -1 || getHref.indexOf('?baladybusiness') > -1) return;
    if (hasQueryParams(getHref))
        $(this).attr("href", getHref + "&baladybusiness");
    else $(this).attr("href", getHref + "?baladybusiness");
}

function applyBaladyBusinessForBtnOnHref() {
    var getHref = $(this).attr('href');
    if (!getHref || getHref == undefined || getHref.length == 0 || getHref.search('#') === 0 || getHref.indexOf('&baladybusiness') > -1) return;
    if (getHref.toLowerCase().indexOf('engoffice') > -1 || getHref.toLowerCase().indexOf('eservices') > -1)
        if (hasQueryParams(getHref))
            $(this).attr("href", getHref + "&baladybusiness");
        else $(this).attr("href", getHref + "?baladybusiness");
}

//Add External Services (Third Party) .

function applyTawakkalnaStyle() {
    $('header').remove();
    $('footer').remove();
    $('.page-inner-title').remove();
    $('.page-title-content').remove();
    $('.service-header.page-title.no-after').remove()
    $('#searchCtrl input.no-print').remove();
    $('.bg-grey').css({
        'margin-top': 'auto'
    });

    //labor housing investment
    $('.service-details-menu-cont').remove();


    //dropdown IOS issue
    let disableSelect2 = getUrlQueryStringParameters("s2ddl");
    if (disableSelect2) {
        setTimeout(function() {
            $('select.select2').attr('class', 'form-control');
            $('.select2').remove();
        }, 1000);
    }
}

$(document).ready(function() {
    let isTawakkalnaContext = getUrlQueryStringParameters("tawakkalna");

    addMunner(isTawakkalnaContext);

    if (isTawakkalnaContext) applyTawakkalnaStyle();
});

function addMunner(isTawakkalnaContext) {
    if (!isTawakkalnaContext) {
        let externalServiceScript = document.createElement('script');
        externalServiceScript.src = `${cdnPath}/ExternalServices.js?v=${counttt} `;
        externalServiceScript.type = 'text/javascript';
        document ? .body ? .append(externalServiceScript);
    }
}

function redirectToPortalSearch(event, button) {
    event.preventDefault();
    const searchUrl = button.dataset.searchUrl;
    const searchKey = document.getElementById('edit-search-api-fulltext').value;
    window.location.href = `${searchUrl}/solr-serach-v1?search_api_fulltext=${encodeURIComponent(searchKey)}`;
}