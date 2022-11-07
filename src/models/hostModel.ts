import ThemeModel from './themeModel';

export default interface HostModel {
  theme: ThemeModel;
  google: {
    clientId: string;
    key: string;
    geocode: {
      url: string;
      key: string;
    };
  };
}
