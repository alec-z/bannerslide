/**
 * Bannerslide 0.0.1 -
 *
 * (c) 2012 Alec Zheng
 * Licensed under the MIT License (LICENSE)
 */
 
/*
 * jQuery plugin
 *
 * Options:
 *   message: confirmation message for form submit hook (default: "Please confirm:")
 * 
 * Any other options - e.g. 'clone' - will be passed onto the boxy constructor (or
 * Boxy.load for AJAX operations)
 */
$.fn.bannerslide=function(options){
    options = options || { "slide_type" : "fade", "fadeInTime" : 300 , "fadeOutTime" : 200};

    var slide_type = options["slide_type"];
    var $this = this,i;
    var len = $this.find("li").length;
    var slide_timer;
    // create dom
    $this.wrap('<div />');
    $this.scope_div = $this.parent();
    var html="<ul>";
    var index = 0;
    var pre_index = 0;
    var my_timer = function()
    {
        showPic(index);
        index++;
        if (index==len)
            index = 0;
    };
    for (i=0;i<len;i++)
    {
        html+="<li>"+(i+1)+"</li>";
    }
    html+="</ul>";
    $this.tag_ul = $(html);
    $this.scope_div.append($this.tag_ul);

    //add_style


    var maxHeight= 0,maxWidth=0;
    $this.find("li").each(function(){
      if ($(this).height()>maxHeight)
        maxHeight = $(this).height();
      if ($this.width()>maxWidth)
        maxWidth = $this.width();

    });
    $this.scope_div.css("position","relative").css("position","relative")
        .css("width",maxWidth).css("height",maxHeight).css("overflow","hidden");

    $this.css("position","absolute").css("z-index",1);
    $this.find("li").css("display","block").css("float","left")
        .css("width",maxWidth).css("height",maxHeight);
    if (options["slide_type"] == "left_right")
    {
        $this.css("width","9999em");

    }
    else if (options["slide_type"] == "up_down")
    {
        $this.css("height","9999em");

    }
    else if (options["slide_type"] == "fade")
    {
        $this.find("li").css("position","absolute")
            .css("left",maxWidth);
        $this.find("li").eq(0)
            .css("left",0);
    }



    toggle_current($this.tag_ul.find("li"),false);
    toggle_current($this.tag_ul.find("li").eq(0),true);
    $this.tag_ul.css("position","absolute")
        .css("right",20)
        .css("bottom",20)
        .css("z-index",200000);


    //binding_event


    $this.scope_div.hover(function(){
        clearInterval(slide_timer);
    },function(){
        slide_timer = setInterval(my_timer,3000);
    }).trigger('mouseleave');



    $this.tag_ul.find("li").mouseover(function(){

        index = $this.tag_ul.find("li").index(this);
        showPic(index);
    }).eq(0).triggerHandler('mouseover');

    function toggle_current(j_object,has_current)
    {
        if (has_current)
            j_object.attr("style","background:#FF0000;border:1px solid #D00000;cursor:pointer;float:left;height:24px;line-height:24px;width:24px;margin:0 2px;text-align:center;color:#fff;font-weight:800;");
        else
            j_object.attr("style","background:#fff;border:1px solid #D00000;cursor:pointer;float:left;height:18px;line-height:18px;width:18px;margin:4px;text-align:center;color:#D00000;");
    }

    function showPic(index)
    {
       toggle_current($this.tag_ul.find("li"),false);
       toggle_current($this.tag_ul.find("li").eq(index),true);
       if (options["slide_type"]=="left_right")
         $this.stop(true,false).animate({left:-index*maxWidth});
       else if (options["slide_type"]=="up_down")
         $this.stop(true,false).animate({top:-index*maxHeight});
       else if (options["slide_type"]=="fade")
       {

             $this.find("li").eq(pre_index).fadeOut(options.fadeOutTime,function(){
                 $this.find("li").eq(pre_index).css("left",maxWidth);
                 $this.find("li").eq(index).hide();
                 $this.find("li").eq(index).css("left",0);
                 $this.find("li").eq(index).fadeIn(options.fadeInTime);
                                      });


       }


       pre_index = index;
    }

}