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
 * @fileoverview Definitions for W3C's WebGPU specification.
 * @see https://www.w3.org/TR/webgpu
 * @externs
 */

/**
 * @const
 * @type {!GPU}
 * @see https://www.w3.org/TR/webgpu/#navigatorgpu
 */
Navigator.prototype.gpu;

/**
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpucanvascontext
 */
var GPUCanvasContext = function() {};

/**
 * @const {HTMLCanvasElement|OffscreenCanvas}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucanvascontext-canvas
 */
GPUCanvasContext.prototype.canvas;

/**
 * @param {!GPUCanvasConfiguration} configuration
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucanvascontext-configure
 */
GPUCanvasContext.prototype.configure = function(configuration) {}
/**
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucanvascontext-unconfigure
 */
GPUCanvasContext.prototype.unconfigure = function() {}

/**
 * @param {!GPUAdapter} adapter
 * @return {!string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucanvascontext-getcurrenttexture
 */
GPUCanvasContext.prototype.getPreferredFormat = function(adapter) {}

/**
 * @return {!GPUTexture}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucanvascontext-getcurrenttexture
 */
GPUCanvasContext.prototype.getCurrentTexture = function() {}

/**
 * @record
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpucanvasconfiguration
 */
var GPUCanvasConfiguration = function() {};

/**
 * @type {!GPUDevice}
 * @see https://www.w3.org/TR/webgpu/#gpudevice
 */
GPUCanvasConfiguration.prototype.device;

/**
 * @type {GPUTextureFormat}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gputextureformat
 */
GPUCanvasConfiguration.prototype.format;

/**
 * @type {GPUTextureUsageFlags}
 * @see https://www.w3.org/TR/webgpu/#typedefdef-gputextureusageflags
 */
GPUCanvasConfiguration.prototype.usage;

/**
 * @type {Array<GPUTextureUsageFlags>}
 * @see https://www.w3.org/TR/webgpu/#canvas-configuration
 */
GPUCanvasConfiguration.prototype.viewFormats;

/**
 * @type {GPUPredefinedColorSpace}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gpupredefinedcolorspace
 */
GPUCanvasConfiguration.prototype.colorSpace;

/**
 * @type {GPUCanvasCompositingAlphaMode}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gpucanvascompositingalphamode
 */
GPUCanvasConfiguration.prototype.compositingAlphaMode;

/**
 * @type {GPUExtent3D}
 * @see https://www.w3.org/TR/webgpu/#typedefdef-gpuextent3d
 */
GPUCanvasConfiguration.prototype.size;

/**
 * @record
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpurequestadapteroptions
 */
var GPURequestAdapterOptions = function() {};

/**
 * @type {GPUPowerPreference}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gpupowerpreference
 */
GPURequestAdapterOptions.prototype.powerPreference;

/**
 * @type {boolean}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurequestadapteroptions-forcefallbackadapter
 */
GPURequestAdapterOptions.prototype.forceFallbackAdapter;

/**
 * @constructor
 * @protected
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuobjectdescriptorbase
 */
var GPUObjectDescriptorBase = function() {};

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuobjectdescriptorbase-label
 */
GPUObjectDescriptorBase.prototype.label

/**
 *
 * @constructor
 * @protected
 * @extends {GPUObjectDescriptorBase}
 */
var GPUQueueDescriptor = function() {};

/**
 * @constructor
 * @protected
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpupipelinedescriptorbase
 */
var GPUPipelineDescriptorBase = function() {};

/**
 * @type {GPUPipelineLayout|GPUAutoLayoutMode}
 * @see https://www.w3.org/TR/webgpu/#dom-gpupipelinedescriptorbase-layout
 */
GPUPipelineDescriptorBase.prototype.layout

/**
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpu
 */
var GPU = function() {};

/**
 * @param {GPURequestAdapterOptions=} opt_GPURequestAdapterOptions
 * @return {Promise<GPUAdapter>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpu-requestadapter
 */
GPU.prototype.requestAdapter = function (opt_GPURequestAdapterOptions) {};

/**
 * @constructor
 * @private
 * @see https://www.w3.org/TR/webgpu/#gpusupportedfeatures
 */
var GPUSupportedFeatures = function() {};

/** @const {number} */
GPUSupportedFeatures.prototype.size;

/**
 * @param {!string} value
 * @return {!boolean}
 */
GPUSupportedFeatures.prototype.has = function(value) {}

/**
 * @return {!Iterator<!string>}
 */
GPUSupportedFeatures.prototype.keys = function() {}

/**
 * @return {!Iterator<!string>}
 */
GPUSupportedFeatures.prototype.values = function() {}

/**
 * @return {!Iterator<!Array<!string|!string>>}
 */
GPUSupportedFeatures.prototype.entries = function() {};

/**
 * @return {!Iterator<!Array<!string|!string>>}
 */
GPUSupportedFeatures.prototype[Symbol.iterator] = function() {};

/**
 * @param {function(!string, !string, MAP)} callback
 * @this {MAP}
 * @template MAP
 */
GPUSupportedFeatures.prototype.forEach = function(callback) {};

/**
 * @constructor
 * @private
 * @see https://www.w3.org/TR/webgpu/#gpusupportedlimits
 */
var GPUSupportedLimits = function() {};

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxtexturedimension1d
 */
 GPUSupportedLimits.prototype.maxTextureDimension1D;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxtexturedimension2d
 */
 GPUSupportedLimits.prototype.maxTextureDimension2D;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxtexturedimension3d
 */
 GPUSupportedLimits.prototype.maxTextureDimension3D;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxtexturearraylayers
 */
 GPUSupportedLimits.prototype.maxTextureArrayLayers;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxdynamicuniformbuffersperpipelinelayout
 */
 GPUSupportedLimits.prototype.maxDynamicUniformBuffersPerPipelineLayout;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxdynamicstoragebuffersperpipelinelayout
 */
 GPUSupportedLimits.prototype.maxDynamicStorageBuffersPerPipelineLayout;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxsampledtexturespershaderstage
 */
 GPUSupportedLimits.prototype.maxSampledTexturesPerShaderStage;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxsamplerspershaderstage
 */
 GPUSupportedLimits.prototype.maxSamplersPerShaderStage;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxstoragebufferspershaderstage
 */
 GPUSupportedLimits.prototype.maxStorageBuffersPerShaderStage;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxstoragetexturespershaderstage
 */
 GPUSupportedLimits.prototype.maxStorageTexturesPerShaderStage;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxuniformbufferspershaderstage
 */
 GPUSupportedLimits.prototype.maxUniformBuffersPerShaderStage;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxuniformbufferbindingsize
 */
 GPUSupportedLimits.prototype.maxUniformBufferBindingSize;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxstoragebufferbindingsize
 */
 GPUSupportedLimits.prototype.maxStorageBufferBindingSize;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxvertexbuffers
 */
 GPUSupportedLimits.prototype.maxVertexBuffers;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxvertexattributes
 */
 GPUSupportedLimits.prototype.maxVertexAttributes;

/**
 * @const
 * @type {!number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxvertexbufferarraystride
 */
 GPUSupportedLimits.prototype.maxVertexBufferArrayStride;

/**
 * @constructor
 * @private
 * @see https://www.w3.org/TR/webgpu/#gpuadapter
 */
var GPUAdapter = function() {};

/**
 * @const {!string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuadapter-name
 */
GPUAdapter.prototype.name;

/**
 * @const
 * @type {GPUSupportedFeatures}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuadapter-features
 */
GPUAdapter.prototype.features;

/**
 * @const
 * @type {GPUSupportedLimits}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuadapter-limits
 */
GPUAdapter.prototype.limits;

/**
 * @const
 * @type {boolean}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuadapter-isfallbackadapter
 */
GPUAdapter.prototype.isFallbackAdapter;

/**
 * @param {GPUDeviceDescriptor=} opt_GPUDeviceDescriptor
 * @return {Promise<GPUDevice>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuadapter-requestdevice
 */
