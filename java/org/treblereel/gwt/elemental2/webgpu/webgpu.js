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
 * @return {GPUTextureFormat}
 */
GPUCanvasContext.prototype.getSwapChainPreferredFormat = function(adapter) { };

/**
 * @interface
 */
var GPUSwapChain = function () { };

/**
 * @return {GPUTexture}
 */
GPUSwapChain.prototype.getCurrentTexture = function() { };

/**
 * @constructor
 */
var GPUPowerPreference = function () { }

/** @const */ GPUPowerPreference.LOW_POWER = 'low-power';
/** @const */ GPUPowerPreference.HIGH_PERFORMANCE = 'high-performance';

/**
 * @constructor
 */
var GPUIndexFormat = function () { }

/** @const */ GPUIndexFormat.UINT16 = 'uint16';
/** @const */ GPUIndexFormat.UINT32 = 'uint32';

/**
 * @constructor
 */
var GPUStoreOp = function () { }

/** @const */ GPUStoreOp.STORE = 'store';
/** @const */ GPUStoreOp.CLEAR = 'clear';

/**
 * @constructor
 */
var GPUFrontFace = function () { }

/** @const */ GPUFrontFace.CCW = 'ccw';
/** @const */ GPUFrontFace.CW = 'cw';

/**
 * @constructor
 */
var GPUCanvasCompositingAlphaMode = function () { }

/** @const */ GPUCanvasCompositingAlphaMode.OPAQUE = 'opaque';
/** @const */ GPUCanvasCompositingAlphaMode.PREMULTIPLIED = 'premultiplied';

/**
 * @constructor
 */
var GPUCullMode = function () { }

/** @const */ GPUCullMode.NONE = 'none';
/** @const */ GPUCullMode.FRONT = 'front';
/** @const */ GPUCullMode.BACK = 'back';

/**
 * @constructor
 */
var GPUPrimitiveTopology = function () { }

/** @const */ GPUPrimitiveTopology.POINT_LIST = 'point-list';
/** @const */ GPUPrimitiveTopology.LINE_LIST = 'line-list';
/** @const */ GPUPrimitiveTopology.LINE_STRIP = 'line-strip';
/** @const */ GPUPrimitiveTopology.TRIANGLE_LIST = 'triangle-list';
/** @const */ GPUPrimitiveTopology.TRIANGLE_STRIP = 'triangle-strip';

/**
 * @constructor
 */
var GPUTextureDimension = function () { }

/** @const */ GPUTextureDimension._1D = '1d';
/** @const */ GPUTextureDimension._2D = '2d';
/** @const */ GPUTextureDimension._3D = '3d';

/**
 * @constructor
 */
var GPUPipelineStatisticName = function () { }

/** @const */ GPUPipelineStatisticName.VERTEX_SHADER_INVOCATIONS = 'vertex-shader-invocations';
/** @const */ GPUPipelineStatisticName.CLIPPER_INVOCATIONS = 'clipper-invocations';
/** @const */ GPUPipelineStatisticName.CLIPPER_PRIMITIVES_OUT = 'clipper-primitives-out';
/** @const */ GPUPipelineStatisticName.FRAGMENT_SHADER_INVOCATIONS = 'fragment-shader-invocations';
/** @const */ GPUPipelineStatisticName.COMPUTE_SHADER_INVOCATIONS = 'compute-shader-invocations';

/**
 * @constructor
 */
var GPUQueryType = function () { }

/** @const */ GPUQueryType.OCCLUSION = 'occlusion';
/** @const */ GPUQueryType.PIPELINE_STATISTICS = 'pipeline-statistics';
/** @const */ GPUQueryType.TIMESTAMP = 'timestamp';

/**
 * @constructor
 */
var GPULoadOp = function () { }

/** @const */ GPULoadOp.LOAD = 'load';

/**
 * @constructor
 */
var GPUTextureSampleType = function () { }

