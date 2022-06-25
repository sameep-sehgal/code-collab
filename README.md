# code-collab
Live at http://ec2-13-232-32-212.ap-south-1.compute.amazonaws.com/
Realtime Code Collaboration Website built using NodeJS (ExpressJS &amp; React). Used Docker for containerization &amp; NginX as Web Server &amp; Reverse Proxy.

- Function Requirements
  - Users can sign up & then login to the application. {Authentication}
  - Users will also have an option to create new meetings. Upon creation user will be provided with a meeting code which can be shared to other participants.
  - On the meeting page, we’ll have ->
    - Code Editor with supported languages {C++, Java, Python for beginning}
    - Option to add Test Cases
    - Option to run code on given test cases
    - Participants & their videos {Not yet implemented}
    - Fetch Question From Leetcode API & display it on the screen. {Not yet implemented}
    - Submit Problem on Leetcode {If Possible}
    - Option to exit the meeting.
    - Option to end the meeting provided only to the user who started the meeting. 

- App Architecture

![Screenshot](./screenshots/AppArchitecture.PNG)  
