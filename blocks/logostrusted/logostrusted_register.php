<?php

        PG_Blocks_v3::register_block_type( array(
            'name' => 'landingpage/logostrusted',
            'title' => __( 'Logos Trusted', 'landingpage' ),
            'category' => 'my_category',
            'render_template' => 'blocks/logostrusted/logostrusted.php',
            'supports' => array(),
            'base_url' => landingpage_plugin_base_url(),
            'base_path' => landingpage_plugin_base_path(),
            'js_file' => 'blocks/logostrusted/logostrusted.js',
            'attributes' => array(

            ),
            'example' => array(

            ),
            'dynamic' => true,
            'version' => '1.0.9'
        ) );
