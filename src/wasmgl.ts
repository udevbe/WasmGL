// OpenGL ES 3.0 Spec:
// https://www.khronos.org/registry/OpenGL-Refpages/es3.0/

// WebGL 1.0 Spec:
// https://www.khronos.org/registry/webgl/specs/latest/1.0/

// WebGL 2.0 Spec:
// https://www.khronos.org/registry/webgl/specs/latest/2.0/

// Author: 0xAA55
// https://github.com/0xAA55/

const glGetTypes = {
  [WebGL2RenderingContext.ACTIVE_TEXTURE]: 'GLenum',
  [WebGL2RenderingContext.ALIASED_LINE_WIDTH_RANGE]: 'GLfloat',
  [WebGL2RenderingContext.ALIASED_POINT_SIZE_RANGE]: 'GLfloat',
  [WebGL2RenderingContext.ALPHA_BITS]: 'GLint',
  [WebGL2RenderingContext.BLEND]: 'GLboolean',
  [WebGL2RenderingContext.BLEND_COLOR]: 'GLfloat',
  [WebGL2RenderingContext.BLEND_DST_ALPHA]: 'GLenum',
  [WebGL2RenderingContext.BLEND_DST_RGB]: 'GLenum',
  [WebGL2RenderingContext.BLEND_EQUATION_ALPHA]: 'GLenum',
  [WebGL2RenderingContext.BLEND_EQUATION_RGB]: 'GLenum',
  [WebGL2RenderingContext.BLEND_SRC_ALPHA]: 'GLenum',
  [WebGL2RenderingContext.BLEND_SRC_RGB]: 'GLenum',
  [WebGL2RenderingContext.BLUE_BITS]: 'GLint',
  [WebGL2RenderingContext.COLOR_CLEAR_VALUE]: 'GLfloat',
  [WebGL2RenderingContext.COLOR_WRITEMASK]: 'GLboolean',
  [WebGL2RenderingContext.COMPRESSED_TEXTURE_FORMATS]: 'Uint32Array',
  [WebGL2RenderingContext.CULL_FACE]: 'GLboolean',
  [WebGL2RenderingContext.CULL_FACE_MODE]: 'GLenum',
  [WebGL2RenderingContext.DEPTH_BITS]: 'GLint',
  [WebGL2RenderingContext.DEPTH_CLEAR_VALUE]: 'GLfloat',
  [WebGL2RenderingContext.DEPTH_FUNC]: 'GLenum',
  [WebGL2RenderingContext.DEPTH_RANGE]: 'GLfloat',
  [WebGL2RenderingContext.DEPTH_TEST]: 'GLboolean',
  [WebGL2RenderingContext.DEPTH_WRITEMASK]: 'GLboolean',
  [WebGL2RenderingContext.DITHER]: 'GLboolean',
  [WebGL2RenderingContext.FRONT_FACE]: 'GLenum',
  [WebGL2RenderingContext.GENERATE_MIPMAP_HINT]: 'GLenum',
  [WebGL2RenderingContext.GREEN_BITS]: 'GLint',
  [WebGL2RenderingContext.IMPLEMENTATION_COLOR_READ_FORMAT]: 'GLenum',
  [WebGL2RenderingContext.IMPLEMENTATION_COLOR_READ_TYPE]: 'GLenum',
  [WebGL2RenderingContext.LINE_WIDTH]: 'GLfloat',
  [WebGL2RenderingContext.MAX_COMBINED_TEXTURE_IMAGE_UNITS]: 'GLint',
  [WebGL2RenderingContext.MAX_CUBE_MAP_TEXTURE_SIZE]: 'GLint',
  [WebGL2RenderingContext.MAX_FRAGMENT_UNIFORM_VECTORS]: 'GLint',
  [WebGL2RenderingContext.MAX_RENDERBUFFER_SIZE]: 'GLint',
  [WebGL2RenderingContext.MAX_TEXTURE_IMAGE_UNITS]: 'GLint',
  [WebGL2RenderingContext.MAX_TEXTURE_SIZE]: 'GLint',
  [WebGL2RenderingContext.MAX_VARYING_VECTORS]: 'GLint',
  [WebGL2RenderingContext.MAX_VERTEX_ATTRIBS]: 'GLint',
  [WebGL2RenderingContext.MAX_VERTEX_TEXTURE_IMAGE_UNITS]: 'GLint',
  [WebGL2RenderingContext.MAX_VERTEX_UNIFORM_VECTORS]: 'GLint',
  [WebGL2RenderingContext.MAX_VIEWPORT_DIMS]: 'GLint',
  [WebGL2RenderingContext.PACK_ALIGNMENT]: 'GLint',
  [WebGL2RenderingContext.POLYGON_OFFSET_FACTOR]: 'GLfloat',
  [WebGL2RenderingContext.POLYGON_OFFSET_FILL]: 'GLboolean',
  [WebGL2RenderingContext.POLYGON_OFFSET_UNITS]: 'GLfloat',
  [WebGL2RenderingContext.RED_BITS]: 'GLint',
  [WebGL2RenderingContext.RENDERER]: 'DOMString',
  [WebGL2RenderingContext.SAMPLE_ALPHA_TO_COVERAGE]: 'GLboolean',
  [WebGL2RenderingContext.SAMPLE_BUFFERS]: 'GLint',
  [WebGL2RenderingContext.SAMPLE_COVERAGE]: 'GLboolean',
  [WebGL2RenderingContext.SAMPLE_COVERAGE_INVERT]: 'GLboolean',
  [WebGL2RenderingContext.SAMPLE_COVERAGE_VALUE]: 'GLfloat',
  [WebGL2RenderingContext.SAMPLES]: 'GLint',
  [WebGL2RenderingContext.SCISSOR_BOX]: 'GLint',
  [WebGL2RenderingContext.SCISSOR_TEST]: 'GLboolean',
  [WebGL2RenderingContext.SHADING_LANGUAGE_VERSION]: 'DOMString',
  [WebGL2RenderingContext.STENCIL_BACK_FAIL]: 'GLenum',
  [WebGL2RenderingContext.STENCIL_BACK_FUNC]: 'GLenum',
  [WebGL2RenderingContext.STENCIL_BACK_PASS_DEPTH_FAIL]: 'GLenum',
  [WebGL2RenderingContext.STENCIL_BACK_PASS_DEPTH_PASS]: 'GLenum',
  [WebGL2RenderingContext.STENCIL_BACK_REF]: 'GLint',
  [WebGL2RenderingContext.STENCIL_BACK_VALUE_MASK]: 'GLuint',
  [WebGL2RenderingContext.STENCIL_BACK_WRITEMASK]: 'GLuint',
  [WebGL2RenderingContext.STENCIL_BITS]: 'GLint',
  [WebGL2RenderingContext.STENCIL_CLEAR_VALUE]: 'GLint',
  [WebGL2RenderingContext.STENCIL_FAIL]: 'GLenum',
  [WebGL2RenderingContext.STENCIL_FUNC]: 'GLenum',
  [WebGL2RenderingContext.STENCIL_PASS_DEPTH_FAIL]: 'GLenum',
  [WebGL2RenderingContext.STENCIL_PASS_DEPTH_PASS]: 'GLenum',
  [WebGL2RenderingContext.STENCIL_REF]: 'GLint',
  [WebGL2RenderingContext.STENCIL_TEST]: 'GLboolean',
  [WebGL2RenderingContext.STENCIL_VALUE_MASK]: 'GLuint',
  [WebGL2RenderingContext.STENCIL_WRITEMASK]: 'GLuint',
  [WebGL2RenderingContext.SUBPIXEL_BITS]: 'GLint',
  [WebGL2RenderingContext.UNPACK_ALIGNMENT]: 'GLint',
  [WebGL2RenderingContext.UNPACK_COLORSPACE_CONVERSION_WEBGL]: 'GLenum',
  [WebGL2RenderingContext.UNPACK_FLIP_Y_WEBGL]: 'GLboolean',
  [WebGL2RenderingContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL]: 'GLboolean',
  [WebGL2RenderingContext.VENDOR]: 'DOMString',
  [WebGL2RenderingContext.VERSION]: 'DOMString',
  [WebGL2RenderingContext.VIEWPORT]: 'GLint',

  [WebGL2RenderingContext.DRAW_BUFFER0]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER1]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER2]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER3]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER4]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER5]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER6]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER7]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER8]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER9]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER10]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER11]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER12]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER13]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER14]: 'GLenum',
  [WebGL2RenderingContext.DRAW_BUFFER15]: 'GLenum',
  [WebGL2RenderingContext.FRAGMENT_SHADER_DERIVATIVE_HINT]: 'GLenum',
  [WebGL2RenderingContext.MAX_3D_TEXTURE_SIZE]: 'GLint',
  [WebGL2RenderingContext.MAX_ARRAY_TEXTURE_LAYERS]: 'GLint',
  [WebGL2RenderingContext.MAX_CLIENT_WAIT_TIMEOUT_WEBGL]: 'GLint64',
  [WebGL2RenderingContext.MAX_COLOR_ATTACHMENTS]: 'GLint',
  [WebGL2RenderingContext.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS]: 'GLint64',
  [WebGL2RenderingContext.MAX_COMBINED_UNIFORM_BLOCKS]: 'GLint',
  [WebGL2RenderingContext.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS]: 'GLint64',
  [WebGL2RenderingContext.MAX_DRAW_BUFFERS]: 'GLint',
  [WebGL2RenderingContext.MAX_ELEMENT_INDEX]: 'GLint64',
  [WebGL2RenderingContext.MAX_ELEMENTS_INDICES]: 'GLint',
  [WebGL2RenderingContext.MAX_ELEMENTS_VERTICES]: 'GLint',
  [WebGL2RenderingContext.MAX_FRAGMENT_INPUT_COMPONENTS]: 'GLint',
  [WebGL2RenderingContext.MAX_FRAGMENT_UNIFORM_BLOCKS]: 'GLint',
  [WebGL2RenderingContext.MAX_FRAGMENT_UNIFORM_COMPONENTS]: 'GLint',
  [WebGL2RenderingContext.MAX_PROGRAM_TEXEL_OFFSET]: 'GLint',
  [WebGL2RenderingContext.MAX_SAMPLES]: 'GLint',
  [WebGL2RenderingContext.MAX_SERVER_WAIT_TIMEOUT]: 'GLint64',
  [WebGL2RenderingContext.MAX_TEXTURE_LOD_BIAS]: 'GLfloat',
  [WebGL2RenderingContext.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]: 'GLint',
  [WebGL2RenderingContext.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS]: 'GLint',
  [WebGL2RenderingContext.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS]: 'GLint',
  [WebGL2RenderingContext.MAX_UNIFORM_BLOCK_SIZE]: 'GLint64',
  [WebGL2RenderingContext.MAX_UNIFORM_BUFFER_BINDINGS]: 'GLint',
  [WebGL2RenderingContext.MAX_VARYING_COMPONENTS]: 'GLint',
  [WebGL2RenderingContext.MAX_VERTEX_OUTPUT_COMPONENTS]: 'GLint',
  [WebGL2RenderingContext.MAX_VERTEX_UNIFORM_BLOCKS]: 'GLint',
  [WebGL2RenderingContext.MAX_VERTEX_UNIFORM_COMPONENTS]: 'GLint',
  [WebGL2RenderingContext.MIN_PROGRAM_TEXEL_OFFSET]: 'GLint',
  [WebGL2RenderingContext.PACK_ROW_LENGTH]: 'GLint',
  [WebGL2RenderingContext.PACK_SKIP_PIXELS]: 'GLint',
  [WebGL2RenderingContext.PACK_SKIP_ROWS]: 'GLint',
  [WebGL2RenderingContext.RASTERIZER_DISCARD]: 'GLboolean',
  [WebGL2RenderingContext.READ_BUFFER]: 'GLenum',
  [WebGL2RenderingContext.TRANSFORM_FEEDBACK_ACTIVE]: 'GLboolean',
  [WebGL2RenderingContext.TRANSFORM_FEEDBACK_PAUSED]: 'GLboolean',
  [WebGL2RenderingContext.UNIFORM_BUFFER_OFFSET_ALIGNMENT]: 'GLint',
  [WebGL2RenderingContext.UNPACK_IMAGE_HEIGHT]: 'GLint',
  [WebGL2RenderingContext.UNPACK_ROW_LENGTH]: 'GLint',
  [WebGL2RenderingContext.UNPACK_SKIP_IMAGES]: 'GLint',
  [WebGL2RenderingContext.UNPACK_SKIP_PIXELS]: 'GLint',
  [WebGL2RenderingContext.UNPACK_SKIP_ROWS]: 'GLint',
} as const

