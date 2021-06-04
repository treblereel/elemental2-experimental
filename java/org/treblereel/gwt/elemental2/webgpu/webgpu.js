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
 * @type {!GPU}
 */
Navigator.prototype.gpu;

/**
 * @interface
 */
var GPUCanvasContext = function () { };

/**r
 * @param {GPUSwapChainDescriptor} descriptor
 * @return {GPUSwapChain}
 */
GPUCanvasContext.prototype.configureSwapChain = function(descriptor) { };

/**
 * @param {GPUAdapter} adapter
 * @return {string} //GPUTextureFormat
 */
GPUCanvasContext.prototype.getSwapChainPreferredFormat = function(adapter) { };

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUSwapChain = function () { };

/**
 * @return {GPUTexture}
 */
GPUSwapChain.prototype.getCurrentTexture = function() { };

/**
 * @record
 */
var GPURequestAdapterOptions = function () { };

/**
 * @type {string}
 */
GPURequestAdapterOptions.prototype.powerPreference //GPUPowerPreference

/**
 * @record
 */
var GPUObjectDescriptorBase = function () { };

/**
 * @type {string}
 */
GPUObjectDescriptorBase.prototype.label

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUPipelineDescriptorBase = function () { };

/**
 * @type {GPUPipelineLayout}
 */
GPUPipelineDescriptorBase.prototype.layout

/**
 * @interface
 */
var GPU = function () { };

/**
 * @param {GPURequestAdapterOptions=} opt_GPURequestAdapterOptions
 * @return {Promise<GPUAdapter>}
 */
GPU.prototype.requestAdapter = function (opt_GPURequestAdapterOptions) { };


/**
 * @interface
 * @extends {Iterable<!Array<string>>}
s */
var GPUSupportedFeatures = function () { };

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
 */
var GPUAdapterLimits = function () { };

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxTextureDimension1D;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxTextureDimension2D;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxTextureDimension3D;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxTextureArrayLayers;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxDynamicUniformBuffersPerPipelineLayout;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxDynamicStorageBuffersPerPipelineLayout;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxSampledTexturesPerShaderStage;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxSamplersPerShaderStage;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxStorageBuffersPerShaderStage;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxStorageTexturesPerShaderStage;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxUniformBuffersPerShaderStage;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxUniformBufferBindingSize;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxStorageBufferBindingSize;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxVertexBuffers;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxVertexAttributes;

/**
 * @const
 * @type {number|null}
 */
GPUAdapterLimits.prototype.maxVertexBufferArrayStride;


/**
 * @interface
 */
var GPUAdapter = function () { };

/**
 * @const
 * @type {string}
 */
GPUAdapter.prototype.name;

/**
 * @const
 * @type {GPUSupportedFeatures}
 */
GPUAdapter.prototype.features;

/**
 * @const
 * @type {GPUAdapterLimits}
 */
GPUAdapter.prototype.limits;

/**
 * @param {GPUDeviceDescriptor=} opt_GPUDeviceDescriptor
 * @return {Promise<GPUDevice>}
 */
