curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \
'{
  "displayName":"Dataverse Trigger",
  "description":"Triggers creation and loading.",
  "scope":"file",
  "type":"explore",
  "hasPreviewMode":"true",
  "toolUrl": "https://mlage.github.io/dvTrigger/index.html",
  "toolParameters": {
      "queryParameters":[
        {"fileid":"{fileId}"}
      ]
    },
  "contentType":"text/plain"
}'