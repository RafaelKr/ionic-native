import { Injectable } from '@angular/core';
import { Cordova, CordovaProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Wikitude
 * @description Wikitude SDK for Android and iOS
 *
 * @usage
 * ```typescript
 * import { Wikitude } from 'app/WikitudePlugin';
 * ```
 */
@Plugin({
  pluginName: 'Wikitude',
  plugin: 'com.wikitude.phonegap.WikitudePlugin',
  pluginRef: 'WikitudePlugin',
  repo: 'https://github.com/Wikitude/wikitude-cordova-plugin.git',
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Wikitude extends IonicNativePlugin {
  /**
   * This is the SDK Key, provided to you after you purchased the Wikitude SDK from http =//www.wikitude.com/store/.
   * You can obtain a free trial key at http =//www.wikitude.com/developer/licenses .
   */
  @CordovaProperty()
  _sdkKey: string;

  /**
   * The Wikitude SDK can run in different modes.
   *     * Geo means, that objects are placed at latitude/longitude positions.
   *     * 2DTracking means that only image recognition is used in the ARchitect World.
   * When your ARchitect World uses both, geo and ir, than set this value to "IrAndGeo". Otherwise, if the ARchitectWorld only needs image recognition, placing "IR" will require less features from the device and therefore, support a wider range of devices. Keep in mind that image recognition requires a dual core cpu to work satisfyingly.
   */
  @CordovaProperty()
  FeatureGeo: string;
  @CordovaProperty()
  FeatureImageTracking: string;
  @CordovaProperty()
  InstantTracking: string;

  /**
   * Start-up configuration: camera position (front or back).
   */
  @CordovaProperty()
  CameraPositionUndefined: number;
  @CordovaProperty()
  CameraPositionFront: number;
  @CordovaProperty()
  CameraPositionBack: number;

  /**
   * Start-up configuration: camera focus range restriction (for iOS only).
   */
  @CordovaProperty()
  CameraFocusRangeNone: number;
  @CordovaProperty()
  CameraFocusRangeNear: number;
  @CordovaProperty()
  CameraFocusRangeFar: number;

  /**
   * Use this function to check if the current device is capable of running ARchitect Worlds.
   * @param  {string[]} requiredFeatures  FeatureGeo | FeatureImageTracking | FeatureInstantTracking
   * @return {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  isDeviceSupported(requiredFeatures: string[]): Promise<any> {
    return;
  }

  /**
   * Use this function to check if the current device is capable of running ARchitect Worlds.
   * @param  {string[]} requiredFeatures  FeatureGeo | FeatureImageTracking | FeatureInstantTracking
   * @return {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  requestAccess(requiredFeatures: string[]): Promise<any> {
    return;
  }

  /**
   * Use this function to load an ARchitect World.
   * @param  {string}       architectWorldPath   The path to a local ARchitect world or to a ARchitect world on a server
   * @param  {string[]}     requiredFeatures     augmented reality features: a flags mask for enabling/disabling
   * @param  {any}          startupConfiguration represents the start-up configuration
   * @return {Promise<any>}
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  loadARchitectWorld(architectWorldPath: string, requiredFeatures: string[], startupConfiguration?: any): Promise<any> {
    return;
  }

  /**
   *  Use this function to stop the Wikitude SDK and to remove it from the screen.
   */
  @Cordova()
  close(): void {}

  /**
   *  Use this function to only hide the Wikitude SDK. All location and rendering updates are still active.
   */
  @Cordova()
  hide(): void {}

  /**
   *  Use this function to show the Wikitude SDK again if it was hidden before.
   */
  @Cordova()
  show(): void {}

  /**
   * Use this function to call JavaScript which will be executed in the context of the currently loaded ARchitect World.
   * @param {string} js The JavaScript that should be evaluated in the ARchitect View.
   */
  @Cordova()
  callJavaScript(js: string): void {}

  @Cordova({
    observable: true,
    clearFunction: 'close',
    clearWithArgs: false,
  })
  /**
   * Use this function to set a callback which will be invoked when the ARchitect World opens an architectsdk =// url.
   *  document.location = "architectsdk =//opendetailpage?id=9";
   * @return {Observable<any>} [description]
   */
  setOnUrlInvokeCallback(): Observable<any> {
    return;
  }

  @Cordova()
  setLocation(latitude: any, longitude: any, altitude: any, accuracy: any): void {}

  @Cordova({
    callbackOrder: 'reverse',
  })
  captureScreen(includeWebView: boolean, imagePathInBundleOrNullForPhotoLibrary: string): Promise<any> {
    return;
  }

  @Cordova()
  setErrorHandler(errorHandler: (message: string) => void): void {}

  @Cordova()
  setDeviceSensorsNeedCalibrationHandler(startCalibrationHandler: (message: string) => void): void {}

  @Cordova()
  setDeviceSensorsFinishedCalibrationHandler(finishedCalibrationHandler: (message: string) => void): void {}

  /**
   * Use this function to set a callback that is called every time the back button is pressed while the Wikitude Cordova Plugin is presented.
   *
   * Note: The function is only implemented for Android!
   */
  @Cordova({
    observable: true,
    clearFunction: 'close',
    clearWithArgs: false,
  })
  setBackButtonCallback(): Observable<void> {
    return;
  }

  /**
   *  Use this function to get information about the sdk build.
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  getSDKBuildInformation(): Promise<any> {
    return;
  }

  /**
   * Use this function to get the version of the sdk.
   */
  @Cordova({
    callbackOrder: 'reverse',
  })
  getSDKVersion(): Promise<any> {
    return;
  }

  /**
   * Use this function to open the application specific system setting view.
   */
  @Cordova()
  openAppSettings(): void {}

  /* Lifecycle updates */

  /**
   * This function gets called every time the application did become active.
   */
  @Cordova()
  onResume(): void {}
  /**
   * This function gets called every time the application did become active.
   */
  @Cordova()
  onBackButton(): void {}
  /**
   * This function gets called every time the application is about to become inactive.
   */
  @Cordova()
  onPause(): void {}

  /**
   * A generic success callback used inside this wrapper.
   */
  @Cordova()
  onWikitudeOK(): void {}
  /**
   * A generic error callback used inside this wrapper.
   */
  @Cordova()
  onWikitudeError(): void {}
}
