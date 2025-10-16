import type { Schema, Struct } from '@strapi/strapi';

export interface CarouselsSliderTheme extends Struct.ComponentSchema {
  collectionName: 'components_carousels_slider_themes';
  info: {
    displayName: 'SliderTheme';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface ContentwithMediaLeftTheme extends Struct.ComponentSchema {
  collectionName: 'components_contentwith_media_left_themes';
  info: {
    displayName: 'LeftTheme';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface FooterDefaultTheme extends Struct.ComponentSchema {
  collectionName: 'components_footer_default_themes';
  info: {
    displayName: 'defaultTheme';
  };
  attributes: {
    Address: Schema.Attribute.Component<'navbar.repeat-text', false>;
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Phone: Schema.Attribute.String;
    SocialMedia: Schema.Attribute.Component<'navbar.social-media', true>;
  };
}

export interface HeroTheme1 extends Struct.ComponentSchema {
  collectionName: 'components_hero_theme1s';
  info: {
    displayName: 'Theme1';
  };
  attributes: {
    HeroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    HeroText: Schema.Attribute.String;
  };
}

export interface MenuMenuTheme1 extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_theme1s';
  info: {
    displayName: 'MenuTheme1';
  };
  attributes: {
    description: Schema.Attribute.Text;
    ListMenu: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface NavbarNavbar extends Struct.ComponentSchema {
  collectionName: 'components_navbar_navbars';
  info: {
    displayName: 'navbar';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    navlinks: Schema.Attribute.Component<'navbar.repeat-text', true>;
    subNavbar: Schema.Attribute.Component<'navbar.repeat-text', true>;
  };
}

export interface NavbarRepeatText extends Struct.ComponentSchema {
  collectionName: 'components_navbar_repeat_texts';
  info: {
    displayName: 'repeatText';
  };
  attributes: {
    label: Schema.Attribute.String;
    navlinks: Schema.Attribute.String;
  };
}

export interface NavbarSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_navbar_social_medias';
  info: {
    displayName: 'SocialMedia';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    keywords: Schema.Attribute.Text;
    MetaDescription: Schema.Attribute.Text;
    MetaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'carousels.slider-theme': CarouselsSliderTheme;
      'contentwith-media.left-theme': ContentwithMediaLeftTheme;
      'footer.default-theme': FooterDefaultTheme;
      'hero.theme1': HeroTheme1;
      'menu.menu-theme1': MenuMenuTheme1;
      'navbar.navbar': NavbarNavbar;
      'navbar.repeat-text': NavbarRepeatText;
      'navbar.social-media': NavbarSocialMedia;
      'seo.seo': SeoSeo;
    }
  }
}
