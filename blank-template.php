<?php
/*
Template Name: Blank Page
*/
?>
<!DOCTYPE html>
<html>
<head>
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body>
    <?php
    // Aquí puedes agregar el contenido dinámico o dejarlo vacío.
    if (have_posts()) :
        while (have_posts()) : the_post();
            the_content();
        endwhile;
    endif;
    ?>
    <?php wp_footer(); ?>
</body>
</html>