GPUAdapter.prototype.requestDevice = function (opt_GPUDeviceDescriptor) { };

/**
 * @constructor
 * @private
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#gpudevicedescriptor
 */
var GPUDeviceDescriptor = function() {};

/**
 * @type {Array<GPUFeatureName>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevicedescriptor-requiredfeatures
 */
GPUDeviceDescriptor.prototype.requiredFeatures;

/**
 * @type {Map<string, GPUSize64>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevicedescriptor-requiredlimits
 */
GPUDeviceDescriptor.prototype.requiredLimits;

/**
 * @type {GPUQueueDescriptor}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevicedescriptor-defaultqueue
 */
GPUDeviceDescriptor.prototype.defaultQueue

/**
 * @interface
 * @extends {EventTarget}
 * @see https://www.w3.org/TR/webgpu/#gpudevice
 */
var GPUDevice = function() {};

/**
 * @const
 * @type {GPUSupportedFeatures}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-features
 */
GPUDevice.prototype.features;

/**
 * @const
 * @type {GPUSupportedLimits}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-limits
 */
GPUDevice.prototype.limits;

/**
 * @const
 * @type {GPUQueue}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-queue
 */
GPUDevice.prototype.queue;

/**
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-destroy
 */
GPUDevice.prototype.destroy = function() {};

/**
 * @param {GPUBufferDescriptor} descriptor
 * @return {GPUBuffer}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createbuffer
 */
GPUDevice.prototype.createBuffer = function(descriptor) {};

/**
 * @param {GPUTextureDescriptor} descriptor
 * @return {GPUTexture}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createtexture
 */
GPUDevice.prototype.createTexture = function(descriptor) {};

/**
 * @param {GPUSamplerDescriptor=} descriptor
 * @return {GPUSampler}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createsampler
 */
GPUDevice.prototype.createSampler = function(descriptor) {};

/**
 * @param {GPUExternalTextureDescriptor} descriptor
 * @return {GPUExternalTexture}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-importexternaltexture
 */
GPUDevice.prototype.importExternalTexture = function(descriptor) {};

/**
 * @param {GPUBindGroupLayoutDescriptor} descriptor
 * @return {GPUBindGroupLayout}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createbindgrouplayout
 */
GPUDevice.prototype.createBindGroupLayout = function(descriptor) {};

/**
 * @param {GPUPipelineLayoutDescriptor} descriptor
 * @return {GPUPipelineLayout}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createpipelinelayout
 */
GPUDevice.prototype.createPipelineLayout = function(descriptor) {};

/**
 * @param {GPUBindGroupDescriptor} descriptor
 * @return {GPUBindGroup}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createbindgroup
 */
GPUDevice.prototype.createBindGroup = function(descriptor) {};

/**
 * @param {GPUShaderModuleDescriptor} descriptor
 * @return {GPUShaderModule}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createshadermodule
 */
GPUDevice.prototype.createShaderModule = function(descriptor) {};

/**
 * @param {GPUComputePipelineDescriptor} descriptor
 * @return {GPUComputePipeline}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createcomputepipeline
 */
GPUDevice.prototype.createComputePipeline = function(descriptor) {};

/**
 * @param {GPURenderPipelineDescriptor} descriptor
 * @return {GPURenderPipeline}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createrenderpipeline
 */
GPUDevice.prototype.createRenderPipeline = function(descriptor) {};

/**
 * @param {GPUComputePipelineDescriptor} descriptor
 * @return {Promise<GPUComputePipeline>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createcomputepipelineasync
 */
GPUDevice.prototype.createComputePipelineAsync = function(descriptor) {};

/**
 * @param {GPURenderPipelineDescriptor} descriptor
 * @return {Promise<GPURenderPipeline>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createrenderpipelineasync
 */
GPUDevice.prototype.createRenderPipelineAsync = function(descriptor) {};

/**
 * @param {GPUCommandEncoderDescriptor=} descriptor
 * @return {GPUCommandEncoder}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createcommandencoder
 */
GPUDevice.prototype.createCommandEncoder = function(descriptor) {};

/**
 * @param {GPURenderBundleEncoderDescriptor} descriptor
 * @return {GPURenderBundleEncoder}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createrenderbundleencoder
 */
GPUDevice.prototype.createRenderBundleEncoder = function(descriptor) {};

/**
 * @param {GPUQuerySetDescriptor} descriptor
 * @return {GPUQuerySet}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createqueryset
 */
GPUDevice.prototype.createQuerySet = function(descriptor) {};

/**
 * @typedef {{r:!number,g:!number,b:!number,a:!number}}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpucolordict
 */
var GPUColorDict = function() {};

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuorigin2ddict
 */
var GPUOrigin2DDict = function() {};

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuorigin2ddict-x
 */
GPUOrigin2DDict.prototype.x

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuorigin2ddict-y
 */
GPUOrigin2DDict.prototype.y

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuorigin3ddict
 */
var GPUOrigin3DDict = function() {};

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuorigin3ddict-x
 */
GPUOrigin3DDict.prototype.x

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuorigin3ddict-y
 */
GPUOrigin3DDict.prototype.y

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuorigin3ddict-z
 */
GPUOrigin3DDict.prototype.z

/**
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpubufferusage
 */
var GPUBufferUsage = function() {}

/**
 * @const
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferusage-map_read
 */
GPUBufferUsage.MAP_READ;

/**
 * @const
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferusage-map_write
 */
GPUBufferUsage.MAP_WRITE;

/**
 * @const
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferusage-copy_src
 */
GPUBufferUsage.COPY_SRC;

/**
 * @const
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferusage-copy_dst
 */
GPUBufferUsage.COPY_DST;

/**
 * @const
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferusage-index
 */
GPUBufferUsage.INDEX;

/**
 * @const
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferusage-vertex
 */
GPUBufferUsage.VERTEX;

/**
 * @const
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferusage-uniform
 */
GPUBufferUsage.UNIFORM;

/**
 * @const
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferusage-storage
 */
GPUBufferUsage.STORAGE;

/**
 * @const
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferusage-indirect
 */
GPUBufferUsage.INDIRECT;

/**
 * @const
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferusage-query_resolve
 */
GPUBufferUsage.QUERY_RESOLVE;

/**
 * @constructor
 * @private
 * @see https://www.w3.org/TR/webgpu/#gpuqueue
 */
var GPUQueue = function() {};

/**
 * @type {string}
 * */
GPUQueue.prototype.label;

/**
 * @param {Array<GPUCommandBuffer>} commandBuffers
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuqueue-submit
 */
GPUQueue.prototype.submit = function(commandBuffers) {};

/**
 * @return {Promise<undefined>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuqueue-onsubmittedworkdone
 */
GPUQueue.prototype.onSubmittedWorkDone = function() {};

/**
 * @param {GPUBuffer} buffer
 * @param {GPUSize64} bufferOffset
 * @param {BufferSource} data
 * @param {GPUSize64=} dataOffset
 * @param {GPUSize64=} size
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuqueue-writebuffer
 */
GPUQueue.prototype.writeBuffer = function(buffer, bufferOffset, data, dataOffset, size) {};

/**
 * @param {GPUImageCopyTexture} destination
 * @param {BufferSource} data
 * @param {GPUImageDataLayout} dataLayout
 * @param {GPUExtent3D} size
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuqueue-writetexture
 */
GPUQueue.prototype.writeTexture = function(destination, data, dataLayout, size) {};

/**
 * @param {GPUImageCopyExternalImage} source
 * @param {GPUImageCopyTexture} destination
 * @param {Array<number>|GPUExtent3DDict} copySize
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuqueue-copyexternalimagetotexture
 */
GPUQueue.prototype.copyExternalImageToTexture = function(source, destination, copySize) {};

/**
 * @constructor
 * @private
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpubuffer
 */
var GPUBuffer = function() {};

