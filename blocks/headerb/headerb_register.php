<?php

        PG_Blocks_v3::register_block_type( array(
            'name' => 'landingpage/headerb',
            'title' => __( 'headerb', 'landingpage' ),
            'category' => 'my_category',
            'render_template' => 'blocks/headerb/headerb.php',
            'supports' => array(),
            'base_url' => landingpage_plugin_base_url(),
            'base_path' => landingpage_plugin_base_path(),
            'js_file' => 'blocks/headerb/headerb.js',
            'attributes' => array(

            ),
            'example' => array(

            ),
            'dynamic' => true,
            'version' => '1.0.17'
        ) );
