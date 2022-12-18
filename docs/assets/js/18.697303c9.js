(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{390:function(t,e,a){"use strict";a.r(e);var s=a(45),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[t._v("#")]),t._v(" Load")]),t._v(" "),a("p",[t._v("load a dataframe into a data store")]),t._v(" "),a("h2",{attrs:{id:"business-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#business-keys"}},[t._v("#")]),t._v(" business_keys")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("array")])]),t._v(" "),a("li",[t._v("Description:")])]),t._v(" "),a("p",[t._v("undefined")]),t._v(" "),a("h2",{attrs:{id:"mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapping"}},[t._v("#")]),t._v(" mapping")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Type: "),a("code",[t._v("array")])])]),t._v(" "),a("li",[a("p",[t._v("Description: A list of columns to use for loading into the target table. If ommitted, will use the table's column names and the dataframe's column names.")])]),t._v(" "),a("li",[a("p",[t._v("Examples:")])])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" employee_number\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" empno\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UPDATE_DT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fNAME\n\n")])])]),a("h2",{attrs:{id:"connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[t._v("#")]),t._v(" connection")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("li",[a("p",[t._v("Description: Logical connection name as defined in the env.yaml")])]),t._v(" "),a("li",[a("p",[t._v("Examples:\n"),a("code",[t._v("europe_db")]),t._v(" "),a("code",[t._v("target")]),t._v(" "),a("code",[t._v("eu_dwh")])])])]),t._v(" "),a("h2",{attrs:{id:"table-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-name"}},[t._v("#")]),t._v(" table_name")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("li",[a("p",[t._v("Description: Target table name")])]),t._v(" "),a("li",[a("p",[t._v("Examples:\n"),a("code",[t._v("employees")])])])]),t._v(" "),a("h2",{attrs:{id:"table-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-schema"}},[t._v("#")]),t._v(" table_schema")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("li",[a("p",[t._v("Description: If left blank, the default schema of this connection will be used as defined in the env.yaml")])]),t._v(" "),a("li",[a("p",[t._v("Examples:\n"),a("code",[t._v("dbo")])])])]),t._v(" "),a("h2",{attrs:{id:"target-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-type"}},[t._v("#")]),t._v(" target_type")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v('"database" | "file" | "stdout"')])]),t._v(" "),a("li",[t._v("Description: type of target")])]),t._v(" "),a("p",[t._v("undefined")]),t._v(" "),a("h2",{attrs:{id:"load-strategy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-strategy"}},[t._v("#")]),t._v(" load_strategy")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v('"APPEND" | "REPLACE" | "UPDATE" | "TYPE2"')])]),t._v(" "),a("li",[t._v("Description: type of target")])]),t._v(" "),a("p",[t._v("undefined")]),t._v(" "),a("h2",{attrs:{id:"active-record-indicator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#active-record-indicator"}},[t._v("#")]),t._v(" active_record_indicator")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("li",[a("p",[t._v("Description: used for "),a("code",[t._v("TYPE2")]),t._v(" load_strategy. An SQL expression used to identify which rows are active")])]),t._v(" "),a("li",[a("p",[t._v("Examples:\n"),a("code",[t._v("is_active='Y'")]),t._v(" "),a("code",[t._v("deletedAt is null")])])])]),t._v(" "),a("h2",{attrs:{id:"inactive-record-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inactive-record-mapping"}},[t._v("#")]),t._v(" inactive_record_mapping")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Type: "),a("code",[t._v("array")])])]),t._v(" "),a("li",[a("p",[t._v("Description: A list of columns to use. Use any valid SQL expression for the source. If 'target' is ommitted, will default to the name of the source column")])]),t._v(" "),a("li",[a("p",[t._v("Examples:")])])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CURRENT_DATE\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deletedAt\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" '''Y'''\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" is_active\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);