# README #

### ZILL donut ###

* this is the Chart that represents the zill selection.
* version 0.1


### Getting started ###

Create a div in your html with id = 'donut'
Call the zillDonut function with a json-parameter which consists of the following information
curriculumVersion --> version of the curriculum 
fieldCounters --> Fields + counters (# of goals/content in this field that were selected). If a specific field is not mentioned, we assume the count is 0.

Example 
{  
   "curriculumVersion":"/content/cdc48914-3985-4a10-a42e-245321a243d5",
   "fieldCounters":{  
      "e7b960ed-cc56-4d85-8d33-be1b8785eb8c":1,
      "2314168d-a522-44a6-b444-102d6cf9a740":2,
      "e4c2e26f-37c3-4d16-a3c2-de7151503416":3,
      "0861c48b-f6f8-424a-88ce-fa6d42065fd9":4,
      "9764a21a-e403-4902-a794-411c53ef1d75":5,
      "9c2fec16-9fb8-4b69-a12a-edd735cec9a8":6,
      "71735e0a-e775-4fe6-a8b6-15b23d3c937c":1,
      "bd493539-2dcc-465d-a1a9-a0a30f68f29c":2,
      "3743e488-e92c-43d8-b783-b44eb3b875fe":3
   }
}

See index.html for concrete example

Mail to bianca.mullie@katholiekonderwijs.vlaanderen
