import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-wifi-provisioning' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const WifiProvisioning = NativeModules.WifiProvisioning
  ? NativeModules.WifiProvisioning
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return WifiProvisioning.multiply(a, b);
}
