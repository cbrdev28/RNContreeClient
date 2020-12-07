/**
 * This file wraps the AsyncStorage from React Native
 * and provide an API for our app to locally store data
 *
 * The AsyncStorage we use can only store `strings` or
 * object that can be serialized:
 * https://react-native-async-storage.github.io/async-storage/docs/usage
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

export namespace LocalStorage {
  export enum Keys {
    apolloServerUri = 'apolloServerUri',
  }

  export async function set(key: Keys, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error('LocalStorage unable to store: ' + e);
    }
  }

  export async function get(key: Keys) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.error('LocalStorage unable to fetch: ' + e);
    }
  }
}
