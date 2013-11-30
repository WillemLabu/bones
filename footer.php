			<footer class="footer" role="contentinfo">

				<div id="inner-footer" class="wrap clearfix">

					<nav role="navigation">
							<?php bones_footer_links(); ?>
					</nav>

					<p class="source-org copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>.</p>

				</div>

			</footer>

		</div>

<?php

// Load jQuery from a CDN with a local fallback
// Don't include the 'http:' in case of SSL

?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="<?php echo get_template_directory_uri() ?>/js/vendor/jquery-1.10.2.min.js"><\/script>')</script>

<?php

// All other JavaScript files are loaded in library/bones.php
wp_footer();

?>

	</body>

</html>
