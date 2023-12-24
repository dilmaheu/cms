import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAriaLabelRecurringElementAriaLabelRecurringElement
  extends Schema.SingleType {
  collectionName: 'aria_label_recurring_elements';
  info: {
    singularName: 'aria-label-recurring-element';
    pluralName: 'aria-label-recurring-elements';
    displayName: 'Aria label recurring  element';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Intro_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Latest_post_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Wrote_by_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Post_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    All_posts_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Items_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Kindness_Item_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Kindness_Items_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Post_intro_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Post_details_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Recipe_timing_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Recipe_step_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Howto_method_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Estate_location_map_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_quantity_minus_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_quantity_plus_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_quantity_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_related_kindness_info_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Crowdfunding_plans_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Crowdfunding_plan_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Crowdfunding_total_raised_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Navbar_language_selectors_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Navbar_open_cart_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Navbar_open_sidebar_menu_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Navbar_close_sidebar_menu_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_post_of_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_all_teas_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_tea_item_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Navbar_open_localization_menu_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Navbar_close_localization_menu_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Kindness_impact_items: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Kindness_items_of_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Highlighted_post_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Navbar_region_selectors_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Navbar_open_sidebar_sub_menu_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Navbar_close_sidebar_sub_menu_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::aria-label-recurring-element.aria-label-recurring-element',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::aria-label-recurring-element.aria-label-recurring-element',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::aria-label-recurring-element.aria-label-recurring-element',
      'oneToMany',
      'api::aria-label-recurring-element.aria-label-recurring-element'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBasicPageBasicPage extends Schema.CollectionType {
  collectionName: 'basic_pages';
  info: {
    singularName: 'basic-page';
    pluralName: 'basic-pages';
    displayName: 'Basic page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 400;
      }>;
    Heading_block: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_blob: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::basic-page.basic-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::basic-page.basic-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::basic-page.basic-page',
      'oneToMany',
      'api::basic-page.basic-page'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 20;
        maxLength: 60;
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 200;
        maxLength: 250;
      }>;
    Intro_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    authors: Attribute.Relation<
      'api::blog.blog',
      'manyToMany',
      'api::person.person'
    >;
    Block_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 3000;
      }>;
    blogs: Attribute.Relation<'api::blog.blog', 'oneToMany', 'api::blog.blog'>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::blog.blog',
      'oneToMany',
      'api::blog.blog'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBrandBrand extends Schema.CollectionType {
  collectionName: 'brands';
  info: {
    singularName: 'brand';
    pluralName: 'brands';
    displayName: 'Brand';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Brand_name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    products: Attribute.Relation<
      'api::brand.brand',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::brand.brand',
      'oneToMany',
      'api::brand.brand'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCartCart extends Schema.SingleType {
  collectionName: 'carts';
  info: {
    singularName: 'cart';
    pluralName: 'carts';
    displayName: 'Cart';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    text_cart: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_product: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_go_to_checkout: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_remove: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::cart.cart', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::cart.cart', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::cart.cart',
      'oneToMany',
      'api::cart.cart'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCatalogCatalog extends Schema.SingleType {
  collectionName: 'catalogs';
  info: {
    singularName: 'catalog';
    pluralName: 'catalogs';
    displayName: 'Catalog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Products: Attribute.Component<'product.product', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::catalog.catalog',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::catalog.catalog',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCheckoutFlowCheckoutFlow extends Schema.SingleType {
  collectionName: 'checkout_flows';
  info: {
    singularName: 'checkout-flow';
    pluralName: 'checkout-flows';
    displayName: 'Checkout Flow';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    steps: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    shortened_steps: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::checkout-flow.checkout-flow',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::checkout-flow.checkout-flow',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::checkout-flow.checkout-flow',
      'oneToMany',
      'api::checkout-flow.checkout-flow'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCheckoutInformationCheckoutInformation
  extends Schema.SingleType {
  collectionName: 'checkout_informations';
  info: {
    singularName: 'checkout-information';
    pluralName: 'checkout-informations';
    displayName: 'Checkout Information';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    text_contact_info: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_shipping_address: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_email_address: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    email_address_placeholder: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_first_name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    first_name_placeholder: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_last_name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    last_name_placeholder: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_country: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    country_placeholder: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_city: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    city_placeholder: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_street: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    street_placeholder: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_postal_code: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    postal_code_placeholder: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_continue_to_shipping: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_return_to_cart: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    checkout_step_order: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Aria_label_form_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    countries: Attribute.Relation<
      'api::checkout-information.checkout-information',
      'oneToMany',
      'api::country.country'
    >;
    text_customer: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Guest_intro_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Sign_in_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::checkout-information.checkout-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::checkout-information.checkout-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::checkout-information.checkout-information',
      'oneToMany',
      'api::checkout-information.checkout-information'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCheckoutKindnessCheckoutKindness extends Schema.SingleType {
  collectionName: 'checkout_kindnesses';
  info: {
    singularName: 'checkout-kindness';
    pluralName: 'checkout-kindnesses';
    displayName: 'Checkout Kindness';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    checkout_step_order: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    kindness_causes: Attribute.Relation<
      'api::checkout-kindness.checkout-kindness',
      'oneToMany',
      'api::kindness-cause.kindness-cause'
    >;
    text_submit_kindness_cause: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::checkout-kindness.checkout-kindness',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::checkout-kindness.checkout-kindness',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::checkout-kindness.checkout-kindness',
      'oneToMany',
      'api::checkout-kindness.checkout-kindness'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCheckoutRecurringElementCheckoutRecurringElement
  extends Schema.SingleType {
  collectionName: 'checkout_recurring_elements';
  info: {
    singularName: 'checkout-recurring-element';
    pluralName: 'checkout-recurring-elements';
    displayName: 'Checkout Recurring Elements';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    text_add: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_add_to_cart: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_add_to_cart_for: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_size: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_quantity: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_cart: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_order_summary: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_subtotal: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_shipping: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_tax: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_total: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_shipping_calculated_at_checkout: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_proceed_to_checkout: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_continue_to_payment: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_return_to_information: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_edit_cart: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_continue_shopping: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_empty_cart: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_cart_focus_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_cart_close_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_cart_items_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_remove_cart_item_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_cart_item_quantity_minus_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_cart_item_quantity_plus_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_cart_item_quantity_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_kindness_cause_items_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_variant: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::checkout-recurring-element.checkout-recurring-element',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::checkout-recurring-element.checkout-recurring-element',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::checkout-recurring-element.checkout-recurring-element',
      'oneToMany',
      'api::checkout-recurring-element.checkout-recurring-element'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCheckoutShippingCheckoutShipping extends Schema.SingleType {
  collectionName: 'checkout_shippings';
  info: {
    singularName: 'checkout-shipping';
    pluralName: 'checkout-shippings';
    displayName: 'Checkout Shipping';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    text_contact: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_delivery_address: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_change: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_shipping_method: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_continue_to_payment: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_return_to_information: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    checkout_step_order: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Aria_label_kindness_delivery_address_form_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_delivery_address_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_email_address_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_change_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_order_summery_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    shipping_methods: Attribute.Relation<
      'api::checkout-shipping.checkout-shipping',
      'oneToMany',
      'api::shipping-method.shipping-method'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::checkout-shipping.checkout-shipping',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::checkout-shipping.checkout-shipping',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::checkout-shipping.checkout-shipping',
      'oneToMany',
      'api::checkout-shipping.checkout-shipping'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCheckoutSuccessCheckoutSuccess extends Schema.SingleType {
  collectionName: 'checkout_successes';
  info: {
    singularName: 'checkout-success';
    pluralName: 'checkout-successes';
    displayName: 'Checkout Success';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::checkout-success.checkout-success',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::checkout-success.checkout-success',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::checkout-success.checkout-success',
      'oneToMany',
      'api::checkout-success.checkout-success'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCountryCountry extends Schema.CollectionType {
  collectionName: 'countries';
  info: {
    singularName: 'country';
    pluralName: 'countries';
    displayName: 'Country';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    code: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::country.country'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCrowdfundingEmailCrowdfundingEmail
  extends Schema.SingleType {
  collectionName: 'crowdfunding_emails';
  info: {
    singularName: 'crowdfunding-email';
    pluralName: 'crowdfunding-emails';
    displayName: 'Crowdfunding email';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    From_name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    From_email: Attribute.Email &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Subject: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Preview_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Preheader_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Body: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Overview: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Total: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Invoice: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    VAT: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::crowdfunding-email.crowdfunding-email',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::crowdfunding-email.crowdfunding-email',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::crowdfunding-email.crowdfunding-email',
      'oneToMany',
      'api::crowdfunding-email.crowdfunding-email'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCrowdfundingFormCrowdfundingForm extends Schema.SingleType {
  collectionName: 'crowdfunding_forms';
  info: {
    singularName: 'crowdfunding-form';
    pluralName: 'crowdfunding-forms';
    displayName: 'Crowdfunding form';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::crowdfunding-form.crowdfunding-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::crowdfunding-form.crowdfunding-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::crowdfunding-form.crowdfunding-form',
      'oneToMany',
      'api::crowdfunding-form.crowdfunding-form'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCrowdfundingHomeCrowdfundingHome extends Schema.SingleType {
  collectionName: 'crowdfunding_homes';
  info: {
    singularName: 'crowdfunding-home';
    pluralName: 'crowdfunding-homes';
    displayName: 'Crowdfunding home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Heading_plans: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Heading_block: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Heading_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Heading_button_link: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Heading_goal: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Heading_supporters: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::crowdfunding-home.crowdfunding-home',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::crowdfunding-home.crowdfunding-home',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::crowdfunding-home.crowdfunding-home',
      'oneToMany',
      'api::crowdfunding-home.crowdfunding-home'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCrowdfundingPaymentConfirmationCrowdfundingPaymentConfirmation
  extends Schema.SingleType {
  collectionName: 'crowdfunding_payment_confirmations';
  info: {
    singularName: 'crowdfunding-payment-confirmation';
    pluralName: 'crowdfunding-payment-confirmations';
    displayName: 'Crowdfunding payment confirmation';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Heading_block: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::crowdfunding-payment-confirmation.crowdfunding-payment-confirmation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::crowdfunding-payment-confirmation.crowdfunding-payment-confirmation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::crowdfunding-payment-confirmation.crowdfunding-payment-confirmation',
      'oneToMany',
      'api::crowdfunding-payment-confirmation.crowdfunding-payment-confirmation'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCrowdfundingPlanCrowdfundingPlan
  extends Schema.CollectionType {
  collectionName: 'crowdfunding_plans';
  info: {
    singularName: 'crowdfunding-plan';
    pluralName: 'crowdfunding-plans';
    displayName: 'Crowdfunding plan';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Title_icon: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Price_EUR_excl_VAT: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Intro_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    List: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Perk: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::crowdfunding-plan.crowdfunding-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::crowdfunding-plan.crowdfunding-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::crowdfunding-plan.crowdfunding-plan',
      'oneToMany',
      'api::crowdfunding-plan.crowdfunding-plan'
    >;
    locale: Attribute.String;
  };
}

export interface ApiEMailEMail extends Schema.CollectionType {
  collectionName: 'e_mails';
  info: {
    singularName: 'e-mail';
    pluralName: 'e-mails';
    displayName: 'Email';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Type: Attribute.Enumeration<
      [
        'crowdfunding_payment_confirmation_email',
        'ecommerce_payment_confirmation_email',
        'magic_link_email'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Subject: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Preview_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 90;
      }>;
    Body: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Overview_Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Billing_Details_Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Preheader_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    VAT: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::e-mail.e-mail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::e-mail.e-mail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::e-mail.e-mail',
      'oneToMany',
      'api::e-mail.e-mail'
    >;
    locale: Attribute.String;
  };
}

export interface ApiEcommercePaymentConfirmationMailEcommercePaymentConfirmationMail
  extends Schema.SingleType {
  collectionName: 'ecommerce_payment_confirmation_mails';
  info: {
    singularName: 'ecommerce-payment-confirmation-mail';
    pluralName: 'ecommerce-payment-confirmation-mails';
    displayName: 'Ecommerce Payment Confirmation Mail';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    From_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    From_email: Attribute.Email &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Subject: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Preview_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Preheader_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Body: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Overview: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Total: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Invoice: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    VAT: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Shipping: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ecommerce-payment-confirmation-mail.ecommerce-payment-confirmation-mail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ecommerce-payment-confirmation-mail.ecommerce-payment-confirmation-mail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::ecommerce-payment-confirmation-mail.ecommerce-payment-confirmation-mail',
      'oneToMany',
      'api::ecommerce-payment-confirmation-mail.ecommerce-payment-confirmation-mail'
    >;
    locale: Attribute.String;
  };
}

export interface ApiEstateEstate extends Schema.CollectionType {
  collectionName: 'estates';
  info: {
    singularName: 'estate';
    pluralName: 'estates';
    displayName: 'Estate';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Estate_name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 200;
        maxLength: 250;
      }>;
    Intro_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Location: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Location_link: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blogs: Attribute.Relation<
      'api::estate.estate',
      'oneToMany',
      'api::blog.blog'
    >;
    Optional_data: Attribute.Component<'optional-data.optional-data'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::estate.estate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::estate.estate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::estate.estate',
      'oneToMany',
      'api::estate.estate'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHomeBlogHomeBlog extends Schema.SingleType {
  collectionName: 'home_blogs';
  info: {
    singularName: 'home-blog';
    pluralName: 'home-blogs';
    displayName: 'Home blog';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-blog.home-blog',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-blog.home-blog',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::home-blog.home-blog',
      'oneToMany',
      'api::home-blog.home-blog'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHomeElephantPathHomeElephantPath extends Schema.SingleType {
  collectionName: 'home_elephant_paths';
  info: {
    singularName: 'home-elephant-path';
    pluralName: 'home-elephant-paths';
    displayName: 'Home kindness';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Description: Attribute.Component<'information.elephant-path', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_button_link: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_heading: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-elephant-path.home-elephant-path',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-elephant-path.home-elephant-path',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::home-elephant-path.home-elephant-path',
      'oneToMany',
      'api::home-elephant-path.home-elephant-path'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHomeEstateHomeEstate extends Schema.SingleType {
  collectionName: 'home_estates';
  info: {
    singularName: 'home-estate';
    pluralName: 'home-estates';
    displayName: 'Home estate';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Heading_block: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block3: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block4_heading: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blogs: Attribute.Relation<
      'api::home-estate.home-estate',
      'oneToMany',
      'api::blog.blog'
    >;
    Heading_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Heading_button_link: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_all_estates_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block3_aria_label_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_aria_label_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Impacts: Attribute.Component<'kindness-impact.impact', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-estate.home-estate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-estate.home-estate',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::home-estate.home-estate',
      'oneToMany',
      'api::home-estate.home-estate'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHomeHowToHomeHowTo extends Schema.SingleType {
  collectionName: 'home_how_tos';
  info: {
    singularName: 'home-how-to';
    pluralName: 'home-how-tos';
    displayName: 'Home how to';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-how-to.home-how-to',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-how-to.home-how-to',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::home-how-to.home-how-to',
      'oneToMany',
      'api::home-how-to.home-how-to'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHomeProductHomeProduct extends Schema.SingleType {
  collectionName: 'home_products';
  info: {
    singularName: 'home-product';
    pluralName: 'home-products';
    displayName: 'Home product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Heading_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Heading_button_link: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blogs: Attribute.Relation<
      'api::home-product.home-product',
      'oneToMany',
      'api::blog.blog'
    >;
    Block2_title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_button_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_button_link: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_all_teas_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Aria_label_tea_item_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Category_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block3_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-product.home-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-product.home-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::home-product.home-product',
      'oneToMany',
      'api::home-product.home-product'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHomeRecipeHomeRecipe extends Schema.SingleType {
  collectionName: 'home_recipes';
  info: {
    singularName: 'home-recipe';
    pluralName: 'home-recipes';
    displayName: 'Home recipe';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-recipe.home-recipe',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-recipe.home-recipe',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::home-recipe.home-recipe',
      'oneToMany',
      'api::home-recipe.home-recipe'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages';
  info: {
    singularName: 'homepage';
    pluralName: 'homepages';
    displayName: 'Homepage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block3_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Estates: Attribute.Relation<
      'api::homepage.homepage',
      'oneToMany',
      'api::estate.estate'
    >;
    Block4_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block5_title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block5_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block6_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Impacts: Attribute.Component<'kindness-impact.impact', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block3_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block4_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block5_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block6_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Intro_blob_sm: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Intro_video: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Block4_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block4_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block4_button_link: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block4_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Block6_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block6_button_link: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block7_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block7_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block7_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block7_button_link: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block8_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block8_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block7_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block7_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Block6_products: Attribute.Relation<
      'api::homepage.homepage',
      'oneToMany',
      'api::product.product'
    >;
    Block_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_button_link: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::homepage.homepage',
      'oneToMany',
      'api::homepage.homepage'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHowToHowTo extends Schema.CollectionType {
  collectionName: 'how_tos';
  info: {
    singularName: 'how-to';
    pluralName: 'how-tos';
    displayName: 'How To';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 20;
        maxLength: 60;
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 200;
        maxLength: 250;
      }>;
    Intro_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    authors: Attribute.Relation<
      'api::how-to.how-to',
      'manyToMany',
      'api::person.person'
    >;
    blogs: Attribute.Relation<
      'api::how-to.how-to',
      'oneToMany',
      'api::blog.blog'
    >;
    Method: Attribute.Component<'method.method', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::how-to.how-to',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::how-to.how-to',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::how-to.how-to',
      'oneToMany',
      'api::how-to.how-to'
    >;
    locale: Attribute.String;
  };
}

export interface ApiI18NI18N extends Schema.CollectionType {
  collectionName: 'i18ns';
  info: {
    singularName: 'i18n';
    pluralName: 'i18ns';
    displayName: 'i18n';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 2;
        maxLength: 3;
      }>;
    language: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::i18n.i18n', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::i18n.i18n', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::i18n.i18n',
      'oneToMany',
      'api::i18n.i18n'
    >;
    locale: Attribute.String;
  };
}

export interface ApiKindnessCauseKindnessCause extends Schema.CollectionType {
  collectionName: 'kindness_causes';
  info: {
    singularName: 'kindness-cause';
    pluralName: 'kindness-causes';
    displayName: 'Kindness Cause';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    cause: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    featured_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kindness-cause.kindness-cause',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::kindness-cause.kindness-cause',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::kindness-cause.kindness-cause',
      'oneToMany',
      'api::kindness-cause.kindness-cause'
    >;
    locale: Attribute.String;
  };
}

export interface ApiNotificationNotification extends Schema.CollectionType {
  collectionName: 'notifications';
  info: {
    singularName: 'notification';
    pluralName: 'notifications';
    displayName: 'Notification';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Type: Attribute.Enumeration<
      ['Error', 'Warning', 'Info', 'Success', 'Default']
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<'Default'>;
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Closing_Enabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    top: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::notification.notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::notification.notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::notification.notification',
      'oneToMany',
      'api::notification.notification'
    >;
    locale: Attribute.String;
  };
}

export interface ApiOrganizationOrganization extends Schema.CollectionType {
  collectionName: 'organizations';
  info: {
    singularName: 'organization';
    pluralName: 'organizations';
    displayName: 'Organization';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    email: Attribute.Email &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organization.organization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organization.organization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::organization.organization',
      'oneToMany',
      'api::organization.organization'
    >;
    locale: Attribute.String;
  };
}

export interface ApiPaymentMethodPaymentMethod extends Schema.CollectionType {
  collectionName: 'payment_methods';
  info: {
    singularName: 'payment-method';
    pluralName: 'payment-methods';
    displayName: 'Payment Method';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    method: Attribute.Enumeration<
      [
        'card',
        'acss_debit',
        'affirm',
        'afterpay_clearpay',
        'alipay',
        'au_becs_debit',
        'bacs_debit',
        'bancontact',
        'blik',
        'boleto',
        'cashapp',
        'customer_balance',
        'eps',
        'fpx',
        'giropay',
        'grabpay',
        'ideal',
        'klarna',
        'konbini',
        'link',
        'oxxo',
        'p24',
        'paynow',
        'paypal',
        'pix',
        'promptpay',
        'sepa_debit',
        'sofort',
        'us_bank_account',
        'wechat_pay',
        'zip'
      ]
    > &
      Attribute.Required;
    supported_countries: Attribute.Relation<
      'api::payment-method.payment-method',
      'oneToMany',
      'api::country.country'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payment-method.payment-method',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::payment-method.payment-method',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPersonPerson extends Schema.CollectionType {
  collectionName: 'people';
  info: {
    singularName: 'person';
    pluralName: 'people';
    displayName: 'Person';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    givenName: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    familyName: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    email: Attribute.Email &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    admin_user: Attribute.Relation<
      'api::person.person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Profile_picture: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Links: Attribute.DynamicZone<['link.link']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    blogs: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::blog.blog'
    >;
    how_tos: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::how-to.how-to'
    >;
    recipes: Attribute.Relation<
      'api::person.person',
      'manyToMany',
      'api::recipe.recipe'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::person.person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::person.person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::person.person',
      'oneToMany',
      'api::person.person'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 60;
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 150;
        maxLength: 250;
      }>;
    Intro_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Price: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
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
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<'EUR'>;
    SKU: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    GTIN_Barcode: Attribute.BigInteger &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Weight: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Weight_unit: Attribute.Enumeration<['gm', 'oz']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<'gm'>;
    Weight_tea: Attribute.Decimal &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Weight_tea_unit: Attribute.Enumeration<['gm', 'oz', 'ml']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<'gm'>;
    estate_name: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::estate.estate'
    >;
    related_blogs: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::blog.blog'
    >;
    related_recipes: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::recipe.recipe'
    >;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Price_breakdown_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Price_breakdown: Attribute.Component<
      'price-breakdown.price-breakdown',
      true
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Transparency_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Transparency: Attribute.Component<'transparency-items.transparency', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Impact_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Impact: Attribute.Component<'impact-items.impact', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_infos: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::product-info.product-info'
    >;
    related_how_tos: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::how-to.how-to'
    >;
    related_products: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::product.product'
    >;
    brand: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::brand.brand'
    > &
      Attribute.Required;
    Stock_out: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    In_stock_date: Attribute.Date &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Stock_amount: Attribute.Integer &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<0>;
    Water_temperature: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Brewing_time: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    variant: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::product-variant.product-variant'
    >;
    category: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::product-category.product-category'
    >;
    sub_category: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::product-sub-category.product-sub-category'
    >;
    size: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::product-size.product-size'
    >;
    Water_temperature_unit: Attribute.Enumeration<['degree']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'degree'>;
    Brewing_time_unit: Attribute.Enumeration<['minute']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'minute'>;
    recipes: Attribute.Relation<
      'api::product.product',
      'manyToMany',
      'api::recipe.recipe'
    >;
    rank: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Active_from: Attribute.Date &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    category_tea_range: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::product-category.product-category'
    >;
    VatPercentage: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::product.product'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductCategoryProductCategory
  extends Schema.CollectionType {
  collectionName: 'product_categories';
  info: {
    singularName: 'product-category';
    pluralName: 'product-categories';
    displayName: 'Product category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Heading_button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Sub_categories: Attribute.Relation<
      'api::product-category.product-category',
      'oneToMany',
      'api::product-sub-category.product-sub-category'
    >;
    Block_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Relevant_items_title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Relevant_recipes: Attribute.Relation<
      'api::product-category.product-category',
      'oneToMany',
      'api::recipe.recipe'
    >;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Category_type: Attribute.Enumeration<['Tea format', 'Tea range']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<'Tea format'>;
    products: Attribute.Relation<
      'api::product-category.product-category',
      'oneToMany',
      'api::product.product'
    >;
    products_tea_range: Attribute.Relation<
      'api::product-category.product-category',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-category.product-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-category.product-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::product-category.product-category',
      'oneToMany',
      'api::product-category.product-category'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductInfoProductInfo extends Schema.CollectionType {
  collectionName: 'product_infos';
  info: {
    singularName: 'product-info';
    pluralName: 'product-infos';
    displayName: 'Product Info';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Product_info_title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_info_icon: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-info.product-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-info.product-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::product-info.product-info',
      'oneToMany',
      'api::product-info.product-info'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductSizeProductSize extends Schema.CollectionType {
  collectionName: 'product_sizes';
  info: {
    singularName: 'product-size';
    pluralName: 'product-sizes';
    displayName: 'Product Size';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    products: Attribute.Relation<
      'api::product-size.product-size',
      'oneToMany',
      'api::product.product'
    >;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-size.product-size',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-size.product-size',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::product-size.product-size',
      'oneToMany',
      'api::product-size.product-size'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductSubCategoryProductSubCategory
  extends Schema.CollectionType {
  collectionName: 'product_sub_categories';
  info: {
    singularName: 'product-sub-category';
    pluralName: 'product-sub-categories';
    displayName: 'Product sub-category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    products: Attribute.Relation<
      'api::product-sub-category.product-sub-category',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-sub-category.product-sub-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-sub-category.product-sub-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::product-sub-category.product-sub-category',
      'oneToMany',
      'api::product-sub-category.product-sub-category'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductVariantProductVariant extends Schema.CollectionType {
  collectionName: 'product_variants';
  info: {
    singularName: 'product-variant';
    pluralName: 'product-variants';
    displayName: 'Product variant';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    products: Attribute.Relation<
      'api::product-variant.product-variant',
      'oneToMany',
      'api::product.product'
    >;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Icon: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    is_tea_bag: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    is_tea_bag_subvariant: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-variant.product-variant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-variant.product-variant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::product-variant.product-variant',
      'oneToMany',
      'api::product-variant.product-variant'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRecipeRecipe extends Schema.CollectionType {
  collectionName: 'recipes';
  info: {
    singularName: 'recipe';
    pluralName: 'recipes';
    displayName: 'Recipe';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 20;
        maxLength: 60;
      }>;
    Intro_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 200;
        maxLength: 250;
      }>;
    Intro_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    authors: Attribute.Relation<
      'api::recipe.recipe',
      'manyToMany',
      'api::person.person'
    >;
    Time_preparation: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Time_cooking: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Recipe_variations: Attribute.Relation<
      'api::recipe.recipe',
      'oneToMany',
      'api::recipe.recipe'
    >;
    Time_text: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Nutrition: Attribute.Component<'recipe-nutrition.nutrition', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Nutrition_yield: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Instructions_part: Attribute.Component<'recipe.cooking-part', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Relevant_recipes: Attribute.Relation<
      'api::recipe.recipe',
      'oneToMany',
      'api::recipe.recipe'
    >;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Cuisine: Attribute.Enumeration<
      [
        'Afghani',
        'African',
        'African, Portuguese',
        'American',
        'Andhra',
        'Arabian',
        'Arabian, Lebanese',
        'Arabian, Mexican',
        'Arabian, Middle Eastern',
        'Asian',
        'Assamese',
        'Australian',
        'Awadhi',
        'Awadhi, Mughlai',
        'bakery',
        'Bar Food',
        'Bar Food, Brazilian',
        'Bar Food, Modern Australian',
        'Bar Food, Sandwich, Seafood',
        'Bar Food, Seafood, Vegetarian',
        'Bar Food, Steak',
        'BBQ',
        'BBQ, Breakfast, Southern',
        'BBQ, Caribbean, Cajun',
        'BBQ, Caribbean, Seafood',
        'BBQ, Grill, Brazilian',
        'BBQ, Sandwich',
        'BBQ, Southern',
        'Bengali',
        'Bengali, Seafood',
        'Beverages',
        'Bihari',
        'Biryani',
        'Brazilian',
        'Brazilian, Bar Food',
        'Brazilian, Grill',
        'Brazilian, Mineira',
        'Brazilian, North Eastern',
        'Brazilian, Seafood',
        'Brazilian, Steak',
        'Breakfast',
        'Breakfast, Cajun',
        'Breakfast, Coffee and Tea',
        'Breakfast, Coffee and Tea, Modern Australian',
        'Breakfast, Diner',
        'Breakfast, Diner, Sandwich',
        'Breakfast, Diner, Southern',
        'Breakfast, French',
        'Breakfast, Mexican',
        'Breakfast, Mexican, Southwestern',
        'Breakfast, Modern Australian',
        'Breakfast, Pizza',
        'Breakfast, Sandwich',
        'Breakfast, Spanish, Tapas',
        'Breakfast, Vegetarian',
        'British',
        'British, Bar Food, Sandwich',
        'British, Contemporary',
        'British, French',
        'British, Scottish, Seafood',
        'British, Steak',
        'Burger',
        'Cafe',
        'Cajun',
        'Caribbean',
        'Caribbean, Mexican, Cajun',
        'Caribbean, Seafood',
        'Caribbean, Seafood, Steak',
        'Chinese',
        'Coffee and Tea, Mediterranean',
        'Coffee and Tea, Modern Australian',
        'Coffee and Tea, Sandwich',
        'Coffee and Tea, Tapas, Australian',
        'Coffee and Tea, Tea, Modern Australian',
        'Contemporary',
        'Continental',
        'Continental, European',
        'Continental, Kerala',
        'Continental, Lebanese, Mexican',
        'Continental, Mexican',
        'Continental, Mexican, Mediterranean',
        'Continental, Seafood, Goan, Andhra, Kerala, Thai',
        'Continental, Tex-Mex',
        'Cuban, Spanish',
        'Cuisine Varies',
        'Desserts',
        'Drinks Only',
        'European',
        'European, Contemporary',
        'European, Continental',
        'European, Continental, Pizza',
        'European, German',
        'European, International, Tapas',
        'European, Lebanese, Mediterranean',
        'European, Mediterranean, Contemporary',
        'European, Pizza',
        'European, South African',
        'European, South African, Steak',
        'European, Spanish',
        'FAST FOOD',
        'Filipino',
        'Filipino, Mexican',
        'Finger Food',
        'French',
        'French, Kiwi',
        'French, Mediterranean, European',
        'French, Western',
        'German',
        'German, Ice Cream',
        'Goan',
        'Goan, Mangalorean, Continental, French',
        'Goan, Seafood',
        'Greek',
        'Greek, Lebanese',
        'Greek, Mediterranean',
        'Greek, Mediterranean, Middle Eastern',
        'Greek, Mediterranean, Vegetarian',
        'Gujarati',
        'Gujarati, Rajasthani',
        'Hawaiian',
        'Hawaiian, Seafood',
        'Hawaiian, Seafood, Steak',
        'Healthy Food',
        'Hyderabadi',
        'Hyderabadi, Awadhi',
        'Ice Cream',
        'indian',
        'Indonesian',
        'International',
        'International, Mediterranean, Sandwich',
        'International, Pizza',
        'International, Southern',
        'International, Southern, Vegetarian',
        'International, Tapas, Vegetarian',
        'Irish',
        'italian',
        'Japanese',
        'Japanese, French',
        'Japanese, Korean',
        'Japanese, Seafood, Sushi',
        'Japanese, Steak',
        'Japanese, Steak, Sushi',
        'Japanese, Sushi',
        'Japanese, Sushi, Ramen',
        'Japanese, Sushi, Teriyaki',
        'Japanese, Sushi, Thai',
        'Japanese, Thai, Sushi',
        'Japanese, Tibetan, Vietnamese, Korean',
        'Juices',
        'Kashmiri',
        'Kashmiri, Mughlai',
        'Kebab',
        'Kebab, Izgara',
        'Kebab, Turkish Pizza',
        'Kebab, Turkish Pizza, D\u00ED_ner',
        'Kerala',
        'Kiwi, European',
        'Korean',
        'Lebanese',
        'Lebanese, Arabian',
        'Lebanese, Arabian, Middle Eastern',
        'Lebanese, Arabian, Moroccan',
        'Lebanese, Mediterranean, Arabian',
        'Lebanese, Mediterranean, Middle Eastern, Arabian',
        'Lucknowi',
        'Lucknowi, Mughlai',
        'Maharashtrian',
        'Malaysian',
        'Malaysian, Indonesian',
        'Malaysian, Thai',
        'Malaysian, Thai, Kerala, Vietnamese, Sri Lankan',
        'Mediterranean',
        'Mediterranean, Continental',
        'Mediterranean, European',
        'Mediterranean, Seafood',
        'Mediterranean, Tapas, Vegetarian',
        'Mediterranean, Turkish',
        'Mexican',
        'Mexican, Grill',
        'Mexican, Southwestern, Sushi',
        'Mexican, Southwestern, Tex-Mex',
        'Mexican, Spanish',
        'Mexican, Tex-Mex',
        'Mexican, Vegetarian',
        'Middle Eastern, Arabian',
        'Mithai',
        'Modern Australian',
        'Modern Australian, Australian',
        'Mughlai',
        'Mughlai, Afghani',
        'Mughlai, Hyderabadi',
        'Mughlai, Lucknowi',
        'Mughlai, Lucknowi, Awadhi',
        'Naga',
        'Naga, Tibetan',
        'Nepalese',
        'Nepalese, Tibetan',
        'North Eastern',
        'Oriya',
        'Pakistani',
        'Parsi',
        'Parsi, Iranian',
        'Patisserie, Coffee and Tea',
        'Peranakan, Indonesian',
        'Pizza',
        'Pizza, Bar Food',
        'Pizza, Bar Food, Sandwich',
        'Pizza, Grill',
        'Pizza, Ice Cream',
        'Pizza, Sandwich',
        'Pizza, Sandwich, Vegetarian',
        'Pizza, Seafood, Steak',
        'Portuguese, African',
        'Portuguese, African, Lebanese',
        'Pub Food',
        'Rajasthani',
        'Rajasthani, Gujarati, Mughlai',
        'Ramen, Japanese',
        'Raw Meats',
        'Salad, Continental',
        'Sandwich',
        'Sandwich, Seafood, Cajun',
        'Sandwich, Seafood, Steak',
        'Sandwich, Sushi, Tapas',
        'Seafood',
        'Seafood, African, Sushi',
        'Seafood, Bar Food, Brazilian',
        'Seafood, Continental, European',
        'Seafood, Continental, European, German',
        'Seafood, French',
        'Seafood, Japanese, Sushi',
        'Seafood, Kiwi',
        'Seafood, Mediterranean',
        'Seafood, Southern',
        'Seafood, Steak',
        'Seafood, Steak, Vegetarian',
        'Seafood, Sushi',
        'Seafood, Tapas, Bar Food',
        'Seafood, Western',
        'Singaporean, Australian, German',
        'Southern',
        'Southern, Cajun, Soul Food',
        'Spanish, Tapas',
        'Sri Lankan',
        'Steak',
        'Steak, BBQ',
        'Steak, Scottish, British',
        'Steak, Seafood, Grill',
        'Steak, Tapas, Bar Food',
        'Street Food',
        'Sunda, Indonesian',
        'Sushi',
        'Sushi, Japanese',
        'Sushi, Japanese, Cantonese',
        'Sushi, Teriyaki',
        'Sushi, Thai',
        'Tapas',
        'Tea',
        'Tea, Modern Australian',
        'Thai',
        'Thai, Japanese',
        'Tibetan',
        'Tibetan, Nepalese',
        'Turkish',
        'Turkish Pizza',
        'Turkish, Arabian, Middle Eastern',
        'Turkish, Arabian, Moroccan, Lebanese',
        'Turkish, Mediterranean, Middle Eastern',
        'Vietnamese',
        'Vietnamese, Fish and Chips',
        'World Cuisine'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Category: Attribute.Enumeration<
      [
        'Breakfast',
        'Lunch',
        'Dinner',
        'Appetizer',
        'Salad',
        'Main-course',
        'Side-dish',
        'Baked-goods',
        'Dessert',
        'Snack',
        'Soup',
        'Holiday',
        'Vegetarian Dishes'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Related_products: Attribute.Relation<
      'api::recipe.recipe',
      'manyToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::recipe.recipe',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::recipe.recipe',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::recipe.recipe',
      'oneToMany',
      'api::recipe.recipe'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRecurringElementRecurringElement extends Schema.SingleType {
  collectionName: 'recurring_elements';
  info: {
    singularName: 'recurring-element';
    pluralName: 'recurring-elements';
    displayName: 'Recurring_elements';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Logo: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Logo_tagline: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Footer_text: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Favicon: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Company_name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Company_address: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Company_email: Attribute.Email &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    text_chapter: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_practices_to_follow: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_practices: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_explore_the_world_of_kindness: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    OpenGraph_default: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    recipe_prep: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_cook: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_total: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_jump_to_recipe: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_similar: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_recipe: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_minutes: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_nutrition_information: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_yield: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_amount_per_serving: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_ingredients: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_serving_size: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_cooking_instructions: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_tips: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_discover: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_minute: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_hour: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_hours: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_day: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    recipe_days: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    estate_location: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_kindness_impact: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_add: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_add_cart: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_add_cart_for: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_made_love_from: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_size: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_quantity: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_each_penny_you_spend: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_check_where_going: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_price_breakdown_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_transparency_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    product_impact_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_content: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Item_stock_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_sold_out_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Nav_menu: Attribute.Component<'menu.nav', true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Nav_menu_search_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<true>;
    Nav_menu_language_selector_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<true>;
    Nav_menu_cart_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<true>;
    Nav_menu_cart_icon: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Nav_menu_profile_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<true>;
    Nav_menu_profile_icon: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    text_all_tea_variants: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_all_tea_sizes: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Recipes_related_products_title_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_stock_other_formats_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_stock_other_formats_text_singular: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Nav_menu_localization_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Nav_menu_localization_icon: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    text_shipping_country: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_language: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_currency: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_save_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_go_back_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    search_text_no_result_found: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Footer_menu: Attribute.Component<'footer-menu.footer-menu', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_lang_selector_unavailable: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_region: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Nav_menu_region_selector_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_skip: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_select_your_region: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_available_other_formats_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_available_other_formats_text_singular: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_stock_available_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_available_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_other_formats_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_other_formats_singular_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_other_formats_text_sm: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Product_other_formats_singular_text_sm: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    From_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Nav_menu_profile_menu: Attribute.Component<'profile-menu.menu'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::recurring-element.recurring-element',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::recurring-element.recurring-element',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::recurring-element.recurring-element',
      'oneToMany',
      'api::recurring-element.recurring-element'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRecurringImageRecurringImage extends Schema.SingleType {
  collectionName: 'recurring_images';
  info: {
    singularName: 'recurring-image';
    pluralName: 'recurring-images';
    displayName: 'Recurring Images';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_background: Attribute.Media;
    crowdfunding_info_section_background: Attribute.Media;
    footer_background: Attribute.Media;
    left_post_leaf: Attribute.Media;
    footer_leaf_sm: Attribute.Media;
    logo: Attribute.Media;
    error_notification: Attribute.Media;
    warning_notification: Attribute.Media;
    info_notification: Attribute.Media;
    success_notification: Attribute.Media;
    white_love_ribbon: Attribute.Media;
    green_love_ribbon: Attribute.Media;
    love_gift: Attribute.Media;
    white_cup: Attribute.Media;
    green_cup: Attribute.Media;
    light_green_cup: Attribute.Media;
    green_book: Attribute.Media;
    favicon: Attribute.Media;
    white_right_arrow: Attribute.Media;
    green_right_arrow: Attribute.Media;
    white_down_arrow: Attribute.Media;
    green_down_arrow: Attribute.Media;
    footer_leaf: Attribute.Media;
    green_leaf: Attribute.Media;
    white_clock: Attribute.Media;
    left_quote: Attribute.Media;
    green_bulb: Attribute.Media;
    white_flower: Attribute.Media;
    light_green_flower: Attribute.Media;
    light_green_clock: Attribute.Media;
    green_product_cart: Attribute.Media;
    green_product_cart_plus: Attribute.Media;
    shipping_hero_background: Attribute.Media;
    green_love: Attribute.Media;
    green_leaf_icon: Attribute.Media;
    green_no_icon: Attribute.Media;
    green_package_icon: Attribute.Media;
    white_product_cart: Attribute.Media;
    hero_background_sm: Attribute.Media;
    footer_background_sm: Attribute.Media;
    checkout_header_background: Attribute.Media;
    checkout_header_background_sm: Attribute.Media;
    checkout_pre_post_background: Attribute.Media;
    checkout_pre_post_background_sm: Attribute.Media;
    nav_background: Attribute.Media;
    sidebar_background: Attribute.Media;
    tick: Attribute.Media;
    user_account_nav_background: Attribute.Media;
    user_account_nav_background_sm: Attribute.Media;
    nav_background_sm: Attribute.Media;
    white_love: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::recurring-image.recurring-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::recurring-image.recurring-image',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRegionRegion extends Schema.CollectionType {
  collectionName: 'regions';
  info: {
    singularName: 'region';
    pluralName: 'regions';
    displayName: 'Region';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    flag: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::region.region',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::region.region',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::region.region',
      'oneToMany',
      'api::region.region'
    >;
    locale: Attribute.String;
  };
}

export interface ApiRobotsTextRobotsText extends Schema.SingleType {
  collectionName: 'robots_texts';
  info: {
    singularName: 'robots-text';
    pluralName: 'robots-texts';
    displayName: 'Robots text';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Text: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::robots-text.robots-text',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::robots-text.robots-text',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSearchResultSearchResult extends Schema.SingleType {
  collectionName: 'search_results';
  info: {
    singularName: 'search-result';
    pluralName: 'search-results';
    displayName: 'Search result';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Breadcrumb: Attribute.Component<'breadcrumb.breadcrumb'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::search-result.search-result',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::search-result.search-result',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::search-result.search-result',
      'oneToMany',
      'api::search-result.search-result'
    >;
    locale: Attribute.String;
  };
}

export interface ApiSecurityTextSecurityText extends Schema.SingleType {
  collectionName: 'security_texts';
  info: {
    singularName: 'security-text';
    pluralName: 'security-texts';
    displayName: 'Security text';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::security-text.security-text',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::security-text.security-text',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShippingMethodShippingMethod extends Schema.CollectionType {
  collectionName: 'shipping_methods';
  info: {
    singularName: 'shipping-method';
    pluralName: 'shipping-methods';
    displayName: 'Shipping Method';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    method: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    cost: Attribute.Decimal &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shipping-method.shipping-method',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shipping-method.shipping-method',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::shipping-method.shipping-method',
      'oneToMany',
      'api::shipping-method.shipping-method'
    >;
    locale: Attribute.String;
  };
}

export interface ApiUserAccountUserAccount extends Schema.CollectionType {
  collectionName: 'user_accounts';
  info: {
    singularName: 'user-account';
    pluralName: 'user-accounts';
    displayName: 'User account';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Intro_blob: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Form: Attribute.Component<'form.form'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Social_media: Attribute.Component<'social-media.social-media'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_pretext: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    UID: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-account.user-account',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-account.user-account',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::user-account.user-account',
      'oneToMany',
      'api::user-account.user-account'
    >;
    locale: Attribute.String;
  };
}

export interface ApiUserAccountAddressUserAccountAddress
  extends Schema.SingleType {
  collectionName: 'user_account_addresses';
  info: {
    singularName: 'user-account-address';
    pluralName: 'user-account-addresses';
    displayName: 'User account address';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Breadcrumb: Attribute.Component<'breadcrumb.breadcrumb'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-account-address.user-account-address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-account-address.user-account-address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::user-account-address.user-account-address',
      'oneToMany',
      'api::user-account-address.user-account-address'
    >;
    locale: Attribute.String;
  };
}

export interface ApiUserAccountDashboardUserAccountDashboard
  extends Schema.SingleType {
  collectionName: 'user_account_dashboards';
  info: {
    singularName: 'user-account-dashboard';
    pluralName: 'user-account-dashboards';
    displayName: 'User account dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Personal_information: Attribute.Component<'personal-information.personal-information'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block2: Attribute.Component<'block2.block2'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block3_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Support_visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Support: Attribute.Component<'support.support'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Breadcrumb: Attribute.Component<'breadcrumb.breadcrumb'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Block3_title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-account-dashboard.user-account-dashboard',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-account-dashboard.user-account-dashboard',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::user-account-dashboard.user-account-dashboard',
      'oneToMany',
      'api::user-account-dashboard.user-account-dashboard'
    >;
    locale: Attribute.String;
  };
}

export interface ApiUserAccountOrderUserAccountOrder extends Schema.SingleType {
  collectionName: 'user_account_orders';
  info: {
    singularName: 'user-account-order';
    pluralName: 'user-account-orders';
    displayName: 'User account order';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Breadcrumb: Attribute.Component<'breadcrumb.breadcrumb'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Meta: Attribute.Component<'search-engine.meta'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-account-order.user-account-order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-account-order.user-account-order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::user-account-order.user-account-order',
      'oneToMany',
      'api::user-account-order.user-account-order'
    >;
    locale: Attribute.String;
  };
}

export interface ApiUserAccountRecurringElementUserAccountRecurringElement
  extends Schema.SingleType {
  collectionName: 'user_account_recurring_elements';
  info: {
    singularName: 'user-account-recurring-element';
    pluralName: 'user-account-recurring-elements';
    displayName: 'User account recurring element';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Facebook_icon: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Google_icon: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Twitter_icon: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Input_label_first_name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_label_last_name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_label_email: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_label_phone: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_placeholder_first_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_placeholder_last_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_placeholder_email: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_placeholder_phone: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_placeholder_email_or_phone: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Social_media_divider_or_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_label_country: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_placeholder_country: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_label_city: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_placeholder_city: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_label_street: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_placeholder_street: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_label_postal_code: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Input_placeholder_postal_code: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_add_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_edit_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_update_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_add_new_address_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_make_default_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tag_default_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Label_tag_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Address_tag: Attribute.Component<'address-tag.address-tag', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_save_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_cancel_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Checkbox_set_default_address_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Checkbox_set_billing_address_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_more_address: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_content: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Notification_address_update_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Notification_default_address_update_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Notification_billing_address_update_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_saved_Addresses: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_hide_more_address: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_remove_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_connected: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_not_connected: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Label_order: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_track_package: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_track_package_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_buy_again_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_sold_out_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Button_view_all_orders_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_more_products_in_this_order: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_estimated_delivery: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_estimated_shipment: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_delivered: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tag_others_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tag_others_placeholder_text: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Empty_order_blob: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Empty_order_text: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Empty_order_button_text: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Empty_order_button_link: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_email: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_mobile_number: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_show_more_products_in_this_order: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text_hide_more_products_in_this_order: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-account-recurring-element.user-account-recurring-element',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-account-recurring-element.user-account-recurring-element',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::user-account-recurring-element.user-account-recurring-element',
      'oneToMany',
      'api::user-account-recurring-element.user-account-recurring-element'
    >;
    locale: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::aria-label-recurring-element.aria-label-recurring-element': ApiAriaLabelRecurringElementAriaLabelRecurringElement;
      'api::basic-page.basic-page': ApiBasicPageBasicPage;
      'api::blog.blog': ApiBlogBlog;
      'api::brand.brand': ApiBrandBrand;
      'api::cart.cart': ApiCartCart;
      'api::catalog.catalog': ApiCatalogCatalog;
      'api::checkout-flow.checkout-flow': ApiCheckoutFlowCheckoutFlow;
      'api::checkout-information.checkout-information': ApiCheckoutInformationCheckoutInformation;
      'api::checkout-kindness.checkout-kindness': ApiCheckoutKindnessCheckoutKindness;
      'api::checkout-recurring-element.checkout-recurring-element': ApiCheckoutRecurringElementCheckoutRecurringElement;
      'api::checkout-shipping.checkout-shipping': ApiCheckoutShippingCheckoutShipping;
      'api::checkout-success.checkout-success': ApiCheckoutSuccessCheckoutSuccess;
      'api::country.country': ApiCountryCountry;
      'api::crowdfunding-email.crowdfunding-email': ApiCrowdfundingEmailCrowdfundingEmail;
      'api::crowdfunding-form.crowdfunding-form': ApiCrowdfundingFormCrowdfundingForm;
      'api::crowdfunding-home.crowdfunding-home': ApiCrowdfundingHomeCrowdfundingHome;
      'api::crowdfunding-payment-confirmation.crowdfunding-payment-confirmation': ApiCrowdfundingPaymentConfirmationCrowdfundingPaymentConfirmation;
      'api::crowdfunding-plan.crowdfunding-plan': ApiCrowdfundingPlanCrowdfundingPlan;
      'api::e-mail.e-mail': ApiEMailEMail;
      'api::ecommerce-payment-confirmation-mail.ecommerce-payment-confirmation-mail': ApiEcommercePaymentConfirmationMailEcommercePaymentConfirmationMail;
      'api::estate.estate': ApiEstateEstate;
      'api::home-blog.home-blog': ApiHomeBlogHomeBlog;
      'api::home-elephant-path.home-elephant-path': ApiHomeElephantPathHomeElephantPath;
      'api::home-estate.home-estate': ApiHomeEstateHomeEstate;
      'api::home-how-to.home-how-to': ApiHomeHowToHomeHowTo;
      'api::home-product.home-product': ApiHomeProductHomeProduct;
      'api::home-recipe.home-recipe': ApiHomeRecipeHomeRecipe;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::how-to.how-to': ApiHowToHowTo;
      'api::i18n.i18n': ApiI18NI18N;
      'api::kindness-cause.kindness-cause': ApiKindnessCauseKindnessCause;
      'api::notification.notification': ApiNotificationNotification;
      'api::organization.organization': ApiOrganizationOrganization;
      'api::payment-method.payment-method': ApiPaymentMethodPaymentMethod;
      'api::person.person': ApiPersonPerson;
      'api::product.product': ApiProductProduct;
      'api::product-category.product-category': ApiProductCategoryProductCategory;
      'api::product-info.product-info': ApiProductInfoProductInfo;
      'api::product-size.product-size': ApiProductSizeProductSize;
      'api::product-sub-category.product-sub-category': ApiProductSubCategoryProductSubCategory;
      'api::product-variant.product-variant': ApiProductVariantProductVariant;
      'api::recipe.recipe': ApiRecipeRecipe;
      'api::recurring-element.recurring-element': ApiRecurringElementRecurringElement;
      'api::recurring-image.recurring-image': ApiRecurringImageRecurringImage;
      'api::region.region': ApiRegionRegion;
      'api::robots-text.robots-text': ApiRobotsTextRobotsText;
      'api::search-result.search-result': ApiSearchResultSearchResult;
      'api::security-text.security-text': ApiSecurityTextSecurityText;
      'api::shipping-method.shipping-method': ApiShippingMethodShippingMethod;
      'api::user-account.user-account': ApiUserAccountUserAccount;
      'api::user-account-address.user-account-address': ApiUserAccountAddressUserAccountAddress;
      'api::user-account-dashboard.user-account-dashboard': ApiUserAccountDashboardUserAccountDashboard;
      'api::user-account-order.user-account-order': ApiUserAccountOrderUserAccountOrder;
      'api::user-account-recurring-element.user-account-recurring-element': ApiUserAccountRecurringElementUserAccountRecurringElement;
    }
  }
}