const glGetObjects = {
  [WebGL2RenderingContext.ARRAY_BUFFER_BINDING]: 'WebGLBuffer',
  [WebGL2RenderingContext.CURRENT_PROGRAM]: 'WebGLProgram',
  [WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER_BINDING]: 'WebGLBuffer',
  [WebGL2RenderingContext.FRAMEBUFFER_BINDING]: 'WebGLFramebuffer',
  [WebGL2RenderingContext.RENDERBUFFER_BINDING]: 'WebGLRenderbuffer',
  [WebGL2RenderingContext.TEXTURE_BINDING_2D]: 'WebGLTexture',
  [WebGL2RenderingContext.TEXTURE_BINDING_CUBE_MAP]: 'WebGLTexture',

  [WebGL2RenderingContext.COPY_READ_BUFFER_BINDING]: 'WebGLBuffer',
  [WebGL2RenderingContext.COPY_WRITE_BUFFER_BINDING]: 'WebGLBuffer',
  // [WebGL2RenderingContext.DRAW_FRAMEBUFFER_BINDING]: 'WebGLFramebuffer',
  [WebGL2RenderingContext.PIXEL_PACK_BUFFER_BINDING]: 'WebGLBuffer',
  [WebGL2RenderingContext.PIXEL_UNPACK_BUFFER_BINDING]: 'WebGLBuffer',
  [WebGL2RenderingContext.READ_FRAMEBUFFER_BINDING]: 'WebGLFramebuffer',
  [WebGL2RenderingContext.SAMPLER_BINDING]: 'WebGLSampler',
  [WebGL2RenderingContext.TEXTURE_BINDING_2D_ARRAY]: 'WebGLTexture',
  [WebGL2RenderingContext.TEXTURE_BINDING_3D]: 'WebGLTexture',
  [WebGL2RenderingContext.TRANSFORM_FEEDBACK_BINDING]: 'WebGLTransformFeedback',
  [WebGL2RenderingContext.TRANSFORM_FEEDBACK_BUFFER_BINDING]: 'WebGLBuffer',
  [WebGL2RenderingContext.UNIFORM_BUFFER_BINDING]: 'WebGLBuffer',
  [WebGL2RenderingContext.VERTEX_ARRAY_BINDING]: 'WebGLVertexArrayObject',
} as const

const glGetArraySizes = {
  [WebGL2RenderingContext.ALIASED_LINE_WIDTH_RANGE]: 2,
  [WebGL2RenderingContext.ALIASED_POINT_SIZE_RANGE]: 2,
  [WebGL2RenderingContext.BLEND_COLOR]: 4,
  [WebGL2RenderingContext.COLOR_CLEAR_VALUE]: 4,
  [WebGL2RenderingContext.COLOR_WRITEMASK]: 4,
  [WebGL2RenderingContext.DEPTH_RANGE]: 2,
  [WebGL2RenderingContext.MAX_VIEWPORT_DIMS]: 2,
  [WebGL2RenderingContext.SCISSOR_BOX]: 4,
  [WebGL2RenderingContext.VIEWPORT]: 4,
} as const

const typeSizes = {
	[WebGL2RenderingContext.FLOAT]:  1,
	[WebGL2RenderingContext.FLOAT_VEC2]:  2,
	[WebGL2RenderingContext.FLOAT_VEC3]:  3,
	[WebGL2RenderingContext.FLOAT_VEC4]:  4,
	[WebGL2RenderingContext.INT]:  1,
	[WebGL2RenderingContext.INT_VEC2]:  2,
	[WebGL2RenderingContext.INT_VEC3]:  3,
	[WebGL2RenderingContext.INT_VEC4]:  4,
	[WebGL2RenderingContext.BOOL]:  1,
	[WebGL2RenderingContext.BOOL_VEC2]:  2,
	[WebGL2RenderingContext.BOOL_VEC3]:  3,
	[WebGL2RenderingContext.BOOL_VEC4]:  4,
	[WebGL2RenderingContext.FLOAT_MAT2]:  4,
	[WebGL2RenderingContext.FLOAT_MAT3]:  9,
	[WebGL2RenderingContext.FLOAT_MAT4]:  16,
	[WebGL2RenderingContext.SAMPLER_2D]:  1,
	[WebGL2RenderingContext.SAMPLER_CUBE]:  1,
	[WebGL2RenderingContext.UNSIGNED_INT]:  1,
	[WebGL2RenderingContext.UNSIGNED_INT_VEC2]:  2,
	[WebGL2RenderingContext.UNSIGNED_INT_VEC3]:  3,
	[WebGL2RenderingContext.UNSIGNED_INT_VEC4]:  4,
	[WebGL2RenderingContext.FLOAT_MAT2x3]:  6,
	[WebGL2RenderingContext.FLOAT_MAT2x4]:  8,
	[WebGL2RenderingContext.FLOAT_MAT3x2]:  6,
	[WebGL2RenderingContext.FLOAT_MAT3x4]:  12,
	[WebGL2RenderingContext.FLOAT_MAT4x2]:  8,
	[WebGL2RenderingContext.FLOAT_MAT4x3]:  12,
	[WebGL2RenderingContext.SAMPLER_3D]:  1,
	[WebGL2RenderingContext.SAMPLER_2D_SHADOW]:  1,
	[WebGL2RenderingContext.SAMPLER_2D_ARRAY]:  1,
	[WebGL2RenderingContext.SAMPLER_2D_ARRAY_SHADOW]:  1,
	[WebGL2RenderingContext.SAMPLER_CUBE_SHADOW]:  1,
	[WebGL2RenderingContext.INT_SAMPLER_2D]:  1,
	[WebGL2RenderingContext.INT_SAMPLER_3D]:  1,
	[WebGL2RenderingContext.INT_SAMPLER_CUBE]:  1,
	[WebGL2RenderingContext.INT_SAMPLER_2D_ARRAY]:  1,
	[WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_2D]:  1,
	[WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_3D]:  1,
	[WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_CUBE]:  1,
	[WebGL2RenderingContext.UNSIGNED_INT_SAMPLER_2D_ARRAY]:  1,
} as const

class Wasmgl {
  private readonly gl: WebGL2RenderingContext
  private webGLObjectIndex: number
  webGLObjectConversion // index: WebGLObject
  webGLBufferBinding // target: WebGLObject
  webGLUniformLocationForPrograms // WebGLProgram: {locationIndex: int, locations : {locationName: {index: index, location] = WebGLUniformLocation}}}}

  glActiveTypes
  baseTypes
  pixelStoreiState
  currentProgram
  mappedBuffers // target: {pointer: address, offset: offset, length: mappedLength, access: gl.SOME_FLAGS}
  pointerOfAllExtensionString
  pointerOfExtensionStrings // [pointer]
  pointerOfVendorString
  pointerOfVersionString
  pointerOfShadingLanguageString

  makeSureGLESConstants() {
    this.gl.FALSE = 0
    this.gl.TRUE = 1
    this.gl.NUM_COMPRESSED_TEXTURE_FORMATS = 0x86a2
    this.gl.FIXED = 0x140c
    this.gl.ACTIVE_UNIFORM_MAX_LENGTH = 0x8b87
    this.gl.ACTIVE_ATTRIBUTE_MAX_LENGTH = 0x8b8a
    this.gl.EXTENSIONS = 0x1f03
    this.gl.INFO_LOG_LENGTH = 0x8b84
    this.gl.SHADER_SOURCE_LENGTH = 0x8b88
    this.gl.SHADER_COMPILER = 0x8dfa
    this.gl.SHADER_BINARY_FORMATS = 0x8df8
    this.gl.NUM_SHADER_BINARY_FORMATS = 0x8df9
    this.gl.BUFFER_MAPPED = 0x88bc
    this.gl.BUFFER_MAP_POINTER = 0x88bd
    this.gl.MAJOR_VERSION = 0x821b
    this.gl.MINOR_VERSION = 0x821c
    this.gl.NUM_EXTENSIONS = 0x821d
    this.gl.TRANSFORM_FEEDBACK_VARYING_MAX_LENGTH = 0x8c76
    this.gl.BUFFER_ACCESS_FLAGS = 0x911f
    this.gl.BUFFER_MAP_LENGTH = 0x9120
    this.gl.BUFFER_MAP_OFFSET = 0x9121
    this.gl.FRAMEBUFFER_UNDEFINED = 0x8219
    this.gl.COLOR_ATTACHMENT16 = 0x8cf0
    this.gl.COLOR_ATTACHMENT17 = 0x8cf1
    this.gl.COLOR_ATTACHMENT18 = 0x8cf2
    this.gl.COLOR_ATTACHMENT19 = 0x8cf3
    this.gl.COLOR_ATTACHMENT20 = 0x8cf4
    this.gl.COLOR_ATTACHMENT21 = 0x8cf5
    this.gl.COLOR_ATTACHMENT22 = 0x8cf6
    this.gl.COLOR_ATTACHMENT23 = 0x8cf7
    this.gl.COLOR_ATTACHMENT24 = 0x8cf8
    this.gl.COLOR_ATTACHMENT25 = 0x8cf9
    this.gl.COLOR_ATTACHMENT26 = 0x8cfa
    this.gl.COLOR_ATTACHMENT27 = 0x8cfb
    this.gl.COLOR_ATTACHMENT28 = 0x8cfc
    this.gl.COLOR_ATTACHMENT29 = 0x8cfd
    this.gl.COLOR_ATTACHMENT30 = 0x8cfe
    this.gl.COLOR_ATTACHMENT31 = 0x8cff
    this.gl.MAP_READ_BIT = 0x0001
    this.gl.MAP_WRITE_BIT = 0x0002
    this.gl.MAP_INVALIDATE_RANGE_BIT = 0x0004
    this.gl.MAP_INVALIDATE_BUFFER_BIT = 0x0008
    this.gl.MAP_FLUSH_EXPLICIT_BIT = 0x0010
    this.gl.MAP_UNSYNCHRONIZED_BIT = 0x0020
    this.gl.PRIMITIVE_RESTART_FIXED_INDEX = 0x8d69
    this.gl.ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH = 0x8a35
    this.gl.UNIFORM_BLOCK_NAME_LENGTH = 0x8a41
    this.gl.TEXTURE_SWIZZLE_R = 0x8e42
    this.gl.TEXTURE_SWIZZLE_G = 0x8e43
    this.gl.TEXTURE_SWIZZLE_B = 0x8e44
    this.gl.TEXTURE_SWIZZLE_A = 0x8e45
    this.gl.GREEN = 0x1904
    this.gl.BLUE = 0x1905
    this.gl.PROGRAM_BINARY_RETRIEVABLE_HINT = 0x8257
    this.gl.PROGRAM_BINARY_LENGTH = 0x8741
    this.gl.NUM_PROGRAM_BINARY_FORMATS = 0x87fe
    this.gl.PROGRAM_BINARY_FORMATS = 0x87ff
    this.gl.COMPRESSED_R11_EAC = 0x9270
    this.gl.COMPRESSED_SIGNED_R11_EAC = 0x9271
    this.gl.COMPRESSED_RG11_EAC = 0x9272
    this.gl.COMPRESSED_SIGNED_RG11_EAC = 0x9273
    this.gl.COMPRESSED_RGB8_ETC2 = 0x9274
    this.gl.COMPRESSED_SRGB8_ETC2 = 0x9275
    this.gl.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9276
    this.gl.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9277
    this.gl.COMPRESSED_RGBA8_ETC2_EAC = 0x9278
    this.gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9279
    this.gl.NUM_SAMPLE_COUNTS = 0x9380
  }

