/**
 * @externs
 */

/**
 * must be enum, but it's typedef for now
 * @typedef {string}
 */
var XRHandJoint = function () {};

/**
 * @extends {Iterable<XRHandJoint, XRJointSpace>}
 * @interface
 */
var XRHand = function () {};

/**
 * @const {number}
 */
XRHand.prototype.size;

/**
 * @param {XRHandJoint} key
 * @return {XRJointSpace}
 */
XRHand.prototype.get = function (key) {};

/**
 * @const {XRHand}
 */
XRInputSource.prototype.hand;

/**
 * @extends {XRSpace}
 * @interface
 */
var XRJointSpace = function () {};

/**
 * @const {XRHandJoint}
 */
XRJointSpace.prototype.jointName;


/**
 *
 * @param {XRJointSpace} joint
 * @param {XRSpace} baseSpace
 * @return {XRJointPose}
 */
XRFrame.prototype.getJointPose = function (joint, baseSpace) {};

/**
 *
 * @param {Array<XRJointSpace>} jointSpaces
 * @param {Float32Array} radii
 * @return {boolean}
 */
XRFrame.prototype.fillJointRadii = function (jointSpaces, radii) {};

/**
 *
 * @param {Array<XRSpace>} spaces
 * @param {XRSpace} baseSpace
 * @param {Float32Array} transforms
 * @return {boolean}
 */
XRFrame.prototype.fillPoses = function (spaces, baseSpace, transforms) {};

/**
 * @extends {XRPose}
 * @interface
 */
var XRJointPose = function () {};

/**
 * @const {number}
 */
XRJointPose.prototype.radius;
