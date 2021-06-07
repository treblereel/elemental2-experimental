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

/**r
 * @param {GPUSwapChainDescriptor} descriptor
 * @return {GPUSwapChain}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucanvascontext-configureswapchain
 */
GPUCanvasContext.prototype.configureSwapChain = function(descriptor) {};

/**
 * @param {GPUAdapter} adapter
 * @return {string} //GPUTextureFormat
 * @see https://www.w3.org/TR/webgpu/#dom-gpucanvascontext-getswapchainpreferredformat
 */
GPUCanvasContext.prototype.getSwapChainPreferredFormat = function(adapter) {};

/**
 * @interface
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpuswapchain
 */
var GPUSwapChain = function () {};

/**
 * @return {GPUTexture}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuswapchain-getcurrenttexture
 */
GPUSwapChain.prototype.getCurrentTexture = function() {};

/**
 * @record
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpurequestadapteroptions
 */
var GPURequestAdapterOptions = function() {};

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#enumdef-gpupowerpreference
 */
GPURequestAdapterOptions.prototype.powerPreference //GPUPowerPreference

/**
 * @record
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuobjectdescriptorbase
 */
var GPUObjectDescriptorBase = function() {};

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuobjectdescriptorbase-label
 */
GPUObjectDescriptorBase.prototype.label

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpupipelinedescriptorbase
 */
var GPUPipelineDescriptorBase = function() {};

/**
 * @type {GPUPipelineLayout}
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
 * @interface
 * @extends {Iterable<!Array<string>>}
 * @see https://www.w3.org/TR/webgpu/#gpusupportedfeatures
s */
var GPUSupportedFeatures = function() {};

/**
 * @param {string} value
 * @return {boolean}
 */
GPUSupportedFeatures.prototype.has = function(value) {};

/**
 * @type {number} (readonly)
 */
GPUSupportedFeatures.prototype.size;

/**
 * @return {!IteratorIterable<string>}
 * @nosideeffects
 */
GPUSupportedFeatures.prototype.values = function() {};

/**
 * @return {!Iterator<string>}
 */
GPUSupportedFeatures.prototype[Symbol.iterator] = function() {};

/**
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpusupportedlimits
 */
var GPUSupportedLimits = function() {};

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxtexturedimension1d
 */
 GPUSupportedLimits.prototype.maxTextureDimension1D;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxtexturedimension2d
 */
 GPUSupportedLimits.prototype.maxTextureDimension2D;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxtexturedimension3d
 */
 GPUSupportedLimits.prototype.maxTextureDimension3D;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxtexturearraylayers
 */
 GPUSupportedLimits.prototype.maxTextureArrayLayers;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxdynamicuniformbuffersperpipelinelayout
 */
 GPUSupportedLimits.prototype.maxDynamicUniformBuffersPerPipelineLayout;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxdynamicstoragebuffersperpipelinelayout
 */
 GPUSupportedLimits.prototype.maxDynamicStorageBuffersPerPipelineLayout;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxsampledtexturespershaderstage
 */
 GPUSupportedLimits.prototype.maxSampledTexturesPerShaderStage;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxsamplerspershaderstage
 */
 GPUSupportedLimits.prototype.maxSamplersPerShaderStage;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxstoragebufferspershaderstage
 */
 GPUSupportedLimits.prototype.maxStorageBuffersPerShaderStage;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxstoragetexturespershaderstage
 */
 GPUSupportedLimits.prototype.maxStorageTexturesPerShaderStage;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxuniformbufferspershaderstage
 */
 GPUSupportedLimits.prototype.maxUniformBuffersPerShaderStage;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxuniformbufferbindingsize
 */
 GPUSupportedLimits.prototype.maxUniformBufferBindingSize;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxstoragebufferbindingsize
 */
 GPUSupportedLimits.prototype.maxStorageBufferBindingSize;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxvertexbuffers
 */
 GPUSupportedLimits.prototype.maxVertexBuffers;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxvertexattributes
 */
 GPUSupportedLimits.prototype.maxVertexAttributes;

/**
 * @const
 * @type {number|null}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusupportedlimits-maxvertexbufferarraystride
 */
 GPUSupportedLimits.prototype.maxVertexBufferArrayStride;

/**
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpuadapter
 */
var GPUAdapter = function() {};

/**
 * @const
 * @type {string}
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
 * @type {GPUAdapterLimits}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuadapter-limits
 */
GPUAdapter.prototype.limits;

/**
 * @param {GPUDeviceDescriptor=} opt_GPUDeviceDescriptor
 * @return {Promise<GPUDevice>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuadapter-requestdevice
 */
