---
id: answerupdate
sidebar_label: POST - Form Answer Update
title: Form Answer Update
hide_title: true
custom_edit_url: null
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './custom.css';

# POST - Form Answer Update

<span className="background-orange">GET</span>/base_url/answers/vqdiCVu-TcuL5VlUCxca7g

___

This API modifies a specific **Form Answer** and returns the updated **Form Identification**.

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
The following is an illustration of a Body Request for the `Form Answer Update` endpoint:

<Tabs>
<TabItem value="js" label="CURL">

```shell
{
	"data": {"firstName":"Alice","lastName":"Alisson","subject":"What is Lorem Ipsum? Why do we use it?","message":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English "},
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
An example object returned by the `Form Answer Update` endpoint is shown below:

<Tabs>
<TabItem value="js" label="201-Success">

```js
{
    "formAnswerXuid": "vqdiCVu-TcuL5VlUCxca7g"
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
