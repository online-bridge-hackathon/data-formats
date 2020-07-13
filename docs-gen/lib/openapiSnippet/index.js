'use strict'

const OpenAPISnippet = require('openapi-snippet')
const TARGETS = ['node_request', 'shell_curl', 'shell_httpie', 'python_python3', 'c_libcurl', 'java_unirest', 'javascript_xhr']

module.exports = openApi => {
  try {
    for (var path in openApi.paths) {
      for (var method in openApi.paths[path]) {
        var generatedCode = OpenAPISnippet.getEndpointSnippets(openApi, path, method, TARGETS)
        openApi.paths[path][method]['x-code-samples'] = []
        for (var snippetIdx in generatedCode.snippets) {
          var snippet = generatedCode.snippets[snippetIdx]
          openApi.paths[path][method]['x-code-samples'][snippetIdx] = { 'lang': snippet.title, 'source': snippet.content }
        }
      }
    }
    return openApi
  } catch (err) {
    console.log(err)
  }
}
