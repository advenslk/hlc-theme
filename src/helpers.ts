import type { NebulaConfig } from './config.js';

export interface IconPack {
  cssUrl: string;
  scale: string;
  wideTopMargin: string;
  icons: {
    home: string;
    admin: string;
    account: string;
    logout: string;
    serverTerminal: string;
    serverFiles: string;
    serverDatabases: string;
    serverSchedules: string;
    serverUsers: string;
    serverBackups: string;
    serverNetwork: string;
    serverStartup: string;
    serverSettings: string;
    serverActivity: string;
    serverMore: string;
    accountAccount: string;
    accountApi: string;
    accountSsh: string;
    accountActivity: string;
    accountMore: string;
  };
}

export function getTransparencyAlpha(value: string): string {
  if (value === '1') return 'BB';
  if (value === '2') return '99';
  if (value === '3') return '60';
  return '';
}

export function getIconPack(packName: string): IconPack {
  switch (packName) {
    case 'feather':
      return {
        cssUrl: 'https://cdn.nebula.style/icons/feather/feather-icons.css',
        scale: '32px',
        wideTopMargin: '-2px',
        icons: {
          home: 'ff ff-home',
          admin: 'ff ff-sliders',
          account: 'ff ff-user',
          logout: 'ff ff-log-out',
          serverTerminal: 'ff ff-terminal',
          serverFiles: 'ff ff-folder',
          serverDatabases: 'ff ff-database',
          serverSchedules: 'ff ff-calendar',
          serverUsers: 'ff ff-users',
          serverBackups: 'ff ff-disc',
          serverNetwork: 'ff ff-globe',
          serverStartup: 'ff ff-hard-drive',
          serverSettings: 'ff ff-settings',
          serverActivity: 'ff ff-activity',
          serverMore: 'ff ff-more-vertical',
          accountAccount: 'ff ff-settings',
          accountApi: 'ff ff-link',
          accountSsh: 'ff ff-key',
          accountActivity: 'ff ff-activity',
          accountMore: 'ff ff-more-vertical',
        },
      };
    case 'lucide':
      return {
        cssUrl: 'https://cdn.nebula.style/icons/lucide/lucide.css',
        scale: '32px',
        wideTopMargin: 'unset',
        icons: {
          home: 'icon-layers',
          admin: 'icon-sliders-horizontal',
          account: 'icon-user',
          logout: 'icon-log-out',
          serverTerminal: 'icon-terminal-square',
          serverFiles: 'icon-folder-open',
          serverDatabases: 'icon-database',
          serverSchedules: 'icon-calendar-clock',
          serverUsers: 'icon-users',
          serverBackups: 'icon-archive',
          serverNetwork: 'icon-network',
          serverStartup: 'icon-unplug',
          serverSettings: 'icon-settings',
          serverActivity: 'icon-scroll-text',
          serverMore: 'icon-more-vertical',
          accountAccount: 'icon-settings',
          accountApi: 'icon-globe',
          accountSsh: 'icon-key',
          accountActivity: 'icon-scroll-text',
          accountMore: 'icon-more-vertical',
        },
      };
    case 'material':
      return {
        cssUrl: 'https://cdn.nebula.style/icons/materialdesign/default/materialdesignicons.css',
        scale: '37px',
        wideTopMargin: 'unset',
        icons: {
          home: 'mdi mdi-home',
          admin: 'mdi mdi-hammer-wrench',
          account: 'mdi mdi-account-edit',
          logout: 'mdi mdi-logout',
          serverTerminal: 'mdi mdi-console-line',
          serverFiles: 'mdi mdi-folder',
          serverDatabases: 'mdi mdi-database',
          serverSchedules: 'mdi mdi-calendar-month',
          serverUsers: 'mdi mdi-account-group',
          serverBackups: 'mdi mdi-backup-restore',
          serverNetwork: 'mdi mdi-network',
          serverStartup: 'mdi mdi-cog-play',
          serverSettings: 'mdi mdi-wrench-cog',
          serverActivity: 'mdi mdi-clipboard-pulse',
          serverMore: 'mdi mdi-dots-horizontal',
          accountAccount: 'mdi mdi-account-cog',
          accountApi: 'mdi mdi-code-brackets',
          accountSsh: 'mdi mdi-key-chain',
          accountActivity: 'mdi mdi-clipboard-pulse',
          accountMore: 'mdi mdi-dots-horizontal',
        },
      };
    case 'material-light':
      return {
        cssUrl: 'https://cdn.nebula.style/icons/materialdesign/light/materialdesignicons-light.css',
        scale: '37px',
        wideTopMargin: 'unset',
        icons: {
          home: 'mdil mdil-home',
          admin: 'mdil mdil-view-dashboard',
          account: 'mdil mdil-account',
          logout: 'mdil mdil-logout',
          serverTerminal: 'mdil mdil-console',
          serverFiles: 'mdil mdil-folder',
          serverDatabases: 'mdil mdil-table',
          serverSchedules: 'mdil mdil-calendar',
          serverUsers: 'mdil mdil-eye',
          serverBackups: 'mdil mdil-content-duplicate',
          serverNetwork: 'mdil mdil-sitemap',
          serverStartup: 'mdil mdil-pencil',
          serverSettings: 'mdil mdil-settings',
          serverActivity: 'mdil mdil-clipboard-text',
          serverMore: 'mdil mdil-dots-horizontal',
          accountAccount: 'mdil mdil-settings',
          accountApi: 'mdil mdil-link',
          accountSsh: 'mdil mdil-lock',
          accountActivity: 'mdil mdil-clipboard-text',
          accountMore: 'mdil mdil-dots-horizontal',
        },
      };
    case 'fontawesome':
      return {
        cssUrl: 'https://cdn.nebula.style/icons/fontawesome/fontawesome.css',
        scale: '28px',
        wideTopMargin: 'unset',
        icons: {
          home: 'fa-solid fa-house',
          admin: 'fa-solid fa-sliders',
          account: 'fa-solid fa-user-gear',
          logout: 'fa-solid fa-right-from-bracket',
          serverTerminal: 'fa-solid fa-bars-progress',
          serverFiles: 'fa-solid fa-folder',
          serverDatabases: 'fa-solid fa-database',
          serverSchedules: 'fa-solid fa-calendar',
          serverUsers: 'fa-solid fa-user-group',
          serverBackups: 'fa-solid fa-box-archive',
          serverNetwork: 'fa-solid fa-network-wired',
          serverStartup: 'fa-solid fa-wrench',
          serverSettings: 'fa-solid fa-gear',
          serverActivity: 'fa-solid fa-scroll',
          serverMore: 'fa-solid fa-ellipsis-vertical',
          accountAccount: 'fa-solid fa-circle-user',
          accountApi: 'fa-solid fa-globe',
          accountSsh: 'fa-solid fa-key',
          accountActivity: 'fa-solid fa-scroll',
          accountMore: 'fa-solid fa-ellipsis-vertical',
        },
      };
    case 'eva-outline':
      return {
        cssUrl: 'https://cdn.nebula.style/icons/eva/evaicons.css',
        scale: '34px',
        wideTopMargin: 'unset',
        icons: {
          home: 'eva eva-home-outline',
          admin: 'eva eva-options-outline',
          account: 'eva eva-person-outline',
          logout: 'eva eva-log-out-outline',
          serverTerminal: 'eva eva-hard-drive-outline',
          serverFiles: 'eva eva-folder-outline',
          serverDatabases: 'eva eva-cube-outline',
          serverSchedules: 'eva eva-calendar-outline',
          serverUsers: 'eva eva-people-outline',
          serverBackups: 'eva eva-archive-outline',
          serverNetwork: 'eva eva-wifi-outline',
          serverStartup: 'eva eva-flash-outline',
          serverSettings: 'eva eva-settings-outline',
          serverActivity: 'eva eva-activity-outline',
          serverMore: 'eva eva-more-horizontal-outline',
          accountAccount: 'eva eva-settings-outline',
          accountApi: 'eva eva-globe-outline',
          accountSsh: 'eva eva-lock-outline',
          accountActivity: 'eva eva-activity-outline',
          accountMore: 'eva eva-more-horizontal-outline',
        },
      };
    case 'eva-solid':
      return {
        cssUrl: 'https://cdn.nebula.style/icons/eva/evaicons.css',
        scale: '34px',
        wideTopMargin: 'unset',
        icons: {
          home: 'eva eva-home',
          admin: 'eva eva-options',
          account: 'eva eva-person',
          logout: 'eva eva-log-out',
          serverTerminal: 'eva eva-hard-drive',
          serverFiles: 'eva eva-folder',
          serverDatabases: 'eva eva-cube',
          serverSchedules: 'eva eva-calendar',
          serverUsers: 'eva eva-people',
          serverBackups: 'eva eva-archive',
          serverNetwork: 'eva eva-wifi',
          serverStartup: 'eva eva-flash',
          serverSettings: 'eva eva-settings',
          serverActivity: 'eva eva-activity',
          serverMore: 'eva eva-more-horizontal',
          accountAccount: 'eva eva-settings',
          accountApi: 'eva eva-globe',
          accountSsh: 'eva eva-lock',
          accountActivity: 'eva eva-activity',
          accountMore: 'eva eva-more-horizontal',
        },
      };
    case 'remix-outline':
      return {
        cssUrl: 'https://cdn.nebula.style/icons/remix/remixicon.css',
        scale: '33px',
        wideTopMargin: 'unset',
        icons: {
          home: 'ri-home-line',
          admin: 'ri-equalizer-3-line',
          account: 'ri-user-settings-line',
          logout: 'ri-logout-box-r-line',
          serverTerminal: 'ri-terminal-box-line',
          serverFiles: 'ri-folder-6-line',
          serverDatabases: 'ri-database-2-line',
          serverSchedules: 'ri-calendar-line',
          serverUsers: 'ri-group-line',
          serverBackups: 'ri-archive-line',
          serverNetwork: 'ri-arrow-up-down-line',
          serverStartup: 'ri-edit-box-line',
          serverSettings: 'ri-settings-line',
          serverActivity: 'ri-pulse-line',
          serverMore: 'ri-more-2-line',
          accountAccount: 'ri-settings-line',
          accountApi: 'ri-global-line',
          accountSsh: 'ri-key-2-line',
          accountActivity: 'ri-pulse-line',
          accountMore: 'ri-more-2-line',
        },
      };
    case 'remix-solid':
      return {
        cssUrl: 'https://cdn.nebula.style/icons/remix/remixicon.css',
        scale: '33px',
        wideTopMargin: 'unset',
        icons: {
          home: 'ri-home-fill',
          admin: 'ri-equalizer-3-fill',
          account: 'ri-user-settings-fill',
          logout: 'ri-logout-box-r-fill',
          serverTerminal: 'ri-terminal-box-fill',
          serverFiles: 'ri-folder-6-fill',
          serverDatabases: 'ri-database-2-fill',
          serverSchedules: 'ri-calendar-fill',
          serverUsers: 'ri-group-fill',
          serverBackups: 'ri-archive-fill',
          serverNetwork: 'ri-arrow-up-down-fill',
          serverStartup: 'ri-edit-box-fill',
          serverSettings: 'ri-settings-fill',
          serverActivity: 'ri-pulse-fill',
          serverMore: 'ri-more-2-fill',
          accountAccount: 'ri-settings-fill',
          accountApi: 'ri-global-fill',
          accountSsh: 'ri-key-2-fill',
          accountActivity: 'ri-pulse-fill',
          accountMore: 'ri-more-2-fill',
        },
      };
    case 'tabler':
      return {
        cssUrl: 'https://cdn.nebula.style/icons/tabler/tabler.css',
        scale: '36px',
        wideTopMargin: 'unset',
        icons: {
          home: 'ti ti-home',
          admin: 'ti ti-server-cog',
          account: 'ti ti-user',
          logout: 'ti ti-logout',
          serverTerminal: 'ti ti-terminal',
          serverFiles: 'ti ti-folder',
          serverDatabases: 'ti ti-database',
          serverSchedules: 'ti ti-calendar',
          serverUsers: 'ti ti-users-plus',
          serverBackups: 'ti ti-archive',
          serverNetwork: 'ti ti-network',
          serverStartup: 'ti ti-adjustments',
          serverSettings: 'ti ti-settings',
          serverActivity: 'ti ti-activity-heartbeat',
          serverMore: 'ti ti-dots',
          accountAccount: 'ti ti-user-cog',
          accountApi: 'ti ti-api',
          accountSsh: 'ti ti-key',
          accountActivity: 'ti ti-activity-heartbeat',
          accountMore: 'ti ti-dots',
        },
      };
    case 'octicons':
      return {
        cssUrl: 'https://cdn.nebula.style/icons/octicons/octicons.css',
        scale: '33px',
        wideTopMargin: 'unset',
        icons: {
          home: 'octicon octicon-home-fill-24',
          admin: 'octicon octicon-tools-24',
          account: 'octicon octicon-person-24',
          logout: 'octicon octicon-sign-out-24',
          serverTerminal: 'octicon octicon-terminal-24',
          serverFiles: 'octicon octicon-file-directory-24',
          serverDatabases: 'octicon octicon-database-24',
          serverSchedules: 'octicon octicon-calendar-24',
          serverUsers: 'octicon octicon-people-24',
          serverBackups: 'octicon octicon-archive-24',
          serverNetwork: 'octicon octicon-globe-24',
          serverStartup: 'octicon octicon-plug-24',
          serverSettings: 'octicon octicon-gear-24',
          serverActivity: 'octicon octicon-log-24',
          serverMore: 'octicon octicon-kebab-horizontal-24',
          accountAccount: 'octicon octicon-smiley-24',
          accountApi: 'octicon octicon-dependabot-24',
          accountSsh: 'octicon octicon-key-24',
          accountActivity: 'octicon octicon-log-24',
          accountMore: 'octicon octicon-kebab-horizontal-24',
        },
      };
    case 'akar-icons':
      return {
        cssUrl: 'https://cdn.nebula.style/icons/akar-icons/akar-icons.css',
        scale: '33px',
        wideTopMargin: 'unset',
        icons: {
          home: 'ai-home',
          admin: 'ai-settings-vertical',
          account: 'ai-person',
          logout: 'ai-sign-out',
          serverTerminal: 'ai-computing',
          serverFiles: 'ai-folder',
          serverDatabases: 'ai-data',
          serverSchedules: 'ai-schedule',
          serverUsers: 'ai-people-multiple',
          serverBackups: 'ai-cloud-download',
          serverNetwork: 'ai-globe',
          serverStartup: 'ai-edit',
          serverSettings: 'ai-gear',
          serverActivity: 'ai-clipboard',
          serverMore: 'ai-more-vertical-fill',
          accountAccount: 'ai-face-very-happy',
          accountApi: 'ai-globe',
          accountSsh: 'ai-key',
          accountActivity: 'ai-clipboard',
          accountMore: 'ai-more-vertical-fill',
        },
      };
    case 'hugeicons-solid':
      return {
        cssUrl: 'https://private.nebula.style/icons/hugeicons/hugeicons-font.css',
        scale: '33px',
        wideTopMargin: 'unset',
        icons: {
          home: 'hgi-solid hgi-home-01',
          admin: 'hgi-solid hgi-settings-02',
          account: 'hgi-solid hgi-user',
          logout: 'hgi-solid hgi-logout-03',
          serverTerminal: 'hgi-solid hgi-software-license',
          serverFiles: 'hgi-solid hgi-folder-03',
          serverDatabases: 'hgi-solid hgi-database-02',
          serverSchedules: 'hgi-solid hgi-calendar-03',
          serverUsers: 'hgi-solid hgi-user-group',
          serverBackups: 'hgi-solid hgi-cloud-upload',
          serverNetwork: 'hgi-solid hgi-cellular-network',
          serverStartup: 'hgi-solid hgi-plug-socket',
          serverSettings: 'hgi-solid hgi-settings-05',
          serverActivity: 'hgi-solid hgi-book-02',
          serverMore: 'hgi-solid hgi-more-vertical',
          accountAccount: 'hgi-solid hgi-user-edit-01',
          accountApi: 'hgi-solid hgi-api',
          accountSsh: 'hgi-solid hgi-biometric-access',
          accountActivity: 'hgi-solid hgi-book-02',
          accountMore: 'hgi-solid hgi-more-vertical',
        },
      };
    case 'hugeicons-stroke':
      return {
        cssUrl: 'https://private.nebula.style/icons/hugeicons/hugeicons-font.css',
        scale: '33px',
        wideTopMargin: 'unset',
        icons: {
          home: 'hgi-stroke hgi-home-01',
          admin: 'hgi-stroke hgi-settings-02',
          account: 'hgi-stroke hgi-user',
          logout: 'hgi-stroke hgi-logout-03',
          serverTerminal: 'hgi-stroke hgi-software-license',
          serverFiles: 'hgi-stroke hgi-folder-03',
          serverDatabases: 'hgi-stroke hgi-database-02',
          serverSchedules: 'hgi-stroke hgi-calendar-03',
          serverUsers: 'hgi-stroke hgi-user-group',
          serverBackups: 'hgi-stroke hgi-cloud-upload',
          serverNetwork: 'hgi-stroke hgi-cellular-network',
          serverStartup: 'hgi-stroke hgi-plug-socket',
          serverSettings: 'hgi-stroke hgi-settings-05',
          serverActivity: 'hgi-stroke hgi-book-02',
          serverMore: 'hgi-stroke hgi-more-vertical',
          accountAccount: 'hgi-stroke hgi-user-edit-01',
          accountApi: 'hgi-stroke hgi-api',
          accountSsh: 'hgi-stroke hgi-biometric-access',
          accountActivity: 'hgi-stroke hgi-book-02',
          accountMore: 'hgi-stroke hgi-more-vertical',
        },
      };
    case 'bootstrap':
    default:
      return {
        cssUrl: 'https://cdn.nebula.style/icons/bootstrap/bootstrap-icons.css',
        scale: '30px',
        wideTopMargin: 'unset',
        icons: {
          home: 'bi bi-exclude',
          admin: 'bi bi-gear-wide-connected',
          account: 'bi bi-person-fill-gear',
          logout: 'bi bi-box-arrow-right',
          serverTerminal: 'bi bi-terminal',
          serverFiles: 'bi bi-folder2',
          serverDatabases: 'bi bi-database',
          serverSchedules: 'bi bi-calendar-week',
          serverUsers: 'bi bi-people',
          serverBackups: 'bi bi-disc',
          serverNetwork: 'bi bi-hdd-network',
          serverStartup: 'bi bi-plug',
          serverSettings: 'bi bi-gear',
          serverActivity: 'bi bi-clipboard-pulse',
          serverMore: 'bi bi-three-dots',
          accountAccount: 'bi bi-person-badge',
          accountApi: 'bi bi-braces-asterisk',
          accountSsh: 'bi bi-key',
          accountActivity: 'bi bi-clipboard-pulse',
          accountMore: 'bi bi-three-dots',
        },
      };
  }
}

