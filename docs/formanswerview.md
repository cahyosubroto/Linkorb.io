---
id: formanswerview
sidebar_label: GET - Form Answer View
title: Form Answer View
hide_title: true
custom_edit_url: null
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './custom.css';

# GET - Form Answer View

<span className="background-orange">GET</span>/base_url/answers/vqdiCVu-TcuL5VlUCxca7g

___

Get specific information about all Form Answer lists associated with **Basic_Auth**.


## Header Parameters
| Parameter | Type | Description |
|:--------------:|:------:|-------|
| Authorization | string | The API key for your authorization process. |

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
| data | array of objects | The details of the form answer. |
| metadata | array of string | The metadata of the form answer. |
| form | array of objects | The general information of the form answer. |
| timeline | array of objects | The timeline information of the form answer. |
| design | array of objects | The design information of the form answer. |
| summaryTemplate | string | The summary of the template used by the form answer. |
| css | string | The css used by the form answer. |

## Sample Object
An example object returned by the `Form Answer View` endpoint is shown below:
<Tabs>
<TabItem value="js" label="200-Ok">

```js
{
    "xuid": "vqdiCVu-TcuL5VlUCxca7g",
    "createdAt": "2022-11-24T11:35:52+01:00",
    "updatedAt": "2022-11-24T11:50:48+01:00",
    "businessKey": null,
    "ip": null,
    "contact": "charlie",
    "owner": "test-company",
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
    "data": {
        "firstName": "Alice",
        "lastName": "Alisson",
        "subject": "What is Lorem Ipsum? Why do we use it?",
        "message": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English "
    },
    "metadata": [],
    "form": {
        "xuid": "SgLpCktkTVq40fLtNDU2Zg",
        "name": "contact",
        "labels": []
    },
    "timeline": {
        "xuid": "pcm5LS9rRvC858p0t7PGPQ",
        "events": [
            {
                "id": 70,
                "type": "answer:created",
                "createdAt": "2022-11-24T11:35:52+01:00",
                "payload": {
                    "data": {
                        "data": {
                            "firstName": "Alice",
                            "lastName": "Alisson",
                            "subject": "What is Lorem Ipsum?",
                            "message": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                        },
                        "contact": "charlie",
                        "owner": "test-company"
                    }
                }
            },
            {
                "id": 71,
                "type": "answer:updated",
                "createdAt": "2022-11-24T11:37:18+01:00",
                "payload": {
                    "data": {
                        "firstName": "Alice",
                        "lastName": "Alisson",
                        "subject": "What is Lorem Ipsum?",
                        "message": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                    }
                }
            },
            {
                "id": 72,
                "type": "answer:submitted",
                "createdAt": "2022-11-24T11:50:48+01:00",
                "payload": {
                    "data": {
                        "firstName": "Alice",
                        "lastName": "Alisson",
                        "subject": "What is Lorem Ipsum? Why do we use it?",
                        "message": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English "
                    }
                }
            }
        ]
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