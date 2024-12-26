<?php
/**
 * Plugin Name:       landingPage
 * Plugin URI: https://example.com/plugins/the-basics/
 * Description: Describe what the plugin does.
 * Version: 1.0.9
 * Requires at least: 5.5
 * Requires PHP: 5.3
 * Author: John Smith
 * Author URI: https://author.example.com/
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI: https://example.com/my-plugin/
 * Text Domain: landingpage
 * Domain Path: /languages
*/

if ( ! function_exists( 'landingpage_plugin_base_url' ) ) :

function landingpage_plugin_base_url() {
    global $landingpage_plugin_base_url_value;
    if(empty($landingpage_plugin_base_url_value)) {
        $landingpage_plugin_base_url_value = untrailingslashit( plugin_dir_url( __FILE__ ) );
    }
    return $landingpage_plugin_base_url_value;
}

endif;

if ( ! function_exists( 'landingpage_plugin_base_path' ) ) :

function landingpage_plugin_base_path() {
    global $landingpage_plugin_base_path_value;
    if(empty($landingpage_plugin_base_path_value)) {
        $landingpage_plugin_base_path_value = untrailingslashit( plugin_dir_path(  __FILE__ ) );
    }
    return $landingpage_plugin_base_path_value;
}

endif;

if ( ! function_exists( 'landingpage_setup' ) ) :

function landingpage_setup() {

    landingpage_plugin_base_url();
    /*
     * Make the plugin available for translation.
     * Translations can be filed in the /languages/ directory.
     */
    /* Pinegrow generated Load Text Domain Begin */
    load_plugin_textdomain( 'landingpage', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
    /* Pinegrow generated Load Text Domain End */

    /*
     * Register custom menu locations
     */
    /* Pinegrow generated Register Menus Begin */

    /* Pinegrow generated Register Menus End */

    /*
    * Set image sizes
     */
    /* Pinegrow generated Image sizes Begin */

    /* Pinegrow generated Image sizes End */

}
endif; // landingpage_setup

add_action( 'after_setup_theme', 'landingpage_setup' );


if ( ! function_exists( 'landingpage_init' ) ) :

function landingpage_init() {

    /*
     * Register custom post types. You can also move this code to a plugin.
     */
    /* Pinegrow generated Custom Post Types Begin */

    /* Pinegrow generated Custom Post Types End */

    /*
     * Register custom taxonomies. You can also move this code to a plugin.
     */
    /* Pinegrow generated Taxonomies Begin */

    /* Pinegrow generated Taxonomies End */

}
endif; // landingpage_setup

add_action( 'init', 'landingpage_init' );


if ( ! function_exists( 'landingpage_custom_image_sizes_names' ) ) :

function landingpage_custom_image_sizes_names( $sizes ) {

    /*
     * Add names of custom image sizes.
     */
    /* Pinegrow generated Image Sizes Names Begin*/
    /* This code will be replaced by returning names of custom image sizes. */
    /* Pinegrow generated Image Sizes Names End */
    return $sizes;
}
add_action( 'image_size_names_choose', 'landingpage_custom_image_sizes_names' );
endif;// landingpage_custom_image_sizes_names


if ( ! function_exists( 'landingpage_widgets_init' ) ) :

function landingpage_widgets_init() {

    /*
     * Register widget areas.
     */
    /* Pinegrow generated Register Sidebars Begin */

    /* Pinegrow generated Register Sidebars End */
}
add_action( 'widgets_init', 'landingpage_widgets_init' );
endif;// landingpage_widgets_init



if ( ! function_exists( 'landingpage_customize_register' ) ) :

function landingpage_customize_register( $wp_customize ) {
    // Do stuff with $wp_customize, the WP_Customize_Manager object.

    /* Pinegrow generated Customizer Controls Begin */

    /* Pinegrow generated Customizer Controls End */

}
add_action( 'customize_register', 'landingpage_customize_register' );
endif;// landingpage_customize_register


if ( ! function_exists( 'landingpage_enqueue_scripts' ) ) :
    function landingpage_enqueue_scripts() {

        /* Pinegrow generated Enqueue Scripts Begin */

    /* Pinegrow generated Enqueue Scripts End */

        /* Pinegrow generated Enqueue Styles Begin */

    /* Pinegrow generated Enqueue Styles End */

    }
    add_action( 'wp_enqueue_scripts', 'landingpage_enqueue_scripts' );
endif;

if ( ! function_exists( 'landingpage_pgwp_sanitize_placeholder' ) ) :
    function landingpage_pgwp_sanitize_placeholder($input) { return $input; }
endif;

    /*
     * Resource files included by Pinegrow.
     */
    /* Pinegrow generated Include Resources Begin */
require_once "inc/custom.php";
if( !class_exists( 'PG_Helper_v2' ) ) { require_once "inc/wp_pg_helpers.php"; }
if( !class_exists( 'PG_Blocks_v3' ) ) { require_once "inc/wp_pg_blocks_helpers.php"; }

    /* Pinegrow generated Include Resources End */

/* Creating Editor Blocks with Pinegrow */

if ( ! function_exists('landingpage_blocks_init') ) :
function landingpage_blocks_init() {
    // Register blocks. Don't edit anything between the following comments.
    /* Pinegrow generated Register Pinegrow Blocks Begin */
    require_once 'blocks/headerb/headerb_register.php';
    require_once 'blocks/logostrusted/logostrusted_register.php';
    require_once 'blocks/stayinformed/stayinformed_register.php';
    require_once 'blocks/footeractovia/footeractovia_register.php';

    /* Pinegrow generated Register Pinegrow Blocks End */
}
add_action('init', 'landingpage_blocks_init');
endif;

/* End of creating Editor Blocks with Pinegrow */


/* Register Blocks Categories */

function landingpage_register_blocks_categories( $categories ) {

    // Don't edit anything between the following comments.
    /* Pinegrow generated Register Blocks Category Begin */

$categories = array_merge( $categories, array( array(
        'slug' => 'my_category',
        'title' => __( 'My Category', 'landingpage' )
    ) ) );

    /* Pinegrow generated Register Blocks Category End */

    return $categories;
}
add_action( version_compare('5.8', get_bloginfo('version'), '<=' ) ? 'block_categories_all' : 'block_categories', 'landingpage_register_blocks_categories');

/* End of registering Blocks Categories */

// Función para encolar Tailwind CSS versión 2.0.2
function enqueue_tailwind_styles() {
    wp_enqueue_style('tailwind-css', 'https://unpkg.com/tailwindcss@2.0.2/dist/tailwind.min.css', array(), '2.0.2', 'all');

    // Encolar la fuente Poppins desde Google Fonts
           wp_enqueue_style('poppins-font', 'https://fonts.googleapis.com/css?family=Poppins&display=swap', array(), null);

}

// Hook para encolar el estilo
add_action('wp_enqueue_scripts', 'enqueue_tailwind_styles');


?>