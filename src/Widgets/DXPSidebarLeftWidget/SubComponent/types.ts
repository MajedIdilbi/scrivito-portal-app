export interface NavigationItemObject {
  titleTranslationKey: string;
  path: string;
  iconName: string;
  exact?: boolean;
  featureFlags?: [string];
}
