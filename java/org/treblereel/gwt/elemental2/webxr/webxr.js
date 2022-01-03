/*
 * Copyright 2021 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Definitions for W3C's Web XR specification.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XRSystem
 * @externs
 */

/**
 * @const
 * @type {!XRSystem}
 */
Navigator.prototype.xr;

/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.xrCompatible;

/**
 * @record
 */
var XRSessionInit = function () { };

/**
  * @type {Array<string>}
  */
XRSessionInit.prototype.requiredFeatures;

/**
  * @type {Array<string>}
  */
XRSessionInit.prototype.optionalFeatures;

/**
 * @interface
 * @extends {EventTarget}
 */
var XRSystem = function () { };

/**
 * @param {string} mode
 * @return {Promise<boolean>}
 */
XRSystem.prototype.isSessionSupported = function (mode) { };

/**
 * @param {string} mode
 * @param {XRSessionInit=} opt_XRSessionInit
 * @return {Promise<XRSession>}
 */
XRSystem.prototype.requestSession = function (mode, opt_XRSessionInit) { };

/** @type {?function (Event)} */
XRSystem.prototype.ondevicechange;

/**
 * @record
 * @extends {EventInit}
 */
var XRSessionEventInit = function() {};

/**
 * @type {XRSession}
 */
XRSessionEventInit.prototype.session;

/**
 * @constructor
 * @extends {Event}
 * @param {string} type
 * @param {XRSessionEventInit=} eventInitDict
 */
var XRSessionEvent = function (type, eventInitDict) { };

/**
 * @const
 * @type {XRSession}
 */
XRSessionEvent.prototype.session;

/**
 * @record
 * @extends {EventInit}
 */
var XRInputSourceEventInit = function() {};

/**
 * @type {XRFrame}
 */
XRInputSourceEventInit.prototype.frame;

/**
 * @type {XRInputSource}
 */
XRInputSourceEventInit.prototype.inputSource;

/**
 * @constructor
 * @extends {Event}
 * @param {string} type
 * @param {XRInputSourceEventInit} eventInitDict
 */
var XRInputSourceEvent = function (type, eventInitDict) { };

/**
 * @const
 * @type {XRInputSource}
 */
XRInputSourceEvent.prototype.inputSource;

/**
 * @const
 * @type {XRFrame}
 */
XRInputSourceEvent.prototype.frame;

/**
 * @record
 * @extends {EventInit}
 */
var XRInputSourcesChangeEventInit = function() {};

/**
 * @type {XRSession}
 */
XRInputSourcesChangeEventInit.prototype.session;

/**
 * @type {Array<XRInputSource>}
 */
XRInputSourcesChangeEventInit.prototype.added;

/**
 * @type {Array<XRInputSource>}
 */
XRInputSourcesChangeEventInit.prototype.removed;

/**
 * @constructor
 * @extends {Event}
 * @param {string} type
 * @param {XRInputSourcesChangeEventInit} eventInitDict
 */
var XRInputSourcesChangeEvent = function (type, eventInitDict) { };

/**
 * @const
 * @type {Array<XRInputSource>}
 */
XRInputSourcesChangeEvent.prototype.added;

/**
 * @const
 * @type {Array<XRInputSource>}
 */
XRInputSourcesChangeEvent.prototype.removed;


/**
 * @record
 * @extends {EventInit}
 */
var XRReferenceSpaceEventInit = function() {};

/**
 * @type {XRRigidTransform?}
 */
XRReferenceSpaceEventInit.prototype.transform;

/**
 * @type {XRReferenceSpace}
 */
XRReferenceSpaceEventInit.prototype.referenceSpace;

/**
 * @constructor
 * @extends {Event}
 * @param {string} type
 * @param {XRReferenceSpaceEventInit} eventInitDict
 */
var XRReferenceSpaceEvent = function (type, eventInitDict) { };

