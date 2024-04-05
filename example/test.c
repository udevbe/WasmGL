
#include<stdint.h>
#include<stdarg.h>
#include<stddef.h>
#include<GLES3/gl3.h>

void consoleLog(char *str);
void consoleLogNumber(int number);
void runJS(char *js);
void *malloc(size_t size);
void *realloc(void *pointer, size_t newsize);
void free(void *pointer);

size_t strlen_ascii(const char *str)
{
	size_t i;
	for(i = 0; str[i++];);
	return i - 1;
}

int demo_loaded = 0;
int cleared = 0;
GLuint demo_shader_program = 0;
GLuint demo_vertex_buffer = 0;
GLuint demo_index_buffer = 0;
GLuint demo_vao = 0;

GLuint create_shader_program(const char *vertex_shader_code, const char *fragment_shader_code)
{
	GLint compile_status = GL_FALSE;
	GLint link_status = GL_FALSE;
	GLint info_log_length = 0;
	GLuint shader_program = glCreateProgram();
	GLuint error_shader = 0;
	const char * code_array[1];
	GLsizei length_array[1];

	if (vertex_shader_code)
	{
		code_array[0] = vertex_shader_code;
		length_array[0] = strlen_ascii(vertex_shader_code);
		GLuint vertex_shader = glCreateShader(GL_VERTEX_SHADER);
		glShaderSource(vertex_shader, 1, code_array, length_array);
		glCompileShader(vertex_shader);
		glGetShaderiv(vertex_shader, GL_COMPILE_STATUS, &compile_status);
		if (!compile_status)
		{
			error_shader = vertex_shader;
			goto FailExit;
		}
		glAttachShader(shader_program, vertex_shader);
		glDeleteShader(vertex_shader);
	}

	if (fragment_shader_code)
	{
		code_array[0] = fragment_shader_code;
		length_array[0] = strlen_ascii(fragment_shader_code);
		GLuint fragment_shader = glCreateShader(GL_FRAGMENT_SHADER);
		glShaderSource(fragment_shader, 1, code_array, length_array);
		glCompileShader(fragment_shader);
		glGetShaderiv(fragment_shader, GL_COMPILE_STATUS, &compile_status);
		if (!compile_status)
		{
			error_shader = fragment_shader;
			goto FailExit;
		}
		glAttachShader(shader_program, fragment_shader);
		glDeleteShader(fragment_shader);
	}

	glLinkProgram(shader_program);

	glGetProgramiv(shader_program, GL_LINK_STATUS, &link_status);
	glGetProgramiv(shader_program, GL_INFO_LOG_LENGTH, &info_log_length);
	if (info_log_length)
	{
		char *info_log_buf = malloc(info_log_length + 1);
		if (info_log_buf)
		{
			glGetProgramInfoLog (shader_program, info_log_length + 1, NULL, info_log_buf);
			consoleLog("Shader program link output:\n");
			consoleLog(info_log_buf);
			free(info_log_buf);
		}
		else
		{
			consoleLog("Failed to get program info log.\n");
		}
	}
	if (link_status) return shader_program;
FailExit:
	glGetShaderiv(error_shader, GL_INFO_LOG_LENGTH, &info_log_length);
	if (info_log_length)
	{
		char *info_log_buf = malloc(info_log_length + 1);
		if (info_log_buf)
		{
			glGetShaderInfoLog (error_shader, info_log_length + 1, NULL, info_log_buf);
			consoleLog("Shader compiler output:\n");
			consoleLog(info_log_buf);
			free(info_log_buf);
		}
		else
		{
			consoleLog("Failed to get shader info log.\n");
		}
	}
	glDeleteShader(error_shader);
	glDeleteProgram(shader_program);
	return 0;
}

int load_scene()
{
	struct
	{
		float x, y;
		uint8_t r, g, b;
	} vertices[3] =
	{
		{ 0.0, -0.5, 255, 0, 0},
		{-0.5,  0.5, 0, 255, 0},
		{ 0.5,  0.5, 0, 0, 255},
	};

	uint16_t indices[] = {0, 1, 2};

	const char* vertex_shader_code = "#version 300 es\n"
	"in vec2 Position;\n"
	"in vec3 Color;\n"
	"out vec4 vColor;\n"
	"\n"
	"void main()\n"
	"{\n"
	"    vColor = vec4(Color, 1.0);\n"
	"    gl_Position = vec4(Position, 0.0, 1.0);\n"
	"}";

	const char* fragment_shader_code = "#version 300 es\n"
	"precision mediump float;\n"
	"in vec4 vColor;\n"
	"out vec4 oColor;\n"
	"\n"
	"void main()\n"
	"{\n"
	"    oColor = vColor;\n"
	"}";

	int Location = -1;

	demo_shader_program = create_shader_program(vertex_shader_code, fragment_shader_code);
	if (!demo_shader_program) goto FailExit;

	glGenVertexArrays(1, &demo_vao);
	glBindVertexArray(demo_vao);

	glGenBuffers(1, &demo_vertex_buffer);
	glGenBuffers(1, &demo_index_buffer);

	glBindBuffer(GL_ARRAY_BUFFER, demo_vertex_buffer);
	glBufferData(GL_ARRAY_BUFFER, sizeof vertices, vertices, GL_STATIC_DRAW);

	Location = glGetAttribLocation(demo_shader_program, "Position");
	if (Location != -1)
	{
		glEnableVertexAttribArray((GLuint)Location);
		glVertexAttribPointer((GLuint)Location, 2, GL_FLOAT, GL_FALSE, sizeof vertices[0], (void*)0);
		glVertexAttribDivisor((GLuint)Location, 0);
	}

	Location = glGetAttribLocation(demo_shader_program, "Color");
	if (Location != -1)
	{
		glEnableVertexAttribArray((GLuint)Location);
		glVertexAttribPointer((GLuint)Location, 3, GL_UNSIGNED_BYTE, GL_TRUE, sizeof vertices[0], (void*)8);
		glVertexAttribDivisor((GLuint)Location, 0);
	}
	glBindBuffer(GL_ARRAY_BUFFER, 0);

	glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, demo_index_buffer);
	glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof indices, indices, GL_STATIC_DRAW);
	glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, 0);

	glBindVertexArray(0);

	consoleLog("Scene loaded.");
	demo_loaded = 1;
	return 1;
FailExit:
	consoleLog("Failed to load the scene.");
	demo_loaded = 0;
	return 0;
}

void render_frame(double time)
{
	if (!demo_loaded)
	{
		if (!cleared)
		{
			glClearColor(0.0f, 0.0f, 0.5f, 1.0f);
			glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
			cleared = 1;
		}
		return;
	}

	glClearColor(0.0f, 0.0f, 0.5f, 1.0f);
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	glUseProgram(demo_shader_program);
	glBindVertexArray(demo_vao);
	glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, demo_index_buffer);
	glDrawElements(GL_TRIANGLES, 3, GL_UNSIGNED_SHORT, 0);
	glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, 0);
	glBindVertexArray(0);
}
