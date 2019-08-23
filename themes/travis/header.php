<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package travis
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
	<style>
	@font-face {
  font-family: 'Mont';
  font-weight: 700;
  font-style: normal;
  src: url('<?php echo get_stylesheet_directory_uri();?>/fonts/mont.woff2') format('woff2'),  url('<?php echo get_stylesheet_directory_uri();?>/fonts/mont.woff') format('woff');
}
@font-face {
  font-family: 'Levi';
  font-weight: 700;
  src: url('<?php echo get_stylesheet_directory_uri();?>/fonts/levi.ttf') format('ttf'), url('<?php echo get_stylesheet_directory_uri();?>/fonts/levi.woff2') format('woff2'),  url('<?php echo get_stylesheet_directory_uri();?>/fonts/levi.woff') format('woff');
}


	</style>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'travis' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$travis_description = get_bloginfo( 'description', 'display' );
			if ( $travis_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $travis_description; /* WPCS: xss ok. */ ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'travis' ); ?></button>
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
			) );
			?>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">
