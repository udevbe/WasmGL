function CreateGLContext(cv, useAlpha = false, useDepth = true, useStencil = true, usePremultipliedAlpha = false, usePreserveBuffer = false, useSupersampling = false)
{
    var opts = { alpha: useAlpha, 
                 depth: useDepth, 
                 stencil: useStencil, 
                 premultipliedAlpha: usePremultipliedAlpha, 
                 antialias: useSupersampling, 
                 preserveDrawingBuffer: usePreserveBuffer, 
                 powerPreference: "high-performance" }; // "low_power", "high_performance", "default"

    var gl = null;
    if( gl === null) gl = cv.getContext( "webgl2", opts );
    if( gl === null) gl = cv.getContext( "experimental-webgl2", opts );
    if( gl === null) gl = cv.getContext( "webgl", opts );
    if( gl === null) gl = cv.getContext( "experimental-webgl", opts );

    return gl;
}

function GetTime()
{
    return new Date().getTime() / 1000;
}
