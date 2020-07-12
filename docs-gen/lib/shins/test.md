---
title: DDS v0.0.1
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers:
  - <a href="openapi.yaml">Full spec</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="dds">DDS v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction
An api that returns DDS results for a given board.

Uses the Bo Hagland solver https://github.com/dds-bridge/dds -- requires the libdds.so (or dds.dll in windows) to be installed and accessible.
Credit to Alexis Rimbaud of NukkAI for the python dds wrapper.

# OpenAPI Specification
This API is documented in **OpenAPI format**

# Cross-Origin Resource Sharing
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
And that allows cross-domain communication from the browser.
All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.

# Authentication

Forms of authentication:
  - API Key

Base URLs:

* <a href="https://dds.hackathon.globalbridge.app/">https://dds.hackathon.globalbridge.app/</a>

<a href="http://example.com/terms/">Terms of service</a>
Email: <a href="mailto:support@example.com">API Support</a> Web: <a href="http://example.com/support">API Support</a> 
License: <a href="https://opensource.org/licenses/MIT">MIT</a>

<h1 id="dds-dds">DDS</h1>

DDS Api

## postDdsTable

<a id="opIdpostDdsTable"></a>

> Code samples

```shell
# You can also use wget
curl -X POST https://dds.hackathon.globalbridge.app/api/dds-table \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST https://dds.hackathon.globalbridge.app/api/dds-table HTTP/1.1
Host: dds.hackathon.globalbridge.app
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "hands": {
    "N": [
      "string"
    ],
    "S": [
      "string"
    ],
    "E": [
      "string"
    ],
    "W": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://dds.hackathon.globalbridge.app/api/dds-table',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'https://dds.hackathon.globalbridge.app/api/dds-table',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://dds.hackathon.globalbridge.app/api/dds-table', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://dds.hackathon.globalbridge.app/api/dds-table', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://dds.hackathon.globalbridge.app/api/dds-table");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://dds.hackathon.globalbridge.app/api/dds-table", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/dds-table`

*Returns double dummy analyses for the hand*

> Body parameter

```json
{
  "hands": {
    "N": [
      "string"
    ],
    "S": [
      "string"
    ],
    "E": [
      "string"
    ],
    "W": [
      "string"
    ]
  }
}
```

<h3 id="postddstable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» hands|body|object|false|none|
|»» N|body|[string]|false|Player Hand|
|»» S|body|[string]|false|Player Hand|
|»» E|body|[string]|false|Player Hand|
|»» W|body|[string]|false|Player Hand|

> Example responses

> 200 Response

```json
{
  "S": {
    "N": 0,
    "S": 0,
    "E": 0,
    "W": 0
  },
  "H": {
    "N": 0,
    "S": 0,
    "E": 0,
    "W": 0
  },
  "D": {
    "N": 0,
    "S": 0,
    "E": 0,
    "W": 0
  },
  "C": {
    "N": 0,
    "S": 0,
    "E": 0,
    "W": 0
  },
  "N": {
    "N": 0,
    "S": 0,
    "E": 0,
    "W": 0
  }
}
```

<h3 id="postddstable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Solved Response Schema|[Solved](#schemasolved)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The specified resource was not found|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Unexpected Error|[Error](#schemaerror)|
|default|Default|Unexpected Error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string"
}

```

Default Error Response Container

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_Success">Success</h2>
<!-- backwards compatibility -->
<a id="schemasuccess"></a>
<a id="schema_Success"></a>
<a id="tocSsuccess"></a>
<a id="tocssuccess"></a>

```json
{
  "code": 0,
  "message": "string"
}

```

Success

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_Solved">Solved</h2>
<!-- backwards compatibility -->
<a id="schemasolved"></a>
<a id="schema_Solved"></a>
<a id="tocSsolved"></a>
<a id="tocssolved"></a>

```json
{
  "S": {
    "N": 0,
    "S": 0,
    "E": 0,
    "W": 0
  },
  "H": {
    "N": 0,
    "S": 0,
    "E": 0,
    "W": 0
  },
  "D": {
    "N": 0,
    "S": 0,
    "E": 0,
    "W": 0
  },
  "C": {
    "N": 0,
    "S": 0,
    "E": 0,
    "W": 0
  },
  "N": {
    "N": 0,
    "S": 0,
    "E": 0,
    "W": 0
  }
}

```

DD analyses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|S|[SuitSolved](#schemasuitsolved)|false|none|Suit Solved by DD analyses|
|H|[SuitSolved](#schemasuitsolved)|false|none|Suit Solved by DD analyses|
|D|[SuitSolved](#schemasuitsolved)|false|none|Suit Solved by DD analyses|
|C|[SuitSolved](#schemasuitsolved)|false|none|Suit Solved by DD analyses|
|N|[SuitSolved](#schemasuitsolved)|false|none|Suit Solved by DD analyses|

<h2 id="tocS_Hand">Hand</h2>
<!-- backwards compatibility -->
<a id="schemahand"></a>
<a id="schema_Hand"></a>
<a id="tocShand"></a>
<a id="tocshand"></a>

```json
[
  "string"
]

```

Player Hand

### Properties

*None*

<h2 id="tocS_SuitSolved">SuitSolved</h2>
<!-- backwards compatibility -->
<a id="schemasuitsolved"></a>
<a id="schema_SuitSolved"></a>
<a id="tocSsuitsolved"></a>
<a id="tocssuitsolved"></a>

```json
{
  "N": 0,
  "S": 0,
  "E": 0,
  "W": 0
}

```

Suit Solved by DD analyses

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|N|integer|false|none|North|
|S|integer|false|none|South|
|E|integer|false|none|East|
|W|integer|false|none|West|

