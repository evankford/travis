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

	<div id="primary" class="content-area front-page-main">
   <section id="topGl" data-verticalThreshold="50" data-horizontalThreshold="30" data-imageOriginal="<?php echo get_stylesheet_directory_uri();?>/images/drama-poster.jpg" data-imageBg="<?php echo get_stylesheet_directory_uri();?>/images/bg.jpg" data-travisImg="<?php echo get_stylesheet_directory_uri();?>/images/travis1-full.png" data-travisAlpha="<?php echo get_stylesheet_directory_uri();?>/images/travisalpha.jpg" data-imageOver="<?php echo get_stylesheet_directory_uri();?>/images/over.jpg">
   <div class="verse-text">
     
   </div>
      <div id="albumTxt">
        
      </div>
      <div id="plain-text">
        <h2>Broken Record</h2>
      </div>
    </section>
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			// get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
    ?>
  

		</main><!-- #main -->
   
	</div><!-- #primary -->

<?php

get_footer();