/** @const */ GPUTextureSampleType.FLOAT = 'float';
/** @const */ GPUTextureSampleType.UNFILTERABLE_FLOAT = 'unfilterable-float';
/** @const */ GPUTextureSampleType.DEPTH = 'depth';
/** @const */ GPUTextureSampleType.SINT = 'sint';
/** @const */ GPUTextureSampleType.UINT = 'uint';

/**
 * @constructor
 */
var GPUBlendFactor = function () { }

/** @const */ GPUBlendFactor.ZERO = 'zero';
/** @const */ GPUBlendFactor.ONE = 'one';
/** @const */ GPUBlendFactor.SRC = 'src';
/** @const */ GPUBlendFactor.ON_MINUS_SRC = 'one-minus-src';
/** @const */ GPUBlendFactor.SRC_ALPHA = 'src-alpha';
/** @const */ GPUBlendFactor.ONE_MINUS_SRC_ALPHA = 'one-minus-src-alpha';
/** @const */ GPUBlendFactor.DST = 'dst';
/** @const */ GPUBlendFactor.ONE_MINUS_DST = 'one-minus-dst';
/** @const */ GPUBlendFactor.DST_ALPHA = 'dst-alpha';
/** @const */ GPUBlendFactor.ONE_MINUS_DST_ALPH = 'one-minus-dst-alpha';
/** @const */ GPUBlendFactor.SRC_ALPHA_SATURATED = 'src-alpha-saturated';
/** @const */ GPUBlendFactor.CONSTANT = 'constant';
/** @const */ GPUBlendFactor.ONE_MINUS_CONSTANT = 'one-minus-constant';

/**
 * @constructor
 */
var GPUBlendOperation = function () { }

/** @const */ GPUBlendOperation.ADD = 'add';
/** @const */ GPUBlendOperation.SUBTRACT = 'subtract';
/** @const */ GPUBlendOperation.REVERSE_SUBTRACT = 'reverse-subtract';
/** @const */ GPUBlendOperation.MIN = 'min';
/** @const */ GPUBlendOperation.MAX = 'max';

/**
 * @constructor
 */
var GPUStorageTextureAccess = function () { }

/** @const */ GPUStorageTextureAccess.READ_ONLY = 'read-only';
/** @const */ GPUStorageTextureAccess.WRITE_ONLY = 'write-only';

/**
 * @constructor
 */
var GPUSamplerBindingType = function () { }

/** @const */ GPUSamplerBindingType.FILTERING = 'filtering';
/** @const */ GPUSamplerBindingType.NON_FILTERING = 'non-filtering';
/** @const */ GPUSamplerBindingType.COMPARISON = 'comparison';

/**
 * @constructor
 */
var GPUBufferBindingType = function () { }

/** @const */ GPUBufferBindingType.UNIFORM = 'uniform';
/** @const */ GPUBufferBindingType.STORAGE = 'storage';
/** @const */ GPUBufferBindingType.READ_ONLY_STORAGE = 'read-only-storage';

/**
 * @constructor
 */
var GPUCompilationMessageType = function () { }

/** @const */ GPUCompilationMessageType.ERROR = 'error';
/** @const */ GPUCompilationMessageType.WARNING = 'warning';
/** @const */ GPUCompilationMessageType.INFO = 'info';

/**
 * @constructor
 */
var GPUTextureAspect = function () { }

/** @const */ GPUTextureAspect.ALL = 'all';
/** @const */ GPUTextureAspect.STENCIL_ONLY = 'stencil-only';
/** @const */ GPUTextureAspect.DEPTH_ONLY = 'depth-only';

/**
 * @constructor
 */
var GPUInputStepMode = function () { }

/** @const */ GPUInputStepMode.VERTEX = 'vertex';
/** @const */ GPUInputStepMode.INSTANCE = 'instance';

/**
 * @constructor
 */
var GPUTextureViewDimension = function () { }

/** @const */ GPUTextureViewDimension._1D = '1d';
/** @const */ GPUTextureViewDimension._2D = '2d';
/** @const */ GPUTextureViewDimension._2DARRAY = '2d-array';
/** @const */ GPUTextureViewDimension.CUBE = 'cube';
/** @const */ GPUTextureViewDimension.CUBEARRAY = 'cube-array';
/** @const */ GPUTextureViewDimension._3D = '3d';