  constructor(gl: WebGL2RenderingContext) {
    this.gl = gl
    this.makeSureGLESConstants()
    this.webGLObjectIndex = 1
    this.webGLObjectConversion = { 0: null }
    this.webGLBufferBinding = {}
    this.webGLUniformLocationForPrograms = {}

    this.glActiveTypes = [
      gl.FLOAT,
      gl.FLOAT_VEC2,
      gl.FLOAT_VEC3,
      gl.FLOAT_VEC4,
      gl.INT,
      gl.INT_VEC2,
      gl.INT_VEC3,
      gl.INT_VEC4,
      gl.BOOL,
      gl.BOOL_VEC2,
      gl.BOOL_VEC3,
      gl.BOOL_VEC4,
      gl.FLOAT_MAT2,
      gl.FLOAT_MAT3,
      gl.FLOAT_MAT4,
      gl.SAMPLER_2D,
      gl.SAMPLER_CUBE,
      gl.UNSIGNED_INT,
      gl.UNSIGNED_INT_VEC2,
      gl.UNSIGNED_INT_VEC3,
      gl.UNSIGNED_INT_VEC4,
      gl.FLOAT_MAT2x3,
      gl.FLOAT_MAT2x4,
      gl.FLOAT_MAT3x2,
      gl.FLOAT_MAT3x4,
      gl.FLOAT_MAT4x2,
      gl.FLOAT_MAT4x3,
      gl.SAMPLER_3D,
      gl.SAMPLER_2D_SHADOW,
      gl.SAMPLER_2D_ARRAY,
      gl.SAMPLER_2D_ARRAY_SHADOW,
      gl.SAMPLER_CUBE_SHADOW,
      gl.INT_SAMPLER_2D,
      gl.INT_SAMPLER_3D,
      gl.INT_SAMPLER_CUBE,
      gl.INT_SAMPLER_2D_ARRAY,
      gl.UNSIGNED_INT_SAMPLER_2D,
      gl.UNSIGNED_INT_SAMPLER_3D,
      gl.UNSIGNED_INT_SAMPLER_CUBE,
      gl.UNSIGNED_INT_SAMPLER_2D_ARRAY,
    ]



    this.pixelStoreiState = {}
    this.pixelStoreiState[gl.PACK_ROW_LENGTH] = 0
    this.pixelStoreiState[gl.PACK_SKIP_PIXELS] = 0
    this.pixelStoreiState[gl.PACK_SKIP_ROWS] = 0
    this.pixelStoreiState[gl.PACK_ALIGNMENT] = 0
    this.pixelStoreiState[gl.UNPACK_ROW_LENGTH] = 0
    this.pixelStoreiState[gl.UNPACK_IMAGE_HEIGHT] = 0
    this.pixelStoreiState[gl.UNPACK_SKIP_PIXELS] = 0
    this.pixelStoreiState[gl.UNPACK_SKIP_ROWS] = 0
    this.pixelStoreiState[gl.UNPACK_SKIP_IMAGES] = 0
    this.pixelStoreiState[gl.UNPACK_ALIGNMENT] = 0

    this.currentProgram = null

    this.mappedBuffers = {}

    this.pointerOfAllExtensionString = 0
    this.pointerOfExtensionStrings = []
    this.pointerOfVendorString = 0
    this.pointerOfVersionString = 0
    this.pointerOfShadingLanguageString = 0

    gl.ACTIVE_ATTRIBUTE_MAX_LENGTH = 0x8b8a
    gl.ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH = 0x8a35
    gl.ACTIVE_UNIFORM_MAX_LENGTH = 0x8b87
    gl.INFO_LOG_LENGTH = 0x8b84
    gl.PROGRAM_BINARY_RETRIEVABLE_HINT = 0x8257
    gl.TRANSFORM_FEEDBACK_VARYING_MAX_LENGTH = 0x8c76
  }

  private allocateIndexForWebGLObject(webGLObject: WebGLShader | WebGLProgram | null) {
    const conv = this.webGLObjectConversion
    const keys = Object.keys(conv)
    let index = this.webGLObjectIndex
    if (!index) index = 1
    while (index != 0) {
      if (!(index in conv)) {
        conv[index] = webGLObject
        this.webGLObjectIndex = index
        return index
      }
      index++
    }
    return 0 // For fail
  }

  getIndexByWebGLObject(webGLObject: WebGLShader | WebGLProgram | null) {
    const conv = this.webGLObjectConversion
    return Object.keys(conv).find((index) => conv[index] === webGLObject)
  }

  static freeIndexForWebGLObject(w4winst, index) {
    // Be sure the object is deleted, then call to w4winst.function.
    const conv = w4winst.webGLObjectConversion
    if (delete conv[index]) {
      if (index < w4winst.webGLObjectIndex) w4winst.webGLObjectIndex = index
      return true
    }
    return false
  }

  static allocateIndexForUniformLocation(w4winst, WebGLProgram, name, WebGLUniformLocation) {
    let returnIndex
    let locationInfo = {
      locationIndex: 0,
      locations: {},
    }
    if (WebGLProgram in w4winst.webGLUniformLocationForPrograms)
      locationInfo = w4winst.webGLUniformLocationForPrograms[WebGLProgram]

    if (WebGLUniformLocation == null) {
      locationInfo.locations[name] = {
        index: -1,
        locationObject: null,
      }
      returnIndex = -1
    } else {
      locationInfo.locations[name] = {
        index: locationInfo.locationIndex,
        locationObject: WebGLUniformLocation,
      }
      returnIndex = locationInfo.locationIndex
      locationInfo.locationIndex++
    }
    j
    w4winst.webGLUniformLocationForPrograms[WebGLProgram] = locationInfo
    return returnIndex
  }

  static getLocationObjectByIndex(w4winst, WebGLProgram, locationIndex) {
    if (WebGLProgram in w4winst.webGLUniformLocationForPrograms) {
      const locationInfo = w4winst.webGLUniformLocationForPrograms[WebGLProgram]
      for (name in Object.keys(locationInfo.locations)) {
        const cur = locationInfo.locations[name]
        if (cur.index == locationIndex) return cur.locationObject
      }
      return null
    } else {
      return null
    }
  }

  static getLocationObjectByName(w4winst, WebGLProgram, locationName) {
    if (WebGLProgram in w4winst.webGLUniformLocationForPrograms) {
      const locationInfo = w4winst.webGLUniformLocationForPrograms[WebGLProgram]
      if (locationName in locationInfo.locations) return locationInfo.locations[locationName].locationObject
      else return null
    } else {
      return null
    }
  }

  static getLocationNameByLocationObject(w4winst, WebGLProgram, locationObject) {
    if (WebGLProgram in w4winst.webGLUniformLocationForPrograms) {
      const locationInfo = w4winst.webGLUniformLocationForPrograms[WebGLProgram]
      return Object.keys(locationInfo.locations).find(
        (name) => locationInfo.locations[name].locationObject === locationObject,
      )
    } else {
      return null
    }
  }

  static getLocationNameByLocationIndex(w4winst, WebGLProgram, locationIndex) {
    if (WebGLProgram in w4winst.webGLUniformLocationForPrograms) {
      const locationInfo = w4winst.webGLUniformLocationForPrograms[WebGLProgram]
      return Object.keys(locationInfo.locations).find(
        (name) => locationInfo.locations[name].locationIndex == locationIndex,
      )
    } else {
      return null
    }
  }

  static getSizeOfActiveType(activeType) {
    return typeSizes[activeType]
  }

  static isValidAccepts(accepts) {
    return accepts.indexOf(undefined) == -1
  }

  initGLGetStrings() {
    const gl = this.gl
    const wc = this.wasmContainer
    const extensions = ['GL_ES_VERSION_2_0', 'GL_ES_VERSION_3_0']
    const extensionString = extensions.join(' ')
    const vendorString = 'WebGL_Wrapper'
    const versionString = '3.0.0 ES WebGL_Wrapper 1.0'
    const shadingLanguageVersionString = '3.00 ES'
    const stringPool = extensions
    stringPool.push(extensionString)
    stringPool.push(vendorString)
    stringPool.push(versionString)
    stringPool.push(shadingLanguageVersionString)
    const stringPoolString = stringPool.join('\0')
    const stringPoolPointer = wc.allocateMemory(stringPoolString.length + 1)
    wc.writeString(stringPoolPointer, stringPoolString.length + 1, stringPoolString)
    let curPtr = stringPoolPointer
    for (const i in extensions) {
      const extName = extensions[i]
      this.pointerOfExtensionStrings.push(curPtr)
      curPtr += extName.length + 1
    }
    this.pointerOfAllExtensionString = curPtr
    curPtr += extensionString.length + 1
    this.pointerOfVendorString = curPtr
    curPtr += vendorString.length + 1
    this.pointerOfVersionString = curPtr
    curPtr += versionString.length + 1
    this.pointerOfShadingLanguageString = curPtr
    curPtr += shadingLanguageVersionString.length + 1
  }

