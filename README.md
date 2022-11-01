# NASA_PictureOfTheDay

In this project you will use Fetch to retrieve the Astronomy Picture of the Day (APOD) from an API on the NASA website.  The endpoint for retrieving either a picture or image has the URL:

`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=DATE`

where *DATE* is the date of the photo to be retrieved from the NASA APOD archive.  The API key, "DEMO_KEY" is free to the public but is limited to 30 requests per hour with a total of 50 requests per day.  You can request a developer API and view documenation at `api.nasa.gov`.  
The APOD API returns a JSON object, in which the name of the picture is given by *json.title*, a description is stored in *json.explanation*, and the picture source is stored in *json.url*.  The picture of the day can be either an image file or a video file.  The file type is stored in *json.media_type*.

### Steps:
1. Open **index.html** in VS Code and add a script element to link the **script.js** file.  Defer the loading of the script until after the page is loaded.
2. Open **script.js** in VS Code.  Within the anonymous function for the dateBox.onchange event handler, add the following:
  + Declare the dateStr variable and set it equal to the value of the dateBox element.
  + Declare the key variable and set it equal to the demo key or your API.
  + Use the fetch() method to make a request to the APOD endpoint
  + Add a then() method that takes a successful response and applies the json() method to the response object to parse the JSON text string
  + Add a then method that retrieves the JSON object and runs the showPicture() method with the JSON object as the parameter value
  + Add a catch method that diplays the text of the rejected promise in the console.
3. Create a showPicture() function with a single parameter named json.  Within the function create an if else structure to test the following conditions:
  + If json.media_type equals “video” then change the inner HTML of the imageBox element to the following: `<iframe src='url'></iframe><h1>title</h1><p><explanation</p>`
  where *url* is the value of *json.url*, *title* is the value of *json.title*, and *explanation* is the value of *json.explanation*.
  + If json.media_type equals "image" then change the inner HTML of the imageBox element to the following: `<img src='url'/><h1>title</h1><p>explanation</p>`
  + Otherwise, change the inner HTML of the imageBox element to the text string "Image not Available".
4. Save your changes, then use Live Server to view index.html in your web browser.  Select a date from the Picture Date input box and verify that an image or video appears on the web page.
  
