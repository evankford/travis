<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package travis
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->
		<script>
				
		// Blotter = window.Blotter;  
			
		// var text = new Blotter.Text(
		// 	"Broken Record", {
		// 		family: "'Levi', 'Levi Marker', script",
		// 		size: 22, 
		// 		fill: '#000000'
		// 	}
		// 	)
		// blotterMat = new Blotter.Material();
		// var blotter = new Blotter(blotterMat, {texts: text});
		// var blotterElem = document.getElementById('albumTxt');
		// 	var blotterScope = blotter.forText(text);
		// 	blotterScope.appndTo(blotterElem);
		
		// BLOTTER - Example 1
var text = new Blotter.Text("observation", {
  family : "'EB Garamond', serif",
  size : 27,
  fill : "#202020"
});

var material = new Blotter.Material();

var blotter = new Blotter(material, {
  texts : text
});

var elem = document.getElementById("plain-text");
var scope = blotter.forText(text);

scope.appendTo(elem);
		
		</script>
<?php
get_sidebar();
get_footer();
