$(document).ready(function(){function t(t,n){t.each(function(){$(this).offset().top>$(window).scrollTop()+$(window).height()*n&&$(this).find(".timeline-img, .timeline-content").addClass("is-hidden")})}function n(t,n){t.each(function(){$(this).offset().top<=$(window).scrollTop()+$(window).height()*n&&$(this).find(".timeline-img").hasClass("is-hidden")&&$(this).find(".timeline-img, .timeline-content").removeClass("is-hidden").addClass("bounce-in")})}$("a.smooth-link").on("click",function(t){t.preventDefault();var n=$(this).context.hash;$("html, body").animate({scrollTop:$(n).offset().top},800)});var i=$(".timeline-block"),e=.8;t(i,e),$(window).on("scroll",function(){window.requestAnimationFrame?window.requestAnimationFrame(function(){n(i,e)}):setTimeout(function(){n(i,e)},100)});var o=$(".progress-bar");o.css("width",0);var s=(o.waypoint(function(t){$(this).each(function(t){var n=$(this.element);n.css("width",n.attr("aria-valuenow")+"%")})},{triggerOnce:!0,offset:"bottom-in-view"}),$("#contact .btn-submit"));s.button("reset"),$("#home-contact-form").validate({invalidHandler:function(t,n){},submitHandler:function(t){var n=$(t).serialize();n+="&action=submit_home_contact_form",s.button("loading"),$.post(ajaxUrl.address,n,function(n){"ok"===n?(t.reset(),s.text("Email Sent").addClass("success"),setTimeout(function(){s.removeClass("success").button("reset")},1500)):(s.html("Something went wrong. Please try again.").addClass("error"),setTimeout(function(){s.removeClass("error").button("reset")},1500))})}})});