/**
 * @param {GPUFlagsConstant} mode
 * @param {GPUSize64=} offset
 * @param {GPUSize64=} size
 * @return {Promise<undefined>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubuffer-mapasync
 */
GPUBuffer.prototype.mapAsync = function(mode, offset, size) {};

/**
 * @param {GPUSize64=} offset
 * @param {GPUSize64=} size
 * @return {ArrayBuffer}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubuffer-getmappedrange
 */
GPUBuffer.prototype.getMappedRange = function(offset, size) {};

/**
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubuffer-unmap
 */
GPUBuffer.prototype.unmap = function() {};

/**
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubuffer-destroy
 */
GPUBuffer.prototype.destroy = function() {};

/**
 * @constructor
 * @protected
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpubufferdescriptor
 */
var GPUBufferDescriptor = function() {};

/**
 * @type {GPUSize64}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferdescriptor-size
 */
GPUBufferDescriptor.prototype.size;

/**
 * @type {GPUBufferUsageFlags}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferdescriptor-usage
 */
GPUBufferDescriptor.prototype.usage;

/**
 * @type {boolean}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferdescriptor-mappedatcreation
 */
GPUBufferDescriptor.prototype.mappedAtCreation;

/**
 * @constructor
 * @private
 * @see https://www.w3.org/TR/webgpu/#gputexture
 */
var GPUTexture = function() {};

/**
 * @type {string}
 */
GPUTexture.prototype.label;

/**
 * @param {GPUTextureViewDescriptor=} descriptor
 * @return {GPUTextureView}
 * @see https://www.w3.org/TR/webgpu/#dom-gputexture-createview
 */
GPUTexture.prototype.createView = function(descriptor) {};

/**
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gputexture-destroy
 */
GPUTexture.prototype.destroy = function() {};

/**
 * @constructor
 * @protected
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpusamplerdescriptor
 */
var GPUSamplerDescriptor = function() {};

/**
 * @type {GPUAddressMode}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-addressmodeu
 */
GPUSamplerDescriptor.prototype.addressModeU;

/**
 * @type {GPUAddressMode}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-addressmodev
 */
GPUSamplerDescriptor.prototype.addressModeV;

/**
 * @type {GPUAddressMode}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-addressmodew
 */
GPUSamplerDescriptor.prototype.addressModeW;

/**
 * @type {GPUFilterMode}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-magfilter
 */
GPUSamplerDescriptor.prototype.magFilter;

/**
 * @type {GPUFilterMode}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-minfilter
 */
GPUSamplerDescriptor.prototype.minFilter;

/**
 * @type {GPUMipmapFilterMode}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-mipmapfilter
 */
 GPUSamplerDescriptor.prototype.mipmapFilter;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-lodminclamp
 */
GPUSamplerDescriptor.prototype.lodMinClamp;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-lodmaxclamp
 */
GPUSamplerDescriptor.prototype.lodMaxClamp;

/**
 * @type {GPUCompareFunction}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-compare
 */
GPUSamplerDescriptor.prototype.compare;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-maxanisotropy
 */
GPUSamplerDescriptor.prototype.maxAnisotropy;

/**
 * @constructor
 * @private
 * @see https://www.w3.org/TR/webgpu/#gpusampler
 */
var GPUSampler = function() {};

/**
 * @type {string}
 */
GPUSampler.prototype.label;

/**
 * @constructor
 * @private
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpubindgrouplayout
 */
var GPUBindGroupLayout = function() {};

/**
 * @constructor
 * @private
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpubindgrouplayoutdescriptor
 */
var GPUBindGroupLayoutDescriptor = function() {};

/**
 * @type {Array<GPUBindGroupLayoutEntry>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgrouplayoutdescriptor-entries
 */
GPUBindGroupLayoutDescriptor.prototype.entries;

/**
 * @constructor
 * @private
 * @see https://www.w3.org/TR/webgpu/#gpushaderstage
 */
var GPUShaderStage = function() {};

/**
 * @type {GPUFlagsConstant}
 * @see https://www.w3.org/TR/webgpu/#dom-gpushaderstage-vertex
 */
GPUShaderStage.prototype.VERTEX;

/**
 * @type {GPUFlagsConstant}
 * @see https://www.w3.org/TR/webgpu/#dom-gpushaderstage-fragment
 */
GPUShaderStage.prototype.FRAGMENT;

/**
 * @type {GPUFlagsConstant}
 * @see https://www.w3.org/TR/webgpu/#dom-gpushaderstage-compute
 */
GPUShaderStage.prototype.COMPUTE;

/**
 * @constructor
 * @private
 * @see https://www.w3.org/TR/webgpu/#gpubindgroup
 */
var GPUBindGroup = function() {};

/**
 * @type {string}
 */
GPUBindGroup.prototype.label;

/**
 * @constructor
 * @private
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpubindgroupdescriptor
 */
var GPUBindGroupDescriptor = function() {};

/**
 * @type {GPUBindGroupLayout}
 * @override
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgroupdescriptor-layout
 */
GPUBindGroupDescriptor.prototype.layout;

/**
 * @type {Array<GPUBindGroupEntry>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgroupdescriptor-entries
 */
GPUBindGroupDescriptor.prototype.entries;

/**
 * @constructor
 * @private
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpubindgroupentry
 */
var GPUBindGroupEntry = function() {};

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgroupentry-binding
 */
GPUBindGroupEntry.prototype.binding;

/**
 * @type {GPUBindingResource}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgroupentry-resource
 */
GPUBindGroupEntry.prototype.resource;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpubindgrouplayoutentry
 */
var GPUBindGroupLayoutEntry = function() {};

/**
 * @type {GPUIndex32}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgrouplayoutentry-binding
 */
GPUBindGroupLayoutEntry.prototype.binding;

/**
 * @type {GPUShaderStageFlags}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgrouplayoutentry-visibility
 */
GPUBindGroupLayoutEntry.prototype.visibility;

/**
 * @type {GPUBufferBindingLayout}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgrouplayoutentry-buffer
 */
GPUBindGroupLayoutEntry.prototype.buffer;

/**
 * @type {GPUSamplerBindingLayout}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgrouplayoutentry-sampler
 */
GPUBindGroupLayoutEntry.prototype.sampler;

/**
 * @type {GPUTextureBindingLayout}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgrouplayoutentry-texture
 */
GPUBindGroupLayoutEntry.prototype.texture;

/**
 * @type {GPUStorageTextureBindingLayout}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgrouplayoutentry-storagetexture
 */
GPUBindGroupLayoutEntry.prototype.storageTexture;

/**
 * @type {GPUExternalTextureBindingLayout}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgrouplayoutentry-externaltexture
 */
GPUBindGroupLayoutEntry.prototype.externalTexture;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpubufferbinding
 */
var GPUBufferBinding = function() {};

/**
 * @type {GPUBuffer}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferbinding-buffer
 */
GPUBufferBinding.prototype.buffer;

/**
 * @type {GPUSize64}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferbinding-offset
 */
GPUBufferBinding.prototype.offset;

/**
 * @type {GPUSize64}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferbinding-size
 */
GPUBufferBinding.prototype.size;

/**
 * @constructor
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpupipelinelayoutdescriptor
 */
var GPUPipelineLayoutDescriptor = function() {};

/**
 * @type {Array<GPUBindGroupLayout>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpupipelinelayoutdescriptor-bindgrouplayouts
 */
GPUPipelineLayoutDescriptor.prototype.bindGroupLayouts;

/**
 * @constructor
 * @private
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpupipelinelayout
 */
var GPUPipelineLayout = function() {};

/**
 * @constructor
 * @private
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#gpushadermodule
 */
var GPUShaderModule = function() {};

/**
 * @return {Promise<GPUCompilationInfo>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpushadermodule-compilationinfo
 */
GPUShaderModule.prototype.compilationInfo = function() {};

/**
 * @typedef {{code:!string,hints:(!Object<!string,!GPUShaderModuleCompilationHint>|undefined),sourceMap:(!Object|undefined),label:(!string|undefined)}}
 */
