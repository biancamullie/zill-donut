# README #

ZILL DEVELOPER GUIDE: [https://zill-developers.katholiekonderwijs.vlaanderen](https://zill-developers.katholiekonderwijs.vlaanderen)

! Issues and pull requests allways welcome !

### ZILL donut ###

* this is the Chart that represents the zill selection.
* version 0.2


### Getting started ###

Create a div in your html with id = 'donut'
Call the zillDonut function with a json-parameter which consists of the following information

**api** --> api url

**curriculumVersion** --> version of the curriculum 

**fieldCounters** --> Fields + counters (# of goals/content in this field that were selected). If a specific field is not mentioned, we assume the count is 0.

Example 

`
{  

    "api": "https://cached-api.katholiekonderwijs.vlaanderen",
    
    "curriculumVersion":"/content/19b7096c-a195-4fdd-a8a9-8b8ba7bf22c9",
    
     "fieldCounters": {
     
        "8d6182fe-beae-4bd6-b7e8-369206f5af16": 1,
        
        
        "c2adb2d0-446d-4ba7-8aa4-49f05710a4ee": 3,
        
        "7f254e5b-60af-48e6-8b0e-f8054d874feb": 1,
        
        "849e963e-5005-4d98-a045-fa41265a90e5": 3
     
     }

}
`

See index.html for concrete example
