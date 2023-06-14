// Copyright 2021 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Base namespace for the Closure library.  Checks to see goog is already
 * defined in the current scope before assigning to prevent clobbering if
 * base.js is loaded more than once.
 *
 * @const
 */
var j2wasm = {};

/**
 * Instantiates a web assembly module passing the necessary imports and any
 * additional import the user might need to provide for their application.
 *
 * @param {string|!Promise<!Response>} urlOrResponse
 * @param {?Object<string, !Function>=} userImports
 * @return {!Promise<!WebAssembly.Instance>}
 */
j2wasm.instantiateStreaming = function(urlOrResponse, userImports) {}

/**
 * Instantiates a web assembly module passing the specified imports.
 *
 * @param {string|!Promise<!Response>} urlOrResponse
 * @param {?Object<string, !Function>=} imports
 * @return {!Promise<!WebAssembly.Instance>}
 */
j2wasm.instantiateStreamingOverridingImports = function(urlOrResponse, imports) {}

/**
 * Instantiates a web assembly module passing the necessary imports and any
 * additional import the user might need to provide for their application.
 *
 * Use of this function is discouraged. Many browsers require when calling the
 * WebAssembly constructor that the number of bytes of the module is under a
 * small threshold, mandating the async functions for all non-trivial apps. This
 * function can be used in other contexts, such as the D8 command line.
 *
 * @param {!BufferSource} moduleObject
 * @param {?Object<string, !Function>=} userImports
 * @return {!WebAssembly.Instance}
 */
j2wasm.instantiateBlocking = function(moduleObject, userImports) {}

/**
 * Instantiates a web assembly module passing the specified imports.
 *
 * Use of this function is discouraged. Many browsers require when calling the
 * WebAssembly constructor that the number of bytes of the module is under a
 * small threshold, mandating the async functions for all non-trivial apps. This
 * function can be used in other contexts, such as the D8 command line.
 *
 * @param {!BufferSource} moduleObject
 * @param {?Object<string, !Function>=} imports
 * @return {!WebAssembly.Instance}
 */
j2wasm.instantiateBlockingOverridingImports = function(moduleObject, imports) {}

/**
 * @param {?Object<string, !Function>=} userImports
 * @return {?Object<string, !Function>=} Wasm import object
 */
j2wasm.createImportObject = function(userImports) {}