var GPUShaderModuleDescriptor = function() {};

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpushadermodulecompilationhint
 */
var GPUShaderModuleCompilationHint = function () {};

/**
 * @type {GPUPipelineLayout}
 * @see https://www.w3.org/TR/webgpu/#dom-gpushadermoduledescriptor-sourcemap
 */
GPUShaderModuleCompilationHint.prototype.layout;

/**
 * @constructor
 * @private
 * @see https://www.w3.org/TR/webgpu/#gpucompilationmessage
 */
var GPUCompilationMessage = function() {};

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucompilationmessage-message
 */
GPUCompilationMessage.prototype.message;

/**
 * @type {GPUCompilationMessageType}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucompilationmessage-type
 */
GPUCompilationMessage.prototype.type;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucompilationmessage-linenum
 */
GPUCompilationMessage.prototype.lineNum;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucompilationmessage-linepos
 */
GPUCompilationMessage.prototype.linePos;

/**
 * @return {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucompilationmessage-offset
 */
GPUCompilationMessage.prototype.offset;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucompilationmessage-length
 */
GPUCompilationMessage.prototype.length;

/**
 * @constructor
 * @private
 * @see https://www.w3.org/TR/webgpu/#gpucompilationinfo
 */
var GPUCompilationInfo = function() {};

/**
 * @const {Array<GPUCompilationMessage>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucompilationinfo-messages
 */
GPUCompilationInfo.prototype.messages;

/**
 * @constructor
 * @private
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuexternaltexturedescriptor
 */
var GPUExternalTextureDescriptor = function() {};

/**
 * @type {HTMLVideoElement}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuexternaltexturedescriptor-source
 */
GPUExternalTextureDescriptor.prototype.source;

/**
 * @type {GPUPredefinedColorSpace}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuexternaltexturedescriptor-colorspace
 */
GPUExternalTextureDescriptor.prototype.colorSpace;

/**
 * @constructor
 * @private
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpuexternaltexture
 */
var GPUExternalTexture = function() {};

/**
 * @type {boolean}
 * @see https://www.w3.org/TR/webgpu/#gpuexternaltexture
 */
GPUExternalTexture.prototype.expired;

/**
 * @constructor
 * @extends {GPUPipelineDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpucomputepipelinedescriptor
 */
var GPUComputePipelineDescriptor = function() {};

/**
 * @type {GPUProgrammableStage}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucomputepipelinedescriptor-compute
 */
GPUComputePipelineDescriptor.prototype.compute;

/**
 * @constructor
 * @extends {GPUPipelineDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuprogrammablestage
 */
var GPUProgrammableStage = function() {};

/**
 * @type {GPUShaderModule}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuprogrammablestage-module
 */
GPUProgrammableStage.prototype.module;

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuprogrammablestage-entrypoint
 */
GPUProgrammableStage.prototype.entryPoint;

/**
 * @type {!Object<!string,!GPUPipelineConstantValue>|undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuprogrammablestage-entrypoint
 */
GPUProgrammableStage.prototype.constants;

/**
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpupipelinebase
 */
var GPUPipelineBase = function() {};

/**
 * @param {number} index
 * @return {GPUBindGroupLayout}
 * @see https://www.w3.org/TR/webgpu/#dom-gpupipelinebase-getbindgrouplayout
 */
GPUPipelineBase.prototype.getBindGroupLayout = function(index) {};

/**
 * @constructor
 * @extends {GPUObjectBase}
 * @implements {GPUPipelineBase}
 * @see https://www.w3.org/TR/webgpu/#gpucomputepipeline
 */
var GPUComputePipeline = function() {};

/**
 * @constructor
 * @extends {GPUObjectBase}
 * @implements {GPUPipelineBase}
 * @see https://www.w3.org/TR/webgpu/#gpurenderpipeline
 */
var GPURenderPipeline = function() {};

/**
 * @typedef {{vertex:!GPUVertexState,depthStencil:(!GPUDepthStencilState|undefined),fragment:(!GPUFragmentState|undefined),multisample:(!GPUMultisampleState|undefined),primitive:(!GPUPrimitiveState|undefined),layout:(!GPUPipelineLayout|undefined),label:(!string|undefined)}}
 */
var GPURenderPipelineDescriptor = function() {};

/**
 * @constructor
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpucommandencoderdescriptor
 */
var GPUCommandEncoderDescriptor = function() {};

/**
 * @constructor
 * @private
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpucommandencoder
 */
var GPUCommandEncoder = function() {};

/**
 * @param {GPURenderPassDescriptor} descriptor
 * @return {GPURenderPassEncoder}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucommandencoder-beginrenderpass
 */
GPUCommandEncoder.prototype.beginRenderPass = function(descriptor) {};

/**
 * @param {GPUComputePassDescriptor=} descriptor
 * @return {GPUComputePassEncoder}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucommandencoder-begincomputepass
 */
GPUCommandEncoder.prototype.beginComputePass = function(descriptor) {};

/**
 * @param {GPUBuffer} source
 * @param {GPUSize64} sourceOffset
 * @param {GPUBuffer} destination
 * @param {GPUSize64} destinationOffset
 * @param {GPUSize64} size
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucommandencoder-copybuffertobuffer
 */
GPUCommandEncoder.prototype.copyBufferToBuffer = function(source, sourceOffset, destination, destinationOffset, size) {};

/**
 * @param {GPUImageCopyBuffer} source
 * @param {GPUImageCopyTexture} destination
 * @param {GPUExtent3D} copySize
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucommandencoder-copybuffertotexture
 */
GPUCommandEncoder.prototype.copyBufferToTexture = function(source, destination, copySize) {};

/**
 * @param {GPUImageCopyTexture} source
 * @param {GPUImageCopyBuffer} destination
 * @param {GPUExtent3D} copySize
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucommandencoder-copytexturetobuffer
 */
GPUCommandEncoder.prototype.copyTextureToBuffer = function(source, destination, copySize) {};

/**
 * @param {GPUImageCopyTexture} source
 * @param {GPUImageCopyTexture} destination
 * @param {GPUExtent3D} copySize
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucommandencoder-copytexturetotexture
 */
GPUCommandEncoder.prototype.copyTextureToTexture = function(source, destination, copySize) {};

/**
 * @param {GPUBuffer} buffer
 * @param {GPUSize64=} offset
 * @param {GPUSize64=} size
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucommandencoder-clearbuffer
 */
GPUCommandEncoder.prototype.clearBuffer = function(buffer, offset, size){};

/**
 * @param {GPUQuerySet} querySet
 * @param {GPUSize32} queryIndex
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucommandencoder-writetimestamp
 */
GPUCommandEncoder.prototype.writeTimestamp = function(querySet, queryIndex) {};


/**
 * @param {GPUQuerySet} querySet
 * @param {GPUSize32} firstQuery
 * @param {GPUSize32} queryCount
 * @param {GPUBuffer} destination
 * @param {GPUSize64} destinationOffset
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucommandencoder-resolvequeryset
 */
GPUCommandEncoder.prototype.resolveQuerySet = function(querySet, firstQuery, queryCount, destination, destinationOffset) {};

/**
 * @param {GPUCommandBufferDescriptor=} descriptor
 * @return {GPUCommandBuffer}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucommandencoder-finish
 */
GPUCommandEncoder.prototype.finish = function(descriptor) {};

/**
 * @constructor
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpurenderpasslayout
 */
var GPURenderPassLayout = function() {};

/**
 * @type {Array<GPUTextureFormat>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurenderbundleencoderdescriptor-colorformats
 */
GPURenderPassLayout.prototype.colorFormats;

/**
 * @type {GPUTextureFormat}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gputextureformat
 */
GPURenderPassLayout.prototype.depthStencilFormat;

/**
 * @type {GPUSize32}
 */
GPURenderPassLayout.prototype.sampleCount;

