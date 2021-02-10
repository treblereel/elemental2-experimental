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
 * @type {!XRSystem}
 */
Navigator.prototype.xr;

/**
 * @interface
 * @extends {EventTarget}
 */
var XRSystem = function() {};

/**
 * @param {XRSessionMode} mode
 * @return  {Promise<boolean>}
 */
XRSystem.prototype.isSessionSupported = function(mode){};

/**
 * @param {XRSessionMode} mode
 * @return  {XRSession}
 */
XRSystem.prototype.requestSession = function(mode){};


/**
 * @enum
 */
var XRSessionMode = {
  IMMERSIVEAR: 'immersive-ar', 
  IMMERSIVEVR: 'immersive-vr', 
  INLINE: 'inline'
  };

 /**
 * @interface
 * @extends {EventTarget}
 */ 
 var XRSession = function() {};