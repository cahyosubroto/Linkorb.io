---
id: formview
sidebar_label: GET - Form View
title: Form View
hide_title: true
custom_edit_url: null
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './custom.css';

# GET - Form View

<span className="background-orange">GET</span>/base_url/forms/SgLpCktkTVq40fLtNDU2Zg

___

Get an information about **a specific form** along with the **form's design**.

## Header Parameters
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| Authorization | string | The API key for your authorization process. |

## Payload Response
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| xuid | string | The identifier of the form. |
| name | string | The name of the form. |
| config | array of objects | The configuration of the form. |
| design | array of objects | The design information of the form. |

## Sample Object
An example object returned by the `Form View` endpoint is shown below:
<Tabs>
<TabItem value="js" label="200-Ok">

```js
{
    "xuid": "SgLpCktkTVq40fLtNDU2Zg",
    "name": "contact",
    "config": {
        "public": true
    },
    "design": {
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
    },
    "css": ""
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