/**
 * @constructor
 * @extends {GPURenderPassLayout}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpurenderbundleencoderdescriptor
 */
var GPURenderBundleEncoderDescriptor = function() {};

/**
 * @type {boolean}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpurenderbundleencoderdescriptor
 */
GPURenderBundleEncoderDescriptor.prototype.depthReadOnly;

/**
 * @type {boolean}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpurenderbundleencoderdescriptor
 */
GPURenderBundleEncoderDescriptor.prototype.stencilReadOnly;

/**
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpucommandsmixin
 */
var GPUCommandsMixin = function() {};

/**
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpudebugcommandsmixin
 */
var GPUDebugCommandsMixin = function() {};

/**
 * @param {string} groupLabel
 * @see https://www.w3.org/TR/webgpu/#dom-gpudebugcommandsmixin-pushdebuggroup
 */
GPUDebugCommandsMixin.prototype.pushDebugGroup = function(groupLabel) {};

/**
 * @see https://www.w3.org/TR/webgpu/#dom-gpudebugcommandsmixin-popdebuggroup
 */
GPUDebugCommandsMixin.prototype.popDebugGroup = function() {};

/**
 * @param {string} markerLabel
 * @see https://www.w3.org/TR/webgpu/#dom-gpudebugcommandsmixin-insertdebugmarker
 */
GPUDebugCommandsMixin.prototype.insertDebugMarker = function(markerLabel) {};

/**
 * @constructor
 * @protected
 * @extends {GPUObjectBase}
 * @implements {GPUCommandsMixin}
 * @implements {GPUDebugCommandsMixin}
 * @implements {GPUBindingCommandsMixin}
 * @implements {GPURenderCommandsMixin}
 * @see https://www.w3.org/TR/webgpu/#gpurenderbundleencoder
 */
var GPURenderBundleEncoder = function() {};

/**
 * @param {GPURenderBundleDescriptor=} descriptor
 * @return {GPURenderBundle}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurenderbundleencoder-finish
 */
GPURenderBundleEncoder.prototype.finish = function(descriptor) {};

/**
 * @constructor
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuquerysetdescriptor
 */
var GPUQuerySetDescriptor = function() {};

/**
 * @type {GPUQueryType}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuquerysetdescriptor-type
 */
GPUQuerySetDescriptor.prototype.type;

/**
 * @type {GPUSize32}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuquerysetdescriptor-count
 */
GPUQuerySetDescriptor.prototype.count;

/**
 * @constructor
 * @private
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpuqueryset
 */
var GPUQuerySet = function() {};

/**
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuqueryset-destroy
 */
GPUQuerySet.prototype.destroy = function() {};

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuextent3ddict
 */
var GPUExtent3DDict = function() {};

/**
 * @type {GPUIntegerCoordinate}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuextent3ddict-width
 */
GPUExtent3DDict.prototype.width;

/**
 * @type {GPUIntegerCoordinate}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuextent3ddict-height
 */
GPUExtent3DDict.prototype.height;

/**
 * @type {GPUIntegerCoordinate}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuextent3ddict-depthorarraylayers
 */
GPUExtent3DDict.prototype.depthOrArrayLayers;

/**
 * @constructor
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gputexturedescriptor
 */
var GPUTextureDescriptor = function() {};

/**
 * @type {GPUExtent3D}
 * @see https://www.w3.org/TR/webgpu/#dom-gputexturedescriptor-size
 */
GPUTextureDescriptor.prototype.size;

/**
 * @type {GPUIntegerCoordinate}
 * @see https://www.w3.org/TR/webgpu/#dom-gputexturedescriptor-miplevelcount
 */
GPUTextureDescriptor.prototype.mipLevelCount;

/**
 * @type {GPUSize32}
 * @see https://www.w3.org/TR/webgpu/#dom-gputexturedescriptor-samplecount
 */
GPUTextureDescriptor.prototype.sampleCount;

/**
 * @type {GPUTextureDimension}
 * @see https://www.w3.org/TR/webgpu/#dom-gputexturedescriptor-dimension
 */
GPUTextureDescriptor.prototype.dimension;

/**
 * @type {GPUTextureFormat}
 * @see https://www.w3.org/TR/webgpu/#dom-gputexturedescriptor-format
 */
GPUTextureDescriptor.prototype.format;

/**
 * @type {GPUTextureUsageFlags}
 * @see https://www.w3.org/TR/webgpu/#dom-gputexturedescriptor-usage
 */
GPUTextureDescriptor.prototype.usage;

/**
 * @constructor
 * @protected
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpucommandbuffer
 */
var GPUCommandBuffer = function() {};

/**
 * @constructor
 * @protected
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuimagecopytexture
 */
var GPUImageCopyTexture = function() {};

/**
 * @type {GPUTexture}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuimagecopytexture-texture
 */
GPUImageCopyTexture.prototype.texture;

/**
 * @type {GPUIntegerCoordinate}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuimagecopytexture-miplevel
 */
GPUImageCopyTexture.prototype.mipLevel;

/**
 * @type {GPUOrigin3D}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuimagecopytexture-origin
 */
GPUImageCopyTexture.prototype.origin;

/**
 * @type {GPUTextureAspect}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuimagecopytexture-aspect
 */
GPUImageCopyTexture.prototype.aspect;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuimagedatalayout
 */
var GPUImageDataLayout = function() {};

/**
 * @type {GPUSize64}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuimagedatalayout-offset
 */
GPUImageDataLayout.prototype.offset;

/**
 * @type {GPUSize32}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuimagedatalayout-bytesperrow
 */
GPUImageDataLayout.prototype.bytesPerRow;

/**
 * @type {GPUSize32}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuimagedatalayout-rowsperimage
 */
GPUImageDataLayout.prototype.rowsPerImage;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuimagecopyexternalimage
 */
var GPUImageCopyExternalImage = function() {};

/**
 * @type {ImageBitmap|HTMLCanvasElement|OffscreenCanvas}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuimagecopyexternalimage-source
 */
GPUImageCopyExternalImage.prototype.source;

/**
 * @type {GPUOrigin2D}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuimagecopyexternalimage-origin
 */
GPUImageCopyExternalImage.prototype.origin;

/**
 * @type {boolean}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuimagecopyexternalimage-flipy
 */
GPUImageCopyExternalImage.prototype.flipY;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#gpumapmode
 */
var GPUMapMode = function() {};

/**
 * @type {GPUFlagsConstant}
 * @see https://www.w3.org/TR/webgpu/#dom-gpumapmode-read
 */
GPUMapMode.prototype.READ;

/**
 * @type {GPUFlagsConstant}
 * @see https://www.w3.org/TR/webgpu/#dom-gpumapmode-write
 */
GPUMapMode.prototype.WRITE;

/**
 * @constructor
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gputextureview
 */
var GPUTextureView = function() {};

/**
 * @constructor
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gputextureviewdescriptor
 */
var GPUTextureViewDescriptor = function() {};

/**
 * @type {GPUTextureFormat}
 * @see https://www.w3.org/TR/webgpu/#dom-gputextureviewdescriptor-format
 */
GPUTextureViewDescriptor.prototype.format;

/**
 * @type {GPUTextureViewDimension}
 * @see https://www.w3.org/TR/webgpu/#dom-gputextureviewdescriptor-dimension
 */
GPUTextureViewDescriptor.prototype.dimension;

/**
 * @type {GPUTextureAspect}
 * @see https://www.w3.org/TR/webgpu/#dom-gputextureviewdescriptor-aspect
 */
GPUTextureViewDescriptor.prototype.aspect;

/**
 * @type {GPUIntegerCoordinate}
 * @see https://www.w3.org/TR/webgpu/#dom-gputextureviewdescriptor-basemiplevel
 */
GPUTextureViewDescriptor.prototype.baseMipLevel;

/**
 * @type {GPUIntegerCoordinate}
 * @see https://www.w3.org/TR/webgpu/#dom-gputextureviewdescriptor-miplevelcount
 */