GPUAdapter.prototype.requestDevice = function (opt_GPUDeviceDescriptor) { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUDeviceDescriptor = function () { };

/**
 * @type {Array<string>}
 */
GPUDeviceDescriptor.prototype.nonGuaranteedFeatures; //GPUFeatureName

/**
 * @type {Map<string, number>}
 */
GPUDeviceDescriptor.prototype.nonGuaranteedLimits;


/**
 * @interface
 * @extends {EventTarget}
 * @extends {GPUObjectBase}
 */
var GPUDevice = function () { };

/**
 * @const
 * @type {GPUSupportedFeatures}
 */
GPUDevice.prototype.features;

/**
 * @const
 * @type {GPUAdapterLimits}
 */
GPUDevice.prototype.limits;

/**
 * @const
 * @type {GPUQueue}
 */
GPUDevice.prototype.queue;

/**
 * @return {undefined}
 */
GPUDevice.prototype.destroy = function() { };

/**
 * @param {GPUBufferDescriptor} descriptor
 * @return {GPUBuffer}
 */
GPUDevice.prototype.createBuffer = function(descriptor) { };

/**
 * @param {GPUSamplerDescriptor=} descriptor
 * @return {GPUSampler}
 */
GPUDevice.prototype.createSampler = function(descriptor) { };

/**
 * @param {GPUExternalTextureDescriptor} descriptor
 * @return {GPUExternalTexture}
 */
GPUDevice.prototype.importExternalTexture = function(descriptor) { };

/**
 * @param {GPUBindGroupLayoutDescriptor} descriptor
 * @return {GPUBindGroupLayout}
 */
GPUDevice.prototype.createBindGroupLayout = function(descriptor) { };

/**
 * @param {GPUPipelineLayoutDescriptor} descriptor
 * @return {GPUPipelineLayout}
 */
GPUDevice.prototype.createPipelineLayout = function(descriptor) { };

/**
 * @param {GPUBindGroupDescriptor} descriptor
 * @return {GPUBindGroup}
 */
GPUDevice.prototype.createBindGroup = function(descriptor) { };

/**
 * @param {GPUShaderModuleDescriptor} descriptor
 * @return {GPUShaderModule}
 */
GPUDevice.prototype.createShaderModule = function(descriptor) { };

/**
 * @param {GPUComputePipelineDescriptor} descriptor
 * @return {GPUComputePipeline}
 */
GPUDevice.prototype.createComputePipeline = function(descriptor) { };

/**
 * @param {GPURenderPipelineDescriptor} descriptor
 * @return {GPURenderPipeline}
 */
GPUDevice.prototype.createRenderPipeline = function(descriptor) { };

/**
 * @param {GPUComputePipelineDescriptor} descriptor
 * @return {Promise<GPUComputePipeline>}
 */
GPUDevice.prototype.createComputePipelineAsync = function(descriptor) { };

/**
 * @param {GPURenderPipelineDescriptor} descriptor
 * @return {Promise<GPURenderPipeline>}
 */
GPUDevice.prototype.createRenderPipelineAsync = function(descriptor) { };

/**
 * @param {GPUCommandEncoderDescriptor=} descriptor
 * @return {GPUCommandEncoder}
 */
GPUDevice.prototype.createCommandEncoder = function(descriptor) { };

/**
 * @param {GPURenderBundleEncoderDescriptor} descriptor
 * @return {GPURenderBundleEncoder}
 */
GPUDevice.prototype.createRenderBundleEncoder = function(descriptor) { };

/**
 * @param {GPUQuerySetDescriptor} descriptor
 * @return {GPUQuerySet}
 */
GPUDevice.prototype.createQuerySet = function(descriptor) { };

/**
 * @param {GPUTextureDescriptor} descriptor
 * @return {GPUTexture}
 */
GPUDevice.prototype.createTexture = function(descriptor) { }

/**
 * @record
 */
var GPUColorDict = function () { };

/**
 * @type {number}
 */
GPUColorDict.prototype.r

/**
 * @type {number}
 */
GPUColorDict.prototype.g

/**
 * @type {number}
 */
GPUColorDict.prototype.b

/**
 * @type {number}
 */
GPUColorDict.prototype.a

/**
 * @record
 */
var GPUOrigin2DDict = function () { };

/**
 * @type {number}
 */
GPUOrigin2DDict.prototype.x

/**
 * @type {number}
 */
GPUOrigin2DDict.prototype.y

/**
 * @record
 */
var GPUOrigin3DDict = function () { };

/**
 * @type {number}
 */
GPUOrigin3DDict.prototype.x

/**
 * @type {number}
 */
GPUOrigin3DDict.prototype.y

/**
 * @type {number}
 */
GPUOrigin3DDict.prototype.z

/**
 * @interface
 */
var GPUBufferUsage = function() {}

/**
 * @const
 * @type {number}
 */
GPUBufferUsage.MAP_READ;

/**
 * @const
 * @type {number}
 */
GPUBufferUsage.MAP_WRITE;

/**
 * @const
 * @type {number}
 */
GPUBufferUsage.COPY_SRC;

/**
 * @const
 * @type {number}
 */
GPUBufferUsage.COPY_DST;

/**
 * @const
 * @type {number}
 */
GPUBufferUsage.INDEX;

/**
 * @const
 * @type {number}
 */
GPUBufferUsage.VERTEX;

/**
 * @const
 * @type {number}
 */
GPUBufferUsage.UNIFORM;

/**
 * @const
 * @type {number}
 */
GPUBufferUsage.STORAGE;

/**
 * @const
 * @type {number}
 */
GPUBufferUsage.INDIRECT;

/**
 * @const
 * @type {number}
 */
GPUBufferUsage.QUERY_RESOLVE;

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUQueue = function () { };

/**
 * @param {Array<GPUCommandBuffer>} commandBuffers
 * @return {undefined}
 */
GPUQueue.prototype.submit = function(commandBuffers) { };

/**
 * @return {Promise<undefined>}
 */
GPUQueue.prototype.onSubmittedWorkDone = function() { };


/**
 * @param {GPUBuffer} buffer
 * @param {number} bufferOffset
 * @param {BufferSource} data
 * @param {number=} dataOffset
 * @param {number=} size
 * @return {undefined}
 */
GPUQueue.prototype.writeBuffer = function(buffer, bufferOffset, data, dataOffset, size) { };

/**
 * @param {GPUImageCopyTexture} destination
 * @param {BufferSource} data
 * @param {GPUImageDataLayout} dataLayout
 * @param {Array<number>|GPUExtent3DDict} size
 * @return {undefined}
 */
GPUQueue.prototype.writeTexture = function(destination, data, dataLayout, size) { };

/**
 * @param {GPUImageCopyExternalImage} source
 * @param {GPUImageCopyTexture} destination
 * @param {Array<number>|GPUExtent3DDict} copySize
 * @return {undefined}
 */
GPUQueue.prototype.copyExternalImageToTexture = function(source, destination, copySize) { };

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUBuffer = function () { };

/**
 * @param {number} mode
 * @param {number=} offset
 * @param {number=} size
 * @return {Promise<undefined>}
 */
GPUBuffer.prototype.mapAsync = function(mode, offset, size) { };

/**
 * @param {number=} offset
 * @param {number=} size
 * @return {ArrayBuffer}
 */
GPUBuffer.prototype.getMappedRange = function(offset, size) { };

/**
 * @return {undefined}
 */
GPUBuffer.prototype.unmap = function() { };

/**
 * @return {undefined}
 */
GPUBuffer.prototype.destroy = function() { };

/**
 * @return {Promise<ArrayBuffer>}
 */
GPUBuffer.prototype.mapWriteAsync = function() { };

/**
 * @return {Promise<ArrayBuffer>}
 */
GPUBuffer.prototype.mapReadAsync = function() { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUBufferDescriptor = function () { };

/**
 * @type {number}
 */
GPUBufferDescriptor.prototype.size;

/**
 * @type {number}
 */
GPUBufferDescriptor.prototype.usage;

/**
 * @type {boolean}
 */
GPUBufferDescriptor.prototype.mappedAtCreation;

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUTexture = function () { };

/**
 * @param {GPUTextureViewDescriptor=} descriptor
 * @return {GPUTextureView}
 */
GPUTexture.prototype.createView = function (descriptor) { };

/**
 * @return {undefined}
 */
GPUTexture.prototype.destroy = function () { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUSamplerDescriptor = function () { };

/**
 * @type {string}
 */
GPUSamplerDescriptor.prototype.addressModeU; //GPUAddressMode

/**
 * @type {string}
 */
GPUSamplerDescriptor.prototype.addressModeV; //GPUAddressMode

/**
 * @type {string}
 */
GPUSamplerDescriptor.prototype.addressModeW; //GPUAddressMode

/**
 * @type {string}
 */
GPUSamplerDescriptor.prototype.magFilter; //GPUFilterMode

/**
 * @type {string}
 */
GPUSamplerDescriptor.prototype.minFilter; //GPUFilterMode

/**
 * @type {number}
 */
GPUSamplerDescriptor.prototype.lodMinClamp;

/**
 * @type {number}
 */
GPUSamplerDescriptor.prototype.lodMaxClamp;

/**
 * @type {string}
 */
GPUSamplerDescriptor.prototype.compare; //GPUCompareFunction

/**
 * @type {number}
 */
GPUSamplerDescriptor.prototype.maxAnisotropy;

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUSampler = function () { };

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUBindGroupLayout = function () { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUBindGroupLayoutDescriptor = function () { };

/**
 * @type {Array<GPUBindGroupLayoutEntry>}
 */
GPUBindGroupLayoutDescriptor.prototype.entries;

/**
 * @interface
 */
var GPUShaderStage = function () { };

/**
 * @type {number}
 */
GPUShaderStage.prototype.VERTEX;

/**
 * @type {number}
 */
GPUShaderStage.prototype.FRAGMENT;

/**
 * @type {number}
 */
GPUShaderStage.prototype.COMPUTE;

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUBindGroup = function () { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUBindGroupDescriptor = function () { };

/**
 * @type {GPUBindGroupLayout}
 * @override
 */
GPUBindGroupDescriptor.prototype.layout;

/**
 * @type {Array<GPUBindGroupEntry>}
 */
GPUBindGroupDescriptor.prototype.entries;

/**
 * @record
 */
var GPUBindGroupEntry = function () { };

/**
 * @type {number}
 */
GPUBindGroupEntry.prototype.binding;

/**
 * @type {GPUSampler|GPUTextureView|GPUBufferBinding|GPUExternalTexture}
 */
GPUBindGroupEntry.prototype.resource;

/**
 * @record
 */
var GPUBindGroupLayoutEntry = function () { };

/**
 * @type {number}
 */
GPUBindGroupLayoutEntry.prototype.binding;

/**
 * @type {number}
 */
GPUBindGroupLayoutEntry.prototype.visibility;

/**
 * @type {GPUBufferBindingLayout}
 */
GPUBindGroupLayoutEntry.prototype.buffer;

/**
 * @type {GPUSamplerBindingLayout}
 */
GPUBindGroupLayoutEntry.prototype.sampler;

/**
 * @type {GPUTextureBindingLayout}
 */
GPUBindGroupLayoutEntry.prototype.texture;

/**
 * @type {GPUStorageTextureBindingLayout}
 */
GPUBindGroupLayoutEntry.prototype.storageTexture;

/**
 * @type {GPUExternalTextureBindingLayout}
 */
GPUBindGroupLayoutEntry.prototype.externalTexture;

/**
 * @record
 */
var GPUBufferBinding = function () { };

/**
 * @type {GPUBuffer}
 */
GPUBufferBinding.prototype.buffer;

/**
 * @type {number}
 */
GPUBufferBinding.prototype.offset;

/**
 * @type {number}
 */
GPUBufferBinding.prototype.size;

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUPipelineLayoutDescriptor = function () { };

/**
 * @type {Array<GPUBindGroupLayout>}
 */
GPUPipelineLayoutDescriptor.prototype.bindGroupLayouts;

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUPipelineLayout = function () { };

/**
 * @interface
 * @extends {GPUObjectDescriptorBase}
 */
var GPUShaderModule = function () { };

/**
 * @return {Promise<GPUCompilationInfo>}
 */
GPUShaderModule.prototype.compilationInfo = function () { };


/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUShaderModuleDescriptor = function () { };

/**
 * @type {string}
 */
GPUShaderModuleDescriptor.prototype.code;

/**
 * @type {Object}
 */
GPUShaderModuleDescriptor.prototype.sourceMap;

/**
 * @interface
 */
var GPUCompilationMessage = function () { };

/**
 * @type {string}
 */
GPUCompilationMessage.prototype.message;

/**
 * @type {string}
 */
GPUCompilationMessage.prototype.type; //GPUCompilationMessageType

/**
 * @type {number}
 */
GPUCompilationMessage.prototype.lineNum;

/**
 * @type {number}
 */
GPUCompilationMessage.prototype.linePos;

/**
 * @return {number}
 */
GPUCompilationMessage.prototype.offset;

/**
 * @type {number}
 */
GPUCompilationMessage.prototype.length;

/**
 * @interface
 */
var GPUCompilationInfo = function () { };

/**
 * @type {Array<GPUCompilationMessage>}
 */
GPUCompilationInfo.prototype.messages;

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUExternalTextureDescriptor = function () { };

/**
 * @type {HTMLVideoElement}
 */
GPUExternalTextureDescriptor.prototype.source;

/**
 * @type {string}
 */
GPUExternalTextureDescriptor.prototype.colorSpace; //

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUSwapChainDescriptor = function () { };

/**
 * @type {GPUDevice}
 */
GPUSwapChainDescriptor.prototype.device;

/**
 * @type {string} //GPUTextureFormat
 */
GPUSwapChainDescriptor.prototype.format;

/**
 * @type {number}
 */
GPUSwapChainDescriptor.prototype.usage;

/**
 * @type {string}
 */
GPUSwapChainDescriptor.prototype.compositingAlphaMode; //GPUCanvasCompositingAlphaMode


/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUExternalTexture = function () { };

/**
 * @record
 * @extends {GPUPipelineDescriptorBase}
 */
var GPUComputePipelineDescriptor = function () { };

/**
 * @type {GPUProgrammableStage}
 */
GPUExternalTextureDescriptor.prototype.compute;

/**
 * @record
 * @extends {GPUPipelineDescriptorBase}
 */
var GPUProgrammableStage = function () { };

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
var GPUPipelineBase = function () { };

/**
 * @param {number} index
 * @return {GPUBindGroupLayout}
 */
GPUPipelineBase.prototype.getBindGroupLayout = function (index) { };

/**
 * @interface
 * @extends {GPUObjectBase}
 * @extends {GPUPipelineBase}
 */
var GPUComputePipeline = function () { };

/**
 * @interface
 * @extends {GPUObjectBase}
 * @extends {GPUPipelineBase}
 */
var GPURenderPipeline = function () { };

/**
 * @record
 * @extends {GPUPipelineDescriptorBase}
 */
var GPURenderPipelineDescriptor = function () { };

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
var GPUCommandEncoderDescriptor = function () { };

/**
 * @type {boolean}
 */
GPUCommandEncoderDescriptor.prototype.measureExecutionTime;

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPUCommandEncoder = function () { };

/**
 * @param {GPURenderPassDescriptor} descriptor
 * @return {GPURenderPassEncoder}
 */
GPUCommandEncoder.prototype.beginRenderPass = function (descriptor) { };

/**
 * @param {GPUComputePassDescriptor=} descriptor
 * @return {GPUComputePassEncoder}
 */
GPUCommandEncoder.prototype.beginComputePass = function (descriptor) { };

/**
 * @param {GPUBuffer} source
 * @param {number} sourceOffset
 * @param {GPUBuffer} destination
 * @param {number} destinationOffset
 * @param {number} size
 * @return {undefined}
 */
GPUCommandEncoder.prototype.copyBufferToBuffer = function (source, sourceOffset, destination, destinationOffset, size) { };

/**
 * @param {GPUImageCopyBuffer} source
 * @param {GPUImageCopyTexture} destination
 * @param {Array<number>|GPUExtent3DDict} copySize
 * @return {undefined}
 */
GPUCommandEncoder.prototype.copyBufferToTexture = function (source, destination, copySize) { };

/**
 * @param {GPUImageCopyTexture} source
 * @param {GPUImageCopyBuffer} destination
 * @param {Array<number>|GPUExtent3DDict} copySize
 * @return {undefined}
 */
GPUCommandEncoder.prototype.copyTextureToBuffer = function (source, destination, copySize) { };

/**
 * @param {GPUImageCopyTexture} source
 * @param {GPUImageCopyTexture} destination
 * @param {Array<number>|GPUExtent3DDict} copySize
 * @return {undefined}
 */
GPUCommandEncoder.prototype.copyTextureToTexture = function (source, destination, copySize) { };

/**
 * @param {string} groupLabel
 * @return {undefined}
 */
GPUCommandEncoder.prototype.pushDebugGroup = function (groupLabel) { };

/**
 * @return {undefined}
 */
GPUCommandEncoder.prototype.popDebugGroup = function () { };

/**
 * @param {string} markerLabel
 * @return {undefined}
 */
GPUCommandEncoder.prototype.insertDebugMarker = function (markerLabel) { };

/**
 * @param {GPUQuerySet} querySet
 * @param {number} queryIndex
 * @return {undefined}
 */
GPUCommandEncoder.prototype.writeTimestamp = function (querySet, queryIndex) { };

/**
 * @param {GPUQuerySet} querySet
 * @param {number} firstQuery
 * @param {number} queryCount
 * @param {GPUBuffer} destination
 * @param {number} destinationOffset
 * @return {undefined}
 */
GPUCommandEncoder.prototype.resolveQuerySet = function (querySet, firstQuery, queryCount, destination, destinationOffset) { };

/**
 * @param {GPUCommandBufferDescriptor=} descriptor
 * @return {GPUCommandBuffer}
 */
GPUCommandEncoder.prototype.finish = function (descriptor) { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPURenderBundleEncoderDescriptor = function () { };

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
var GPURenderBundleEncoder = function () { };

/**
 * @param {GPURenderBundleDescriptor=} descriptor
 * @return {GPURenderBundle}
 */
GPURenderBundleEncoder.prototype.finish = function (descriptor) { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUQuerySetDescriptor = function () { };

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
var GPUQuerySet = function () { };

/**
 * @return {undefined}
 */
GPUQuerySet.prototype.destroy = function () { };

/**
 * @record
 */
var GPUExtent3DDict = function () { };

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
var GPUTextureDescriptor = function () { };

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
var GPUCommandBuffer = function () { };

/**
 * @const
 * @type {Promise<number>}
 */
GPUCommandBuffer.prototype.executionTime;

/**
 * @record
 */
var GPUImageCopyTexture = function () { };

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
var GPUImageDataLayout = function () { };

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
var GPUImageCopyExternalImage = function () { };

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
var GPUMapMode = function () { };

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
var GPUTextureView = function () { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUTextureViewDescriptor = function () { };

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
var GPUBufferBindingLayout = function () { };

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
var GPUSamplerBindingLayout = function () { };

/**
 * @type {string}
 */
GPUSamplerBindingLayout.prototype.type; //GPUSamplerBindingType

/**
 * @record
 */
var GPUTextureBindingLayout = function () { };

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
var GPUStorageTextureBindingLayout = function () { };

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
var GPUExternalTextureBindingLayout = function () { };

/**
 * @record
 * @extends {GPUProgrammableStage}
 */
var GPUVertexState = function () { };

/**
 * @type {Array<GPUVertexBufferLayout>}
 */
GPUVertexState.prototype.buffers;

/**
 * @record
 */
var GPUVertexBufferLayout = function () { };

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
var GPUVertexAttribute = function () { };

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
var GPUPrimitiveState = function () { };

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
var GPUDepthStencilState = function () { };

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
var GPUMultisampleState = function () { };

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
var GPUFragmentState = function () { };

/**
 * @type {Array<GPUColorTargetState>}
 */
GPUFragmentState.prototype.targets;

/**
 * @record
 */
var GPUColorTargetState = function () { };

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
var GPUBlendState = function () { };

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
var GPUBlendComponent = function () { };

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
var GPUObjectBase = function() { };

/**
 * @type {string}
 */
GPUObjectBase.prototype.label; //GPUBlendOperation

/**
 * @interface
 * @extends {GPUObjectBase}
 * @extends {GPUProgrammablePassEncoder}
 */
var GPUComputePassEncoder = function() { };

/**
 * @param {GPUComputePipeline} pipeline
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.setPipeline = function(pipeline) { };

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.dispatch = function(x, y, z) { };

/**
 * @param {GPUBuffer} indirectBuffer
 * @param {number} indirectOffset
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.dispatchIndirect = function(indirectBuffer, indirectOffset) { };

/**
 * @param {GPUQuerySet} querySet
 * @param {number} queryIndex
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.beginPipelineStatisticsQuery = function(querySet, queryIndex) { };

/**
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.endPipelineStatisticsQuery = function() { };

/**
 * @param {GPUQuerySet} querySet
 * @param {number} queryIndex
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.writeTimestamp = function(querySet, queryIndex) { };

/**
 * @return {undefined}
 */
GPUComputePassEncoder.prototype.endPass = function() { };


/**
 * @interface
 */
var GPURenderEncoderBase = function() { };

/**
 * @param {GPURenderPipeline} pipeline
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.setPipeline = function(pipeline) { };

/**
 * @param {GPUBuffer} buffer
 * @param {string} indexFormat //GPUIndexFormat
 * @param {number=} offset
 * @param {number=} size
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.setIndexBuffer = function(buffer, indexFormat, offset, size) { };

/**
 * @param {number} slot
 * @param {GPUBuffer} buffer
 * @param {number=} offset
 * @param {number=} size
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.setVertexBuffer = function(slot, buffer, offset, size) { };

/**
 * @param {number} vertexCount
 * @param {number=} instanceCount
 * @param {number=} firstVertex
 * @param {number=} firstInstance
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.draw = function(vertexCount, instanceCount, firstVertex, firstInstance) { };

/**
 * @param {number} indexCount
 * @param {number=} instanceCount
 * @param {number=} firstIndex
 * @param {number=} baseVertex
 * @param {number=} firstInstance
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.drawIndexed = function(indexCount, instanceCount, firstIndex, baseVertex, firstInstance) { };

/**
 * @param {GPUBuffer} indirectBuffer
 * @param {number} indirectOffset
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.drawIndirect = function(indirectBuffer, indirectOffset) { };

/**
 * @param {GPUBuffer} indirectBuffer
 * @param {number} indirectOffset
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.drawIndexedIndirect = function(indirectBuffer, indirectOffset) { };

/**
 * @interface
 */
var GPUProgrammablePassEncoder = function() { };

/**
 * @param {number} index
 * @param {GPUBindGroup} bindGroup
 * @param {Array<number>=} dynamicOffsetsData
 * @param {number=} dynamicOffsetsDataStart
 * @param {number=} dynamicOffsetsDataLength
 * @return {undefined}
 */
GPUProgrammablePassEncoder.prototype.setBindGroup = function(index, bindGroup, dynamicOffsetsData, dynamicOffsetsDataStart, dynamicOffsetsDataLength) { };

/**
 * @return {undefined}
 */
GPUProgrammablePassEncoder.prototype.popDebugGroup = function() { };

/**
 * @param {string} groupLabel
 * @return {undefined}
 */
GPUProgrammablePassEncoder.prototype.pushDebugGroup = function(groupLabel) { };

/**
 * @param {string} markerLabel
 * @return {undefined}
 */
GPUProgrammablePassEncoder.prototype.insertDebugMarker = function(markerLabel) { };

/**
 * @interface
 * @extends {GPUProgrammablePassEncoder}
 * @extends {GPUObjectBase}
 * @extends {GPURenderEncoderBase}
 */
var GPURenderPassEncoder = function () { };

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number} minDepth
 * @param {number} maxDepth
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.setViewport = function (x, y, width, height, minDepth, maxDepth) { };

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.setScissorRect = function (x, y, width, height) { };

/**
 * @param {Array<number>|GPUColorDict} color
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.setBlendConstant = function (color) { };

/**
 * @param {number} reference
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.setStencilReference = function (reference) { };

/**
 * @param {number} queryIndex
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.beginOcclusionQuery = function (queryIndex) { };

/**
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.endOcclusionQuery = function () { };

/**
 * @param {GPUQuerySet} querySet
 * @param {number} queryIndex
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.beginPipelineStatisticsQuery = function (querySet, queryIndex) { };

/**
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.endPipelineStatisticsQuery = function () { };

/**
 * @param {GPUQuerySet} querySet
 * @param {number} queryIndex
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.writeTimestamp = function (querySet, queryIndex) { };

/**
 * @param {Array<GPURenderBundle>} bundles
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.executeBundles = function (bundles) { };

/**
 * @return {undefined}
 */
GPURenderPassEncoder.prototype.endPass = function () { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPURenderPassDescriptor = function () { };

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
var GPURenderPassColorAttachment = function () { };

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
var GPURenderPassDepthStencilAttachment = function () { };

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
var GPUComputePassDescriptor = function () { };

/**
 * @record
 * @extends {GPUImageDataLayout}
 */
var GPUImageCopyBuffer = function () { };

/**
 * @type {GPUBuffer}
 */
GPUImageCopyBuffer.prototype.buffer;

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUCommandBufferDescriptor = function () { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPURenderBundleDescriptor = function () { };

/**
 * @interface
 * @extends {GPUObjectBase}
 */
var GPURenderBundle = function () { };

/**
 * @record
 */
var GPUStencilFaceState = function () { };

/**
 * @type {string}
 */
GPUStencilFaceState.prototype.compare; //GPUCompareFunction

/**
 * @type {string}
 */
GPUStencilFaceState.prototype.failOp; //GPUStencilOperation

/**
 * @type {string}
 */
GPUStencilFaceState.prototype.depthFailOp; //GPUStencilOperation

/**
 * @type {string}
 */
GPUStencilFaceState.prototype.passOp; //GPUStencilOperation
