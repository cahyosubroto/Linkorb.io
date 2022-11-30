---
id: formlist
sidebar_label: GET - Form List
title: Form List
hide_title: true
pagination_next: null
pagination_prev: null
custom_edit_url: null

---

# GET - Form List

Generate the Form List.
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

```javascript title="200 - Ok"
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