/**
 * @const
 * @type {XRReferenceSpace}
 */
XRReferenceSpaceEvent.prototype.referenceSpace;

/**
 * @const
 * @type {XRRigidTransform?}
 */
XRReferenceSpaceEvent.prototype.transform;

/** @enum {string} */
// This is commented out since it has not been implemented.
// Uncomment once it is available.
//var XRSessionMode = {
//  IMMERSIVEAR: 'immersive-ar',
//  IMMERSIVEVR: 'immersive-vr',
//  INLINE: 'inline'
//};

/** @enum {string} */
// This is commented out since it has not been implemented.
// Uncomment once it is available.
//var XRVisibilityState = {
//  VISIBLE: 'visible',
//  VISIBLEBLURRED: 'visible-blurred',
//  HIDDEN: 'hidden'
//};

/**
* @interface
* @extends {EventTarget}
*/
var XRSession = function () { };

/**
 * @const
 * @type {string}
 */
XRSession.prototype.visibilityState;

/**
 * @const
 * @type {XRInputSourceArray}
 */
XRSession.prototype.inputSources;

/**
 * @const
 * @type {XRRenderState}
 */
XRSession.prototype.renderState;

/**
 * @param {XRRenderStateInit=} state
 * @return {undefined}
 */
XRSession.prototype.updateRenderState = function (state) { };

/**
 * @param {number} handle
 * @return {undefined}
 */
XRSession.prototype.cancelAnimationFrame = function (handle) { };

/**
* @return {Promise<void>}
*/
XRSession.prototype.end = function () { };

/** @type {?function (Event)} */ XRSession.prototype.onend;
/** @type {?function (Event)} */ XRSession.prototype.oninputsourceschange;
/** @type {?function (Event)} */ XRSession.prototype.onselect;
/** @type {?function (Event)} */ XRSession.prototype.onselectstart;
/** @type {?function (Event)} */ XRSession.prototype.onselectend;
/** @type {?function (Event)} */ XRSession.prototype.onsqueeze;
/** @type {?function (Event)} */ XRSession.prototype.onsqueezestart;
/** @type {?function (Event)} */ XRSession.prototype.onsqueezeend;
/** @type {?function (Event)} */ XRSession.prototype.onvisibilitychange;

/**
 * @typedef {function(number, XRFrame): undefined}
 */
var XRFrameRequestCallback;

/**
 * @param {!XRFrameRequestCallback} callback
 * @return {number}
 */
XRSession.prototype.requestAnimationFrame = function (callback) { }

/**
 * @param {string} referenceSpaceType
 * @return {Promise<XRReferenceSpace|XRBoundedReferenceSpace>}
 * @throws {!NotSupportedError}
 */
XRSession.prototype.requestReferenceSpace = function (referenceSpaceType) { };

/** @enum {string} */
// This is commented out since it has not been implemented.
// Uncomment once it is available.
//var XRReferenceSpaceType = {
//  BOUNDEDFLOOR: 'bounded-floor',
//  LOCAL: 'local',
//  LOCALFLOOR: 'local-floor',
//  UNBOUNDED: 'unbounded',
//  VIEWER: 'viewer'
//};

/** @enum {string} */
// This is commented out since it has not been implemented.
// Uncomment once it is available.
//var XRHandedness = {
//  NONE: 'none',
//  LEFT: 'left',
//  RIGHT: 'right',
//  };

/** @enum {string} */
// This is commented out since it has not been implemented.
// Uncomment once it is available.
//var XRTargetRayMode = {
//  GAZE: 'gaze',
//  TRACKEDPOINTER: 'tracked-pointer',
//  SCREEN: 'screen',
//  };

/**
* @interface
*/
var XRInputSource = function () { };

/**
 * @const
 * @type {XRSpace?}
 */
XRInputSource.prototype.gripSpace;

/**
 * @const
 * @type {string}
 */
XRInputSource.prototype.handedness;

