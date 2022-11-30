---
id: formdesign
sidebar_label: GET - Form Design
title: Form Design
hide_title: true
custom_edit_url: null
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './custom.css';

# GET - Form Design

<span className="background-orange">GET</span>/base_url/forms/SgLpCktkTVq40fLtNDU2Zg

___

Get the **design information** of a specific form.

## Header Parameters
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| Authorization | string | The API key for your authorization process. |

## Payload Response
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| logoPosition | string | The logo's position of the form. |
| pages | array of objects | The pages of the form. |
| name | string | the name of the page. |
| elements | array of objects | The elements of the page. |
| type | string | The type of the element. |
| name | string | The name of the element. |
| title | string | The title of the element. |
| isRequired | string | Indicate whether or not the element is required. |
| cssId | string | The css identifier of the element. |
| cssClass | string | The css class of the element. |

## Sample Object
An example object returned by the `Form Design` endpoint is shown below:
<Tabs>
<TabItem value="js" label="200-Ok">

```js
{
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "firstName",
                    "title": "First Name",
                    "isRequired": true,
                    "cssId": "CssId",
                    "cssClass": "custom-class"
                },
                {
                    "type": "text",
                    "name": "lastName",
                    "title": "Last Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "subject",
                    "title": "Subject",
                    "isRequired": true
                },
                {
                    "type": "comment",
                    "name": "message",
                    "title": "Message"
                }
            ]
        }
    ],
    "summaryTemplate": "From: {firstName} {lastName}, About: {subject} , {testing summary}"
}
```

</TabItem>
<TabItem value="py" label="401-Unauthenticated">

```js

```

</TabItem>
<TabItem value="java" label="404-Not Found">

```js

```
</TabItem>
</Tabs>