/**
 * @constructor
 */
var GPUTextureFormat = function () { }
// 8-bit formats
/** @const */ GPUTextureFormat.R8UNORM = 'r8unorm';
/** @const */ GPUTextureFormat.R8SNORM = 'r8snorm';
/** @const */ GPUTextureFormat.R8UINT = 'r8uint';
/** @const */ GPUTextureFormat.R8SINT = 'r8sint';
// 16-bit formats
/** @const */ GPUTextureFormat.R16UINT = 'r16uint';
/** @const */ GPUTextureFormat.R16SINT = 'r16sint';
/** @const */ GPUTextureFormat.R16FLOAT = 'r16float';
/** @const */ GPUTextureFormat.RG8UNORM = 'rg8unorm';
/** @const */ GPUTextureFormat.RG8SNORM = 'rg8snorm';
/** @const */ GPUTextureFormat.RG8UINT = 'rg8uint';
/** @const */ GPUTextureFormat.RG8SINT = 'rg8sint';
// 32-bit formats
/** @const */ GPUTextureFormat.R32UINT = 'r32uint';
/** @const */ GPUTextureFormat.R32SINT = 'r32sint';
/** @const */ GPUTextureFormat.R32FLOAT = 'r32float';
/** @const */ GPUTextureFormat.RG16UINT = 'rg16uint';
/** @const */ GPUTextureFormat.RG16SINT = 'rg16sint';
/** @const */ GPUTextureFormat.RG16FLOAT = 'rg16float';
/** @const */ GPUTextureFormat.RGBA8UNORM = 'rgba8unorm';
/** @const */ GPUTextureFormat.RGBA8UNORM_SRGB = 'rgba8unorm-srgb';
/** @const */ GPUTextureFormat.RGBA8SNORM = 'rgba8snorm';
/** @const */ GPUTextureFormat.RGBA8UINT = 'rgba8uint';
/** @const */ GPUTextureFormat.RGBA8SINT = 'rgba8sint';
/** @const */ GPUTextureFormat.BGRA8UNORM = 'bgra8unorm';
/** @const */ GPUTextureFormat.BGRA8UNORM_SRGB = 'bgra8unorm-srgb';
// Packed 32-bit formats
/** @const */ GPUTextureFormat.RGB9E5UFLOAT = 'rgb9e5ufloat';
/** @const */ GPUTextureFormat.RGB10A2UNORM = 'rgb10a2unorm';
/** @const */ GPUTextureFormat.RG11B10UFLOAT = 'rg11b10ufloat';
// 64-bit formats
/** @const */ GPUTextureFormat.RG32UINT = 'rg32uint';
/** @const */ GPUTextureFormat.RG32SINT = 'rg32sint';
/** @const */ GPUTextureFormat.RG32FLOAT = 'rg32float';
/** @const */ GPUTextureFormat.RGBA16UINT = 'rgba16uint';
/** @const */ GPUTextureFormat.RGBA16SINT = 'rgba16sint';
/** @const */ GPUTextureFormat.RGBA16FLOAT = 'rgba16float';
// 128-bit formats
/** @const */ GPUTextureFormat.RGBA32UINT = 'rgba32uint';
/** @const */ GPUTextureFormat.RGBA32SINT = 'rgba32sint';
/** @const */ GPUTextureFormat.RGBA32FLOAT = 'rgba32float';
// Depth and stencil formats
/** @const */ GPUTextureFormat.STENCIL8 = 'stencil8';
/** @const */ GPUTextureFormat.DEPTH16UNORM = 'depth16unorm';
/** @const */ GPUTextureFormat.DEPTH24PLUS = 'depth24plus';
/** @const */ GPUTextureFormat.DEPTH24PLUS_STENCIL8 = 'depth24plus-stencil8';
/** @const */ GPUTextureFormat.DEPTH32FLOAT = 'depth32float';
// BC compressed formats usable if "texture-compression-bc" is both
// supported by the device/user agent and enabled in requestDevice.
/** @const */ GPUTextureFormat.BC1_RGBA_UNORM = 'bc1-rgba-unorm';
/** @const */ GPUTextureFormat.BC1_RGBA_UNORM_SRGB = 'bc1-rgba-unorm-srgb';
/** @const */ GPUTextureFormat.BC2_RGBA_UNORM = 'bc2-rgba-unorm';
/** @const */ GPUTextureFormat.BC2_RGBA_UNORM_SRGB = 'bc2-rgba-unorm-srgb';
/** @const */ GPUTextureFormat.BC3_RGBA_UNORM = 'bc3-rgba-unorm';
/** @const */ GPUTextureFormat.BC3_RGBA_UNORM_SRGB = 'bc3-rgba-unorm-srgb';
/** @const */ GPUTextureFormat.BC4_R_UNORM = 'bc4-r-unorm';
/** @const */ GPUTextureFormat.BC4_R_SNORM = 'bc4-r-snorm';
/** @const */ GPUTextureFormat.BC5_RG_UNORM = 'bc5-rg-unorm';
/** @const */ GPUTextureFormat.BC5_RG_SNORM = 'bc5-rg-snorm';
/** @const */ GPUTextureFormat.BC6H_RGB_UFLOAT = 'bc6h-rgb-ufloat';
/** @const */ GPUTextureFormat.BC6H_RGB_FLOAT = 'bc6h-rgb-float';
/** @const */ GPUTextureFormat.BC7_RGBA_UNORM = 'bc7-rgba-unorm';
/** @const */ GPUTextureFormat.BC7_RGBA_UNORM_SRGB = 'bc7-rgba-unorm-srgb';
// "depth24unorm-stencil8" feature
/** @const */ GPUTextureFormat.DEPTH24UNORM_STENCIL8 = 'depth24unorm-stencil8';
// "depth32float-stencil8" feature
/** @const */ GPUTextureFormat.DEPTH32FLOAT_STENCIL8 = 'depth32float-stencil8';

