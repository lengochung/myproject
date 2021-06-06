jQuery(document).ready(function($){

	/* Start open submenus be default on mobile devices */
	function opensubmenus() {
		if ($(window).width() < 768) {
			$("#top-navbar-collapse li").addClass('open');
			$("#header-navbar-collapse li").addClass('open');
			$("#top-navbar-collapse li a").attr('aria-expanded','true');
			$("#header-navbar-collapse li a").attr('aria-expanded','true');
		}else{
			$("#top-navbar-collapse li").removeClass('open');
			$("#header-navbar-collapse li").removeClass('open');
			$("#top-navbar-collapse li a").attr('aria-expanded','false');
			$("#header-navbar-collapse li a").attr('aria-expanded','false');
		}
	}
	$('#top-menu .navbar-toggle').click(function(){
		setTimeout(opensubmenus, 100);
	});
	$('#no-header-top-menu .navbar-toggle').click(function(){
		setTimeout(opensubmenus, 100);
	});
	$('#header-menu .navbar-toggle').click(function(){
		setTimeout(opensubmenus, 100);
	});
    $(window).resize(opensubmenus);
	opensubmenus();
	/* End open submenus be default on mobile devices */

	var isTouchDevice =	(('ontouchstart' in window) ||
									(navigator.MaxTouchPoints > 0) ||
									(navigator.msMaxTouchPoints > 0));
	if(!isTouchDevice){
		// open dropdowns on hover on non mobile devices
		$(".dropdown").hover(function(e) {
			$('.dropdown-toggle', this).dropdown("toggle");
			e.stopPropagation();
		});
		// prevent blinkling
		$(".submenu-link").click(function(e) {
			e.stopPropagation();
		});
	}
	
	/* Double click on root items links on Touch devices, and Click on non touch devices to open link */
	if(isTouchDevice){
		$(".dropdown-toggle").dblclick(function(e){
			var linkhref = $(this).attr("href");
			window.location = linkhref;
		});
	}else{
		$(".dropdown-toggle").click(function(e){
			var linkhref = $(this).attr("href");
			window.location = linkhref;
			e.stopPropagation();
		});
	}

	// open first level links when double tap
	var tapped=false
	$(".dropdown-toggle").on("touchstart",function(e){
		if(!tapped){ //if tap is not set, set up single tap
			tapped=setTimeout(function(){
				tapped=null
				//insert things you want to do when single tapped
			},300);   //wait 300ms then run single click code
		} else {    //tapped within 300ms of last tap. double tap
			clearTimeout(tapped); //stop single tap callback
			tapped=null
			//insert things you want to do when double tapped
			var linkhref = $(this).attr("href");
			window.location = linkhref;
		}
	});

	function SetMegaMenu(){
		if($("body").css('direction')=='rtl'){ //RTL
			if($(window).width() >= 1024) {
				$(".rtl .megamenu .dropdown-menu").each(function(){
					var MegaMenuDropdown = $(this);
					var Window50 = $(window).width() * 0.50;
					var Window75 = $(window).width() * 0.75;
					var Window25 = $(window).width() * 0.25;
					MegaMenuDropdown.css("left", "auto");
					var ParentListItemRight = MegaMenuDropdown.parent().offset().left + MegaMenuDropdown.parent().width();
					var ListsItemsLength = $(this).children("li").length;
					if( ListsItemsLength > 3 ){
						MegaMenuDropdown.css("width", "100%");
						MegaMenuDropdown.children("li").css('width', '25%');
						MegaMenuDropdown.css("left", "0");
					}else if(ListsItemsLength == 3){
						MegaMenuDropdown.css("width", "75%");
						MegaMenuDropdown.children("li").css('width', '33%');
						if(ParentListItemRight < Window75){
							MegaMenuDropdown.css('left', '0');
						}
					}else if(ListsItemsLength == 2){
						MegaMenuDropdown.css("width", "50%");
						MegaMenuDropdown.children("li").css('width', '50%');
						if(ParentListItemRight <= Window50){
							MegaMenuDropdown.css('left', '0');
						}
					}else if(ListsItemsLength == 1){
						MegaMenuDropdown.css("width", "25%");
						MegaMenuDropdown.children("li").css('width', '100%');
						if(ParentListItemRight < Window25){
							MegaMenuDropdown.css('left', '0');
						}
					}
				});
			}else if($(window).width() >= 768 && $(window).width() < 1024) {
				$(".rtl .megamenu .dropdown-menu").each(function(){
					var MegaMenuDropdown = $(this);
					var Window50 = $(window).width() * 0.50;
					var Window75 = $(window).width() * 0.75;
					MegaMenuDropdown.css("left", "auto");
					var ParentListItemRight = MegaMenuDropdown.parent().offset().left + MegaMenuDropdown.parent().width();
					var ListsItemsLength = $(this).children("li").length;
					if( ListsItemsLength > 2 ){
						MegaMenuDropdown.css("width", "100%");
						MegaMenuDropdown.children("li").css('width', '33%');
						MegaMenuDropdown.css("left", "0");
					}else if(ListsItemsLength == 2){
						MegaMenuDropdown.css("width", "75%");
						MegaMenuDropdown.children("li").css('width', '50%');
						if(ParentListItemRight < Window75){
							MegaMenuDropdown.css('left', '0');
						}
					}else if(ListsItemsLength == 1){
						MegaMenuDropdown.css("width", "50%");
						MegaMenuDropdown.children("li").css('width', '100%');
						if(ParentListItemRight < Window50){
							MegaMenuDropdown.css('left', '0');
						}
					}
				});
			}
		}else{ // LTR
			if($(window).width() >= 1024) {
				$(".megamenu .dropdown-menu").each(function(){
					var MegaMenuDropdown = $(this);
					var Window50 = $(window).width() * 0.50;
					var Window75 = $(window).width() * 0.75;
					var Window25 = $(window).width() * 0.25;
					MegaMenuDropdown.css("right", "auto");
					var ParentListItemLeft = MegaMenuDropdown.parent().offset().left;
					var ListsItemsLength = $(this).children("li").length;
					if( ListsItemsLength > 3 ){
						MegaMenuDropdown.css("width", "100%");
						MegaMenuDropdown.children("li").css('width', '25%');
						MegaMenuDropdown.css("right", "0");
					}else if(ListsItemsLength == 3){
						MegaMenuDropdown.css("width", "75%");
						MegaMenuDropdown.children("li").css('width', '33%');
						if(ParentListItemLeft > Window25){
							MegaMenuDropdown.css('right', '0');
						}
					}else if(ListsItemsLength == 2){
						MegaMenuDropdown.css("width", "50%");
						MegaMenuDropdown.children("li").css('width', '50%');
						if(ParentListItemLeft > Window50){
							MegaMenuDropdown.css('right', '0');
						}
					}else if(ListsItemsLength == 1){
						MegaMenuDropdown.css("width", "25%");
						MegaMenuDropdown.children("li").css('width', '100%');
						if(ParentListItemLeft > Window75){
							MegaMenuDropdown.css('right', '0');
						}
					}
				});
			}else if($(window).width() >= 768 && $(window).width() < 1024) {
				$(".megamenu .dropdown-menu").each(function(){
					var MegaMenuDropdown = $(this);
					var Window50 = $(window).width() * 0.50;
					var Window75 = $(window).width() * 0.75;
					MegaMenuDropdown.css("right", "auto");
					var ParentListItemLeft = MegaMenuDropdown.parent().offset().left;
					var ListsItemsLength = $(this).children("li").length;
					if( ListsItemsLength > 2 ){
						MegaMenuDropdown.css("width", "100%");
						MegaMenuDropdown.children("li").css('width', '33%');
						MegaMenuDropdown.css("right", "0");
					}else if(ListsItemsLength == 2){
						MegaMenuDropdown.css("width", "75%");
						MegaMenuDropdown.children("li").css('width', '50%');
						if(ParentListItemLeft > Window25){
							MegaMenuDropdown.css('right', '0');
						}
					}else if(ListsItemsLength == 1){
						MegaMenuDropdown.css("width", "50%");
						MegaMenuDropdown.children("li").css('width', '100%');
						if(ParentListItemLeft > Window50){
							MegaMenuDropdown.css('right', '0');
						}
					}
				});
			}
		}
	}
	SetMegaMenu();
	$(window).resize(SetMegaMenu);
	
	$('[data-toggle="tooltip"]').tooltip();

	// scroll to top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
		return false;
	});

	$('.dropdown-menu li a').css('font-weight',$('.dropdown-menu>li>a').css('font-weight'));
	$('.page-footer button').css('color',$('body').css('color'));
	$('.page-footer input').css('color',$('body').css('color'));
	$('.page-footer optgroup').css('color',$('body').css('color'));
	$('.page-footer select').css('color',$('body').css('color'));
	$('.page-footer textarea').css('color',$('body').css('color'));

	// gallery
	$('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".gif"], a[href$=".png"]').attr('data-fancybox', 'separate').attr('data-caption',  $(this).find('img').attr('alt'));
	$('.gallery').each(function() {
	// set the rel for each gallery
		$(this).find('.gallery-icon a[href$=".jpg"], .gallery-icon a[href$=".jpeg"],.gallery-icon a[href$=".gif"], .gallery-icon a[href$=".png"]').attr('data-fancybox', 'group-' + $(this).attr('id')).fancybox({
			infobar : true,
			protect: true
		});
		$('.gallery-icon').each(function() {
			$(this).find('a').attr('data-caption',  $(this).find('a img').attr('alt'));
		})
	
	});

	//add class to woocommerce product categories
	$('.widget_product_categories .cat-item').addClass('panel box');

	$("#widgetModal").modal("show");

	// top navigation
	$(document).on("scroll", function(){
		if( $(document).scrollTop() > 50 ){
			$("#top-menu").addClass("navbar-default").removeClass("in-top").addClass("navbar-inverse").addClass("bg-inverse");
		}else{
			$("#top-menu").removeClass("navbar-default").addClass("in-top").removeClass("navbar-inverse").removeClass("bg-inverse");
		}
	});
	
});