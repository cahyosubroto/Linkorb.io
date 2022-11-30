---
id: formansweranswerchange
sidebar_label: GET - Form Answer State Change
title: Form Answer State Change
hide_title: true
custom_edit_url: null
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './custom.css';

# GET - Form Answer State Change

<span className="background-orange">GET</span>/base_url/answers/vqdiCVu-TcuL5VlUCxca7g/state?state=PENDING

___

Get the **update status** of the Form Answer.

## Header Parameters
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| Authorization | string | The API key for your authorization process. |

## Query Parameters
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| state | string | The status of the form answer. |

## Payload Response
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| status | string | The status update of the form answer. |
| message | string | The message of the status update. |



## Sample Object
An example object returned by the `Form Answer State Change` endpoint is shown below:
<Tabs>
<TabItem value="js" label="200-Ok">

```js
{
    "status": "ok",
    "message": "Updated state to `PENDING`"
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