/**
 * @constructor
 */
var GPUVertexFormat = function () { }

/** @const */ GPUVertexFormat.UINT8X2 = 'uint8x2';
/** @const */ GPUVertexFormat.UINT8X4 = 'uint8x4';
/** @const */ GPUVertexFormat.SINT8X2 = 'sint8x2';
/** @const */ GPUVertexFormat.SINT8X4 = 'sint8x4';
/** @const */ GPUVertexFormat.UNORM8X2 = 'unorm8x2';
/** @const */ GPUVertexFormat.UNORM8X4 = 'unorm8x4';
/** @const */ GPUVertexFormat.SNORM8X2 = 'snorm8x2';
/** @const */ GPUVertexFormat.SNORM8X4 = 'snorm8x4';
/** @const */ GPUVertexFormat.UINT16X2 = 'uint16x2';
/** @const */ GPUVertexFormat.UINT16X4 = 'uint16x4';
/** @const */ GPUVertexFormat.SINT16X2 = 'sint16x2';
/** @const */ GPUVertexFormat.SINT16X4 = 'sint16x4';
/** @const */ GPUVertexFormat.UNORM16X2 = 'unorm16x2';
/** @const */ GPUVertexFormat.UNORM16X4 = 'unorm16x4';
/** @const */ GPUVertexFormat.SNORM16X2 = 'snorm16x2';
/** @const */ GPUVertexFormat.SNORM16X4 = 'snorm16x4';
/** @const */ GPUVertexFormat.FLOAT16X2 = 'float16x2';
/** @const */ GPUVertexFormat.FLOAT16X4 = 'float16x4';
/** @const */ GPUVertexFormat.FLOAT32 = 'float32';
/** @const */ GPUVertexFormat.FLOAT32X2 = 'float32x2';
/** @const */ GPUVertexFormat.FLOAT32X3 = 'float32x3';
/** @const */ GPUVertexFormat.FLOAT32X4 = 'float32x4';
/** @const */ GPUVertexFormat.UINT32 = 'uint32';
/** @const */ GPUVertexFormat.UINT32X2 = 'uint32x2';
/** @const */ GPUVertexFormat.UINT32X3 = 'uint32x3';
/** @const */ GPUVertexFormat.UINT32X4 = 'uint32x4';
/** @const */ GPUVertexFormat.SINT32 = 'sint32';
/** @const */ GPUVertexFormat.SINT32X2 = 'sint32x2';
/** @const */ GPUVertexFormat.SINT32X3 = 'sint32x3';
/** @const */ GPUVertexFormat.SINT32X4 = 'sint32x4';

