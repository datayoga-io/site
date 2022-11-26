(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{385:function(e,t,o){"use strict";o.r(t);var n=o(46),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"directory-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[e._v("#")]),e._v(" Directory Structure")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("dy-cli init")]),e._v(" command produces the following directory structure:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v(".\n├── .dyrc\n├── .gitignore\n├── data\n│   └── sample.csv\n├── dist\n│   └── .gitkeep\n├── env.yaml\n└── src\n    ├── catalog\n    │   └── sample.yaml\n    └── jobs\n        └── sample\n            └── hello.yaml\n")])])]),o("ul",[o("li",[o("code",[e._v(".dyrc")]),e._v(": Used to store global configuration.")]),e._v(" "),o("li",[o("code",[e._v(".gitignore")]),e._v(": For convenience, this is used to ignore the data folder and dist folder")]),e._v(" "),o("li",[o("code",[e._v("data")]),e._v(": Folder to store data input files or output. This folder can be located anywhere as long as the runner has access to it")]),e._v(" "),o("li",[o("code",[e._v("dist")]),e._v(": Processed artifacts will be built into the dist folder")]),e._v(" "),o("li",[o("code",[e._v("env.yaml")]),e._v(": Contains definitions of source and target connectors and other general settings")]),e._v(" "),o("li",[o("code",[e._v("src")]),e._v(": Source job yamls and catalog.")]),e._v(" "),o("li",[o("code",[e._v("src/catalog")]),e._v(": Yaml files defining the source and target descriptors, including flat file definitions")]),e._v(" "),o("li",[o("code",[e._v("src/jobs")]),e._v(": Source job yamls. These can be nested and referenced as modules using a dot notation. e.g. "),o("code",[e._v("jobs/sample/hello.yaml")]),e._v(" is referenced as "),o("code",[e._v("sample.hello")]),e._v(" when running or building the job.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);