export function buildThemeVariablesCss(cfg: NebulaConfig): string {
  const alpha = getTransparencyAlpha(cfg.dashboard_transparency);
  return `:root {
  --sidebarPrimary: ${cfg.palette_sidebar_1};
  --sidebarPrimaryHover: ${cfg.palette_sidebar_2};
  --sidebarSecondary: ${cfg.palette_sidebar_3};
  --sidebarSecondaryHover: ${cfg.palette_sidebar_4};
  --sidebarSecondaryActive: ${cfg.palette_sidebar_5};
  --sidebarSecondarySelected: ${cfg.palette_sidebar_6};
  --sidebarButtonActive: ${cfg.palette_sidebar_8};

  --pagePrimary: ${cfg.palette_dashboard_1};
  --pagePrimaryHover: ${cfg.palette_dashboard_2};
  --pageSecondary: ${cfg.palette_dashboard_3}${alpha};
  --pageSecondaryHover: ${cfg.palette_dashboard_4}${alpha};
  --pageSecondaryActive: ${cfg.palette_dashboard_5}${alpha};
  --pageSecondarySelected: ${cfg.palette_dashboard_6}${alpha};
  --pageButtonDefault: ${cfg.palette_dashboard_8};
  --pageButtonHover: ${cfg.palette_dashboard_9};

  --statusOffline: ${cfg.palette_status_offline};
  --statusError: ${cfg.palette_status_error};
  --statusStarting: ${cfg.palette_status_starting};
  --statusOnline: ${cfg.palette_status_online};

  --authA: ${cfg.palette_auth_1};
  --authB: ${cfg.palette_auth_2};
  --authC: ${cfg.palette_auth_3};
  --authD: ${cfg.palette_auth_4};
  --authE: ${cfg.palette_auth_5};
  --authF: ${cfg.palette_auth_6};
  --authG: ${cfg.palette_auth_7};
  --authH: ${cfg.palette_auth_8};

  --sidebarBackground: ${cfg.palette_sidebar_7};
  --pageBackground: ${cfg.palette_dashboard_7};

  --borderRadius: ${cfg.border_radius}px;
  --borderRadiusSidebar: ${cfg.sidebar_border_radius}px;
  --borderRadiusAuth: 16px;

  --patternSizeAuth: ${cfg.auth_background_magicsize}px;
  --patternSizeDashboard: ${cfg.background_magicsize}px;
}`;
}