/**
 * @record
 */
var GPURequestAdapterOptions = function () { };

/**
 * @type {GPUPowerPreference}
 */
GPURequestAdapterOptions.prototype.powerPreference

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
 */
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
 * @type {Array<GPUFeatureName>}
 */
GPUDeviceDescriptor.prototype.nonGuaranteedFeatures;

/**
 * @type {Map<string, number>}
 */
GPUDeviceDescriptor.prototype.nonGuaranteedLimits;


/**
 * @interface
 * @extends {EventTarget}
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
 * @constructor
 */
var GPUFeatureName = function() {}

/** @const */ GPUFeatureName.DEPTH_CLAMPING = 'depth-clamping';
/** @const */ GPUFeatureName.DEPTH24UNORM_STENCIL8 = 'depth24unorm-stencil8';
/** @const */ GPUFeatureName.DEPTH32FLOAT_STENCIL8 = 'depth32float-stencil8';
/** @const */ GPUFeatureName.PIPELINE_STATISTICS_QUERY = 'pipeline-statistics-query';
/** @const */ GPUFeatureName.TEXTURE_COMPRESSION_BC = 'texture-compression-bc';
/** @const */ GPUFeatureName.TIMESTAMP_QUERY = 'timestamp-query';

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
 * @constructor
 */
var GPUAddressMode = function() {}

/** @const */ GPUAddressMode.CLAMP_TO_EDGE = 'clamp-to-edge';
/** @const */ GPUAddressMode.REPEAT = 'repeat';
/** @const */ GPUAddressMode.MIRROR_REPEAT = 'mirror-repeat';

/**
 * @constructor
 */
var GPUFilterMode = function() {}

/** @const */ GPUFilterMode.NEAREST = 'nearest';
/** @const */ GPUFilterMode.LINEAR = 'linear';

/**
 * @constructor
 */
var GPUCompareFunction = function() {}

/** @const */ GPUCompareFunction.NEVER = 'never';
/** @const */ GPUCompareFunction.LESS = 'less';
/** @const */ GPUCompareFunction.EQUAL = 'equal';
/** @const */ GPUCompareFunction.LESSE_QUAL = 'less-equal';
/** @const */ GPUCompareFunction.GREATER = 'greater';
/** @const */ GPUCompareFunction.NOTE_QUAL = 'not-equal';
/** @const */ GPUCompareFunction.GREATERE_QUAL = 'greater-equal';
/** @const */ GPUCompareFunction.ALWAYS = 'always';

/**
 * @constructor
 */
var GPUStencilOperation = function() {}

/** @const */ GPUStencilOperation.KEEP = 'keep';
/** @const */ GPUStencilOperation.ZERO = 'zero';
/** @const */ GPUStencilOperation.REPLACE = 'replace';
/** @const */ GPUStencilOperation.INVERT = 'invert';
/** @const */ GPUStencilOperation.INCREMENT_CLAMP = 'increment-clamp';
/** @const */ GPUStencilOperation.DECREMENT_CLAMP = 'decrement-clamp';
/** @const */ GPUStencilOperation.INCREMENT_WRAP = 'increment-wrap';
/** @const */ GPUStencilOperation.DECREMENT_WRAP = 'decrement-wrap';

/**
 * @constructor
 */
var GPUPredefinedColorSpace = function() {}

/** @const */ GPUPredefinedColorSpace.NEVER = 'srgb';

/**
 * @interface
 * @extends {EventTarget}
 */
var GPUQueue = function () { };