GPUTextureViewDescriptor.prototype.mipLevelCount;

/**
 * @type {GPUIntegerCoordinate}
 * @see https://www.w3.org/TR/webgpu/#dom-gputextureviewdescriptor-basearraylayer
 */
GPUTextureViewDescriptor.prototype.baseArrayLayer;

/**
 * @type {GPUIntegerCoordinate}
 * @see https://www.w3.org/TR/webgpu/#dom-gputextureviewdescriptor-arraylayercount
 */
GPUTextureViewDescriptor.prototype.arrayLayerCount;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpubufferbindinglayout
 */
var GPUBufferBindingLayout = function() {};

/**
 * @type {GPUBufferBindingType}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferbindinglayout-type
 */
 GPUBufferBindingLayout.prototype.type;

/**
 * @type {boolean}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferbindinglayout-hasdynamicoffset
 */
 GPUBufferBindingLayout.prototype.hasDynamicOffset;

/**
 * @type {GPUSize64}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferbindinglayout-minbindingsize
 */
 GPUBufferBindingLayout.prototype.minBindingSize;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpusamplerbindinglayout
 */
var GPUSamplerBindingLayout = function() {};

/**
 * @type {GPUSamplerBindingType}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerbindinglayout-type
 */
GPUSamplerBindingLayout.prototype.type;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gputexturebindinglayout
 */
var GPUTextureBindingLayout = function() {};

/**
 * @type {GPUTextureSampleType}
 * @see https://www.w3.org/TR/webgpu/#dom-gputexturebindinglayout-sampletype
 */
GPUTextureBindingLayout.prototype.sampleType;

/**
 * @type {GPUTextureViewDimension}
 * @see https://www.w3.org/TR/webgpu/#dom-gputexturebindinglayout-viewdimension
 */
GPUTextureBindingLayout.prototype.viewDimension;

/**
 * @type {boolean}
 * @see https://www.w3.org/TR/webgpu/#dom-gputexturebindinglayout-multisampled
 */
GPUTextureBindingLayout.prototype.multisampled;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpustoragetexturebindinglayout
 */
var GPUStorageTextureBindingLayout = function() {};

/**
 * @type {GPUStorageTextureAccess}
 * @see https://www.w3.org/TR/webgpu/#dom-gpustoragetexturebindinglayout-access
 */
GPUStorageTextureBindingLayout.prototype.access;

/**
 * @type {GPUTextureFormat}
 * @see https://www.w3.org/TR/webgpu/#dom-gpustoragetexturebindinglayout-format
 */
GPUStorageTextureBindingLayout.prototype.format;

/**
 * @type {GPUTextureViewDimension}
 * @see https://www.w3.org/TR/webgpu/#dom-gpustoragetexturebindinglayout-viewdimension
 */
GPUStorageTextureBindingLayout.prototype.viewDimension;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuexternaltexturebindinglayout
 */
var GPUExternalTextureBindingLayout = function() {};

/**
 * @typedef {{buffers:(!Array<?GPUVertexBufferLayout>|undefined),module:!GPUShaderModule,entryPoint:!string,constants:(!Object<!string,!GPUPipelineConstantValue>|undefined)}}
 */
var GPUVertexState = function() {};

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuvertexbufferlayout
 */
var GPUVertexBufferLayout = function() {};

/**
 * @type {GPUSize64}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuvertexbufferlayout-arraystride
 */
GPUVertexBufferLayout.prototype.arrayStride;

/**
 * @type {GPUVertexStepMode}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuvertexbufferlayout-stepmode
 */
GPUVertexBufferLayout.prototype.stepMode;

/**
 * @type {Array<GPUVertexAttribute>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuvertexbufferlayout-attributes
 */
GPUVertexBufferLayout.prototype.attributes;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuvertexattribute
 */
var GPUVertexAttribute = function() {};

/**
 * @type {GPUVertexFormat}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuvertexattribute-format
 */
GPUVertexAttribute.prototype.format;

/**
 * @type {GPUSize64}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuvertexattribute-offset
 */
GPUVertexAttribute.prototype.offset;

/**
 * @type {GPUSize32}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuvertexattribute-shaderlocation
 */
GPUVertexAttribute.prototype.shaderLocation;

/**
 * @typedef {{cullMode:(!string|undefined),frontFace:(!string|undefined),stripIndexFormat:(!string|undefined),topology:(!string|undefined),unclippedDepth:(!boolean|undefined)}}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuprimitivestate
 */
var GPUPrimitiveState = function() {};

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpudepthstencilstate
 */
var GPUDepthStencilState = function() {};

/**
 * @type {GPUTextureFormat}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudepthstencilstate-format
 */
GPUDepthStencilState.prototype.format;

/**
 * @type {boolean}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudepthstencilstate-depthwriteenabled
 */
GPUDepthStencilState.prototype.depthWriteEnabled;

/**
 * @type {GPUCompareFunction}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudepthstencilstate-depthcompare
 */
GPUDepthStencilState.prototype.depthCompare;

/**
 * @type {GPUStencilFaceState}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudepthstencilstate-stencilfront
 */
GPUDepthStencilState.prototype.stencilFront;

/**
 * @type {GPUStencilFaceState}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudepthstencilstate-stencilback
 */
GPUDepthStencilState.prototype.stencilBack;

/**
 * @type {GPUStencilValue}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudepthstencilstate-stencilreadmask
 */
GPUDepthStencilState.prototype.stencilReadMask;

/**
 * @type {GPUStencilValue}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudepthstencilstate-stencilwritemask
 */
GPUDepthStencilState.prototype.stencilWriteMask;

/**
 * @type {GPUDepthBias}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudepthstencilstate-depthbias
 */
GPUDepthStencilState.prototype.depthBias;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudepthstencilstate-depthbiasslopescale
 */
GPUDepthStencilState.prototype.depthBiasSlopeScale;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudepthstencilstate-depthbiasclamp
 */
GPUDepthStencilState.prototype.depthBiasClamp;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpumultisamplestate
 */
var GPUMultisampleState = function() {};

/**
 * @type {GPUSize32}
 * @see https://www.w3.org/TR/webgpu/#dom-gpumultisamplestate-count
 */
GPUMultisampleState.prototype.count;

/**
 * @type {GPUSampleMask}
 * @see https://www.w3.org/TR/webgpu/#dom-gpumultisamplestate-mask
 */
GPUMultisampleState.prototype.mask;

/**
 * @type {boolean}
 * @see https://www.w3.org/TR/webgpu/#dom-gpumultisamplestate-alphatocoverageenabled
 */
GPUMultisampleState.prototype.alphaToCoverageEnabled;

/**
 * @typedef {{targets:!Array<?GPUColorTargetState>,module:!GPUShaderModule,entryPoint:!string,constants:(!Object<!string,!GPUPipelineConstantValue>|undefined)}}
 */
var GPUFragmentState = function() {};

/**
 * @typedef {{format:!string,blend:(!GPUBlendState|undefined),writeMask:(!GPUFlagsConstant|undefined)}}
 */
var GPUColorTargetState = function() {};

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpublendstate
 */
var GPUBlendState = function() {};

/**
 * @type {GPUBlendComponent}
 * @see https://www.w3.org/TR/webgpu/#dom-gpublendstate-color
 */
GPUBlendState.prototype.color;

/**
 * @type {GPUBlendComponent}
 * @see https://www.w3.org/TR/webgpu/#dom-gpublendstate-alpha
 */
GPUBlendState.prototype.alpha;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpublendcomponent
 */
var GPUBlendComponent = function() {};

/**
 * @type {GPUBlendFactor}
 * @see https://www.w3.org/TR/webgpu/#dom-gpublendcomponent-srcfactor
 */
GPUBlendComponent.prototype.srcFactor;

/**
 * @type {GPUBlendFactor}
 * @see https://www.w3.org/TR/webgpu/#dom-gpublendcomponent-dstfactor
 */
