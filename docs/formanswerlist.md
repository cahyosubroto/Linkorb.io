---
id: formanswerlist
sidebar_label: GET - Form Answer List
title: Form Answer List
hide_title: true
custom_edit_url: null
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './custom.css';

# GET - Form Answer List

<span className="background-orange">GET</span>/base_url/answers?formXuid=SgLpCktkTVq40fLtNDU2Zg

___

Get the **detailed information** of a specific Form Answer.

## Header Parameters
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| Authorization | string | The API key for your authorization process. |

## Query Parameters
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| formXuid | string | The identifier of the form answer. |

## Payload Response
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| xuid | string | The identifier of the form answer. |
| createdAt | string | The creation date of the form answer. |
| updatedAt | string | The updation date of the form answer. |
| businessKey | string | The business key of the form answer. |
| ip | string | The ip of the form answer. |
| contact | string | The contact of the form answer. |
| owner | string | The owner of the form answer.|
| flowInstance | array of objects | The flow that the form answer belongs to. |
| form | array of objects | The general information of the form answer. |


## Sample Object
An example object returned by the `Form Answer List` endpoint is shown below:
<Tabs>
<TabItem value="js" label="200-Ok">

```js
[
    {
        "xuid": "vqdiCVu-TcuL5VlUCxca7g",
        "createdAt": "2022-11-24T11:35:52+01:00",
        "updatedAt": "2022-11-24T11:50:48+01:00",
        "businessKey": null,
        "contact": "charlie",
        "owner": "test-company",
        "locale": null,
        "flowInstance": {
            "xuid": "z8VZEBx1RA-SRj4ikdw_uQ",
            "flow": {
                "name": "flow-one",
                "description": null
            },
            "state": {
                "name": "DRAFT",
                "description": null,
                "class": "primary"
            }
        },
        "form": {
            "xuid": "SgLpCktkTVq40fLtNDU2Zg",
            "name": "contact"
        }
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