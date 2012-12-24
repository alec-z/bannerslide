bannerslide
===========
一个banner滚动的jquery的插件,支持3中图片轮播模式,up_down（上下),left_right(左右),fade（淡入淡出)。
不需要再导入css文件。
用法:
html:
<pre>
&lt;ul&nbsp;class=&quot;slider&quot;&gt;
&lt;li&gt;&lt;div&gt;hello&nbsp;world&lt;/div&gt;&lt;/li&gt;
&lt;li&gt;&lt;a&gt;&nbsp;great&nbsp;day&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;img&nbsp;src=&quot;a.jpg&quot;&nbsp;/&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>
js:
<pre>
<script type="text/javascript">
$(".slider").bannerslide();
</script>
</pre>

选项:
options = { "slide_type" : "fade", "fadeInTime" : 300 , "fadeOutTime" : 200};
