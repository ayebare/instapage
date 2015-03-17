jQuery( document ).ready()
{
	setTimeout( function()
	{
		jQuery( 'a.instapage-hide-stats' ).on( 'click', function( e )
		{
			e.preventDefault();

			if ( jQuery( 'td.column-instapage_post_stats .instapage-index-page-stats' ).is( ':visible' ) )
			{
				jQuery( this ).text( 'Show Stats' );
				jQuery( '.column-instapage_post_stats' ).width( '80px' );
			}
			else
			{
				jQuery( this ).text( 'Hide Stats' );
				jQuery( '.column-instapage_post_stats' ).width( '300px' );
			}

			jQuery( '.instapage-variation-stats-column-text' ).toggle();
			jQuery( 'td.column-instapage_post_stats .instapage-index-page-stats' ).toggle();
		});


		if ( jQuery( '#instapage_my_selected_page' ).length )
		{
			var instapage_name = jQuery( '#instapage_my_selected_page' ).find( ':selected' ).text().trim();
			var can_be_changed = false;

			jQuery( '#instapage_my_selected_page option' ).each( function()
			{
				if ( jQuery( this ).text().trim() == jQuery( '#instapage_name' ).val() )
				{
					can_be_changed = true;
				}
			});

			if ( jQuery( '#instapage_name' ).val() == '' )
			{
				can_be_changed = true;
			}

			if ( can_be_changed )
			{
				jQuery( '#instapage_name' ).val( instapage_name );
			}

			jQuery( '#instapage_my_selected_page' ).on( 'change', function()
			{
				instapage_name = jQuery( this ).find( ':selected' ).text().trim();
				can_be_changed = false;

				jQuery( '#instapage_my_selected_page option' ).each( function()
				{
					if ( jQuery( this ).text().trim() == jQuery( '#instapage_name' ).val() )
					{
						can_be_changed = true;
					}
				});

				if ( jQuery( '#instapage_name' ).val() == '' )
				{
					can_be_changed = true;
				}

				if ( can_be_changed )
				{
					jQuery( '#instapage_name' ).val( instapage_name );
				}
			});
		}


		if ( jQuery( '#instapage-wp-path' ).length )
		{
			var add_on_width = parseInt( jQuery( '#instapage-wp-path .add-on' ).outerWidth(), 10 ) + 6;
			jQuery( '#instapage_slug' ).css( 'padding-left', add_on_width + 'px' );
		}
	}, 200 );
}