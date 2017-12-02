
if (Modernizr.svg) {
  // supported
} else {
  // not-supported
}

$(function(){
	// DOM Ready 

	var $body,subGallery, jQueryFn = $();

	/* news rotator */

	if( jQueryFn.cycle ){

		var $newsFeed = $('#news-feed');

		$newsFeed.cycle({
			slides:'>li',
			fx:'fadeout',
			pager:'.news-pager'
		});

	}

	if( jQueryFn.fancybox ){

		$("[data-fancybox]").fancybox({
			afterClose:function(){
				console.log('afterClose')
			}
		});
	}


	$body = $('body');

	subGallery = function( selector ){
		var $gallery = $( selector ),
			galleryTpl = {},
			$visibleTab,
			$galleryTitles,
			galleryTab;


		galleryTpl.headers = [
			{
				id:"tab1",
				label:"Tab 1"
			},
			{
				id:"tab2",
				label:"Tab 2"
			},
			{
				id:"tab3",
				label:"Tab 3"
			}
		];
		galleryTpl.tabs = {
			tab1:[{
				src:"file3251255366828.jpg",
				alt:"Alt 1"
			},
			{
				src:"file3811267338835.jpg",
				alt:"Alt 2"
			},
			{
				src:"file4741298583098.jpg",
				alt:"Alt 3"
			},
			{
				src:"file4811312660912.jpg",
				alt:"Alt 1"
			},
			{
				src:"file4821300966298.jpg",
				alt:"Alt 2"
			},
			{
				src:"file5001258630705.jpg",
				alt:"Alt 3"
			},
			{
				src:"file4811312660912.jpg",
				alt:"Alt 1"
			},
			{
				src:"file4821300966298.jpg",
				alt:"Alt 2"
			},
			{
				src:"file5001258630705.jpg",
				alt:"Alt 3"
			},
			{
				src:"file4811312660912.jpg",
				alt:"Alt 1"
			},
			{
				src:"file4821300966298.jpg",
				alt:"Alt 2"
			},
			{
				src:"file5001258630705.jpg",
				alt:"Alt 3"
			}],
			tab2:[{
				src:"file4811312660912.jpg",
				alt:"Alt 1"
			},
			{
				src:"file4821300966298.jpg",
				alt:"Alt 2"
			},
			{
				src:"file5001258630705.jpg",
				alt:"Alt 3"
			}],
			tab3:[{
				src:"file5051300055797.jpg",
				alt:"Alt 1"
			},
			{
				src:"file5391259700152.jpg",
				alt:"Alt 2"
			},
			{
				src:"file5861288554715.jpg",
				alt:"Alt 3"
			}]

		};

		$galleryTitles = $('<ul>').attr('class','tabs');

		for(var i in galleryTpl.headers ){
			var cls;
			cls = ( i == "0" ) ? 'active-tab' : 'tab';
			console.log(" imdex  ", i);
			galleryTab = galleryTpl.headers[ i ];

			$('<li>')
				.append(
					$('<h4>')
					.addClass( cls )
					.data('id', galleryTab.id)
					.text( galleryTab.label )

				)
				.appendTo( $galleryTitles );
		}

		$gallery.removeClass('loading');
		$gallery.append( $galleryTitles );

		$gallery.append( $('<div>').attr('class','visible-tab') );

		$visibleTab = $gallery.find('.visible-tab') ;
		/* appending images for first tab */

		for( var first in galleryTpl.tabs.tab1 ){


			$visibleTab
			.append( $('<img>').attr({
				src:'images/' +  galleryTpl.tabs.tab1[ first ].src,
				alt:galleryTpl.tabs.tab1[ first ].label
			}) );

		}

		/* binding gallery tabs */
		$gallery.on('click','.tabs h4', function(){
		 	var $this = $(this), id, currentTab, image;

	 		$gallery.find('.tabs h4').removeClass('active-tab');

	 		$this.addClass('active-tab');

	 		$visibleTab.html( null );

	 		id = $this.data('id');

	 		if( galleryTpl.tabs.hasOwnProperty( id ) ){
	 			currentTab =  galleryTpl.tabs[ id ];

	 			for(var img in currentTab ){
	 				image = currentTab[ img ];

	 				$('<img>')
					.attr({
						src:'images/' + image.src,
						alt:image.src
					})
					.appendTo( $visibleTab );
	 			}
	 		}
		});



	}('.sub-gallery');


});