/**
 * @const
 * @type {Array<string>}
 */
XRInputSource.prototype.profiles;

/**
 * @const
 * @type {string}
 */
XRInputSource.prototype.targetRayMode;

/**
 * @const
 * @type {XRSpace}
 */
XRInputSource.prototype.targetRaySpace;

/**
 * @interface
 * @extends {Iterable<XRInputSource>}
 */
var XRInputSourceArray = function () { };

/**
 * @const {number}
 */
XRInputSourceArray.prototype.length;

/**
* @interface
* @extends {EventTarget}
*/
var XRSpace = function () { };

/**
* @interface
* @extends {XRSpace}
*/
var XRReferenceSpace = function () { };

/**
 * @param {XRRigidTransform}  originOffset
 * @return {XRReferenceSpace}
 */
XRReferenceSpace.prototype.getOffsetReferenceSpace = function (originOffset) { };

/** @type {?function (Event)} */ XRReferenceSpace.prototype.onreset;

/**
* @interface
* @extends {XRReferenceSpace}
*/
var XRBoundedReferenceSpace = function () { };

/**
 * @const
 * @type {DOMPointReadOnly}
 */
XRBoundedReferenceSpace.prototype.boundsGeometry;

/**
 * @record
 * @struct
 */
var XRRenderStateInit = function () { };

/**
 * @type {XRWebGLLayer}
 */
XRRenderStateInit.prototype.baseLayer;

/**
 * @type {number}
 */
XRRenderStateInit.prototype.depthFar;

/**
 * @type {number}
 */
XRRenderStateInit.prototype.depthNear;

/**
 * @type {number}
 */
XRRenderStateInit.prototype.inlineVerticalFieldOfView;

/**
 * @type {Array<XRLayer>}
 */
XRRenderStateInit.prototype.layers;

/**
 * @constructor
 * @extends {DOMError}
 */
function NotSupportedError() { }

/**
 * @interface
 */
var XRPose = function () { };

/**
 * @const
 * @type {XRRigidTransform}
 */
XRPose.prototype.transform;

/**
 * @const
 * @type {boolean}
 */
XRPose.prototype.emulatedPosition;

/**
 * @const
 * @type {DOMPointReadOnly?}
 */
XRPose.prototype.linearVelocity;

/**
 * @const
 * @type {DOMPointReadOnly?}
 */
XRPose.prototype.angularVelocity;

/** @enum {string} */
// This is commented out since it has not been implemented.
// Uncomment once it is available.
//var XREye = {
//  NONE: 'none',
//  LEFT: 'left',
//  RIGHT: 'right',
//  };

/**
 * @interface
 */
var XRView = function () { };

/**
 * @const
 * @type {string}
 */
XRView.prototype.eye;

/**
 * @const
 * @type {Float32Array}
 */
XRView.prototype.transform;

/**
 * @const
 * @type {XRRigidTransform}
 */
XRView.prototype.projectionMatrix;

/**
 * @const
 * @type {number?}
 */
XRView.prototype.recommendedViewportScale;

/**
 * @param {number?} scale
 * @return {undefined}
 */
XRView.prototype.requestViewportScale = function(scale) {};

/**
 * @interface
 */
var XRViewerPose = function () { };

/**
 * @const
 * @type {Array<XRView>}
 */
XRViewerPose.prototype.views;

/**
 * @interface
 */
var XRViewport = function () { };

/**
 * @const
 * @type {number}
 */
XRViewport.prototype.x;

/**
 * @const
 * @type {number}
 */
XRViewport.prototype.y;

/**
 * @const
 * @type {number}
 */
XRViewport.prototype.width;

/**
 * @const
 * @type {number}
 */
XRViewport.prototype.height;

/**
* @interface
*/
var XRFrame = function () { };

/**
 * @const
 * @type {XRSession}
 */
XRFrame.prototype.session;