GPUBlendComponent.prototype.dstFactor;

/**
 * @type {GPUBlendOperation}
 * @see https://www.w3.org/TR/webgpu/#dom-gpublendcomponent-operation
 */
GPUBlendComponent.prototype.operation;

/**
 * @constructor
 * @protected
 * @see https://www.w3.org/TR/webgpu/#gpuobjectbase
 */
var GPUObjectBase = function() {};

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuobjectbase-label
 */
GPUObjectBase.prototype.label;

/**
 * @constructor
 * @extends {GPUObjectBase}
 * @implements {GPUCommandsMixin}
 * @implements {GPUDebugCommandsMixin}
 * @implements {GPUBindingCommandsMixin}
 * @see https://www.w3.org/TR/webgpu/#gpucomputepassencoder
 */
var GPUComputePassEncoder = function() {};

/**
 * @param {GPUComputePipeline} pipeline
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucomputepassencoder-setpipeline
 */
GPUComputePassEncoder.prototype.setPipeline = function(pipeline) {};

/**
 * @param {GPUSize32} x
 * @param {GPUSize32=} y
 * @param {GPUSize32=} z
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucomputepassencoder-dispatch
 */
GPUComputePassEncoder.prototype.dispatchWorkgroups = function(x, y, z) {};

/**
 * @param {GPUBuffer} indirectBuffer
 * @param {GPUSize64} indirectOffset
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucomputepassencoder-dispatchindirect
 */
GPUComputePassEncoder.prototype.dispatchWorkgroupsIndirect = function(indirectBuffer, indirectOffset) {};

/**
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucomputepassencoder-endpass
 */
GPUComputePassEncoder.prototype.end = function() {};

/**
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpurendercommandsmixin
 */
var GPURenderCommandsMixin = function() {};

/**
 * @param {GPURenderPipeline} pipeline
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurendercommandsmixin-setpipeline
 */
GPURenderCommandsMixin.prototype.setPipeline = function(pipeline) {};

/**
 * @param {GPUBuffer} buffer
 * @param {GPUIndexFormat} indexFormat
 * @param {GPUSize64=} offset
 * @param {GPUSize64=} size
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurendercommandsmixin-setindexbuffer
 */
GPURenderCommandsMixin.prototype.setIndexBuffer = function(buffer, indexFormat, offset, size) {};

/**
 * @param {GPUIndex32} slot
 * @param {GPUBuffer} buffer
 * @param {GPUSize64=} offset
 * @param {GPUSize64=} size
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurendercommandsmixin-setvertexbuffer
 */
GPURenderCommandsMixin.prototype.setVertexBuffer = function(slot, buffer, offset, size) {};

/**
 * @param {GPUSize32} vertexCount
 * @param {GPUSize32=} instanceCount
 * @param {GPUSize32=} firstVertex
 * @param {GPUSize32=} firstInstance
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurendercommandsmixin-draw
 */
GPURenderCommandsMixin.prototype.draw = function(vertexCount, instanceCount, firstVertex, firstInstance) {};

/**
 * @param {GPUSize32} indexCount
 * @param {GPUSize32=} instanceCount
 * @param {GPUSize32=} firstIndex
 * @param {GPUSignedOffset32=} baseVertex
 * @param {GPUSize32=} firstInstance
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurendercommandsmixin-drawindexed
 */
GPURenderCommandsMixin.prototype.drawIndexed = function(indexCount, instanceCount, firstIndex, baseVertex, firstInstance) {};

/**
 * @param {GPUBuffer} indirectBuffer
 * @param {GPUSize64} indirectOffset
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurendercommandsmixin-drawindirect
 */
GPURenderCommandsMixin.prototype.drawIndirect = function(indirectBuffer, indirectOffset) {};

/**
 * @param {GPUBuffer} indirectBuffer
 * @param {GPUSize64} indirectOffset
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurendercommandsmixin-drawindexedindirect
 */
GPURenderCommandsMixin.prototype.drawIndexedIndirect = function(indirectBuffer, indirectOffset) {};

/**
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpubindingcommandsmixin
 */
var GPUBindingCommandsMixin = function() {};

/**
 * @param {GPUIndex32} index
 * @param {GPUBindGroup} bindGroup
 * @param {Uint32Array|Array<GPUBufferDynamicOffset>=} dynamicOffsetsData
 * @param {GPUSize64=} dynamicOffsetsDataStart
 * @param {GPUSize32=} dynamicOffsetsDataLength
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindingcommandsmixin-setbindgroup
 */
GPUBindingCommandsMixin.prototype.setBindGroup = function(index, bindGroup, dynamicOffsetsData,dynamicOffsetsDataStart,dynamicOffsetsDataLength ) {};

/**
 * @constructor
 * @extends {GPUObjectBase}
 * @implements {GPUCommandsMixin}
 * @implements {GPUDebugCommandsMixin}
 * @implements {GPUBindingCommandsMixin}
 * @implements {GPURenderCommandsMixin}
 * @see https://www.w3.org/TR/webgpu/#gpurenderpassencoder
 */
var GPURenderPassEncoder = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} minDepth
 * @param {number} maxDepth
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurenderpassencoder-setviewport
 */
GPURenderPassEncoder.prototype.setViewport = function(x, y, width, height, minDepth, maxDepth) {};

/**
 * @param {GPUIntegerCoordinate} x
 * @param {GPUIntegerCoordinate} y
 * @param {GPUIntegerCoordinate} width
 * @param {GPUIntegerCoordinate} height
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurenderpassencoder-setscissorrect
 */
GPURenderPassEncoder.prototype.setScissorRect = function(x, y, width, height) {};

/**
 * @param {GPUColor} color
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurenderpassencoder-setblendconstant
 */
GPURenderPassEncoder.prototype.setBlendConstant = function(color) {};

/**
 * @param {GPUStencilValue} reference
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurenderpassencoder-setstencilreference
 */
GPURenderPassEncoder.prototype.setStencilReference = function(reference) {};

/**
 * @param {GPUSize32} queryIndex
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurenderpassencoder-beginocclusionquery
 */
GPURenderPassEncoder.prototype.beginOcclusionQuery = function(queryIndex) {};

/**
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurenderpassencoder-endocclusionquery
 */
GPURenderPassEncoder.prototype.endOcclusionQuery = function() {};

/**
 * @param {Array<GPURenderBundle>} querySet
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurenderpassencoder-executebundles
 */
GPURenderPassEncoder.prototype.executeBundles = function(querySet) {};

/**
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpurenderpassencoder-endpass
 */
GPURenderPassEncoder.prototype.end = function() {};

/**
 * @typedef {{colorAttachments:!Array<?GPURenderPassColorAttachment>,depthStencilAttachment:(!GPURenderPassDepthStencilAttachment|undefined),occlusionQuerySet:(!GPUQuerySet|undefined),timestampWrites:(!GPURenderPassTimestampWrites|undefined),label:(!string|undefined)}}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpurenderpassdescriptor
 */
var GPURenderPassDescriptor = function() {};

/**
 * @typedef {{view:!GPUTextureView,loadOp:!string,storeOp:!string,clearValue:(!GPUColor|undefined),resolveTarget:(!GPUTextureView|undefined)}}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpurenderpasscolorattachment
 */
var GPURenderPassColorAttachment = function() {};

/**
 * @typedef {{view:!GPUTextureView,depthClearValue:(!number|undefined),depthLoadOp:(!string|undefined),depthReadOnly:(!boolean|undefined),depthStoreOp:(!string|undefined),stencilClearValue:(!GPUStencilValue|undefined),stencilLoadOp:(!string|undefined),stencilReadOnly:(!boolean|undefined),stencilStoreOp:(!string|undefined)}}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpurenderpassdepthstencilattachment
 */
var GPURenderPassDepthStencilAttachment = function() {};

/**
 * @constructor
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpucomputepassdescriptor
 */
var GPUComputePassDescriptor = function() {};

