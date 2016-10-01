{{define "blog_js"}}
$(".entry-content > pre code").each(function(i,block){hljs.highlightBlock(block)});var stringProto=String.prototype;stringProto.decode4Html=function(){return this.replace(/<[^>]*>/gi,"")},stringProto.decode4Html=function(){var e=document.createElement("div");return e.innerHTML=this.stripTags(),e.childNodes[0]?e.childNodes[0].nodeValue||"":""},function(e){e.disqus_shortname="deepzz",$.each(["CURRENT_PAGE","CDN_DOMAIN"],function(t,n){e[n]="";var r=$("#"+n);r&&(e[n]=r.val())})}(this),function(e){function t(t){var n,r,i={selector:null,height:200};i=$.extend(i,t),n=i.height,r=function(){var t=$(e).scrollTop(),r=$(e).height()+t;$(i.selector).find("img[data-src]").each(function(){var e=$(this);setTimeout(function(){var i,o=e.offset(),a=e.height();o.top>r+n||o.top+a<t-n||(i=e.data("src"),i&&(e.on("load",function(){e.addClass("loaded")}),e.attr("src",i),e.removeAttr("data-src")))},0)})},$(e).on("resize",r),$(e).on("scroll",r),r()}e.lazyLoad=t}(this),function(e){function t(t){var r='<li class="post" id="post-'+t.id+'"><div class="post-content clearfix"><div class="indicator"></div><div class="avatar"><div class="user">'+(t.url?'<a href="'+t.url+'"><img data-src="'+t.avatar+'" /></a>':'<img data-src="'+e.CDN_DOMAIN+'/static/img/default_avatar.png" />')+'</div></div><div class="post-body"><header class="post-header"><span class="post-byline"><span class="author publisher-anchor-color">'+(t.url?'<a href="'+t.url+'">'+t.name+"</a>":t.name)+'</span></span><span class="post-meta"><span class="bullet"> 。 </span><a data-id="'+t.id+'" href="'+location.href.replace(/#.*$/,"")+"#comment-"+t.id+'" class="time-ago" title="'+t.createdAt+'">'+t.createdAtStr+'</a></span></header><div class="post-body-inner">'+t.message+'</div></div></div><ul class="children">'+n(t.children)+"</ul></li>";return r}function n(e){var n,r;if(!e||!e.length){return""}for(n="",r=0;r<e.length;r++){n+=t(e[r])}return n}function r(e){if(!e.comments.length){return'<p class="no-result">没有找到任何评论数据~<br /><br /><a href="#disqus_thread">点此发表评论 \xbb</a></p>'}var t='<div class="thread"><header><nav class="nav clearfix"><ul><li class="nav-tab tab-conversation active"><a class="publisher-nav-color"><span>'+e.commentNum+' </span>Comments</span></a></li></ul></nav></header><section><ul class="post-list">'+n(e.comments)+'</ul><div class="load-more"><a href="#" class="btn">Load more comments</a></div></section></div>';return t}function i(){a||(a=!0,$.get("/data/comment",{id:e.simple_config.id,cursor:s},function(t){var i,u;a=!1,t&&0==t.errno?(s?(i=n(t.data.comments),o.find(".post-list").append(i)):(i=r(t.data),o.html(i),$(e).trigger("hashchange","scrollIntoView")),u=o.find(".load-more a"),t.data.next?u.removeClass("busy"):u.hide(),s=t.data.next,$(e).trigger("scroll")):o.hide()}))}var o=$("#simple_thread"),a=!1,s="";o.on("click",".load-more a",function(e){e.preventDefault(),$(this).addClass("busy"),i()}).on("click",".time-ago",function(e){e.preventDefault(),location.hash="simple-"+$(this).data("id")}),$(e).on("hashchange",function(t,n){var r,i=location.hash.match(/#(?:comment|simple)-(\d+)/);i&&(r=o.find("#post-"+i[1]),r.length&&(o.find(".post-content.target").removeClass("target"),r.find(">.post-content").addClass("target"),n&&$(e).scrollTop(r.offset().top-90)))}),/(iPhone|Android)/.test(navigator.userAgent)&&o.addClass("mobile"),e.initSimpleThread=i}(window,document),function(e,t){return"127.0.0.1"!=t.domain&&"192.168.99.100"!=t.domain&&"deepzz.com"!=t.domain?void (location.href=location.href.replace(/(https?:\/\/[^\/]+)\//i,"//deepzz.com/")):void $(function(){lazyLoad({selector:"#content",height:100}),function(){var e=$("#content"),t=e.find("img"),n=e.width();t.each(function(){var e=$(this),t=0|e.attr("width"),r=0|e.attr("height"),i=e.prop("complete");t>n&&e.attr("height",Math.ceil(r/t*n)),e.prop("src")&&(i?e.addClass("loaded"):e.on("load",function(){e.addClass("loaded")}))})}(),function(){if("search-post"==CURRENT_PAGE){var e=$("#keyword");e.val()||e.focus()}}(),function(){var t,n,r,i=$("#disqus_thread"),o=$("#simple_thread"),a=!1,s=!1,u=$("#switch_thread_mode");u.length&&(e.disqus_config=function(){this.language="en",this.page.url=i.data("url"),this.page.identifier=i.data("identifier")},e.simple_config={id:o.data("id")},t=function(){i.show(),o.hide(),u.html('「<a href="#simple_thread">切换到评论浏览模式</a>」'),localStorage.comment_type="disqus_thread",a||(a=!0,i.html("评论加载中...<br /><br />注：如果长时间无法加载，请针对 disq.us | disquscdn.com | disqus.com 启用代理；或者切换到评论浏览模式。"),$.getScript("//deepzz.disqus.com/embed.js"))},n=function(){i.hide(),o.show(),u.html('「<a href="#disqus_thread">切换到评论完整模式</a>」'),localStorage.comment_type="simple_thread",s||(s=!0,o.html("评论加载中...<br /><br />注：本模式仅供浏览，如需发表评论请切换到评论完整模式。"),e.initSimpleThread())},r=function(){var e=location.hash;return"#simple_thread"==e||/#simple-\d+$/.test(e)?(n(),!0):"#disqus_thread"==e||/#comment-\d+$/.test(e)?(t(),!0):void 0},$(e).on("hashchange",r),setTimeout(function(){/#(simple|comment)-\d+$/.test(location.hash)&&$("#comments").get(0).scrollIntoView();var o=setInterval(function(){var a=i.offset().top,s=$(e).scrollTop();if(Math.abs(a-s)<1000){if(clearTimeout(o),r()){return}if("simple_thread"==localStorage.comment_type){return void n()}t()}},150)},250))}()})}(this,document),function(e){$(function(){$(".entry-content pre").each(function(e){var t,n,r,i=$(this),o=i.find("code");if(o.length&&o.prop("className")&&(o.hasClass("language-html")&&(t="__HTML_CODE_"+e,o.prop("id",t),n=$('<input data-id="'+t+'" type="button" class="runcode" value="在新窗口运行以上代码" />'),n.insertAfter(i)),o.html().split("\n").length>3&&o.prop("className").indexOf("language")>-1)){r=o.prop("className").replace("language-","").toUpperCase();$('<b class="name">'+r+"</a>").insertBefore(o)}}),$(".entry-content input.runcode").each(function(){var t=$(this);t.click(function(t){var n,r,i;t.preventDefault(),n=$("#"+$(this).data("id")).html().stripTags().decode4Html(),r=e.open("","_preview",""),i=r.document,i.open(),i.write(n),i.close()})})})}(this),function(){$(function(){$(".entry-content img[data-replace]").each(function(){var e=$(this);e.click(function(){var t,n,r,i,o=1000*(e.data("dur")||20);e.css("cursor")&&(t="/static/img/blank.gif",n=e.prop("src"),r=e.data("replace"),e.prop("src",t),e.css("cursor",""),i=new Image,i.onload=function(){e.prop("src",r),setTimeout(function(){e.prop("src",n),e.css("cursor","pointer")},o)},i.src=r)}),e.css("cursor","pointer")})})}(this);
{{end}}
