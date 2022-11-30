---
id: answercreate
sidebar_label: POST - Form Answer Create
title: Form Answer Create
hide_title: true
custom_edit_url: null
sidebar_position: 7
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './custom.css';

# POST - Form Answer Create

<span className="background-orange">GET</span>/base_url/forms/SgLpCktkTVq40fLtNDU2Zg/answers

___

This endpoint returns the **Form Identification** and creates a **Form Answer** based on the value provided by the user when calling the API.

## Header Parameters
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| Authorization | string | The API key for your authorization process. |

## Body Parameters
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| data | array of objects | The data of the form. |
| firstName | string | The first name of the user. |
| lastName | string | The last name of the user. |
| subject | string | The subject of the form. |
| message | string | The message of the form. |
| contact | string | The contact of the form. |
| owner | string | The owner of the form.|

## Body Request
The following is an illustration of a Body Request for the `Form Answer Create` endpoint:

<Tabs>
<TabItem value="js" label="CURL">

```shell
{
	"data": {"firstName":"Alice","lastName":"Alisson","subject":"What is Lorem Ipsum?","message":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "},
	"contact": "charlie",
	"owner": "test-company"
}
```

</TabItem>
</Tabs>

## Payload Response
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| xuid | string | The identifier of the form. |

## Sample Object
An example object returned by the `Form Answer Create` endpoint is shown below:

<Tabs>
<TabItem value="js" label="201-Success">

```js
{
    "xuid": "vqdiCVu-TcuL5VlUCxca7g"
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