/**
 * @type {Array<GPUComputePassTimestampWrite>}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpucomputepasstimestampwrite
 */
GPUComputePassDescriptor.prototype.timestampWrites

/**
 * @constructor
 * @extends {GPUImageDataLayout}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuimagecopybuffer
 */
var GPUImageCopyBuffer = function() {};

/**
 * @type {GPUBuffer}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuimagecopybuffer-buffer
 */
GPUImageCopyBuffer.prototype.buffer;

/**
 * @constructor
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpucommandbufferdescriptor
 */
var GPUCommandBufferDescriptor = function() {};

/**
 * @constructor
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpurenderbundledescriptor
 */
var GPURenderBundleDescriptor = function() {};

/**
 * @constructor
 * @private
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpurenderbundle
 */
var GPURenderBundle = function() {};

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpustencilfacestate
 */
var GPUStencilFaceState = function() {};

/**
 * @type {GPUCompareFunction}
 * @see https://www.w3.org/TR/webgpu/#dom-gpustencilfacestate-compare
 */
GPUStencilFaceState.prototype.compare;

/**
 * @type {GPUStencilOperation}
 * @see https://www.w3.org/TR/webgpu/#dom-gpustencilfacestate-failop
 */
GPUStencilFaceState.prototype.failOp;

/**
 * @type {GPUStencilOperation}
 * @see https://www.w3.org/TR/webgpu/#dom-gpustencilfacestate-depthfailop
 */
GPUStencilFaceState.prototype.depthFailOp;

/**
 * @type {GPUStencilOperation}
 * @see https://www.w3.org/TR/webgpu/#dom-gpustencilfacestate-passop
 */
GPUStencilFaceState.prototype.passOp;

/**
 * @typedef {{querySet:!GPUQuerySet,queryIndex:!GPUSize32,location:!string}}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpurenderpasstimestampwrite
 */
var GPURenderPassTimestampWrite;

/**
 * @typedef {!Array<!GPURenderPassTimestampWrite>}
 */
var GPURenderPassTimestampWrites;

/**
 * @constructor
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpucomputepasstimestampwrite
 */
var GPUComputePassTimestampWrite = function() {};

/**
 * @type {GPUQuerySet}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucomputepasstimestampwrite-queryset
 */
GPUComputePassTimestampWrite.prototype.querySet;

/**
 * @type {GPUSize32}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucomputepasstimestampwrite-queryindex
 */
GPUComputePassTimestampWrite.prototype.queryIndex;

/**
 * @type {GPURenderPassTimestampLocation}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucomputepasstimestampwrite-location
 */
GPUComputePassTimestampWrite.prototype.location;

/**
 *
 * typedefs :
 */

/**
 * @typedef {string}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gputextureformat
 */
var GPUTextureFormat;

/**
 * @typedef {number}
 * @see https://www.w3.org/TR/webgpu/#typedefdef-gputextureusageflags
 */
var GPUTextureUsageFlags;

/**
 * @typedef {number}
 * @see https://www.w3.org/TR/webgpu/#typedefdef-gpuflagsconstant
 */
var GPUFlagsConstant;


/**
 * @record
 */
var GPUTextureUsage = function () {};

/**
 * @const {GPUFlagsConstant}
 */
GPUTextureUsage.COPY_SRC;

/**
 * @const {GPUFlagsConstant}
 */
GPUTextureUsage.COPY_DST;

/**
 * @const {GPUFlagsConstant}
 */
GPUTextureUsage.TEXTURE_BINDING;

/**
 * @const {GPUFlagsConstant}
 */
GPUTextureUsage.STORAGE_BINDING ;

/**
 * @const {GPUFlagsConstant}
 */
GPUTextureUsage.RENDER_ATTACHMENT;

/**
 * @typedef {string}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gpupredefinedcolorspace
 */
var GPUPredefinedColorSpace;

/**
 * @typedef {string}
 * @see https://www.w3.org/TR/webgpu/#GPUCanvasCompositingAlphaMode
 */
var GPUCanvasCompositingAlphaMode;

/**
 * @typedef {string}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gpupowerpreference
 */
var GPUPowerPreference;

/**
 * @typedef {string}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gpuautolayoutmode
 */
var GPUAutoLayoutMode;

/**
 * @typedef {string}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gpufeaturename
 */
var GPUFeatureName;

/**
 * @typedef {number}
 * @see https://www.w3.org/TR/webgpu/#typedefdef-gpusize64
 */
var GPUSize32;

/**
 * @typedef {number}
 * @see https://www.w3.org/TR/webgpu/#typedefdef-gpusize64
 */
var GPUSize64;

/**
 * @typedef {string}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gpuaddressmode
 */
var GPUAddressMode;

/**
 * @typedef {string}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gpufiltermode
 */
var GPUFilterMode;

/**
 * @typedef {string}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gpumipmapfiltermode
 */
var GPUMipmapFilterMode;

/**
 * @typedef {!number}
 */
var GPUIntegerCoordinate;

/**
 * @typedef {!string}
 */
var GPUBlendOperation;

/**
 * @typedef {!string}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gpucomparefunction
 */
var GPUCompareFunction ;

/**
 * @typedef {(!Array<!GPUIntegerCoordinate>|!GPUExtent3DDict)}
 */
var GPUExtent3D;

/**
 * @typedef {!number}
 */
var GPUBufferUsageFlags;

/**
 * @typedef {GPUSampler|GPUTextureView|GPUBufferBinding|GPUExternalTexture}
 */
var GPUBindingResource;

/**
 * @typedef {number}
 */
var GPUIndex32;

/**
 * @typedef {number}
 */
var GPUShaderStageFlags;

/**
 * @typedef {string}
 */
var GPUCompilationMessageType;

/**
 * @typedef {!number}
 */
var GPUPipelineConstantValue;

/**
 * @typedef {!number}
 */
var GPUStencilValue;

/**
 * @typedef {!number}
 */
var GPUDepthBias;

/**
 * @typedef {!number}
 */
var GPUSampleMask;

/**
 * @typedef {!number}
 */
var GPUColorWriteFlags;

/**
 * @typedef {string}
 */
var GPUQueryType;

/**
 * @typedef {string}
 */
var GPUTextureDimension;

/**
 * @typedef {string}
 */
var GPUBlendFactor;

/**
 * @typedef {string}
 */
var GPUTextureAspect;

/**
 * @typedef {string}
 */
var GPUTextureViewDimension;

/**
 * @typedef {string}
 */
var GPUBufferBindingType;

/**
 * @typedef {string}
 */
var GPUSamplerBindingType;

/**
 * @typedef {string}
 */
var GPUTextureSampleType;

/**
 * @typedef {string}
 */
var GPUVertexStepMode;

/**
 * @typedef {string}
 */
var GPUVertexFormat;

/**
 * @typedef {string}
 */
var GPUPrimitiveTopology;

/**
 * @typedef {string}
 */
var GPUIndexFormat;

/**
 * @typedef {string}
 */
var GPUFrontFace;

/**
 * @typedef {string}
 */
var GPUCullMode;

/**
 * @typedef {string}
 */
var GPURenderPassTimestampLocation;

/**
 * @typedef {string}
 */
var GPUStencilOperation;

/**
 * @typedef {string}
 */
var GPULoadOp;

/**
 * @typedef {string}
 */
var GPUStoreOp;

/**
 * @typedef {string}
 */
var GPUStorageTextureAccess;

/**
 * @typedef {(!Array<!number>|!GPUColorDict)}
 */
var GPUColor;

/**
 * @typedef {!number}
 */
var GPUBufferDynamicOffset;

/**
 * @typedef {!number}
 */
var GPUSignedOffset32;

/**
 * @typedef {(!Array<!GPUIntegerCoordinate>|!GPUOrigin2DDict)}
 */
var GPUOrigin2D;

/**
 * @typedef {(!Array<!GPUIntegerCoordinate>|!GPUOrigin3DDict)}
 */
var GPUOrigin3D;