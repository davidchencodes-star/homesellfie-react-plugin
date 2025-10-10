<?php

/**
 * Plugin.
 *
 * @package reactplug
 * @wordpress-plugin
 *
 * Plugin Name:     Homesellfie Zusatzfunktionen
 * Description:     Notwendig für Terminbuchungen, Angebote und weitere funktionen
 * Author:          we-site GmbH - Entwickler: Michael Wanjek
 * Author URL:      https://we-site.de
 * Version:         1.0
 */

// register shortcode Terminbuchung
function shortcodeTerminbuchung()
{
    return '<div id="we-terminbuchung"></div>';
}

add_shortcode('terminbuchung', 'shortcodeTerminbuchung');

function shortcodeTotal()
{
    return '<div id="we-total"></div>';
}

add_shortcode('total', 'shortcodeTotal');

function shortcodeBottom()
{
    return '<div id="we-bottom-bar"></div>';
}

add_shortcode('bottom-bar', 'shortcodeBottom');

// register shortcode Angebotsformular
function shortcodeAngebotsformular()
{
    return '<div id="we-angebotsformular"></div>';
}

add_shortcode('angebotsformular', 'shortcodeAngebotsformular');

// register shortcode Kontaktformular
function shortcodeKontaktformular()
{
    return '<div id="we-kontaktformular"></div>';
}

add_shortcode('kontaktformular', 'shortcodeKontaktformular');

// register shortcode JetztAnmelden
function shortcodeJetztAnmelden()
{
    return '<div id="we-jetzt-anmelden"></div>';
}

add_shortcode('jetzt-anmelden', 'shortcodeJetztAnmelden');

// register shortcode JetztAnmelden
function shortcodeGeboteMeldung()
{
    return '<div id="we-gebote-meldung"></div>';
}

add_shortcode('gebote', 'shortcodeGeboteMeldung');

// register shortcode JetztAnmelden
function shortcodeObjektunterlagen()
{
    return '<div id="we-objektunterlagen"></div>';
}

add_shortcode('objektunterlagen', 'shortcodeObjektunterlagen');

// share modal
function shortcodeShareModal()
{
    return '<div id="we-share-modal"></div>';
}

add_shortcode('sharemodal', 'shortcodeShareModal');

// document unlock modal
function shortcodeDocumentModal()
{
    return '<div id="we-document-modal"></div>';
}

add_shortcode('sharedocumentmodal', 'shortcodeDocumentModal');

// fullscreen iframe
function shortcodeFullscreenIframe()
{
    return '<div id="we-fullscreen-iframe"></div>';
}

add_shortcode('fullscreen-iframe', 'shortcodeFullscreenIframe');

// angebot mobile login modal
function shortcodeAngebotMobileModal()
{
    return '<div id="we-angebot-mobile-modal"></div>';
}

add_shortcode('angebotmobilemodal', 'shortcodeAngebotMobileModal');

// price page
function shortcodePricePage()
{
    return '<div id="we-price"></div>';
}

add_shortcode('price-page', 'shortcodePricePage');

function shortcodeKontaktiereUnsModal()
{
    return '<div id="we-kontaktiere-uns-modal"></div>';
}

add_shortcode('kontaktiere-uns-modal', 'shortcodeKontaktiereUnsModal');

function shortcodeHome()
{
    return '<div id="we-home"></div>';
}

add_shortcode('home', 'shortcodeHome');

function shortcodeLandlord()
{
    return '<div id="we-landlord"></div>';
}

add_shortcode('landlord', 'shortcodeLandlord');


add_action('wp_enqueue_scripts', 'enq_react');
function enq_react()
{
    wp_enqueue_script(
        'plugin-react',
        plugin_dir_url(__FILE__) . '/build/index.js',
        ['wp-element'],
        rand(), // Change this to null for production
        true
    );
    wp_enqueue_style(
        'plugin-react-style',
        plugin_dir_url(__FILE__) . '/build/index.css'
    );
    wp_enqueue_style(
        'plugin-react-style-index',
        plugin_dir_url(__FILE__) . '/build/style-index.css'
    );
}
