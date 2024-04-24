import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsButtonLink extends Schema.Component {
  collectionName: 'components_components_button_links';
  info: {
    displayName: 'Button Link';
    description: '';
  };
  attributes: {
    btnText: Attribute.String;
    url: Attribute.String;
  };
}

export interface ComponentsFeature extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'feature';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHading: Attribute.Text;
    icon: Attribute.Enumeration<
      [
        'SETUP_ICON',
        'EMAIL_ICON',
        'SECURE_ICON',
        'CERTIFIED_ICON',
        'UNLIMITED_ICON',
        'CART_ICON',
        'OVERHEAD_ICON',
        'FEE_ICON',
        'SOCIAL_ICON'
      ]
    >;
  };
}

export interface ComponentsFooterLinks extends Schema.Component {
  collectionName: 'components_components_footer_links';
  info: {
    displayName: 'footerLinks';
  };
  attributes: {
    title: Attribute.String;
    navigationLink: Attribute.Component<'components.footer-navigation', true>;
  };
}

export interface ComponentsFooterNavigation extends Schema.Component {
  collectionName: 'components_components_footer_navigations';
  info: {
    displayName: 'footerNavigation';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ComponentsFooter extends Schema.Component {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logo: Attribute.Media;
    copyRightText: Attribute.String;
    links: Attribute.Component<'components.footer-links', true>;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    link: Attribute.Component<'components.link', true>;
    button: Attribute.Component<'components.button-link'>;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    placeholder: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    btnType: Attribute.Enumeration<['primary', 'secondary']>;
    title: Attribute.String;
  };
}

export interface ComponentsProduct extends Schema.Component {
  collectionName: 'components_components_products';
  info: {
    displayName: 'Product';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    subTitle: Attribute.Text;
    button: Attribute.Component<'components.button-link'>;
  };
}

export interface LayoutFeaturesSection extends Schema.Component {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    Feature: Attribute.Component<'components.feature', true>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    image: Attribute.Media;
    link: Attribute.Component<'components.link'>;
  };
}

export interface LayoutPartnerSection extends Schema.Component {
  collectionName: 'components_layout_partner_sections';
  info: {
    displayName: 'Partner Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    heading: Attribute.String;
    image: Attribute.Media;
    link: Attribute.Component<'components.link'>;
  };
}

export interface LayoutProductSection extends Schema.Component {
  collectionName: 'components_layout_product_sections';
  info: {
    displayName: 'Product Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    product: Attribute.Component<'components.product', true>;
  };
}

export interface LayoutTrustedSection extends Schema.Component {
  collectionName: 'components_layout_trusted_sections';
  info: {
    displayName: 'Trusted Section';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    logos: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.button-link': ComponentsButtonLink;
      'components.feature': ComponentsFeature;
      'components.footer-links': ComponentsFooterLinks;
      'components.footer-navigation': ComponentsFooterNavigation;
      'components.footer': ComponentsFooter;
      'components.header': ComponentsHeader;
      'components.link': ComponentsLink;
      'components.product': ComponentsProduct;
      'layout.features-section': LayoutFeaturesSection;
      'layout.hero-section': LayoutHeroSection;
      'layout.partner-section': LayoutPartnerSection;
      'layout.product-section': LayoutProductSection;
      'layout.trusted-section': LayoutTrustedSection;
    }
  }
}
