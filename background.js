console.log('hi')

// {
//     "manifest_version": 2,

//     "name": "Minimal Reader",
//     "version": "1.0",
//     "permissions": [
//         "activeTab"
//     ], 
//     "background": {
//         "persistent": false
//     },

//     "content_scripts": [
//         {
//           "matches": ["https://youtube.com/*"],
//           "js": ["./background.js"]
//         }
//       ],

//       "browser_action": {
//         "default_icon": {                    // optional
//           "16": "images/icon16.png",           // optional
//           "24": "images/icon24.png",           // optional
//           "32": "images/icon32.png"            // optional
//         },
//         "default_title": "Google Mail",      // optional; shown in tooltip
//         "default_popup": "popup.html"        // optional
//       }

// }