GPUAdapter.prototype.requestDevice = function (opt_GPUDeviceDescriptor) { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#gpudevicedescriptor
 */
var GPUDeviceDescriptor = function() {};

/**
 * @type {Array<string>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevicedescriptor-nonguaranteedfeatures
 */
GPUDeviceDescriptor.prototype.nonGuaranteedFeatures; //GPUFeatureName

/**
 * @type {Map<string, number>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevicedescriptor-nonguaranteedlimits
 */
GPUDeviceDescriptor.prototype.nonGuaranteedLimits;

/**
 * @interface
 * @extends {EventTarget}
 * @extends {GPUObjectBase}
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
 * @type {GPUAdapterLimits}
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
 * @param {GPUTextureDescriptor} descriptor
 * @return {GPUTexture}
 * @see https://www.w3.org/TR/webgpu/#dom-gpudevice-createtexture
 */
GPUDevice.prototype.createTexture = function(descriptor) {}

/**
 * @record
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpucolordict
 */
var GPUColorDict = function() {};

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucolordict-r
 */
GPUColorDict.prototype.r

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucolordict-g
 */
GPUColorDict.prototype.g

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucolordict-b
 */
GPUColorDict.prototype.b

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucolordict-a
 */
GPUColorDict.prototype.a

/**
 * @record
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
 * @record
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
 * @interface
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpuqueue
 */
var GPUQueue = function() {};

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
 * @param {number} bufferOffset
 * @param {BufferSource} data
 * @param {number=} dataOffset
 * @param {number=} size
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuqueue-writebuffer
 */
GPUQueue.prototype.writeBuffer = function(buffer, bufferOffset, data, dataOffset, size) { };

/**
 * @param {GPUImageCopyTexture} destination
 * @param {BufferSource} data
 * @param {GPUImageDataLayout} dataLayout
 * @param {Array<number>|GPUExtent3DDict} size
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuqueue-writetexture
 */
GPUQueue.prototype.writeTexture = function(destination, data, dataLayout, size) { };

/**
 * @param {GPUImageCopyExternalImage} source
 * @param {GPUImageCopyTexture} destination
 * @param {Array<number>|GPUExtent3DDict} copySize
 * @return {undefined}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuqueue-copyexternalimagetotexture
 */
GPUQueue.prototype.copyExternalImageToTexture = function(source, destination, copySize) { };

/**
 * @interface
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpubuffer
 */
var GPUBuffer = function() {};

/**
 * @param {number} mode
 * @param {number=} offset
 * @param {number=} size
 * @return {Promise<undefined>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubuffer-mapasync
 */
GPUBuffer.prototype.mapAsync = function(mode, offset, size) {};

/**
 * @param {number=} offset
 * @param {number=} size
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
 * @record
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpubufferdescriptor
 */
var GPUBufferDescriptor = function() {};

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferdescriptor-size
 */
GPUBufferDescriptor.prototype.size;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferdescriptor-usage
 */
GPUBufferDescriptor.prototype.usage;

/**
 * @type {boolean}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferdescriptor-mappedatcreation
 */
GPUBufferDescriptor.prototype.mappedAtCreation;

/**
 * @interface
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gputexture
 */
var GPUTexture = function() {};

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
 * @record
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpusamplerdescriptor
 */
var GPUSamplerDescriptor = function() {};

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-addressmodeu
 */
GPUSamplerDescriptor.prototype.addressModeU; //GPUAddressMode

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-addressmodev
 */
GPUSamplerDescriptor.prototype.addressModeV; //GPUAddressMode

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-addressmodew
 */
GPUSamplerDescriptor.prototype.addressModeW; //GPUAddressMode

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-magfilter
 */
GPUSamplerDescriptor.prototype.magFilter; //GPUFilterMode

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-minfilter
 */
GPUSamplerDescriptor.prototype.minFilter; //GPUFilterMode

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-mipmapfilter
 */
 GPUSamplerDescriptor.prototype.mipmapFilter; //GPUFilterMode

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
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-compare
 */
GPUSamplerDescriptor.prototype.compare; //GPUCompareFunction

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpusamplerdescriptor-maxanisotropy
 */
GPUSamplerDescriptor.prototype.maxAnisotropy;

/**
 * @interface
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpusampler
 */
var GPUSampler = function() {};

/**
 * @interface
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpubindgrouplayout
 */
var GPUBindGroupLayout = function() {};

/**
 * @record
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
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpushaderstage
 */
var GPUShaderStage = function() {};

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpushaderstage-vertex
 */
GPUShaderStage.prototype.VERTEX;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpushaderstage-fragment
 */
GPUShaderStage.prototype.FRAGMENT;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpushaderstage-compute
 */
GPUShaderStage.prototype.COMPUTE;

/**
 * @interface
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpubindgroup
 */
var GPUBindGroup = function() {};

/**
 * @record
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
 * @record
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpubindgroupentry
 */
var GPUBindGroupEntry = function() {};

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgroupentry-binding
 */
GPUBindGroupEntry.prototype.binding;

/**
 * @type {GPUSampler|GPUTextureView|GPUBufferBinding|GPUExternalTexture}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgroupentry-resource
 */
GPUBindGroupEntry.prototype.resource;

/**
 * @record
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpubindgrouplayoutentry
 */
var GPUBindGroupLayoutEntry = function() {};

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubindgrouplayoutentry-binding
 */
GPUBindGroupLayoutEntry.prototype.binding;

/**
 * @type {number}
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
 * @record
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpubufferbinding
 */
var GPUBufferBinding = function() {};

/**
 * @type {GPUBuffer}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferbinding-buffer
 */
GPUBufferBinding.prototype.buffer;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferbinding-offset
 */
GPUBufferBinding.prototype.offset;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpubufferbinding-size
 */
GPUBufferBinding.prototype.size;

/**
 * @record
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
 * @interface
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpupipelinelayout
 */
var GPUPipelineLayout = function() {};

/**
 * @interface
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
 * @record
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpushadermoduledescriptor
 */
var GPUShaderModuleDescriptor = function() {};

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpushadermoduledescriptor-code
 */
GPUShaderModuleDescriptor.prototype.code;

/**
 * @type {Object}
 * @see https://www.w3.org/TR/webgpu/#dom-gpushadermoduledescriptor-sourcemap
 */
GPUShaderModuleDescriptor.prototype.sourceMap;

/**
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpucompilationmessage
 */
var GPUCompilationMessage = function() {};

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucompilationmessage-message
 */
GPUCompilationMessage.prototype.message;

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucompilationmessage-type
 */
GPUCompilationMessage.prototype.type; //GPUCompilationMessageType

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
 * @interface
 * @see https://www.w3.org/TR/webgpu/#gpucompilationinfo
 */
var GPUCompilationInfo = function() {};

/**
 * @type {Array<GPUCompilationMessage>}
 * @see https://www.w3.org/TR/webgpu/#dom-gpucompilationinfo-messages
 */
GPUCompilationInfo.prototype.messages;

/**
 * @record
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
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuexternaltexturedescriptor-colorspace
 */
GPUExternalTextureDescriptor.prototype.colorSpace; //

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpuswapchaindescriptor
 */
var GPUSwapChainDescriptor = function() {};

/**
 * @type {GPUDevice}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuswapchaindescriptor-device
 */
GPUSwapChainDescriptor.prototype.device;

/**
 * @type {string} //GPUTextureFormat
 * @see https://www.w3.org/TR/webgpu/#dom-gpuswapchaindescriptor-format
 */
GPUSwapChainDescriptor.prototype.format;

/**
 * @type {number}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuswapchaindescriptor-usage
 */
GPUSwapChainDescriptor.prototype.usage;

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpuswapchaindescriptor-compositingalphamode
 */
GPUSwapChainDescriptor.prototype.compositingAlphaMode; //GPUCanvasCompositingAlphaMode

/**
* @type {Array<number>|GPUExtent3DDict} //GPUExtent3D
* @see https://www.w3.org/TR/webgpu/#dom-gpuswapchaindescriptor-size
*/
GPUSwapChainDescriptor.prototype.size;

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUExternalTexture = function() {};

/**
 * @record
 * @extends {GPUPipelineDescriptorBase}
 */
var GPUComputePipelineDescriptor = function() {};

/**
 * @type {GPUProgrammableStage}
 */
GPUExternalTextureDescriptor.prototype.compute;

/**
 * @record
 * @extends {GPUPipelineDescriptorBase}
 */
var GPUProgrammableStage = function() {};

/**
 * @type {GPUShaderModule}
 */
GPUProgrammableStage.prototype.module;

/**
 * @type {string}
 */
GPUProgrammableStage.prototype.entryPoint;

/**
 * @interface
 */
var GPUPipelineBase = function() {};

/**
 * @param {number} index
 * @return {GPUBindGroupLayout}
 */
GPUPipelineBase.prototype.getBindGroupLayout = function(index) {};

/**
 * @interface
 * @extends {GPUObjectBase}
 * @extends {GPUPipelineBase}
 */
var GPUComputePipeline = function() {};

/**
 * @interface
 * @extends {GPUObjectBase}
 * @extends {GPUPipelineBase}
 */
var GPURenderPipeline = function() {};

/**
 * @record
 * @extends {GPUPipelineDescriptorBase}
 */
var GPURenderPipelineDescriptor = function() {};

/**
 * @type {GPUVertexState}
 */
GPURenderPipelineDescriptor.prototype.vertex;

/**
 * @type {GPUPrimitiveState}
 */
GPURenderPipelineDescriptor.prototype.primitive;

/**
 * @type {GPUDepthStencilState}
 */
GPURenderPipelineDescriptor.prototype.depthStencil;

/**
 * @type {GPUMultisampleState}
 */
GPURenderPipelineDescriptor.prototype.multisample;

/**
 * @type {GPUFragmentState}
 */
GPURenderPipelineDescriptor.prototype.fragment;

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUCommandEncoderDescriptor = function() {};

/**
 * @type {boolean}
 */
GPUCommandEncoderDescriptor.prototype.measureExecutionTime;

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUCommandEncoder = function() {};

/**
 * @param {GPURenderPassDescriptor} descriptor
 * @return {GPURenderPassEncoder}
 */
GPUCommandEncoder.prototype.beginRenderPass = function(descriptor) {};

/**
 * @param {GPUComputePassDescriptor=} descriptor
 * @return {GPUComputePassEncoder}
 */
GPUCommandEncoder.prototype.beginComputePass = function(descriptor) {};

/**
 * @param {GPUBuffer} source
 * @param {number} sourceOffset
 * @param {GPUBuffer} destination
 * @param {number} destinationOffset
 * @param {number} size
 * @return {undefined}
 */
GPUCommandEncoder.prototype.copyBufferToBuffer = function(source, sourceOffset, destination, destinationOffset, size) {};

/**
 * @param {GPUImageCopyBuffer} source
 * @param {GPUImageCopyTexture} destination
 * @param {Array<number>|GPUExtent3DDict} copySize
 * @return {undefined}
 */
GPUCommandEncoder.prototype.copyBufferToTexture = function(source, destination, copySize) {};

/**
 * @param {GPUImageCopyTexture} source
 * @param {GPUImageCopyBuffer} destination
 * @param {Array<number>|GPUExtent3DDict} copySize
 * @return {undefined}
 */
GPUCommandEncoder.prototype.copyTextureToBuffer = function(source, destination, copySize) {};

/**
 * @param {GPUImageCopyTexture} source
 * @param {GPUImageCopyTexture} destination
 * @param {Array<number>|GPUExtent3DDict} copySize
 * @return {undefined}
 */
GPUCommandEncoder.prototype.copyTextureToTexture = function(source, destination, copySize) {};

/**
 * @param {string} groupLabel
 * @return {undefined}
 */
GPUCommandEncoder.prototype.pushDebugGroup = function(groupLabel) {};

/**
 * @return {undefined}
 */
GPUCommandEncoder.prototype.popDebugGroup = function() {};

/**
 * @param {string} markerLabel
 * @return {undefined}
 */
GPUCommandEncoder.prototype.insertDebugMarker = function(markerLabel) {};

/**
 * @param {GPUQuerySet} querySet
 * @param {number} queryIndex
 * @return {undefined}
 */
GPUCommandEncoder.prototype.writeTimestamp = function(querySet, queryIndex) {};

/**
 * @param {GPUQuerySet} querySet
 * @param {number} firstQuery
 * @param {number} queryCount
 * @param {GPUBuffer} destination
 * @param {number} destinationOffset
 * @return {undefined}
 */
GPUCommandEncoder.prototype.resolveQuerySet = function(querySet, firstQuery, queryCount, destination, destinationOffset) {};

/**
 * @param {GPUCommandBufferDescriptor=} descriptor
 * @return {GPUCommandBuffer}
 */
GPUCommandEncoder.prototype.finish = function(descriptor) {};

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPURenderBundleEncoderDescriptor = function() {};

/**
 * @type {Array<string>}
 */
GPURenderBundleEncoderDescriptor.prototype.colorFormats; //GPUTextureFormat

/**
 * @type {string}
 */
GPURenderBundleEncoderDescriptor.prototype.depthStencilFormat; //GPUTextureFormat

/**
 * @type {number}
 */
GPURenderBundleEncoderDescriptor.prototype.sampleCount;

/**
 * @interface
 * @extends {GPUObjectBase}
 * @extends {GPUProgrammablePassEncoder}
 * @extends {GPURenderEncoderBase}
 */
var GPURenderBundleEncoder = function() {};

/**
 * @param {GPURenderBundleDescriptor=} descriptor
 * @return {GPURenderBundle}
 */
GPURenderBundleEncoder.prototype.finish = function(descriptor) {};

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUQuerySetDescriptor = function() {};

/**
 * @type {string}
 */
GPUQuerySetDescriptor.prototype.type; //GPUQueryType

/**
 * @type {number}
 */
GPUQuerySetDescriptor.prototype.count;

/**
 * @type {Array<string>}
 */
GPUQuerySetDescriptor.prototype.pipelineStatistics; //GPUPipelineStatisticName

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUQuerySet = function() {};

/**
 * @return {undefined}
 */
GPUQuerySet.prototype.destroy = function() {};

/**
 * @record
 */
var GPUExtent3DDict = function() {};

/**
 * @type {number}
 */
GPUTextureDescriptor.prototype.width;

/**
 * @type {number}
 */
GPUTextureDescriptor.prototype.height;

/**
 * @type {number}
 */
GPUTextureDescriptor.prototype.depthOrArrayLayers;

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUTextureDescriptor = function() {};

/**
 * @type {Array<number>|GPUExtent3DDict}
 */
GPUTextureDescriptor.prototype.size;

/**
 * @type {number}
 */
GPUTextureDescriptor.prototype.mipLevelCount;

/**
 * @type {number}
 */
GPUTextureDescriptor.prototype.sampleCount;

/**
 * @type {string}
 */
GPUTextureDescriptor.prototype.dimension; //GPUTextureDimension

/**
 * @type {string}
 */
GPUTextureDescriptor.prototype.format; //GPUTextureFormat

/**
 * @type {number}
 */
GPUTextureDescriptor.prototype.usage;

/**
 * @interface
 * @extends {GPUObjectDescriptorBase}
 */
var GPUCommandBuffer = function() {};

/**
 * @const
 * @type {Promise<number>}
 */
GPUCommandBuffer.prototype.executionTime;

/**
 * @record
 */
var GPUImageCopyTexture = function() {};

/**
 * @type {GPUTexture}
 */
GPUImageCopyTexture.prototype.texture;

/**
 * @type {number}
 */
GPUImageCopyTexture.prototype.mipLevel;

/**
 * @type {Array<number>|GPUOrigin3DDict}
 */
GPUImageCopyTexture.prototype.origin;

/**
 * @type {string}
 */
GPUImageCopyTexture.prototype.aspect; //GPUTextureAspect

/**
 * @record
 */
var GPUImageDataLayout = function() {};

/**
 * @type {number}
 */
GPUImageDataLayout.prototype.offset;

/**
 * @type {number}
 */
GPUImageDataLayout.prototype.bytesPerRow;

/**
 * @type {number}
 */
GPUImageDataLayout.prototype.rowsPerImage;

/**
 * @record
 */
var GPUImageCopyExternalImage = function() {};

/**
 * @type {ImageBitmap|HTMLCanvasElement|OffscreenCanvas}
 */
GPUImageCopyExternalImage.prototype.source;

/**
 * @type {Array<number>|GPUOrigin2DDict}
 */
GPUImageCopyExternalImage.prototype.origin;

/**
 * @interface
 */
var GPUMapMode = function() {};

/**
 * @type {number}
 */
GPUMapMode.prototype.READ;

/**
 * @type {number}
 */
GPUMapMode.prototype.WRITE;

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUTextureView = function() {};

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUTextureViewDescriptor = function() {};

/**
 * @type {string}
 */
GPUTextureViewDescriptor.prototype.format; //GPUTextureFormat

/**
 * @type {string}
 */
GPUTextureViewDescriptor.prototype.dimension; //GPUTextureViewDimension

/**
 * @type {string}
 */
GPUTextureViewDescriptor.prototype.aspect; //GPUTextureAspect

/**
 * @type {number}
 */
GPUTextureViewDescriptor.prototype.baseMipLevel;

/**
 * @type {number}
 */
GPUTextureViewDescriptor.prototype.mipLevelCount;

/**
 * @type {number}
 */
GPUTextureViewDescriptor.prototype.baseArrayLayer;

/**
 * @type {number}
 */
GPUTextureViewDescriptor.prototype.arrayLayerCount;

/**
 * @record
 */
var GPUBufferBindingLayout = function() {};

/**
 * @type {string}
 */
GPUTextureViewDescriptor.prototype.type; //GPUBufferBindingType

/**
 * @type {boolean}
 */
GPUTextureViewDescriptor.prototype.hasDynamicOffset;

/**
 * @type {number}
 */
GPUTextureViewDescriptor.prototype.minBindingSize;

/**
 * @record
 */
var GPUSamplerBindingLayout = function() {};

/**
 * @type {string}
 */
GPUSamplerBindingLayout.prototype.type; //GPUSamplerBindingType

/**
 * @record
 */
var GPUTextureBindingLayout = function() {};

/**
 * @type {string}
 */
GPUTextureBindingLayout.prototype.sampleType; //GPUTextureSampleType

/**
 * @type {string}
 */
GPUTextureBindingLayout.prototype.viewDimension; //GPUTextureViewDimension

/**
 * @type {boolean}
 */
GPUTextureBindingLayout.prototype.multisampled;

/**
 * @record
 */
var GPUStorageTextureBindingLayout = function() {};

/**
 * @type {string}
 */
GPUStorageTextureBindingLayout.prototype.access; //

/**
 * @type {string}
 */
GPUStorageTextureBindingLayout.prototype.format; //GPUTextureFormat

/**
 * @type {string} //GPUTextureViewDimension
 */
GPUStorageTextureBindingLayout.prototype.viewDimension;

/**
 * @record
 */
var GPUExternalTextureBindingLayout = function() {};

/**
 * @record
 * @extends {GPUProgrammableStage}
 */
var GPUVertexState = function() {};

/**
 * @type {Array<GPUVertexBufferLayout>}
 */
GPUVertexState.prototype.buffers;

/**
 * @record
 */
var GPUVertexBufferLayout = function() {};

/**
 * @type {number}
 */
GPUVertexState.prototype.arrayStride;

/**
 * @type {string}
 */
GPUVertexState.prototype.stepMode; //GPUInputStepMode

/**
 * @type {Array<GPUVertexAttribute>}
 */
GPUVertexState.prototype.attributes;


/**
 * @record
 */
var GPUVertexAttribute = function() {};

/**
 * @type {string}
 */
GPUVertexAttribute.prototype.format; //GPUVertexFormat

/**
 * @type {number}
 */
GPUVertexAttribute.prototype.offset;

/**
 * @type {number}
 */
GPUVertexAttribute.prototype.shaderLocation;

/**
 * @record
 */
var GPUPrimitiveState = function() {};

/**
 * @type {string}
 */
GPUPrimitiveState.prototype.topology; //GPUPrimitiveTopology

/**
 * @type {string}
 */
GPUPrimitiveState.prototype.stripIndexFormat; //GPUIndexFormat

/**
 * @type {string}
 */
GPUPrimitiveState.prototype.frontFace; //GPUFrontFace

/**
 * @type {string}
 */
GPUPrimitiveState.prototype.cullMode; //GPUCullMode

/**
 * @type {boolean}
 */
GPUPrimitiveState.prototype.clampDepth;

/**
 * @record
 */
var GPUDepthStencilState = function() {};

/**
 * @type {boolean}
 */
GPUDepthStencilState.prototype.clampDepth;

/**
 * @type {string}
 */
GPUDepthStencilState.prototype.format; //GPUTextureFormat

/**
 * @type {boolean}
 */
GPUDepthStencilState.prototype.depthWriteEnabled;

/**
 * @type {string}
 */
GPUDepthStencilState.prototype.depthCompare; //GPUCompareFunction

/**
 * @type {GPUStencilFaceState}
 */
GPUDepthStencilState.prototype.stencilFront;

/**
 * @type {GPUStencilFaceState}
 */
GPUDepthStencilState.prototype.stencilBack;

/**
 * @type {number}
 */
GPUDepthStencilState.prototype.stencilReadMask;

/**
 * @type {number}
 */
GPUDepthStencilState.prototype.stencilWriteMask;

/**
 * @type {number}
 */
GPUDepthStencilState.prototype.depthBias;

/**
 * @type {number}
 */
GPUDepthStencilState.prototype.depthBiasSlopeScale;

/**
 * @type {number}
 */
GPUDepthStencilState.prototype.depthBiasClamp;

/**
 * @record
 */
var GPUMultisampleState = function() {};

/**
 * @type {number}
 */
GPUMultisampleState.prototype.count;

/**
 * @type {number}
 */
GPUMultisampleState.prototype.mask;

/**
 * @type {boolean}
 */
GPUMultisampleState.prototype.alphaToCoverageEnabled;

/**
 * @record
 * @extends {GPUProgrammableStage}
 */
var GPUFragmentState = function() {};

/**
 * @type {Array<GPUColorTargetState>}
 */
GPUFragmentState.prototype.targets;

/**
 * @record
 */
var GPUColorTargetState = function() {};

/**
 * @type {string}
 */
GPUColorTargetState.prototype.format; //GPUTextureFormat

/**
 * @type {string}
 */
GPUColorTargetState.prototype.blend; //GPUBlendState

/**
 * @type {number}
 */
GPUColorTargetState.prototype.writeMask;

/**
 * @record
 */
var GPUBlendState = function() {};

/**
 * @type {GPUBlendComponent}
 */
GPUBlendState.prototype.color;

/**
 * @type {GPUBlendComponent}
 */
GPUBlendState.prototype.alpha;

/**
 * @record
 */
var GPUBlendComponent = function() {};

/**
 * @type {string}
 */
GPUBlendComponent.prototype.srcFactor; //GPUBlendFactor

/**
 * @type {string}
 */
GPUBlendComponent.prototype.dstFactor; //GPUBlendFactor

/**
 * @type {string}
 */
GPUBlendComponent.prototype.operation; //GPUBlendOperation

/**
 * @interface
 */
var GPUObjectBase = function() {};

/**
 * @type {string}
 */
GPUObjectBase.prototype.label; //GPUBlendOperation

/**
 * @interface
 * @extends {GPUObjectBase}
 * @extends {GPUProgrammablePassEncoder}
 */
var GPUComputePassEncoder = function() {};

/**
 * @param {GPUComputePipeline} pipeline
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.setPipeline = function(pipeline) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.dispatch = function(x, y, z) {};

/**
 * @param {GPUBuffer} indirectBuffer
 * @param {number} indirectOffset
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.dispatchIndirect = function(indirectBuffer, indirectOffset) {};

/**
 * @param {GPUQuerySet} querySet
 * @param {number} queryIndex
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.beginPipelineStatisticsQuery = function(querySet, queryIndex) {};

/**
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.endPipelineStatisticsQuery = function() {};

/**
 * @param {GPUQuerySet} querySet
 * @param {number} queryIndex
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.writeTimestamp = function(querySet, queryIndex) {};

/**
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.endPass = function() {};

/**
 * @interface
 */
var GPURenderEncoderBase = function() {};

/**
 * @param {GPURenderPipeline} pipeline
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.setPipeline = function(pipeline) {};

/**
 * @param {GPUBuffer} buffer
 * @param {string} indexFormat //GPUIndexFormat
 * @param {number=} offset
 * @param {number=} size
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.setIndexBuffer = function(buffer, indexFormat, offset, size) {};

/**
 * @param {number} slot
 * @param {GPUBuffer} buffer
 * @param {number=} offset
 * @param {number=} size
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.setVertexBuffer = function(slot, buffer, offset, size) {};

/**
 * @param {number} vertexCount
 * @param {number=} instanceCount
 * @param {number=} firstVertex
 * @param {number=} firstInstance
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.draw = function(vertexCount, instanceCount, firstVertex, firstInstance) {};

/**
 * @param {number} indexCount
 * @param {number=} instanceCount
 * @param {number=} firstIndex
 * @param {number=} baseVertex
 * @param {number=} firstInstance
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.drawIndexed = function(indexCount, instanceCount, firstIndex, baseVertex, firstInstance) {};

/**
 * @param {GPUBuffer} indirectBuffer
 * @param {number} indirectOffset
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.drawIndirect = function(indirectBuffer, indirectOffset) {};

/**
 * @param {GPUBuffer} indirectBuffer
 * @param {number} indirectOffset
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.drawIndexedIndirect = function(indirectBuffer, indirectOffset) {};

/**
 * @interface
 */
var GPUProgrammablePassEncoder = function() {};

/**
 * @param {number} index
 * @param {GPUBindGroup} bindGroup
 * @param {Array<number>=} dynamicOffsetsData
 * @param {number=} dynamicOffsetsDataStart
 * @param {number=} dynamicOffsetsDataLength
 * @return {undefined}
 */
GPUProgrammablePassEncoder.prototype.setBindGroup = function(index, bindGroup, dynamicOffsetsData, dynamicOffsetsDataStart, dynamicOffsetsDataLength) {};

/**
 * @return {undefined}
 */
GPUProgrammablePassEncoder.prototype.popDebugGroup = function() {};

/**
 * @param {string} groupLabel
 * @return {undefined}
 */
GPUProgrammablePassEncoder.prototype.pushDebugGroup = function(groupLabel) {};

/**
 * @param {string} markerLabel
 * @return {undefined}
 */
GPUProgrammablePassEncoder.prototype.insertDebugMarker = function(markerLabel) {};

/**
 * @interface
 * @extends {GPUProgrammablePassEncoder}
 * @extends {GPUObjectBase}
 * @extends {GPURenderEncoderBase}
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
 */
GPURenderPassEncoder.prototype.setViewport = function(x, y, width, height, minDepth, maxDepth) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.setScissorRect = function(x, y, width, height) {};

/**
 * @param {Array<number>|GPUColorDict} color
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.setBlendConstant = function(color) {};

/**
 * @param {number} reference
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.setStencilReference = function(reference) {};

/**
 * @param {number} queryIndex
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.beginOcclusionQuery = function(queryIndex) {};

/**
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.endOcclusionQuery = function() {};

/**
 * @param {GPUQuerySet} querySet
 * @param {number} queryIndex
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.beginPipelineStatisticsQuery = function(querySet, queryIndex) {};

/**
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.endPipelineStatisticsQuery = function() {};

/**
 * @param {GPUQuerySet} querySet
 * @param {number} queryIndex
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.writeTimestamp = function(querySet, queryIndex) {};

/**
 * @param {Array<GPURenderBundle>} bundles
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.executeBundles = function(bundles) {};

/**
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.endPass = function() {};

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPURenderPassDescriptor = function() {};

/**
 * @type {Array<GPURenderPassColorAttachment>}
 */
GPURenderPassDescriptor.prototype.colorAttachments;

/**
 * @type {GPURenderPassDepthStencilAttachment}
 */
GPURenderPassDescriptor.prototype.depthStencilAttachment;

/**
 * @type {GPUQuerySet}
 */
GPURenderPassDescriptor.prototype.occlusionQuerySet;

/**
 * @record
 */
var GPURenderPassColorAttachment = function() {};

/**
 * @type {GPUTextureView}
 */
GPURenderPassColorAttachment.prototype.view;

/**
 * @type {GPUTextureView}
 */
GPURenderPassColorAttachment.prototype.resolveTarget;

/**
 * @type {string|Array<number>|GPUColorDict}
 */
GPURenderPassColorAttachment.prototype.loadValue; //GPULoadOp

/**
 * @type {string}
 */
GPURenderPassColorAttachment.prototype.storeOp; //GPUStoreOp

/**
 * @record
 */
var GPURenderPassDepthStencilAttachment = function() {};

/**
 * @type {GPUTextureView}
 */
GPURenderPassDepthStencilAttachment.prototype.view;

/**
 * @type {string|number}
 */
GPURenderPassDepthStencilAttachment.prototype.depthLoadValue; //GPULoadOp

/**
 * @type {string}
 */
GPURenderPassDepthStencilAttachment.prototype.depthStoreOp; //GPULoadOp

/**
 * @type {boolean}
 */
GPURenderPassDepthStencilAttachment.prototype.depthReadOnly;

/**
 * @type {string|number}
 */
GPURenderPassDepthStencilAttachment.prototype.stencilLoadValue; //GPULoadOp

/**
 * @type {string}
 */
GPURenderPassDepthStencilAttachment.prototype.stencilStoreOp; //GPULoadOp

/**
 * @type {boolean}
 */
GPURenderPassDepthStencilAttachment.prototype.stencilReadOnly;

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUComputePassDescriptor = function() {};

/**
 * @record
 * @extends {GPUImageDataLayout}
 */
var GPUImageCopyBuffer = function() {};

/**
 * @type {GPUBuffer}
 */
GPUImageCopyBuffer.prototype.buffer;

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpucommandbufferdescriptor
 */
var GPUCommandBufferDescriptor = function() {};

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpurenderbundledescriptor
 */
var GPURenderBundleDescriptor = function() {};

/**
 * @interface
 * @extends {GPUObjectBase}
 * @see https://www.w3.org/TR/webgpu/#gpurenderbundle
 */
var GPURenderBundle = function() {};

/**
 * @record
 * @see https://www.w3.org/TR/webgpu/#dictdef-gpustencilfacestate
 */
var GPUStencilFaceState = function() {};

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpustencilfacestate-compare
 */
GPUStencilFaceState.prototype.compare; //GPUCompareFunction

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpustencilfacestate-failop
 */
GPUStencilFaceState.prototype.failOp; //GPUStencilOperation

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpustencilfacestate-depthfailop
 */
GPUStencilFaceState.prototype.depthFailOp; //GPUStencilOperation

/**
 * @type {string}
 * @see https://www.w3.org/TR/webgpu/#dom-gpustencilfacestate-passop
 */
GPUStencilFaceState.prototype.passOp; //GPUStencilOperation
