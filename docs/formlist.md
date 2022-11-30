---
id: formlist
sidebar_label: GET - Form List
title: Form List
hide_title: true
custom_edit_url: null
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './custom.css';

# GET - Form List

<span className="background-orange">GET</span>/base_url/forms

___

Get a list of Form that is associated with the **Basic_Auth** token. This API returns every form along with the **Form Id**, **name**, and **label**.

## Header Parameters
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| Authorization | string | The API key for your authorization process. |

## Payload Response
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| xuid | string | The identifier of the form. |
| name | string | The name of the form. |
| labels | object | The labels in which the form belongs. |

## Sample Object
An example object returned by the `Form List` endpoint is shown below:
<Tabs>
<TabItem value="js" label="200-Ok">

```js
[
    {
        "xuid": "RraJNpWlQyKUY-YRLtvSOA",
        "name": "form-1",
        "labels": []
    },
    {
        "xuid": "SgLpCktkTVq40fLtNDU2Zg",
        "name": "contact",
        "labels": []
    }
]
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