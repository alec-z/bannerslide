bannerslide
===========
一个banner滚动的jquery的插件,支持3中图片轮播模式,up_down（上下),left_right(左右),fade（淡入淡出)。
不需要再导入css文件。
用法:
html:
<pre>
<ul class="slider">
<li><div>hello world</div></li>
<li><a> great day</a></li>
<li><img src="a.jpg"></img></li>
</ul>
</pre>
js:
<pre>
<script type="text/javascript">
$(".slider").bannerslide();
</script>
<pre>
选项:
options = { "slide_type" : "fade", "fadeInTime" : 300 , "fadeOutTime" : 200};