/**
 * @param {Array<GPUCommandBuffer>} commandBuffers
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
 */
GPUQueue.prototype.writeBuffer = function(buffer, bufferOffset, data, dataOffset, size) { };

/**
 * @param {GPUImageCopyTexture} destination
 * @param {BufferSource} data
 * @param {GPUImageDataLayout} dataLayout
 * @param {Array<number>|GPUExtent3DDict} size
 */
GPUQueue.prototype.writeTexture = function(destination, data, dataLayout, size) { };

/**
 * @param {GPUImageCopyExternalImage} source
 * @param {GPUImageCopyTexture} destination
 * @param {Array<number>|GPUExtent3DDict} copySize
 */
GPUQueue.prototype.copyExternalImageToTexture = function(source, destination, copySize) { };

/**
 * @interface
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

GPUBuffer.prototype.unmap = function() { };

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
 */
var GPUTexture = function () { };

/**
 * @param {GPUTextureViewDescriptor=} descriptor
 * @return {GPUTextureView}
 */
GPUTexture.prototype.createView = function (descriptor) { };

GPUTexture.prototype.destroy = function () { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUSamplerDescriptor = function () { };

/**
 * @type {GPUAddressMode}
 */
GPUSamplerDescriptor.prototype.addressModeU;

/**
 * @type {GPUAddressMode}
 */
GPUSamplerDescriptor.prototype.addressModeV;

/**
 * @type {GPUAddressMode}
 */
GPUSamplerDescriptor.prototype.addressModeW;

/**
 * @type {GPUFilterMode}
 */
GPUSamplerDescriptor.prototype.magFilter;

/**
 * @type {GPUFilterMode}
 */
GPUSamplerDescriptor.prototype.minFilter;

/**
 * @type {number}
 */
GPUSamplerDescriptor.prototype.lodMinClamp;

/**
 * @type {number}
 */
GPUSamplerDescriptor.prototype.lodMaxClamp;

/**
 * @type {GPUCompareFunction}
 */
GPUSamplerDescriptor.prototype.compare;

/**
 * @type {number}
 */
GPUSamplerDescriptor.prototype.maxAnisotropy;

/**
 * @interface
 */
var GPUSampler = function () { };

/**
 * @interface
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
 */
var GPUPipelineLayout = function () { };

/**
 * @interface
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
 * @type {GPUCompilationMessageType}
 */
GPUCompilationMessage.prototype.type;

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
 * @type {GPUPredefinedColorSpace}
 */
GPUExternalTextureDescriptor.prototype.colorSpace;

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
 * @type {string} GPUTextureFormat
 */
GPUSwapChainDescriptor.prototype.format;

/**
 * @type {number}
 */
GPUSwapChainDescriptor.prototype.usage;

/**
 * @type {GPUCanvasCompositingAlphaMode}
 */
GPUSwapChainDescriptor.prototype.compositingAlphaMode;


/**
 * @interface
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
var GPUComputePipeline = function () { };

/**
 * @interface
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
 * @type {Array<GPUTextureFormat>}
 */
GPURenderBundleEncoderDescriptor.prototype.colorFormats;

/**
 * @type {GPUTextureFormat}
 */
GPURenderBundleEncoderDescriptor.prototype.depthStencilFormat;

/**
 * @type {number}
 */
GPURenderBundleEncoderDescriptor.prototype.sampleCount;

/**
 * @interface
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
 * @type {GPUQueryType}
 */
GPUQuerySetDescriptor.prototype.type;

/**
 * @type {number}
 */
GPUQuerySetDescriptor.prototype.count;

/**
 * @type {Array<GPUPipelineStatisticName>}
 */
GPUQuerySetDescriptor.prototype.pipelineStatistics;

/**
 * @interface
 */
var GPUQuerySet = function () { };

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
 * @type {GPUTextureDimension}
 */
GPUTextureDescriptor.prototype.dimension;

/**
 * @type {GPUTextureFormat}
 */
GPUTextureDescriptor.prototype.format;

/**
 * @type {number}
 */
GPUTextureDescriptor.prototype.usage;

/**
 * @interface
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
 * @type {GPUTextureAspect}
 */
GPUImageCopyTexture.prototype.aspect;

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
 */
var GPUTextureView = function () { };

/**
 * @record
 * @extends {GPUObjectDescriptorBase}
 */
var GPUTextureViewDescriptor = function () { };

/**
 * @type {GPUTextureFormat}
 */
GPUTextureViewDescriptor.prototype.format;

/**
 * @type {GPUTextureViewDimension}
 */
GPUTextureViewDescriptor.prototype.dimension;

/**
 * @type {GPUTextureAspect}
 */
GPUTextureViewDescriptor.prototype.aspect;

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
 * @type {GPUBufferBindingType}
 */
GPUTextureViewDescriptor.prototype.type;

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
 * @type {GPUSamplerBindingType}
 */
GPUSamplerBindingLayout.prototype.type;

/**
 * @record
 */
var GPUTextureBindingLayout = function () { };

/**
 * @type {GPUTextureSampleType}
 */
GPUTextureBindingLayout.prototype.sampleType;

/**
 * @type {GPUTextureViewDimension}
 */
GPUTextureBindingLayout.prototype.viewDimension;

/**
 * @type {boolean}
 */
GPUTextureBindingLayout.prototype.multisampled;

/**
 * @record
 */
var GPUStorageTextureBindingLayout = function () { };

/**
 * @type {GPUStorageTextureAccess}
 */
GPUStorageTextureBindingLayout.prototype.access;

/**
 * @type {GPUTextureFormat}
 */
GPUStorageTextureBindingLayout.prototype.format;

/**
 * @type {GPUTextureViewDimension}
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
 * @type {GPUInputStepMode}
 */
GPUVertexState.prototype.stepMode;

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
 * @type {GPUCompareFunction}
 */
GPUDepthStencilState.prototype.depthCompare;

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
 */
var GPUComputePassEncoder = function() { };

/**
 * @param {GPUComputePipeline} pipeline
 */
GPUComputePassEncoder.prototype.setPipeline = function(pipeline) { };

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 */
GPUComputePassEncoder.prototype.dispatch = function(x, y, z) { };

/**
 * @param {GPUBuffer} indirectBuffer
 * @param {number} indirectOffset
 */
GPUComputePassEncoder.prototype.dispatchIndirect = function(indirectBuffer, indirectOffset) { };

/**
 * @param {GPUQuerySet} querySet
 * @param {number} queryIndex
 */
GPUComputePassEncoder.prototype.beginPipelineStatisticsQuery = function(querySet, queryIndex) { };

GPUComputePassEncoder.prototype.endPipelineStatisticsQuery = function() { };

/**
 * @param {GPUQuerySet} querySet
 * @param {number} queryIndex
 */
GPUComputePassEncoder.prototype.writeTimestamp = function(querySet, queryIndex) { };

GPUComputePassEncoder.prototype.endPass = function() { };


/**
 * @interface
 */
var GPURenderEncoderBase = function() { };

/**
 * @param {GPURenderPipeline} querySet
 * @return {undefined}
 */
GPURenderEncoderBase.prototype.setPipeline = function(pipeline) { };

/**
 * @param {GPUBuffer} querySet
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
 * @type {GPULoadOp|Array<number>|GPUColorDict}
 */
GPURenderPassColorAttachment.prototype.loadValue;

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
 * @type {GPULoadOp|number}
 */
GPURenderPassDepthStencilAttachment.prototype.depthLoadValue;

/**
 * @type {GPULoadOp}
 */
GPURenderPassDepthStencilAttachment.prototype.depthStoreOp;

/**
 * @type {boolean}
 */
GPURenderPassDepthStencilAttachment.prototype.depthReadOnly;

/**
 * @type {GPULoadOp|number}
 */
GPURenderPassDepthStencilAttachment.prototype.stencilLoadValue;

/**
 * @type {GPULoadOp}
 */
GPURenderPassDepthStencilAttachment.prototype.stencilStoreOp;

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