  importOpenGLES3() {
    const gl = this.gl
    const wc = this.wasmContainer
    const conv = this.webGLObjectConversion
    const bufferBinding = this.webGLBufferBinding
    wc.addOnLoadedFunction(() => this.initGLGetStrings())
    wc.importFunction('glActiveTexture', (texture) => gl.activeTexture(texture))
    wc.importFunction('glAttachShader', (program, shader) => gl.attachShader(conv[program], conv[shader]))
    wc.importFunction('glBindAttribLocation', (program, index, name) =>
      gl.bindAttribLocation(conv[program], index, wc.getString(name)),
    )
    wc.importFunction('glBindBuffer', function (target, buffer) {
      if (buffer) {
        const obj = conv[buffer]
        bufferBinding[target] = obj
        gl.bindBuffer(target, obj)
      } else {
        delete bufferBinding[target]
        gl.bindBuffer(target, null)
      }
    })
    wc.importFunction('glBindFramebuffer', (target, framebuffer) => gl.bindFramebuffer(target, conv[framebuffer]))
    wc.importFunction('glBindRenderbuffer', (target, renderbuffer) => gl.bindRenderbuffer(target, conv[renderbuffer]))
    wc.importFunction('glBindTexture', (target, texture) => gl.bindTexture(target, conv[texture]))
    wc.importFunction('glBlendColor', (red, buffer, blue, alpha) => gl.blendColor(red, buffer, blue, alpha))
    wc.importFunction('glBlendEquation', (mode) => gl.blendEquation(mode))
    wc.importFunction('glBlendEquationSeparate', (modeRGB, modeAlpha) => gl.blendEquationSeparate(modeRGB, modeAlpha))
    wc.importFunction('glBlendFunc', (sfactor, dfactor) => gl.blendFunc(sfactor, dfactor))
    wc.importFunction('glBlendFuncSeparate', (sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha) =>
      gl.blendFuncSeparate(sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha),
    )
    wc.importFunction('glBufferData', function (target, size, data, usage) {
      if (data && size) gl.bufferData(target, wc.getMemory(data, size), usage)
      else gl.bufferData(target, size, usage)
    })
    wc.importFunction('glBufferSubData', (target, offset, size, data) =>
      gl.bufferSubData(target, offset, wc.getMemory(data, size)),
    )
    wc.importFunction('glCheckFramebufferStatus', function (target) {
      return gl.checkFramebufferStatus(target)
    })
    wc.importFunction('glClear', (mask) => gl.clear(mask))
    wc.importFunction('glClearColor', (red, green, blue, alpha) => gl.clearColor(red, green, blue, alpha))
    wc.importFunction('glClearDepthf', (d) => gl.clearDepth(d))
    wc.importFunction('glClearStencil', (s) => gl.clearStencil(s))
    wc.importFunction('glColorMask', (red, green, blue, alpha) => gl.colorMask(red, green, blue, alpha))
    wc.importFunction('glCompileShader', (shader) => gl.compileShader(conv[shader]))
    wc.importFunction(
      'glCompressedTexImage2D',
      (target, level, internalformat, width, height, border, imageSize, data) =>
        gl.compressedTexImage2D(
          target,
          level,
          internalformat,
          width,
          height,
          border,
          wc.getMemoryBytes(data, imageSize),
        ),
    )
    wc.importFunction(
      'glCompressedTexSubImage2D',
      (target, level, xoffset, yoffset, width, height, format, imageSize, data) =>
        gl.compressedTexImage2D(
          target,
          level,
          xoffset,
          yoffset,
          width,
          height,
          format,
          wc.getMemoryBytes(data, imageSize),
        ),
    )
    wc.importFunction('glCopyTexImage2D', (target, level, internalformat, x, y, width, height, border) =>
      gl.copyTexImage2D(target, level, internalformat, x, y, width, height, border),
    )
    wc.importFunction('glCopyTexSubImage2D', (target, level, xoffset, yoffset, x, y, width, height) =>
      gl.copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height),
    )
    wc.importFunction('glCreateProgram', () => {
      return this.allocateIndexForWebGLObject(gl.createProgram())
    })
    wc.importFunction('glCreateShader', (type) => {
      return this.allocateIndexForWebGLObject(gl.createShader(type))
    })
    wc.importFunction('glCullFace', (mode) => gl.cullFace(mode))
    const glDeleteXYZ = function (n, array, delXYZ_callable) {
      console.assert(n && array)
      const indices = wc.getMemoryPointer(array, n)
      for (const i in indices) {
        const index = indices[i]
        if (index in conv) {
          delXYZ_callable(conv[index])
          Wasmgl.freeIndexForWebGLObject(owner, index)
        }
      }
    }
    wc.importFunction('glDeleteBuffers', (n, buffers) => glDeleteXYZ(n, buffers, (obj) => gl.deleteBuffer(obj)))
    wc.importFunction('glDeleteFramebuffers', (n, framebuffers) =>
      glDeleteXYZ(n, framebuffers, (obj) => gl.deleteFramebuffer(obj)),
    )
    const glDeleteX = function (x, delX_callable) {
      if (x in conv) {
        const obj = conv[x]
        delX_callable(obj)
        Wasmgl.freeIndexForWebGLObject(owner, x)
      }
    }
    wc.importFunction('glDeleteProgram', function (program) {
      if (program in conv) delete owner.webGLUniformLocationForPrograms[conv[program]]
      glDeleteX(program, (obj) => gl.deleteProgram(obj))
    })
    wc.importFunction('glDeleteRenderbuffers', (n, renderbuffers) =>
      glDeleteXYZ(n, renderbuffers, (obj) => gl.deleteRenderbuffer(obj)),
    )
    wc.importFunction('glDeleteShader', (shader) => glDeleteX(shader, (obj) => gl.deleteShader(obj)))
    wc.importFunction('glDeleteTextures', (n, textures) => glDeleteXYZ(n, textures, (obj) => gl.deleteTexture(obj)))
    wc.importFunction('glDepthFunc', (func) => gl.depthFunc(func))
    wc.importFunction('glDepthMask', (flag) => gl.depthMask(flag))
    wc.importFunction('glDepthRangef', (n, f) => gl.depthRange(n, f))
    wc.importFunction('glDetachShader', (program, shader) => gl.detachShader(conv[program], conv[shader]))
    wc.importFunction('glDisable', (cap) => gl.disable(cap))
    wc.importFunction('glDisableVertexAttribArray', (index) => gl.disableVertexAttribArray(index))
    wc.importFunction('glDrawArrays', (mode, first, count) => gl.drawArrays(mode, first, count))
    wc.importFunction('glDrawElements', function (mode, count, type, indices) {
      if (gl.ELEMENT_ARRAY_BUFFER in bufferBinding && bufferBinding[gl.ELEMENT_ARRAY_BUFFER] != null) {
        gl.drawElements(mode, count, type, indices)
      } else {
        console.assert(indices)
        let size = count
        switch (type) {
          case gl.UNSIGNED_BYTE:
            break
          case gl.UNSIGNED_SHORT:
            size *= 2
            break
          case gl.UNSIGNED_INT:
            size *= 4
            break
          default:
            return
        }
        const elementArrayBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementArrayBuffer)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, wc.getMemory(indices, size), gl.STATIC_DRAW)
        gl.drawElements(mode, count, type, 0)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)
        gl.deleteBuffer(elementArrayBuffer)
      }
    })
    wc.importFunction('glEnable', (cap) => gl.enable(cap))
    wc.importFunction('glEnableVertexAttribArray', (index) => gl.enableVertexAttribArray(index))
    wc.importFunction('glFinish', () => gl.finish(index))
    wc.importFunction('glFlush', () => gl.flush(index))
    wc.importFunction('glFramebufferRenderbuffer', (target, attachment, renderbuffertarget, renderbuffer) =>
      gl.framebufferRenderbuffer(target, attachment, renderbuffertarget, conv[renderbuffer]),
    )
    wc.importFunction('glFramebufferTexture2D', (target, attachment, textarget, texture, level) =>
      gl.framebufferTexture2D(target, attachment, textarget, conv[texture], level),
    )
    wc.importFunction('glFrontFace', (mode) => gl.frontFace(mode))
    const glGenXYZ = function (n, array, genXYZ_callable) {
      console.assert(n && array)
      const indices = new Uint32Array(n)
      for (let i = 0; i < n; i++) {
        indices[i] = Wasmgl.allocateIndexForWebGLObject(owner, genXYZ_callable())
      }
      wc.writeMemory(array, indices)
    }
    wc.importFunction('glGenBuffers', (n, buffers) =>
      glGenXYZ(n, buffers, function () {
        return gl.createBuffer()
      }),
    )
    wc.importFunction('glGenerateMipmap', (target) => gl.generateMipmap(target))
    wc.importFunction('glGenFramebuffers', (n, framebuffers) =>
      glGenXYZ(n, framebuffers, function () {
        return gl.createFramebuffer()
      }),
    )
    wc.importFunction('glGenRenderbuffers', (n, renderbuffers) =>
      glGenXYZ(n, renderbuffers, function () {
        return gl.createRenderbuffer()
      }),
    )
    wc.importFunction('glGenTextures', (n, textures) =>
      glGenXYZ(n, renderbuffers, function () {
        return gl.createTexture()
      }),
    )
    wc.importFunction('glGetActiveAttrib', function (program, index, bufSize, length, size, type, name) {
      const activeInfo = gl.getActiveAttrib(conv[program], index)
      if (activeInfo != null) {
        if (bufSize && name) {
          const wrotelen = wc.writeString(name, bufSize, activeInfo.name)
          if (length) wc.writeMemoryInt32(length, wrotelen)
        }
        if (size) wc.writeMemoryInt32(size, activeInfo.size)
        if (type) wc.writeMemoryUint32(type, activeInfo.type)
      } else {
        if (bufSize && name) {
          wc.writeMemoryUint8(name, 0)
          if (length) wc.writeMemoryInt32(length, 0)
        }
      }
    })
    wc.importFunction('glGetActiveUniform', function (program, index, bufSize, length, size, type, name) {
      const activeInfo = gl.getActiveUniform(conv[program], index)
      if (activeInfo != null) {
        if (bufSize && name) {
          const wrotelen = wc.writeString(name, bufSize, activeInfo.name)
          if (length) wc.writeMemoryInt32(length, wrotelen)
        }
        if (size) wc.writeMemoryInt32(size, activeInfo.size)
        if (type) wc.writeMemoryUint32(type, activeInfo.type)
      } else {
        if (bufSize && name) {
          wc.writeMemoryUint8(name, 0)
          if (length) wc.writeMemoryInt32(length, 0)
        }
      }
    })
    wc.importFunction('glGetAttachedShaders', (program, maxCount, count, shaders) => {
      const got_shaders = gl.getAttachedShaders(conv[program])
      if (count) wc.writeMemoryInt32(count, got_shaders.length)
      if (maxCount > got_shaders.length) maxCount = got_shaders.length
      for (let i = 0; i < maxCount; i++) {
        wc.writeMemoryInt32(shaders + i * 4, this.getIndexByWebGLObject(got_shaders[i]))
      }
    })
    wc.importFunction('glGetAttribLocation', function (program, name) {
      return gl.getAttribLocation(conv[program], wc.getString(name))
    })
    wc.importFunction('glGetBooleanv', function (pname: number, data: number) {
      console.assert(pname in glGetTypes)
      const got = gl.getParameter(pname)
      if (pname in glGetArraySizes) {
        const count = glGetArraySizes[pname]
        for (let i = 0; i < count; i++) {
          wc.writeMemoryUint8(data + i, got[i])
        }
      } else {
        wc.writeMemoryUint8(data, got)
      }
    })
    wc.importFunction('glGetBufferParameteriv', function (target, pname, params) {
      const accepts = [gl.BUFFER_SIZE, gl.BUFFER_USAGE]
      console.assert(Wasmgl.isValidAccepts(accepts))
      console.assert(accepts.indexOf(pname) != -1)
      const got = gl.getBufferParameter(target, pname)
      switch (pname) {
        case gl.BUFFER_SIZE:
          wc.writeMemoryInt32(params, got)
          break
        case gl.BUFFER_USAGE:
          wc.writeMemoryUint32(params, got)
          break
      }
    })
    wc.importFunction('glGetError', function () {
      return gl.getError()
    })
    wc.importFunction('glGetFloatv', function (pname: number, data: number) {
      console.assert(pname in glGetTypes || pname in glGetObjects)
      let wrapper = function (g) {
        return g
      }
      if (pname in glGetObjects) {
		  wrapper = function (g) {
			  return Wasmgl.getIndexByWebGLObject(owner, g)
		  }
	  }
      const got = gl.getParameter(pname)
      if (pname in glGetArraySizes) {
        const count = glGetArraySizes[pname]
        for (let i = 0; i < count; i++) {
          wc.writeMemoryFloat32(data + i, wrapper(got[i]))
        }
      } else {
        wc.writeMemoryFloat32(data, wrapper(got))
      }
    })
    wc.importFunction('glGetFramebufferAttachmentParameteriv', function (target, attachment, pname, params) {
      const accepts = [
        gl.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE,
        gl.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE,
        gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING,
        gl.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE,
        gl.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE,
        gl.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE,
        gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME,
        gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE,
        gl.FRAMEBUFFER_ATTACHMENT_RED_SIZE,
        gl.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE,
        gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE,
        gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER,
        gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL,
      ]
      console.assert(Wasmgl.isValidAccepts(accepts))
      console.assert(accepts.indexOf(pname) != -1)
      const got = gl.getFramebufferAttachmentParameter(target, attachment, pname)
      switch (pname) {
        case gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:
        case gl.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE:
        case gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:
          wc.writeMemoryUint32(params, got)
          break
        case gl.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE:
        case gl.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE:
        case gl.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE:
        case gl.FRAMEBUFFER_ATTACHMENT_RED_SIZE:
        case gl.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE:
        case gl.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE:
        case gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER:
        case gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:
        case gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:
          wc.writeMemoryInt32(params, got)
          break
        case gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:
          wc.writeMemoryUint32(params, Wasmgl.getIndexByWebGLObject(owner, got))
          break
      }
    })
    wc.importFunction('glGetIntegerv', function (pname, data) {
      console.assert(pname in owner.glGetTypes || pname in owner.glGetObjects)
      let wrapper = function (g) {
        return g
      }
      if (pname in owner.glGetObjects)
        wrapper = function (g) {
          return Wasmgl.getIndexByWebGLObject(owner, g)
        }
      const got = gl.getParameter(pname)
      if (pname in owner.glGetArraySizes) {
        const count = owner.glGetArraySizes[pname]
        for (let i = 0; i < count; i++) {
          wc.writeMemoryUint32(data + i, wrapper(got[i]))
        }
      } else {
        wc.writeMemoryUint32(data, wrapper(got))
      }
    })
    wc.importFunction('glGetProgramiv', function (program, pname, params) {
      const accepts = [
        gl.ACTIVE_ATTRIBUTES,
        gl.ACTIVE_ATTRIBUTE_MAX_LENGTH,
        gl.ACTIVE_UNIFORMS,
        gl.ACTIVE_UNIFORM_BLOCKS,
        gl.ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH,
        gl.ACTIVE_UNIFORM_MAX_LENGTH,
        gl.ATTACHED_SHADERS,
        gl.DELETE_STATUS,
        gl.INFO_LOG_LENGTH,
        gl.LINK_STATUS,
        gl.PROGRAM_BINARY_RETRIEVABLE_HINT,
        gl.TRANSFORM_FEEDBACK_BUFFER_MODE,
        gl.TRANSFORM_FEEDBACK_VARYINGS,
        gl.TRANSFORM_FEEDBACK_VARYING_MAX_LENGTH,
        gl.VALIDATE_STATUS,
      ]
      console.assert(Wasmgl.isValidAccepts(accepts))
      let got
      const obj = conv[program]
      let activeCount
      let maxLength = 0
      switch (pname) {
        case gl.ATTACHED_SHADERS:
        case gl.ACTIVE_ATTRIBUTES:
        case gl.ACTIVE_UNIFORMS:
        case gl.TRANSFORM_FEEDBACK_VARYINGS:
        case gl.ACTIVE_UNIFORM_BLOCKS:
          got = gl.getProgramParameter(obj, pname)
          wc.writeMemoryInt32(params, got)
          return
        case gl.TRANSFORM_FEEDBACK_BUFFER_MODE:
          got = gl.getProgramParameter(obj, pname)
          wc.writeMemoryUint32(params, got)
          return
        case gl.DELETE_STATUS:
        case gl.LINK_STATUS:
        case gl.VALIDATE_STATUS:
          got = gl.getProgramParameter(obj, pname)
          wc.writeMemoryUint8(params, got)
          return
        case gl.ACTIVE_ATTRIBUTE_MAX_LENGTH:
          activeCount = gl.getProgramParameter(obj, gl.ACTIVE_ATTRIBUTES)
          for (var i = 0; i < activeCount; i++) {
            var activeInfo = gl.getActiveAttrib(obj, i)
            if (activeInfo != null) {
              if (activeInfo.name.length > maxLength) maxLength = activeInfo.name.length
            }
          }
          wc.writeMemoryInt32(params, maxLength)
          return
        case gl.ACTIVE_UNIFORM_MAX_LENGTH:
          activeCount = gl.getProgramParameter(obj, gl.ACTIVE_UNIFORMS)
          for (var i = 0; i < activeCount; i++) {
            var activeInfo = gl.getActiveUniform(obj, i)
            if (activeInfo != null) {
              if (activeInfo.name.length > maxLength) maxLength = activeInfo.name.length
            }
          }
          wc.writeMemoryInt32(params, maxLength)
          return
        case gl.ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH:
          activeCount = gl.getProgramParameter(obj, gl.ACTIVE_UNIFORM_BLOCKS)
          for (var i = 0; i < activeCount; i++) {
            const blockName = gl.getActiveUniformBlockName(obj, i)
            if (blockName != null) {
              if (blockName.length > maxLength) maxLength = blockName.length
            }
          }
          wc.writeMemoryInt32(params, maxLength)
          return
        case gl.INFO_LOG_LENGTH:
          wc.writeMemoryInt32(params, gl.getProgramInfoLog(obj).length)
          return
        case gl.PROGRAM_BINARY_RETRIEVABLE_HINT:
          wc.writeMemoryUint32(params, 0)
          return
        case gl.TRANSFORM_FEEDBACK_VARYING_MAX_LENGTH:
          var varyingCount = gl.getProgramParameter(obj, gl.TRANSFORM_FEEDBACK_VARYINGS)
          for (var i = 0; i < varyingCount; i++) {
            var activeInfo = gl.getTransformFeedbackVarying(obj, i)
            if (activeInfo != null) {
              if (activeInfo.name.length > maxLength) maxLength = activeInfo.name.length
            }
          }
          wc.writeMemoryInt32(params, maxLength)
          return
        default:
          wc.generateOutput('glGetProgramiv: Unknown pname ' + pname.toString(16))
          console.assert(false)
      }
    })
    wc.importFunction('glGetProgramInfoLog', function (program, bufSize, length, infoLog) {
      const wroteLen = wc.writeString(infoLog, bufSize, gl.getProgramInfoLog(conv[program]))
      if (length) wc.writeMemoryInt32(length, wroteLen)
    })
    wc.importFunction('glGetRenderbufferParameteriv', function (target, pname, params) {
      const accepts = [
        gl.RENDERBUFFER_WIDTH,
        gl.RENDERBUFFER_HEIGHT,
        gl.RENDERBUFFER_INTERNAL_FORMAT,
        gl.RENDERBUFFER_RED_SIZE,
        gl.RENDERBUFFER_GREEN_SIZE,
        gl.RENDERBUFFER_BLUE_SIZE,
        gl.RENDERBUFFER_ALPHA_SIZE,
        gl.RENDERBUFFER_DEPTH_SIZE,
        gl.RENDERBUFFER_SAMPLES,
        gl.RENDERBUFFER_STENCIL_SIZE,
      ]
      console.assert(Wasmgl.isValidAccepts(accepts))
      console.assert(accepts.indexOf(pname) != -1)
      const got = gl.getRenderbufferParameter(target, pname)
      switch (pname) {
        case gl.RENDERBUFFER_WIDTH:
        case gl.RENDERBUFFER_HEIGHT:
        case gl.RENDERBUFFER_RED_SIZE:
        case gl.RENDERBUFFER_GREEN_SIZE:
        case gl.RENDERBUFFER_BLUE_SIZE:
        case gl.RENDERBUFFER_ALPHA_SIZE:
        case gl.RENDERBUFFER_DEPTH_SIZE:
        case gl.RENDERBUFFER_SAMPLES:
        case gl.RENDERBUFFER_STENCIL_SIZE:
          wc.writeMemoryInt32(params, got)
          return
        case gl.RENDERBUFFER_INTERNAL_FORMAT:
          wc.writeMemoryUint32(params, got)
          return
      }
    })
    wc.importFunction('glGetShaderiv', function (shader, pname, params) {
      const accepts = [gl.SHADER_TYPE, gl.DELETE_STATUS, gl.COMPILE_STATUS, gl.INFO_LOG_LENGTH, gl.SHADER_SOURCE_LENGTH]
      console.assert(Wasmgl.isValidAccepts(accepts))
      console.assert(accepts.indexOf(pname) != -1)
      const obj = conv[shader]
      switch (pname) {
        case gl.SHADER_TYPE:
          wc.writeMemoryUint32(params, gl.getShaderParameter(obj, pname))
          return
        case gl.DELETE_STATUS:
        case gl.COMPILE_STATUS:
          wc.writeMemoryUint8(params, gl.getShaderParameter(obj, pname))
          return
        case gl.INFO_LOG_LENGTH:
          wc.writeMemoryInt32(params, gl.getShaderInfoLog(obj).length)
          return
        case gl.SHADER_SOURCE_LENGTH:
          wc.writeMemoryInt32(params, gl.getShaderSource(obj).length)
          return
      }
    })
    wc.importFunction('glGetShaderInfoLog', function (shader, bufSize, length, infoLog) {
      const wrotelen = wc.writeString(infoLog, bufSize, gl.getShaderInfoLog(conv[shader]))
      if (length) wc.writeMemoryInt32(length, wrotelen)
    })
    wc.importFunction('glGetShaderPrecisionFormat', function (shadertype, precisiontype, range, precision) {
      const precisionFormat = gl.getShaderPrecisionFormat(shadertype, precisiontype)
      if (precisionFormat != null) {
        if (range) {
          wc.writeMemoryInt32(range + 0, precisionFormat.rangeMin)
          wc.writeMemoryInt32(range + 4, precisionFormat.rangeMax)
        }
        if (precision) {
          wc.writeMemoryInt32(precision, precisionFormat.precision)
        }
      }
    })
    wc.importFunction('glGetShaderSource', function (shader, bufSize, length, source) {
      const wrotelen = wc.writeString(source, bufSize, gl.getShaderSource(conv[shader]))
      if (length) wc.writeMemoryInt32(length, wrotelen)
    })
    wc.importFunction('glGetString', function (name) {
      switch (name) {
        case gl.EXTENSIONS:
          return this.pointerOfAllExtensionString
        case gl.VENDOR:
        case gl.RENDERER:
        case gl.VERSION:
        case gl.SHADING_LANGUAGE_VERSION:
      }
    })
    wc.importFunction('glGetTexParameterfv', function (target, pname, params) {
      const accepts = [
        gl.TEXTURE_BASE_LEVEL,
        gl.TEXTURE_COMPARE_FUNC,
        gl.TEXTURE_COMPARE_MODE,
        gl.TEXTURE_IMMUTABLE_FORMAT,
        gl.TEXTURE_IMMUTABLE_LEVELS,
        gl.TEXTURE_MAG_FILTER,
        gl.TEXTURE_MAX_LEVEL,
        gl.TEXTURE_MAX_LOD,
        gl.TEXTURE_MIN_FILTER,
        gl.TEXTURE_MIN_LOD,
        gl.TEXTURE_WRAP_R,
        gl.TEXTURE_WRAP_S,
        gl.TEXTURE_WRAP_T,
      ]
      console.assert(Wasmgl.isValidAccepts(accepts))
      console.assert(accepts.indexOf(pname) != -1)
      const got = gl.getTexParameter(target, pname)
      wc.writeMemoryFloat32(params, got)
    })
    wc.importFunction('glGetTexParameteriv', function (target, pname, params) {
      const accepts = [
        gl.TEXTURE_BASE_LEVEL,
        gl.TEXTURE_COMPARE_FUNC,
        gl.TEXTURE_COMPARE_MODE,
        gl.TEXTURE_IMMUTABLE_FORMAT,
        gl.TEXTURE_IMMUTABLE_LEVELS,
        gl.TEXTURE_MAG_FILTER,
        gl.TEXTURE_MAX_LEVEL,
        gl.TEXTURE_MAX_LOD,
        gl.TEXTURE_MIN_FILTER,
        gl.TEXTURE_MIN_LOD,
        gl.TEXTURE_WRAP_R,
        gl.TEXTURE_WRAP_S,
        gl.TEXTURE_WRAP_T,
      ]
      console.assert(Wasmgl.isValidAccepts(accepts))
      console.assert(accepts.indexOf(pname) != -1)
      const got = gl.getTexParameter(target, pname)
      wc.writeMemoryInt32(params, got)
    })
    const getUniformFunction = function (program, location, params) {
      const obj = conv[program]
      const locationObject = owner.getLocationObjectByIndex(obj, location)
      const locationName = owner.getLocationNameByLocationIndex(obj, location)
      const got = gl.getUniform(obj, locationObject)
      const activeCount = gl.getProgramParameter(obj, gl.ACTIVE_UNIFORMS)
      let activeType
      let activeSize
      for (let i = 0; i < activeCount; i++) {
        const activeInfo = gl.getActiveUniform(obj, i)
        if (activeInfo != null && activeInfo.name == locationName) {
          activeSize = activeInfo.size
          activeType = activeInfo.type
          const typeSize = Wasmgl.getSizeOfActiveType(owner, activeType)
          if (activeSize == 1 && typeSize == 1) {
            switch (activeType) {
              case gl.FLOAT:
                wc.writeMemoryFloat32(params, got)
                break
              case gl.INT:
                wc.writeMemoryInt32(params, got)
                break
              case gl.BOOL:
                wc.writeMemoryUint8(params, got)
                break
              case gl.UNSIGNED_INT:
                wc.writeMemoryUint32(params, got)
                break
              default:
                wc.writeMemory(params, got)
            }
          } else {
            wc.writeMemory(params, got)
          }
          return
        }
      }
    }
    wc.importFunction('glGetUniformfv', getUniformFunction)
    wc.importFunction('glGetUniformiv', getUniformFunction)
    wc.importFunction('glGetUniformLocation', function (program, name) {
      const obj = conv[program]
      if (obj in owner.webGLUniformLocationForPrograms) {
        const locationInfo = owner.webGLUniformLocationForPrograms[obj]
        if (name in locationInfo) return locationInfo[name].index
      }
      const locationObject = gl.getUniformLocation(obj, name)
      return owner.allocateIndexForUniformLocation(obj, name, locationObject)
    })
    const getVertexAttribFunction = function (index, pname, params) {
      const got = gl.getVertexAttrib(index, pname)
      switch (pname) {
        case gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
          wc.writeMemoryUint32(params, Wasmgl.getIndexByWebGLObject(owner, got))
          break
        case gl.VERTEX_ATTRIB_ARRAY_ENABLED:
        case gl.VERTEX_ATTRIB_ARRAY_NORMALIZED:
        case gl.VERTEX_ATTRIB_ARRAY_INTEGER:
          wc.writeMemoryUint8(params, got)
          break
        case gl.VERTEX_ATTRIB_ARRAY_SIZE:
        case gl.VERTEX_ATTRIB_ARRAY_STRIDE:
        case gl.VERTEX_ATTRIB_ARRAY_DIVISOR:
          wc.writeMemoryInt32(params, got)
          break
        case gl.VERTEX_ATTRIB_ARRAY_TYPE:
          wc.writeMemoryUint32(params, got)
          break
        case gl.CURRENT_VERTEX_ATTRIB:
          wc.writeMemory(params, got)
          break
      }
    }
    wc.importFunction('glGetVertexAttribfv', getVertexAttribFunction)
    wc.importFunction('glGetVertexAttribiv', getVertexAttribFunction)
    wc.importFunction('glGetVertexAttribPointerv', (index, pname, pointer) =>
      wc.writeMemoryPointer(pointer, gl.getVertexAttribOffset(index, pname)),
    )
    wc.importFunction('glHint', (target, mode) => gl.hint(target, mode))
    const glIsXYZ = function (xyz, isXYZ_callable) {
      if (xyz == 0) return false
      else if (xyz in conv) return isXYZ_callable(conv[xyz])
      else return false
    }
    wc.importFunction('glIsBuffer', function (buffer) {
      return glIsXYZ(buffer, function (obj) {
        return gl.isBuffer(obj)
      })
    })
    wc.importFunction('glIsEnabled', function (cap) {
      return gl.isEnabled(cap)
    })
    wc.importFunction('glIsFramebuffer', function (framebuffer) {
      return glIsXYZ(framebuffer, function (obj) {
        return gl.isFramebuffer(obj)
      })
    })
    wc.importFunction('glIsProgram', function (program) {
      return glIsXYZ(program, function (obj) {
        return gl.isProgram(obj)
      })
    })
    wc.importFunction('glIsRenderbuffer', function (renderbuffer) {
      return glIsXYZ(renderbuffer, function (obj) {
        return gl.isRenderbuffer(obj)
      })
    })
    wc.importFunction('glIsShader', function (shader) {
      return glIsXYZ(shader, function (obj) {
        return gl.isShader(obj)
      })
    })
    wc.importFunction('glIsTexture', function (texture) {
      return glIsXYZ(texture, function (obj) {
        return gl.isTexture(obj)
      })
    })
    wc.importFunction('glLineWidth', (width) => gl.lineWidth(width))
    wc.importFunction('glLinkProgram', (program) => gl.linkProgram(conv[program]))
    wc.importFunction('glPixelStorei', function (pname, param) {
      gl.pixelStorei(pname, param)
      owner.pixelStoreiState[pname] = param
    })
    wc.importFunction('glPolygonOffset', (factor, units) => gl.polygonOffset(factor, units))
    wc.importFunction('glReadPixels', function (x, y, width, height, format, type, pixels) {
      let packBuffer = null
      if (gl.PIXEL_PACK_BUFFER in owner.webGLBufferBinding) packBuffer = owner.webGLBufferBinding[gl.PIXEL_PACK_BUFFER]
      if (packBuffer != null) {
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null)
        gl.readPixels(x, y, width, height, format, packBuffer, pixels)
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, packBuffer)
      } else {
        gl.readPixels(x, y, width, height, format, wc.membytes, pixels)
      }
    })
    wc.importFunction('glReleaseShaderCompiler', function () {})
    wc.importFunction('glRenderbufferStorage', (target, internalformat, width, height) =>
      gl.renderbufferStorage(target, internalformat, width, height),
    )
    wc.importFunction('glSampleCoverage', (value, invert) => gl.sampleCoverage(value, invert))
    wc.importFunction('glScissor', (x, y, width, height) => gl.scissor(x, y, width, height))
    wc.importFunction('glShaderBinary', function (count, shaders, binaryFormat, binary, length) {
      console.assert(false)
    })
    wc.importFunction('glShaderSource', function (shader, count, string, length) {
      let shaderString = ''
      const stringPointers = wc.getMemoryPointer(string, count)
      for (let i = 0; i < count; i++) {
        shaderString += wc.getString(stringPointers[i]) + '\n'
      }
      wc.generateOutput('Compiling shader: \n' + shaderString)
      gl.shaderSource(conv[shader], shaderString)
    })
    wc.importFunction('glStencilFunc', (func, ref, mask) => gl.stencilFunc(func, ref, mask))
    wc.importFunction('glStencilFuncSeparate', (face, func, ref, mask) => gl.stencilFuncSeparate(face, func, ref, mask))
    wc.importFunction('glStencilMask', (mask) => gl.stencilMask(mask))
    wc.importFunction('glStencilMaskSeparate', (face, mask) => gl.stencilMaskSeparate(face, mask))
    wc.importFunction('glStencilOp', (fail, zfail, zpass) => gl.stencilOp(fail, zfail, zpass))
    wc.importFunction('glStencilOpSeparate', (face, sfail, dpfail, dppass) =>
      gl.stencilOpSeparate(face, sfail, dpfail, dppass),
    )
    wc.importFunction(
      'glTexImage2D',
      function (target, level, internalformat, width, height, border, format, type, pixels) {
        let unpackBuffer = null
        if (gl.PIXEL_UNPACK_BUFFER in owner.webGLBufferBinding)
          unpackBuffer = owner.webGLBufferBinding[gl.PIXEL_UNPACK_BUFFER]
        if (unpackBuffer != null) {
          gl.bindBuffer(gl.PIXEL_UNPACK_BUFFER, null)
          gl.texImage2D(target, level, internalformat, width, height, border, format, type, unpackBuffer, pixels)
          gl.bindBuffer(gl.PIXEL_UNPACK_BUFFER, unpackBuffer)
        } else {
          gl.texImage2D(target, level, internalformat, width, height, border, format, type, wc.membytes, pixels)
        }
      },
    )
    wc.importFunction('glTexParameterf', (target, pname, param) => gl.texParameterf(target, pname, param))
    wc.importFunction('glTexParameterfv', (target, pname, params) =>
      gl.texParameterf(target, pname, wc.getMemoryFloat32(params, 1)[0]),
    )
    wc.importFunction('glTexParameteri', (target, pname, param) => gl.texParameter(target, pname, param))
    wc.importFunction('glTexParameteriv', (target, pname, params) =>
      gl.texParameter(target, pname, wc.getMemoryInt32(params, 1)[0]),
    )
    wc.importFunction(
      'glTexSubImage2D',
      function (target, level, xoffset, yoffset, width, height, border, format, type, pixels) {
        let unpackBuffer = null
        if (gl.PIXEL_UNPACK_BUFFER in owner.webGLBufferBinding)
          unpackBuffer = owner.webGLBufferBinding[gl.PIXEL_UNPACK_BUFFER]
        if (unpackBuffer != null) {
          gl.bindBuffer(gl.PIXEL_UNPACK_BUFFER, null)
          gl.texSubImage2D(target, level, xoffset, yoffset, width, height, border, format, type, unpackBuffer, pixels)
          gl.bindBuffer(gl.PIXEL_UNPACK_BUFFER, unpackBuffer)
        } else {
          gl.texSubImage2D(target, level, xoffset, yoffset, width, height, border, format, type, wc.membytes, pixels)
        }
      },
    )
    wc.importFunction('glUniform1f', (location, v0) =>
      gl.uniform1f(Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location), v0),
    )
    wc.importFunction('glUniform1i', (location, v0) =>
      gl.uniform1i(Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location), v0),
    )
    wc.importFunction('glUniform2f', (location, v0, v1) =>
      gl.uniform2f(Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location), v0, v1),
    )
    wc.importFunction('glUniform2i', (location, v0, v1) =>
      gl.uniform2i(Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location), v0, v1),
    )
    wc.importFunction('glUniform3f', (location, v0, v1, v2) =>
      gl.uniform3f(Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location), v0, v1, v2),
    )
    wc.importFunction('glUniform3i', (location, v0, v1, v2) =>
      gl.uniform3i(Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location), v0, v1, v2),
    )
    wc.importFunction('glUniform4f', (location, v0, v1, v2, v3) =>
      gl.uniform4f(Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location), v0, v1, v2, v3),
    )
    wc.importFunction('glUniform4i', (location, v0, v1, v2, v3) =>
      gl.uniform4i(Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location), v0, v1, v2, v3),
    )
    wc.importFunction('glUniform1fv', (location, count, value) =>
      gl.uniform1fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count),
      ),
    )
    wc.importFunction('glUniform1iv', (location, count, value) =>
      gl.uniform1iv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryInt32(value, count),
      ),
    )
    wc.importFunction('glUniform2fv', (location, count, value) =>
      gl.uniform2fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count),
      ),
    )
    wc.importFunction('glUniform2iv', (location, count, value) =>
      gl.uniform2iv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryInt32(value, count),
      ),
    )
    wc.importFunction('glUniform3fv', (location, count, value) =>
      gl.uniform3fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count),
      ),
    )
    wc.importFunction('glUniform3iv', (location, count, value) =>
      gl.uniform3iv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryInt32(value, count),
      ),
    )
    wc.importFunction('glUniform4fv', (location, count, value) =>
      gl.uniform4fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count),
      ),
    )
    wc.importFunction('glUniform4iv', (location, count, value) =>
      gl.uniform4iv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryInt32(value, count),
      ),
    )
    wc.importFunction('glUniformMatrix2fv', (location, count, transpose, value) =>
      gl.uniformMatrix2fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count * 4),
      ),
    )
    wc.importFunction('glUniformMatrix3fv', (location, count, transpose, value) =>
      gl.uniformMatrix3fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count * 9),
      ),
    )
    wc.importFunction('glUniformMatrix4fv', (location, count, transpose, value) =>
      gl.uniformMatrix4fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count * 16),
      ),
    )
    wc.importFunction('glUseProgram', function (program) {
      if (program) {
        const obj = conv[program]
        gl.useProgram(obj)
        owner.currentProgram = obj
      } else {
        gl.useProgram(null)
        owner.currentProgram = null
      }
    })
    wc.importFunction('glValidateProgram', (program) => gl.validateProgram(conv[program]))
    wc.importFunction('glVertexAttrib1f', (index, x) => gl.vertexAttrib1f(index, x))
    wc.importFunction('glVertexAttrib2f', (index, x, y) => gl.vertexAttrib2f(index, x, y))
    wc.importFunction('glVertexAttrib3f', (index, x, y, z) => gl.vertexAttrib3f(index, x, y, z))
    wc.importFunction('glVertexAttrib4f', (index, x, y, z, w) => gl.vertexAttrib4f(index, x, y, z, w))
    wc.importFunction('glVertexAttrib1fv', (index, v) => gl.vertexAttrib1fv(index, wc.getMemoryFloat32(v, 1)))
    wc.importFunction('glVertexAttrib2fv', (index, v) => gl.vertexAttrib2fv(index, wc.getMemoryFloat32(v, 2)))
    wc.importFunction('glVertexAttrib3fv', (index, v) => gl.vertexAttrib3fv(index, wc.getMemoryFloat32(v, 3)))
    wc.importFunction('glVertexAttrib4fv', (index, v) => gl.vertexAttrib4fv(index, wc.getMemoryFloat32(v, 4)))
    wc.importFunction('glVertexAttribPointer', (index, size, type, normalized, stride, pointer) =>
      gl.vertexAttribPointer(index, size, type, normalized, stride, pointer),
    )
    wc.importFunction('glViewport', (x, y, width, height) => gl.viewport(x, y, width, height))
    // Here comes GLES3 APIs
    wc.importFunction('glReadBuffer', (src) => gl.readBuffer(src))
    wc.importFunction('glDrawRangeElements', function (mode, start, end, count, type, indices) {
      if (gl.ELEMENT_ARRAY_BUFFER in bufferBinding && bufferBinding[gl.ELEMENT_ARRAY_BUFFER] != null) {
        gl.drawRangeElements(mode, start, end, count, type, indices)
      } else {
        console.assert(indices)
        let size = count
        switch (type) {
          case gl.UNSIGNED_BYTE:
            break
          case gl.UNSIGNED_SHORT:
            size *= 2
            break
          case gl.UNSIGNED_INT:
            size *= 4
            break
          default:
            return
        }
        const elementArrayBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementArrayBuffer)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, wc.getMemory(indices, size), gl.STATIC_DRAW)
        gl.drawRangeElements(mode, start, end, count, type, 0)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)
        gl.deleteBuffer(elementArrayBuffer)
      }
    })
    wc.importFunction(
      'glTexImage3D',
      function (target, level, internalformat, width, height, depth, border, format, type, pixels) {
        if (
          gl.PIXEL_UNPACK_BUFFER in owner.webGLBufferBinding &&
          owner.webGLBufferBinding[gl.PIXEL_UNPACK_BUFFER] != null
        ) {
          gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, pixels)
        } else {
          console.assert(pixels)
          gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, wc.membytes, pixels)
        }
      },
    )
    wc.importFunction(
      'glTexSubImage3D',
      function (target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
        if (
          gl.PIXEL_UNPACK_BUFFER in owner.webGLBufferBinding &&
          owner.webGLBufferBinding[gl.PIXEL_UNPACK_BUFFER] != null
        ) {
          gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels)
        } else {
          console.assert(pixels)
          gl.texSubImage3D(
            target,
            level,
            xoffset,
            yoffset,
            zoffset,
            width,
            height,
            depth,
            format,
            type,
            wc.membytes,
            pixels,
          )
        }
      },
    )
    wc.importFunction('glCopyTexSubImage3D', (target, level, xoffset, yoffset, zoffset, x, y, width, height) =>
      gl.copyTexSubImage3D(target, level, xoffset, yoffset, zoffset, x, y, width, height),
    )
    wc.importFunction(
      'glCompressedTexImage3D',
      function (target, level, internalformat, width, height, depth, border, imageSize, data) {
        if (
          gl.PIXEL_UNPACK_BUFFER in owner.webGLBufferBinding &&
          owner.webGLBufferBinding[gl.PIXEL_UNPACK_BUFFER] != null
        ) {
          gl.compressedTexImage3D(target, level, internalformat, width, height, depth, border, imageSize, data)
        } else {
          console.assert(data)
          gl.compressedTexImage3D(
            target,
            level,
            internalformat,
            width,
            height,
            depth,
            border,
            wc.getMemory(data, imageSize),
          )
        }
      },
    )
    wc.importFunction(
      'glCompressedTexSubImage3D',
      function (target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) {
        if (
          gl.PIXEL_UNPACK_BUFFER in owner.webGLBufferBinding &&
          owner.webGLBufferBinding[gl.PIXEL_UNPACK_BUFFER] != null
        ) {
          gl.compressedTexSubImage3D(
            target,
            level,
            xoffset,
            yoffset,
            zoffset,
            width,
            height,
            depth,
            format,
            imageSize,
            data,
          )
        } else {
          console.assert(data)
          gl.compressedTexSubImage3D(
            target,
            level,
            xoffset,
            yoffset,
            zoffset,
            width,
            height,
            depth,
            format,
            wc.getMemory(data, imageSize),
          )
        }
      },
    )
    wc.importFunction('glGenQueries', (n, ids) =>
      glGenXYZ(n, ids, function () {
        return gl.createQuery()
      }),
    )
    wc.importFunction('glDeleteQueries', (n, ids) => glDeleteXYZ(n, ids, (obj) => gl.deleteQuery(obj)))
    wc.importFunction('glIsQuery', function (id) {
      return glIsXYZ(id, function (obj) {
        return gl.isQuery(obj)
      })
    })
    wc.importFunction('glBeginQuery', (target, id) => gl.beginQuery(target, conv[id]))
    wc.importFunction('glEndQuery', (target) => gl.endQuery(target))
    wc.importFunction('glGetQueryiv', function (target, pname, params) {
      const query = gl.getQuery(target, pname)
      if (query == null) wc.writeMemoryInt32(params, 0)
      else wc.writeMemoryInt32(params, Wasmgl.getIndexByWebGLObject(owner, query))
    })
    wc.importFunction('glGetQueryObjectuiv', function (id, pname, params) {
      const query = conv[id]
      const got = gl.getQueryParameter(query, pname)
      switch (pname) {
        case gl.QUERY_RESULT:
          wc.writeMemoryUint32(params, got)
          break
        case gl.QUERY_RESULT_AVAILABLE:
          wc.writeMemoryUint8(params, got)
          break
      }
    })
    wc.importFunction('glUnmapBuffer', function (target) {
      if (target in owner.mappedBuffers) {
        const mapInfo = owner.mappedBuffers[target]
        if ((mapInfo.access & gl.MAP_WRITE_BIT) == gl.MAP_WRITE_BIT) {
          gl.bufferSubData(target, mapInfo.offset, wc.getMemory(mapInfo.pointer, mapInfo.length))
        }
        wc.freeMemory(mapInfo.pointer)
        delete owner.mappedBuffers[target]
        return true
      } else {
        return false
      }
    })
    wc.importFunction('glGetBufferPointerv', function (target, pname, params) {
      console.assert(target in owner.mappedBuffers)
      console.assert(pname == gl.BUFFER_MAP_POINTER)
      const mapInfo = owner.mappedBuffers[target]
      wc.writeMemoryPointer(params, mapInfo.pointer)
    })
    wc.importFunction('glDrawBuffers', function (n, bufs) {
      console.assert(n, bufs)
      gl.drawBuffers(wc.getMemoryPointer(bufs, n))
    })
    wc.importFunction('glUniformMatrix2x3fv', (location, count, transpose, value) =>
      gl.uniformMatrix2x3fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count * 6),
      ),
    )
    wc.importFunction('glUniformMatrix3x2fv', (location, count, transpose, value) =>
      gl.uniformMatrix3x2fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count * 6),
      ),
    )
    wc.importFunction('glUniformMatrix2x4fv', (location, count, transpose, value) =>
      gl.uniformMatrix2x4fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count * 8),
      ),
    )
    wc.importFunction('glUniformMatrix4x2fv', (location, count, transpose, value) =>
      gl.uniformMatrix4x2fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count * 8),
      ),
    )
    wc.importFunction('glUniformMatrix3x4fv', (location, count, transpose, value) =>
      gl.uniformMatrix3x4fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count * 12),
      ),
    )
    wc.importFunction('glUniformMatrix4x3fv', (location, count, transpose, value) =>
      gl.uniformMatrix4x3fv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryFloat32(value, count * 12),
      ),
    )
    wc.importFunction('glBlitFramebuffer', (srcX0, srcY0, srcX1, srcY1, dstX0, dstY0, dstX1, dstY1, mask, filter) =>
      gl.blitFramebuffer(srcX0, srcY0, srcX1, srcY1, dstX0, dstY0, dstX1, dstY1, mask, filter),
    )
    wc.importFunction('glRenderbufferStorageMultisample', (target, samples, internalformat, width, height) =>
      gl.renderbufferStorageMultisample(target, samples, internalformat, width, height),
    )
    wc.importFunction('glFramebufferTextureLayer', (target, attachment, texture, level, layer) =>
      gl.framebufferTextureLayer(target, attachment, conv[texture], level, layer),
    )
    wc.importFunction('glMapBufferRange', function (target, offset, length, access) {
      const pointer = wc.allocateMemory(length)
      owner.mappedBuffers[target] = {
        pointer: pointer,
        access: access,
        offset: offset,
        length: length,
      }
      if ((mapInfo.access & gl.MAP_READ_BIT) == gl.MAP_READ_BIT) {
        gl.getBufferSubData(target, offset, wc.membytes, pointer, length)
      }
      return pointer
    })
    wc.importFunction('glFlushMappedBufferRange', function (target, offset, length) {
      console.assert(target in owner.mappedBuffers)
      const mapInfo = owner.mappedBuffers[target]
      if ((mapInfo.access & gl.MAP_WRITE_BIT) == gl.MAP_WRITE_BIT) {
        gl.bufferSubData(target, mapInfo.offset + offset, wc.getMemory(mapInfo.pointer + offset, length))
      }
    })
    wc.importFunction('glBindVertexArray', (array) => gl.bindVertexArray(conv[array]))
    wc.importFunction('glDeleteVertexArrays', (n, arrays) => glDeleteXYZ(n, arrays, (obj) => gl.deleteVertexArray(obj)))
    wc.importFunction('glGenVertexArrays', (n, arrays) =>
      glGenXYZ(n, arrays, function () {
        return gl.createVertexArray()
      }),
    )
    wc.importFunction('glIsVertexArray', function (arrays) {
      return glIsXYZ(arrays, function (obj) {
        return gl.isVertexArray(obj)
      })
    })
    wc.importFunction('glGetIntegeri_v', function (target, index, data) {
      console.assert(target in owner.glGetTypes || target in owner.glGetObjects)
      let wrapper = function (g) {
        return g
      }
      if (target in owner.glGetObjects)
        wrapper = function (g) {
          return Wasmgl.getIndexByWebGLObject(owner, g)
        }
      wc.writeMemoryInt32(data, wrapper(gl.getIndexedParameter(target)))
    })
    wc.importFunction('glBeginTransformFeedback', (primitiveMode) => gl.beginTransformFeedback(primitiveMode))
    wc.importFunction('glEndTransformFeedback', () => gl.endTransformFeedback())
    wc.importFunction('glBindBufferRange', (target, index, buffer, offset, size) =>
      gl.bindBufferRange(target, index, conv[buffer], offset, size),
    )
    wc.importFunction('glBindBufferBase', (target, index, buffer) => gl.bindBufferBase(target, index, conv[buffer]))
    wc.importFunction('glTransformFeedbackVaryings', function (program, count, varyings, bufferMode) {
      gl.transformFeedbackVaryings(conv[program], wc.getStringArray(varyings, count), bufferMode)
    })
    wc.importFunction('glGetTransformFeedbackVarying', function (program, index, bufSize, length, size, type, name) {
      activeInfo = gl.getTransformFeedbackVarying(conv[program], index)
      wc.writeMemoryInt32(size, activeInfo.size)
      wc.writeMemoryUint32(type, activeInfo.type)
      const writeLen = wc.writeString(name, bufSize, activeInfo.name)
      if (length) wc.writeMemoryUint32(length, writeLen)
    })
    wc.importFunction('glVertexAttribIPointer', (index, size, type, stride, pointer) =>
      gl.vertexAttribPointer(index, size, type, normalized, stride, pointer),
    )
    wc.importFunction('glGetVertexAttribIiv', getVertexAttribFunction)
    wc.importFunction('glGetVertexAttribIuiv', getVertexAttribFunction)
    wc.importFunction('glVertexAttribI4i', (index, x, y, z, w) => gl.vertexAttribI4i(index, x, y, z, w))
    wc.importFunction('glVertexAttribI4ui', (index, x, y, z, w) => gl.vertexAttribI4ui(index, x, y, z, w))
    wc.importFunction('glVertexAttribI4iv', (index, v) => gl.vertexAttribI4iv(index, wc.getMemoryInt32(v, 4)))
    wc.importFunction('glVertexAttribI4uiv', (index, v) => gl.vertexAttribI4uiv(index, wc.getMemoryUint32(v, 4)))
    wc.importFunction('glGetUniformuiv', getUniformFunction)
    wc.importFunction('glGetFragDataLocation', (program, name) =>
      gl.getFragDataLocation(conv[program], wc.getString(name)),
    )
    wc.importFunction('glUniform1ui', (location, v0) =>
      gl.uniform1ui(Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location), v0),
    )
    wc.importFunction('glUniform2ui', (location, v0, v1) =>
      gl.uniform2ui(Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location), v0, v1),
    )
    wc.importFunction('glUniform3ui', (location, v0, v1, v2) =>
      gl.uniform3ui(Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location), v0, v1, v2),
    )
    wc.importFunction('glUniform4ui', (location, v0, v1, v2, v3) =>
      gl.uniform4ui(Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location), v0, v1, v2, v3),
    )
    wc.importFunction('glUniform1uiv', (location, count, value) =>
      gl.uniform1uiv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryUint32(value, count),
      ),
    )
    wc.importFunction('glUniform2uiv', (location, count, value) =>
      gl.uniform2uiv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryUint32(value, count),
      ),
    )
    wc.importFunction('glUniform3uiv', (location, count, value) =>
      gl.uniform3uiv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryUint32(value, count),
      ),
    )
    wc.importFunction('glUniform4uiv', (location, count, value) =>
      gl.uniform4uiv(
        Wasmgl.getLocationObjectByIndex(owner, owner.currentProgram, location),
        wc.getMemoryUint32(value, count),
      ),
    )
    wc.importFunction('glClearBufferiv', function (buffer, drawbuffer, value) {
      let buffers
      switch (buffer) {
        case gl.COLOR_BUFFER:
          buffers = wc.getMemoryInt32(value, 4)
          break
        default:
          buffers = wc.getMemoryInt32(value, 1)
          break
      }
      gl.clearBufferiv(buffer, drawbuffer, buffers)
    })
    wc.importFunction('glClearBufferuiv', function (buffer, drawbuffer, value) {
      let buffers
      switch (buffer) {
        case gl.COLOR_BUFFER:
          buffers = wc.getMemoryUint32(value, 4)
          break
        default:
          buffers = wc.getMemoryUint32(value, 1)
          break
      }
      gl.clearBufferuiv(buffer, drawbuffer, buffers)
    })
    wc.importFunction('glClearBufferfv', function (buffer, drawbuffer, value) {
      let buffers
      switch (buffer) {
        case gl.COLOR_BUFFER:
          buffers = wc.getMemoryFloat32(value, 4)
          break
        default:
          buffers = wc.getMemoryFloat32(value, 1)
          break
      }
      gl.clearBufferfv(buffer, drawbuffer, buffers)
    })
    wc.importFunction('glClearBufferfi', (buffer, drawbuffer, depth, stencil) =>
      gl.clearBufferfi(buffer, drawbuffer, depth, stencil),
    )
    wc.importFunction('glGetStringi', function (name, index) {
      console.assert(name == gl.EXTENSIONS)
      return owner.pointerOfExtensionStrings[index]
    })
    wc.importFunction('glCopyBufferSubData', (readTarget, writeTarget, readOffset, writeOffset, size) =>
      gl.copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size),
    )
    wc.importFunction('glGetUniformIndices', function (program, uniformCount, uniformNames, uniformIndices) {
      const indices = gl.getUniformIndices(conv[program], wc.getStringArray(uniformNames, uniformCount))
      const write = new Uint32Array(indices.length)
      for (const i in indices) write[i] = indices[i]
      wc.writeMemory(uniformIndices, indices)
    })
    wc.importFunction('glGetActiveUniformsiv', function (program, uniformCount, uniformIndices, pname, params) {
      const accepts = [
        gl.UNIFORM_TYPE,
        gl.UNIFORM_SIZE,
        gl.UNIFORM_BLOCK_INDEX,
        gl.UNIFORM_OFFSET,
        gl.UNIFORM_ARRAY_STRIDE,
        gl.UNIFORM_MATRIX_STRIDE,
        gl.UNIFORM_IS_ROW_MAJOR,
      ]
      console.assert(Wasmgl.isValidAccepts(accepts))
      const uniforms = wc.getMemoryUint32(uniformIndices, uniformCount)
      let write
      const obj = conv[program]
      if (pname in accepts) {
        const got = getActiveUniforms(obj, uniforms, pname)
        switch (pname) {
          case gl.UNIFORM_TYPE:
          case gl.UNIFORM_SIZE:
            write = new Uint32Array(got.length)
            break
          case gl.UNIFORM_BLOCK_INDEX:
          case gl.UNIFORM_OFFSET:
          case gl.UNIFORM_ARRAY_STRIDE:
          case gl.UNIFORM_MATRIX_STRIDE:
            write = new Int32Array(got.length)
            break
          case gl.UNIFORM_IS_ROW_MAJOR:
            write = new Uint8Array(got.length)
            break
        }
        for (var i in got) write[i] = got[i]
      } else if (pname == gl.UNIFORM_NAME_LENGTH) {
        write = new Int32Array(uniformCount)
        for (var i in uniforms) {
          write[i] = gl.getActiveUniform(obj, uniforms[i]).name.length
        }
      } else {
        console.assert(false)
      }
      wc.writeMemory(params, write)
    })
    wc.importFunction('glGetUniformBlockIndex', function (program, uniformBlockName) {
      return gl.getUniformBlockIndex(conv[program], wc.getString(uniformBlockName))
    })
    wc.importFunction('glGetActiveUniformBlockiv', function (program, uniformBlockIndex, pname, params) {
      const accepts = [
        gl.UNIFORM_BLOCK_BINDING,
        gl.UNIFORM_BLOCK_DATA_SIZE,
        gl.UNIFORM_BLOCK_ACTIVE_UNIFORMS,
        gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES,
        gl.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER,
        gl.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER,
      ]
      console.assert(Wasmgl.isValidAccepts(accepts))
      console.assert(accepts.indexOf(pname) != -1)
      const got = gl.getActiveUniformBlockParameter(conv[program], uniformBlockIndex, pname)
      switch (pname) {
        case gl.UNIFORM_BLOCK_BINDING:
        case gl.UNIFORM_BLOCK_DATA_SIZE:
        case gl.UNIFORM_BLOCK_ACTIVE_UNIFORMS:
          wc.writeMemoryUint32(params, got)
          break
        case gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES:
          wc.writeMemory(got)
          break
        case gl.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER:
        case gl.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER:
          wc.writeMemoryUint8(params, got)
          break
      }
    })
    wc.importFunction(
      'glGetActiveUniformBlockName',
      function (program, uniformBlockIndex, bufSize, length, uniformBlockName) {
        const wroteLen = wc.writeString(
          uniformBlockName,
          bufSize,
          gl.getActiveUniformBlockName(conv[program], uniformBlockIndex),
        )
        if (length) wc.writeMemoryInt32(length, wroteLen)
      },
    )
    wc.importFunction('glUniformBlockBinding', (program, uniformBlockIndex, uniformBlockBinding) =>
      gl.uniformBlockBinding(conv[program], uniformBlockIndex, uniformBlockBinding),
    )
    wc.importFunction('glDrawArraysInstanced', (mode, first, count, instanceCount) =>
      gl.drawArraysInstanced(mode, first, count, instanceCount),
    )
    wc.importFunction('glDrawElementsInstanced', function (mode, count, type, indices, instancecount) {
      if (gl.ELEMENT_ARRAY_BUFFER in bufferBinding && bufferBinding[gl.ELEMENT_ARRAY_BUFFER] != null) {
        gl.drawElementsInstanced(mode, count, type, indices, instancecount)
      } else {
        console.assert(indices)
        let size = count
        switch (type) {
          case gl.UNSIGNED_BYTE:
            break
          case gl.UNSIGNED_SHORT:
            size *= 2
            break
          case gl.UNSIGNED_INT:
            size *= 4
            break
          default:
            return
        }
        const elementArrayBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementArrayBuffer)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, wc.getMemory(indices, size), gl.STATIC_DRAW)
        gl.drawElementsInstanced(mode, count, type, 0, instancecount)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)
        gl.deleteBuffer(elementArrayBuffer)
      }
    })
    wc.importFunction('glFenceSync', function (condition, flags) {
      return Wasmgl.allocateIndexForWebGLObject(owner, gl.fenceSync(condition, flags))
    })
    wc.importFunction('glIsSync', function (sync) {
      return glIsXYZ(sync, function (obj) {
        return gl.isSync(obj)
      })
    })
    wc.importFunction('glDeleteSync', (sync) => glDeleteX(sync, (obj) => gl.deleteSync(obj)))
    wc.importFunction('glClientWaitSync', function (sync, flags, timeout) {
      return gl.clientWaitSync(conv[sync], flags, timeout)
    })
    wc.importFunction('glWaitSync', (sync, flags, timeout) => gl.waitSync(conv[sync], flags, timeout))
    wc.importFunction('glGetInteger64v', function (pname, data) {
      console.assert(pname in owner.glGetTypes || pname in owner.glGetObjects)
      let wrapper = function (g) {
        return g
      }
      if (pname in owner.glGetObjects)
        wrapper = function (g) {
          return Wasmgl.getIndexByWebGLObject(owner, g)
        }
      const got = gl.getParameter(pname)
      if (pname in owner.glGetArraySizes) {
        const count = owner.glGetArraySizes[pname]
        for (let i = 0; i < count; i++) {
          wc.writeMemoryUint64(data + i, wrapper(got[i]))
        }
      } else {
        wc.writeMemoryUint64(data, wrapper(got))
      }
    })
    wc.importFunction('glGetSynciv', function (sync, pname, count, length, values) {
      console.assert(bufSize)
      if (length) wc.writeMemoryInt32(length, 1)
      wc.writeMemoryInt32(values, gl.getSyncParameter(conv[sync], pname))
    })
    wc.importFunction('glGetInteger64i_v', function (target, index, data) {
      console.assert(target in owner.glGetTypes || target in owner.glGetObjects)
      let wrapper = function (g) {
        return g
      }
      if (target in owner.glGetObjects)
        wrapper = function (g) {
          return Wasmgl.getIndexByWebGLObject(owner, g)
        }
      wc.writeMemoryInt64(data, wrapper(gl.getIndexedParameter(target)))
    })
    wc.importFunction('glGetBufferParameteri64v', function (target, pname, params) {
      const accepts = [gl.BUFFER_SIZE, gl.BUFFER_USAGE]
      console.assert(Wasmgl.isValidAccepts(accepts))
      console.assert(accepts.indexOf(pname) != -1)
      const got = gl.getBufferParameter(target, pname)
      switch (pname) {
        case gl.BUFFER_SIZE:
          wc.writeMemoryInt64(params, got)
          break
        case gl.BUFFER_USAGE:
          wc.writeMemoryUint64(params, got)
          break
      }
    })
    wc.importFunction('glGenSamplers', (count, samplers) =>
      glGenXYZ(count, samplers, function () {
        return gl.createSampler()
      }),
    )
    wc.importFunction('glDeleteSamplers', (count, samplers) =>
      glDeleteXYZ(count, samplers, (obj) => gl.deleteSampler(obj)),
    )
    wc.importFunction('glIsSampler', function (samplers) {
      return glIsXYZ(samplers, function (obj) {
        return gl.isSampler(obj)
      })
    })
    wc.importFunction('glBindSampler', (unit, sampler) => gl.bindSampler(unit, conv[sampler]))
    wc.importFunction('glSamplerParameteri', (sampler, pname, param) =>
      gl.samplerParameteri(conv[sampler], pname, param),
    )
    wc.importFunction('glSamplerParameteriv', (sampler, pname, param) =>
      gl.samplerParameteri(conv[sampler], pname, wc.getMemoryInt32(param, 1)[0]),
    )
    wc.importFunction('glSamplerParameterf', (sampler, pname, param) =>
      gl.samplerParameterf(conv[sampler], pname, param),
    )
    wc.importFunction('glSamplerParameterfv', (sampler, pname, param) =>
      gl.samplerParameterf(conv[sampler], pname, wc.getMemoryFloat32(param, 1)[0]),
    )
    const glGetSamplerParameterFunction = function (sampler, pname, params) {
      const accepts = [
        gl.TEXTURE_COMPARE_FUNC,
        gl.TEXTURE_COMPARE_MODE,
        gl.TEXTURE_MAG_FILTER,
        gl.TEXTURE_MAX_LOD,
        gl.TEXTURE_MIN_FILTER,
        gl.TEXTURE_MIN_LOD,
        gl.TEXTURE_WRAP_R,
        gl.TEXTURE_WRAP_S,
        gl.TEXTURE_WRAP_T,
      ]
      console.assert(Wasmgl.isValidAccepts(accepts))
      console.assert(accepts.indexOf(pname) != -1)
      const got = gl.getSamplerParameter(conv[sampler], pname)
      switch (pname) {
        case gl.TEXTURE_COMPARE_FUNC:
        case gl.TEXTURE_COMPARE_MODE:
        case gl.TEXTURE_MAG_FILTER:
        case gl.TEXTURE_MIN_FILTER:
        case gl.TEXTURE_WRAP_R:
        case gl.TEXTURE_WRAP_S:
        case gl.TEXTURE_WRAP_T:
          wc.writeMemoryUint32(params, got)
          break
        case gl.TEXTURE_MAX_LOD:
        case gl.TEXTURE_MIN_LOD:
          wc.writeMemoryFloat32(params, got)
          break
      }
    }
    wc.importFunction('glGetSamplerParameteriv', glGetSamplerParameterFunction)
    wc.importFunction('glGetSamplerParameterfv', glGetSamplerParameterFunction)
    wc.importFunction('glVertexAttribDivisor', (index, divisor) => gl.vertexAttribDivisor(index, divisor))
    wc.importFunction('glBindTransformFeedback', (target, id) => gl.bindTransformFeedback(target, conv[id]))
    wc.importFunction('glDeleteTransformFeedbacks', (n, ids) =>
      glDeleteXYZ(n, ids, (obj) => gl.deleteTransformFeedback(obj)),
    )
    wc.importFunction('glGenTransformFeedbacks', (n, ids) =>
      glGenXYZ(n, ids, function () {
        return gl.createTransformFeedback()
      }),
    )
    wc.importFunction('glIsTransformFeedback', function (id) {
      return glIsXYZ(id, function (obj) {
        return gl.isTransformFeedback(obj)
      })
    })
    wc.importFunction('glPauseTransformFeedback', () => gl.pauseTransformFeedback())
    wc.importFunction('glResumeTransformFeedback', () => gl.resumeTransformFeedback())
    wc.importFunction('glGetProgramBinary', (program, bufSize, length, binaryFormat, binary) => console.assert(false))
    wc.importFunction('glProgramBinary', (program, binaryFormat, binary, length) => console.assert(false))
    wc.importFunction('glProgramParameteri', function (program, pname, value) {
      console.assert(pname == gl.PROGRAM_BINARY_RETRIEVABLE_HINT)
      console.assert(value == 0)
    })
    wc.importFunction('glInvalidateFramebuffer', (target, numAttachments, attachments) =>
      gl.invalidateFramebuffer(target, wc.getMemoryUint32(attachments, numAttachments)),
    )
    wc.importFunction('glInvalidateSubFramebuffer', (target, numAttachments, attachments, x, y, width, height) =>
      gl.invalidateSubFramebuffer(target, wc.getMemoryUint32(attachments, numAttachments), x, y, width, height),
    )
    wc.importFunction('glTexStorage2D', (target, levels, internalformat, width, height) =>
      gl.texStorage2D(target, levels, internalformat, width, height),
    )
    wc.importFunction('glTexStorage3D', (target, levels, internalformat, width, height, depth) =>
      gl.texStorage3D(target, levels, internalformat, width, height, depth),
    )
    wc.importFunction('glGetInternalformativ', (target, internalformat, pname, count, params) =>
      wc.writeMemory(params, gl.getInternalformatParameter(target, internalformat, pname)),
    )
    return wc
  }
}