/**
 * @param {XRSpace} space
 * @param {XRSpace} baseSpace
 * @return {XRPose}
 */
XRFrame.prototype.getPose = function (space, baseSpace) { };

/**
 * @param {XRReferenceSpace} referenceSpace
 * @return {XRViewerPose}
 */
XRFrame.prototype.getViewerPose = function (referenceSpace) { };

/**
 * @const
 * @type {number}
 */
XRFrame.prototype.predictedDisplayTime;

/**
 * @interface
 * @extends {EventTarget}
 */
var XRLayer = function () { };

/**
 * @record
 */
var XRWebGLLayerInit = function () { };

/** @type {boolean} */ XRWebGLLayerInit.prototype.antialias;
/** @type {boolean} */ XRWebGLLayerInit.prototype.depth;
/** @type {boolean} */ XRWebGLLayerInit.prototype.stencil;
/** @type {boolean} */ XRWebGLLayerInit.prototype.alpha;
/** @type {boolean} */ XRWebGLLayerInit.prototype.ignoreDepthValues;
/** @type {number} */ XRWebGLLayerInit.prototype.framebufferScaleFactor;

/**
* @interface
*/
var XRRenderState = function () { };

/**
 * @const
 * @type {XRWebGLLayer}
 */
XRRenderState.prototype.baseLayer;

/**
 * @const
 * @type {number}
 */
XRRenderState.prototype.depthFar;

/**
 * @const
 * @type {number}
 */
XRRenderState.prototype.depthNear;

/**
 * @const
 * @type {number|null}
 */
XRRenderState.prototype.inlineVerticalFieldOfView;

/**
* @interface
*/
var XRViewport = function () { };

/**
 * @const
 * @type {number}
 */
XRViewport.prototype.height;

/**
 * @const
 * @type {number}
 */
XRViewport.prototype.width;

/**
 * @const
 * @type {number}
 */
XRViewport.prototype.x;

/**
 * @const
 * @type {number}
 */
XRViewport.prototype.y;

/**
 * @constructor
 * @param {XRSession} session
 * @param {WebGLRenderingContext} context
 * @param {XRWebGLLayerInit=} layerInit
 * @implements {XRLayer}
 */
var XRWebGLLayer = function (session, context, layerInit) { };

/** @override */
XRWebGLLayer.prototype.addEventListener = function(
    type, listener, opt_options) {};

/** @override */
XRWebGLLayer.prototype.removeEventListener = function(
    type, listener, opt_options) {};

/**
 * @const
 * @type {boolean}
 */
XRWebGLLayer.prototype.antialias;

/**
 * @const
 * @type {WebGLFramebuffer}
 */
XRWebGLLayer.prototype.framebuffer;

/**
 * @const
 * @type {number}
 */
XRWebGLLayer.prototype.framebufferWidth;

/**
 * @const
 * @type {number}
 */
XRWebGLLayer.prototype.framebufferHeight;

/**
 * @const
 * @type {boolean}
 */
XRWebGLLayer.prototype.ignoreDepthValues;

/**
 * @param {XRView} view
 * @return {XRViewport}
 */
XRWebGLLayer.prototype.getViewport = function (view) { };

/**
 * @static
 * @return {number}
 */
XRWebGLLayer.getNativeFramebufferScaleFactor = function () { };

/**
 * @constructor
 */
var XRRigidTransform = function () { };

/**
 * @const
 * @type {DOMPointReadOnly}
 */
XRRigidTransform.prototype.position;

/**
 * @const
 * @type {DOMPointReadOnly}
 */
XRRigidTransform.prototype.orientation;

/**
 * @const
 * @type {Float32Array}
 */
XRRigidTransform.prototype.matrix;

/**
 * @const
 * @type {XRRigidTransform}
 */
XRRigidTransform.prototype.inverse;

/**
 * @return {Promise<void>}
 */
WebGLRenderingContext.prototype.makeXRCompatible = function () { };

