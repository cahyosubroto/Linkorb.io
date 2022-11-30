---
id: answercreate
sidebar_label: POST - Form Answer Create
title: Form Answer Create
hide_title: true
pagination_next: null
pagination_prev: null
custom_edit_url: null

---

# POST - Form Answer Create

Create a Form answer.
___

This endpoints create a form answer that has been specified with the value that the user's submitted when calling the API and returns the identifier of the form.

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

## Payload Response
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| xuid | string | The identifier of the form. |

## Sample Object
An example object returned by the `Form List` endpoint is shown below:

```javascript title="200 - Ok"
{
    "xuid": "vqdiCVu-TcuL5VlUCxca7g"
}
```