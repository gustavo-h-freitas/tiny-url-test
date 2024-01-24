<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '*pg~ps/SY[Ap$55;S.4bUh*bQT|h9vf[alpl{BavxyWv.>Cb}N>2RS,}e9g],&[!' );
define( 'SECURE_AUTH_KEY',   'G/|C7?0 zy#%O.O ib+){^l?IxCU9Loq|MQy= Q2@,Z9|},r@85J%}J? >Ut`)I8' );
define( 'LOGGED_IN_KEY',     'u3Bha./}Tpy|5[ZW.(a9V0%ER{LVUGq+<2WBp,Xklj-c_hO`ne<u+!<Dp/ 2J]1e' );
define( 'NONCE_KEY',         'j!.K3Y)}thmO~x^yd@In7G;%!v/7d|a-aC-_L%w=;]IE3fak_%&8oe(yA$|Jk:Cs' );
define( 'AUTH_SALT',         'Nu{oEOj;VLADF-asa.Cll/zJ@ANJ>y_z}3te4acII5a?ooCk/.n+{mo0]71jqRxY' );
define( 'SECURE_AUTH_SALT',  '-ym#z#qT}kD8^^!)ivo#MB5.9,O}5kL)Q9|&=sYOI0erYs/IuW<6.W9jSobqTd[$' );
define( 'LOGGED_IN_SALT',    'WoB_||tQd}7NWZ~As$M&#{R7Bn~)=1E|=3{nwdEqgQOEU^%y$}e7W|]zcnZ<%-lE' );
define( 'NONCE_SALT',        '>uL@x&|3JB+N)IO.kYzV%^|>Zn7f/81tv5tIt>2c54#tHBK53yDHJE072_0/azqG' );
define( 'WP_CACHE_KEY_SALT', 'Z4v/v,yZ)MKvF@>W07r.nbx Bjscy!e3bSwXDvLk/J~u{yeEH(S3%o[f3}j^<U8a' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
