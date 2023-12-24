import type { Schema, Attribute } from '@strapi/strapi';

export interface AddressTagAddressTag extends Schema.Component {
  collectionName: 'components_address_tag_address_tags';
  info: {
    displayName: 'Address_tag';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface Block2Block2 extends Schema.Component {
  collectionName: 'components_block2_block2s';
  info: {
    displayName: 'Block2';
    description: '';
  };
  attributes: {
    Block2_title: Attribute.String & Attribute.Required;
    Label_my_selected_cause: Attribute.String;
    Label_let_dilmah_pick_cause: Attribute.String;
    Let_dilmah_pick_cause_text: Attribute.RichText;
    Notification_cause_update_text: Attribute.String;
    Block2_text: Attribute.RichText;
    My_selected_cause_text: Attribute.RichText;
  };
}

export interface Block3Block3 extends Schema.Component {
  collectionName: 'components_block3_block3s';
  info: {
    displayName: 'Block3';
    description: '';
  };
  attributes: {
    Block3_title: Attribute.String & Attribute.Required;
    Empty_order_blob: Attribute.Media & Attribute.Required;
    Empty_order_text: Attribute.RichText & Attribute.Required;
    Empty_order_button_text: Attribute.String;
    Empty_order_button_link: Attribute.String;
  };
}

export interface Block4ItemsBlock4Items extends Schema.Component {
  collectionName: 'components_block4_items_block4_items';
  info: {
    displayName: 'Block4_items';
    description: '';
  };
  attributes: {
    Block4_Value: Attribute.String & Attribute.Required;
    Block4_description: Attribute.String & Attribute.Required;
    Block4_icon: Attribute.Media & Attribute.Required;
  };
}

export interface BreadcrumbStepsBreadcrumbSteps extends Schema.Component {
  collectionName: 'components_breadcrumb_steps_breadcrumb_steps';
  info: {
    displayName: 'Breadcrumb-steps';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface BreadcrumbBreadcrumb extends Schema.Component {
  collectionName: 'components_breadcrumb_breadcrumbs';
  info: {
    displayName: 'Breadcrumb';
    description: '';
  };
  attributes: {
    Steps: Attribute.Component<'breadcrumb-steps.breadcrumb-steps', true>;
  };
}

export interface CategoryCategory extends Schema.Component {
  collectionName: 'components_category_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    Name: Attribute.String;
  };
}

export interface FooterMenuFooterMenu extends Schema.Component {
  collectionName: 'components_footer_menu_footer_menus';
  info: {
    displayName: 'Footer_menu';
    description: '';
  };
  attributes: {
    Heading_name: Attribute.String;
    Menu: Attribute.Component<'footer-menu.menu', true>;
  };
}

export interface FooterMenuMenu extends Schema.Component {
  collectionName: 'components_footer_menu_menus';
  info: {
    displayName: 'Menu';
    description: '';
  };
  attributes: {
    Visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    Title: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
    Icon: Attribute.Media;
  };
}

export interface FormForm extends Schema.Component {
  collectionName: 'components_form_forms';
  info: {
    displayName: 'Form';
    description: '';
  };
  attributes: {
    First_name: Attribute.Boolean;
    Last_name: Attribute.Boolean;
    Email: Attribute.Boolean;
    Phone: Attribute.Boolean;
    Submit_button_text: Attribute.String;
    Blob: Attribute.Media;
    Email_or_phone: Attribute.Boolean;
  };
}

export interface ImpactItemsImpact extends Schema.Component {
  collectionName: 'components_impact_items_impacts';
  info: {
    displayName: 'Impact';
    description: '';
  };
  attributes: {
    Impact_item_title: Attribute.String & Attribute.Required;
    Impact_item_text: Attribute.RichText;
    Impact_item_icon: Attribute.Media & Attribute.Required;
  };
}

export interface InformationElephantPath extends Schema.Component {
  collectionName: 'components_information_elephant_paths';
  info: {
    displayName: 'elephant path';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Intro_text: Attribute.RichText;
    Blob: Attribute.Media & Attribute.Required;
    Blog: Attribute.Relation<
      'information.elephant-path',
      'oneToOne',
      'api::blog.blog'
    >;
    Link: Attribute.String;
  };
}

export interface KindnessCauseKindnessCause extends Schema.Component {
  collectionName: 'components_kindness_cause_kindness_causes';
  info: {
    displayName: 'Kindness Cause';
    description: '';
  };
  attributes: {
    cause: Attribute.String;
    description: Attribute.RichText;
    featured_blob: Attribute.Media;
  };
}

export interface KindnessImpactImpact extends Schema.Component {
  collectionName: 'components_kindness_impact_impacts';
  info: {
    displayName: 'Impact';
    description: '';
  };
  attributes: {
    Value: Attribute.String & Attribute.Required;
    Description: Attribute.RichText;
    Icon: Attribute.Media & Attribute.Required;
    Value_unit: Attribute.String;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    Link: Attribute.String;
  };
}

export interface MenuFooterMenu extends Schema.Component {
  collectionName: 'components_menu_footer_menus';
  info: {
    displayName: 'Footer_menu';
  };
  attributes: {
    Heading_name: Attribute.String;
  };
}

export interface MenuNav extends Schema.Component {
  collectionName: 'components_menu_navs';
  info: {
    displayName: 'menu';
    description: '';
  };
  attributes: {
    Visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    Title: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
    Sub_menu: Attribute.Component<'nav-menu.sub-menu', true>;
  };
}

export interface MethodMethodSteps extends Schema.Component {
  collectionName: 'components_method_method_steps';
  info: {
    displayName: 'Method steps';
    icon: 'list';
  };
  attributes: {
    Step_title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 20;
        maxLength: 60;
      }>;
    Step_text: Attribute.RichText & Attribute.Required;
    Step_blob: Attribute.Media;
  };
}

export interface MethodMethod extends Schema.Component {
  collectionName: 'components_method_methods';
  info: {
    displayName: 'Method';
    icon: 'angle-right';
    description: '';
  };
  attributes: {
    Method_title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 20;
        maxLength: 60;
      }>;
    Steps: Attribute.Component<'method.method-steps', true> &
      Attribute.Required;
  };
}

export interface NavMenuSubMenu extends Schema.Component {
  collectionName: 'components_nav_menu_sub_menus';
  info: {
    displayName: 'Sub_menu';
  };
  attributes: {
    Visibility: Attribute.Boolean & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface OptionalDataOptionalData extends Schema.Component {
  collectionName: 'components_optional_data_optional_data';
  info: {
    displayName: 'optional-data';
    description: '';
  };
  attributes: {
    Street_address: Attribute.String;
    Locality: Attribute.String;
    Region: Attribute.String;
    Postal_code: Attribute.BigInteger;
    Country: Attribute.String;
    Telephone: Attribute.String;
    Geo_latitude: Attribute.String;
    Geo_longitude: Attribute.String;
  };
}

export interface PersonalInformationPersonalInformation
  extends Schema.Component {
  collectionName: 'components_personal_information_personal_informations';
  info: {
    displayName: 'Personal_information';
    description: '';
  };
  attributes: {
    Social_media: Attribute.Component<'social-media.social-media'>;
    Social_media_title: Attribute.String;
    Label_phone: Attribute.String & Attribute.Required;
    Label_email: Attribute.String & Attribute.Required;
    Label_delivery_address: Attribute.String & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
    Label_billing_address: Attribute.String & Attribute.Required;
    Label_username: Attribute.String & Attribute.Required;
    user_info_update_success_notification: Attribute.String;
    display_name_update_success_notification_label: Attribute.String;
    email_update_success_notification_label: Attribute.String;
    phone_number_update_success_notification_label: Attribute.String;
  };
}

export interface PriceBreakdownPriceBreakdown extends Schema.Component {
  collectionName: 'components_price_breakdown_price_breakdowns';
  info: {
    displayName: 'Price_breakdown';
    description: '';
  };
  attributes: {
    Item_name: Attribute.String & Attribute.Required;
    Spent_amount: Attribute.Float & Attribute.Required;
    Currency: Attribute.Enumeration<
      [
        'ADP',
        'AED',
        'AFA',
        'AFN',
        'ALK',
        'ALL',
        'AMD',
        'ANG',
        'AOA',
        'AOK',
        'AON',
        'AOR',
        'ARA',
        'ARP',
        'ARS',
        'ARY',
        'ATS',
        'AUD',
        'AWG',
        'AYM',
        'AZM',
        'AZN',
        'BAD',
        'BAM',
        'BBD',
        'BDT',
        'BEC',
        'BEF',
        'BEL',
        'BGJ',
        'BGK',
        'BGL',
        'BGN',
        'BHD',
        'BIF',
        'BMD',
        'BND',
        'BOB',
        'BOP',
        'BOV',
        'BRB',
        'BRC',
        'BRE',
        'BRL',
        'BRN',
        'BRR',
        'BSD',
        'BTN',
        'BUK',
        'BWP',
        'BYB',
        'BYN',
        'BYR',
        'BZD',
        'CAD',
        'CDF',
        'CHC',
        'CHE',
        'CHF',
        'CHW',
        'CLF',
        'CLP',
        'CNY',
        'COP',
        'COU',
        'CRC',
        'CSD',
        'CSJ',
        'CSK',
        'CUC',
        'CUP',
        'CVE',
        'CYP',
        'CZK',
        'DDM',
        'DEM',
        'DJF',
        'DKK',
        'DOP',
        'DZD',
        'ECS',
        'ECV',
        'EEK',
        'EGP',
        'ERN',
        'ESA',
        'ESB',
        'ESP',
        'ETB',
        'EUR',
        'FIM',
        'FJD',
        'FKP',
        'FRF',
        'GBP',
        'GEK',
        'GEL',
        'GHC',
        'GHP',
        'GHS',
        'GIP',
        'GMD',
        'GNE',
        'GNF',
        'GNS',
        'GQE',
        'GRD',
        'GTQ',
        'GWE',
        'GWP',
        'GYD',
        'HKD',
        'HNL',
        'HRD',
        'HRK',
        'HTG',
        'HUF',
        'IDR',
        'IEP',
        'ILP',
        'ILR',
        'ILS',
        'INR',
        'IQD',
        'IRR',
        'ISJ',
        'ISK',
        'ITL',
        'JMD',
        'JOD',
        'JPY',
        'KES',
        'KGS',
        'KHR',
        'KMF',
        'KPW',
        'KRW',
        'KWD',
        'KYD',
        'KZT',
        'LAJ',
        'LAK',
        'LBP',
        'LKR',
        'LRD',
        'LSL',
        'LSM',
        'LTL',
        'LTT',
        'LUC',
        'LUF',
        'LUL',
        'LVL',
        'LVR',
        'LYD',
        'MAD',
        'MDL',
        'MGA',
        'MGF',
        'MKD',
        'MLF',
        'MMK',
        'MNT',
        'MOP',
        'MRO',
        'MRU',
        'MTL',
        'MTP',
        'MUR',
        'MVQ',
        'MVR',
        'MWK',
        'MXN',
        'MXP',
        'MXV',
        'MYR',
        'MZE',
        'MZM',
        'MZN',
        'NAD',
        'NGN',
        'NIC',
        'NIO',
        'NLG',
        'NOK',
        'NPR',
        'NZD',
        'OMR',
        'PAB',
        'PEH',
        'PEI',
        'PEN',
        'PES',
        'PGK',
        'PHP',
        'PKR',
        'PLN',
        'PLZ',
        'PTE',
        'PYG',
        'QAR',
        'RHD',
        'ROK',
        'ROL',
        'RON',
        'RSD',
        'RUB',
        'RUR',
        'RWF',
        'SAR',
        'SBD',
        'SCR',
        'SDD',
        'SDG',
        'SDP',
        'SEK',
        'SGD',
        'SHP',
        'SIT',
        'SKK',
        'SLL',
        'SOS',
        'SRD',
        'SRG',
        'SSP',
        'STD',
        'STN',
        'SUR',
        'SVC',
        'SYP',
        'SZL',
        'THB',
        'TJR',
        'TJS',
        'TMM',
        'TMT',
        'TND',
        'TOP',
        'TPE',
        'TRL',
        'TRY',
        'TTD',
        'TWD',
        'TZS',
        'UAH',
        'UAK',
        'UGS',
        'UGW',
        'UGX',
        'USD',
        'USN',
        'USS',
        'UYI',
        'UYN',
        'UYP',
        'UYU',
        'UYW',
        'UZS',
        'VEB',
        'VEF',
        'VES',
        'VNC',
        'VND',
        'VUV',
        'WST',
        'XAF',
        'XAG',
        'XAU',
        'XBA',
        'XBB',
        'XBC',
        'XBD',
        'XCD',
        'XDR',
        'XEU',
        'XFO',
        'XFU',
        'XOF',
        'XPD',
        'XPF',
        'XPT',
        'XRE',
        'XSU',
        'XTS',
        'XUA',
        'XXX',
        'YDD',
        'YER',
        'YUD',
        'YUM',
        'YUN',
        'ZAL',
        'ZAR',
        'ZMK',
        'ZMW',
        'ZRN',
        'ZRZ',
        'ZWC',
        'ZWD',
        'ZWL',
        'ZWN',
        'ZWR'
      ]
    > &
      Attribute.DefaultTo<'EUR'>;
    Item_color_code: Attribute.String & Attribute.Required;
  };
}

export interface ProductProduct extends Schema.Component {
  collectionName: 'components_product_products';
  info: {
    displayName: 'Product';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    products: Attribute.Relation<
      'product.product',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface ProfileMenuMenu extends Schema.Component {
  collectionName: 'components_profile_menu_menus';
  info: {
    displayName: 'Menu';
    description: '';
  };
  attributes: {
    Menu: Attribute.Component<'profile-menu.profile-menu', true>;
    text_log_out: Attribute.String & Attribute.Required;
    Log_out_icon: Attribute.Media;
  };
}

export interface ProfileMenuProfileMenu extends Schema.Component {
  collectionName: 'components_profile_menu_profile_menus';
  info: {
    displayName: 'Profile_menu';
    description: '';
  };
  attributes: {
    Visibility: Attribute.Boolean;
    Title: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
    Icon: Attribute.Media;
  };
}

export interface RecipeNutritionNutrition extends Schema.Component {
  collectionName: 'components_recipe_nutrition_nutritions';
  info: {
    displayName: 'nutrition';
    icon: 'check';
    description: '';
  };
  attributes: {
    Nutrition_name: Attribute.String;
    Nutrition_measurements_unit: Attribute.Enumeration<
      ['milligram', 'gram', 'kilogram']
    >;
    Nutrition_amount: Attribute.Integer;
  };
}

export interface RecipeCookingPartIngredients extends Schema.Component {
  collectionName: 'components_cooking_cooking_part_ingredients';
  info: {
    displayName: 'instructions_part_ingredients';
    icon: 'filter';
    description: '';
  };
  attributes: {
    Instructions_part_ingredient_name: Attribute.String & Attribute.Required;
    Instructions_part_ingredient_amount: Attribute.Decimal & Attribute.Required;
    Instructions_part_ingredient_measurements_unit: Attribute.Enumeration<
      ['cup', 'gr', 'ml', 'kg', 'l', 'spoon', 'tablespoon', 'teaspoon']
    >;
  };
}

export interface RecipeCookingPartSteps extends Schema.Component {
  collectionName: 'components_cooking_cooking_part_steps';
  info: {
    displayName: 'instructions_part_steps';
    icon: 'arrow-right';
    description: '';
  };
  attributes: {
    Instructions_part_steps_text: Attribute.Text & Attribute.Required;
    Instructions_part_steps_blob: Attribute.Media;
  };
}

export interface RecipeCookingPart extends Schema.Component {
  collectionName: 'components_cooking_cooking_parts';
  info: {
    displayName: 'instructions_part';
    icon: 'clipboard-list';
    description: '';
  };
  attributes: {
    Instructions_part_name: Attribute.String & Attribute.Required;
    Instructions_part_steps: Attribute.Component<
      'recipe.cooking-part-steps',
      true
    > &
      Attribute.Required;
    Instructions_part_step_tip: Attribute.Text;
    Instructions_part_ingredients: Attribute.Component<
      'recipe.cooking-part-ingredients',
      true
    > &
      Attribute.Required;
  };
}

export interface SearchEngineMeta extends Schema.Component {
  collectionName: 'components_search_engine_metas';
  info: {
    displayName: 'Meta';
    icon: 'search';
    description: '';
  };
  attributes: {
    HTML_Title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 30;
        maxLength: 60;
      }>;
    Meta_description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 70;
        maxLength: 120;
      }>;
    noindex: Attribute.Boolean & Attribute.DefaultTo<false>;
    nofollow: Attribute.Boolean & Attribute.DefaultTo<false>;
    URL_slug: Attribute.String & Attribute.Required;
    Canonical_link: Attribute.String;
  };
}

export interface SocialMediaSocialMedia extends Schema.Component {
  collectionName: 'components_social_media_social_medias';
  info: {
    displayName: 'Social_media';
    description: '';
  };
  attributes: {
    Facebook: Attribute.Boolean;
    Google: Attribute.Boolean;
    Twitter: Attribute.Boolean;
  };
}

export interface SupportSupport extends Schema.Component {
  collectionName: 'components_support_supports';
  info: {
    displayName: 'Support';
    description: '';
  };
  attributes: {
    Button_text: Attribute.String & Attribute.Required;
    Button_link: Attribute.String;
    Button_icon: Attribute.Media & Attribute.Required;
  };
}

export interface TransparencyItemsTransparency extends Schema.Component {
  collectionName: 'components_transparency_items_transparencies';
  info: {
    displayName: 'Transparency';
    description: '';
  };
  attributes: {
    Transparency_item_title: Attribute.String & Attribute.Required;
    Transparency_item_text: Attribute.RichText;
    Transparency_item_icon: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address-tag.address-tag': AddressTagAddressTag;
      'block2.block2': Block2Block2;
      'block3.block3': Block3Block3;
      'block4-items.block4-items': Block4ItemsBlock4Items;
      'breadcrumb-steps.breadcrumb-steps': BreadcrumbStepsBreadcrumbSteps;
      'breadcrumb.breadcrumb': BreadcrumbBreadcrumb;
      'category.category': CategoryCategory;
      'footer-menu.footer-menu': FooterMenuFooterMenu;
      'footer-menu.menu': FooterMenuMenu;
      'form.form': FormForm;
      'impact-items.impact': ImpactItemsImpact;
      'information.elephant-path': InformationElephantPath;
      'kindness-cause.kindness-cause': KindnessCauseKindnessCause;
      'kindness-impact.impact': KindnessImpactImpact;
      'link.link': LinkLink;
      'menu.footer-menu': MenuFooterMenu;
      'menu.nav': MenuNav;
      'method.method-steps': MethodMethodSteps;
      'method.method': MethodMethod;
      'nav-menu.sub-menu': NavMenuSubMenu;
      'optional-data.optional-data': OptionalDataOptionalData;
      'personal-information.personal-information': PersonalInformationPersonalInformation;
      'price-breakdown.price-breakdown': PriceBreakdownPriceBreakdown;
      'product.product': ProductProduct;
      'profile-menu.menu': ProfileMenuMenu;
      'profile-menu.profile-menu': ProfileMenuProfileMenu;
      'recipe-nutrition.nutrition': RecipeNutritionNutrition;
      'recipe.cooking-part-ingredients': RecipeCookingPartIngredients;
      'recipe.cooking-part-steps': RecipeCookingPartSteps;
      'recipe.cooking-part': RecipeCookingPart;
      'search-engine.meta': SearchEngineMeta;
      'social-media.social-media': SocialMediaSocialMedia;
      'support.support': SupportSupport;
      'transparency-items.transparency': TransparencyItemsTransparency;
    }
  }
}
