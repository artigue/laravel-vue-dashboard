"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[525],{526:(t,a,s)=>{function i(t,a,s,i){t=(t+"").replace(",","").replace(" ","");var e=isFinite(+t)?+t:0,r=isFinite(+a)?Math.abs(a):0,l=void 0===i?",":i,o=void 0===s?".":s,d="";return d=(r?function(t,a){var s=Math.pow(10,a);return""+Math.round(t*s)/s}(e,r):""+Math.round(e)).split("."),d[0].length>3&&(d[0]=d[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,l)),(d[1]||"").length<r&&(d[1]=d[1]||"",d[1]+=new Array(r-d[1].length+1).join("0")),d.join(o)}function e(){Chart.defaults.global.defaultFontFamily="Nunito",Chart.defaults.global.defaultFontColor="#858796";var t=document.getElementById("myAreaChart");new Chart(t,{type:"line",data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Earnings",lineTension:.3,backgroundColor:"rgba(78, 115, 223, 0.05)",borderColor:"rgba(78, 115, 223, 1)",pointRadius:3,pointBackgroundColor:"rgba(78, 115, 223, 1)",pointBorderColor:"rgba(78, 115, 223, 1)",pointHoverRadius:3,pointHoverBackgroundColor:"rgba(78, 115, 223, 1)",pointHoverBorderColor:"rgba(78, 115, 223, 1)",pointHitRadius:10,pointBorderWidth:2,data:[0,1e4,5e3,15e3,1e4,2e4,15e3,25e3,2e4,3e4,25e3,4e4]}]},options:{maintainAspectRatio:!1,layout:{padding:{left:10,right:25,top:25,bottom:0}},scales:{xAxes:[{time:{unit:"date"},gridLines:{display:!1,drawBorder:!1},ticks:{maxTicksLimit:7}}],yAxes:[{ticks:{maxTicksLimit:5,padding:10,callback:function(t,a,s){return"$"+i(t)}},gridLines:{color:"rgb(234, 236, 244)",zeroLineColor:"rgb(234, 236, 244)",drawBorder:!1,borderDash:[2],zeroLineBorderDash:[2]}}]},legend:{display:!1},tooltips:{backgroundColor:"rgb(255,255,255)",bodyFontColor:"#858796",titleMarginBottom:10,titleFontColor:"#6e707e",titleFontSize:14,borderColor:"#dddfeb",borderWidth:1,xPadding:15,yPadding:15,displayColors:!1,intersect:!1,mode:"index",caretPadding:10,callbacks:{label:function(t,a){return(a.datasets[t.datasetIndex].label||"")+": $"+i(t.yLabel)}}}}})}s.d(a,{Z:()=>e})},1094:(t,a,s)=>{function i(){Chart.defaults.global.defaultFontFamily="Nunito",Chart.defaults.global.defaultFontColor="#858796";var t=document.getElementById("myPieChart");new Chart(t,{type:"doughnut",data:{labels:["Direct","Referral","Social"],datasets:[{data:[55,30,15],backgroundColor:["#4e73df","#1cc88a","#36b9cc"],hoverBackgroundColor:["#2e59d9","#17a673","#2c9faf"],hoverBorderColor:"rgba(234, 236, 244, 1)"}]},options:{maintainAspectRatio:!1,tooltips:{backgroundColor:"rgb(255,255,255)",bodyFontColor:"#858796",borderColor:"#dddfeb",borderWidth:1,xPadding:15,yPadding:15,displayColors:!1,caretPadding:10},legend:{display:!1},cutoutPercentage:80}})}s.d(a,{Z:()=>i})},1525:(t,a,s)=>{s.r(a),s.d(a,{default:()=>l});var i=s(526),e=s(1094);const r={name:"Dashboard",mounted:function(){(0,i.Z)(),(0,e.Z)()}};const l=(0,s(1900).Z)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"d-sm-flex align-items-center justify-content-between mb-4"},[a("h1",{staticClass:"h3 mb-0 text-gray-800"},[t._v("Dashboard")]),t._v(" "),a("a",{staticClass:"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-download fa-sm text-white-50"}),t._v(" Generate Report")])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[a("div",{staticClass:"card border-left-primary shadow h-100 py-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col mr-2"},[a("div",{staticClass:"text-xs font-weight-bold text-primary text-uppercase mb-1"},[t._v("\n                Earnings (Monthly)\n              ")]),t._v(" "),a("div",{staticClass:"h5 mb-0 font-weight-bold text-gray-800"},[t._v("\n                $40,000\n              ")])]),t._v(" "),a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fas fa-calendar fa-2x text-gray-300"})])])])])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[a("div",{staticClass:"card border-left-success shadow h-100 py-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col mr-2"},[a("div",{staticClass:"text-xs font-weight-bold text-success text-uppercase mb-1"},[t._v("\n                Earnings (Annual)\n              ")]),t._v(" "),a("div",{staticClass:"h5 mb-0 font-weight-bold text-gray-800"},[t._v("\n                $215,000\n              ")])]),t._v(" "),a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fas fa-dollar-sign fa-2x text-gray-300"})])])])])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[a("div",{staticClass:"card border-left-info shadow h-100 py-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col mr-2"},[a("div",{staticClass:"text-xs font-weight-bold text-info text-uppercase mb-1"},[t._v("\n                Tasks\n              ")]),t._v(" "),a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"h5 mb-0 mr-3 font-weight-bold text-gray-800"},[t._v("\n                    50%\n                  ")])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"progress progress-sm mr-2"},[a("div",{staticClass:"progress-bar bg-info",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}})])])])]),t._v(" "),a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fas fa-clipboard-list fa-2x text-gray-300"})])])])])]),t._v(" "),a("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[a("div",{staticClass:"card border-left-warning shadow h-100 py-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col mr-2"},[a("div",{staticClass:"text-xs font-weight-bold text-warning text-uppercase mb-1"},[t._v("\n                Pending Requests\n              ")]),t._v(" "),a("div",{staticClass:"h5 mb-0 font-weight-bold text-gray-800"},[t._v("18")])]),t._v(" "),a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fas fa-comments fa-2x text-gray-300"})])])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-8 col-lg-7"},[a("div",{staticClass:"card shadow mb-4"},[a("div",{staticClass:"card-header py-3 d-flex flex-row align-items-center justify-content-between"},[a("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("Earnings Overview")]),t._v(" "),a("div",{staticClass:"dropdown no-arrow"},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-v fa-sm fa-fw text-gray-400"})]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-right shadow animated--fade-in",attrs:{"aria-labelledby":"dropdownMenuLink"}},[a("div",{staticClass:"dropdown-header"},[t._v("Dropdown Header:")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"chart-area"},[a("canvas",{attrs:{id:"myAreaChart"}})])])])]),t._v(" "),a("div",{staticClass:"col-xl-4 col-lg-5"},[a("div",{staticClass:"card shadow mb-4"},[a("div",{staticClass:"card-header py-3 d-flex flex-row align-items-center justify-content-between"},[a("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("Revenue Sources")]),t._v(" "),a("div",{staticClass:"dropdown no-arrow"},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-v fa-sm fa-fw text-gray-400"})]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-right shadow animated--fade-in",attrs:{"aria-labelledby":"dropdownMenuLink"}},[a("div",{staticClass:"dropdown-header"},[t._v("Dropdown Header:")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"chart-pie pt-4 pb-2"},[a("canvas",{attrs:{id:"myPieChart"}})]),t._v(" "),a("div",{staticClass:"mt-4 text-center small"},[a("span",{staticClass:"mr-2"},[a("i",{staticClass:"fas fa-circle text-primary"}),t._v(" Direct\n            ")]),t._v(" "),a("span",{staticClass:"mr-2"},[a("i",{staticClass:"fas fa-circle text-success"}),t._v(" Social\n            ")]),t._v(" "),a("span",{staticClass:"mr-2"},[a("i",{staticClass:"fas fa-circle text-info"}),t._v(" Referral\n            ")])])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 mb-4"},[a("div",{staticClass:"card shadow mb-4"},[a("div",{staticClass:"card-header py-3"},[a("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("Projects")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"small font-weight-bold"},[t._v("\n            Server Migration "),a("span",{staticClass:"float-right"},[t._v("20%")])]),t._v(" "),a("div",{staticClass:"progress mb-4"},[a("div",{staticClass:"progress-bar bg-danger",staticStyle:{width:"20%"},attrs:{role:"progressbar","aria-valuenow":"20","aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),a("h4",{staticClass:"small font-weight-bold"},[t._v("\n            Sales Tracking "),a("span",{staticClass:"float-right"},[t._v("40%")])]),t._v(" "),a("div",{staticClass:"progress mb-4"},[a("div",{staticClass:"progress-bar bg-warning",staticStyle:{width:"40%"},attrs:{role:"progressbar","aria-valuenow":"40","aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),a("h4",{staticClass:"small font-weight-bold"},[t._v("\n            Customer Database "),a("span",{staticClass:"float-right"},[t._v("60%")])]),t._v(" "),a("div",{staticClass:"progress mb-4"},[a("div",{staticClass:"progress-bar",staticStyle:{width:"60%"},attrs:{role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),a("h4",{staticClass:"small font-weight-bold"},[t._v("\n            Payout Details "),a("span",{staticClass:"float-right"},[t._v("80%")])]),t._v(" "),a("div",{staticClass:"progress mb-4"},[a("div",{staticClass:"progress-bar bg-info",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),a("h4",{staticClass:"small font-weight-bold"},[t._v("\n            Account Setup "),a("span",{staticClass:"float-right"},[t._v("Complete!")])]),t._v(" "),a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar bg-success",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 mb-4"},[a("div",{staticClass:"card bg-primary text-white shadow"},[a("div",{staticClass:"card-body"},[t._v("\n              Primary\n              "),a("div",{staticClass:"text-white-50 small"},[t._v("#4e73df")])])])]),t._v(" "),a("div",{staticClass:"col-lg-6 mb-4"},[a("div",{staticClass:"card bg-success text-white shadow"},[a("div",{staticClass:"card-body"},[t._v("\n              Success\n              "),a("div",{staticClass:"text-white-50 small"},[t._v("#1cc88a")])])])]),t._v(" "),a("div",{staticClass:"col-lg-6 mb-4"},[a("div",{staticClass:"card bg-info text-white shadow"},[a("div",{staticClass:"card-body"},[t._v("\n              Info\n              "),a("div",{staticClass:"text-white-50 small"},[t._v("#36b9cc")])])])]),t._v(" "),a("div",{staticClass:"col-lg-6 mb-4"},[a("div",{staticClass:"card bg-warning text-white shadow"},[a("div",{staticClass:"card-body"},[t._v("\n              Warning\n              "),a("div",{staticClass:"text-white-50 small"},[t._v("#f6c23e")])])])]),t._v(" "),a("div",{staticClass:"col-lg-6 mb-4"},[a("div",{staticClass:"card bg-danger text-white shadow"},[a("div",{staticClass:"card-body"},[t._v("\n              Danger\n              "),a("div",{staticClass:"text-white-50 small"},[t._v("#e74a3b")])])])]),t._v(" "),a("div",{staticClass:"col-lg-6 mb-4"},[a("div",{staticClass:"card bg-secondary text-white shadow"},[a("div",{staticClass:"card-body"},[t._v("\n              Secondary\n              "),a("div",{staticClass:"text-white-50 small"},[t._v("#858796")])])])]),t._v(" "),a("div",{staticClass:"col-lg-6 mb-4"},[a("div",{staticClass:"card bg-light text-black shadow"},[a("div",{staticClass:"card-body"},[t._v("\n              Light\n              "),a("div",{staticClass:"text-black-50 small"},[t._v("#f8f9fc")])])])]),t._v(" "),a("div",{staticClass:"col-lg-6 mb-4"},[a("div",{staticClass:"card bg-dark text-white shadow"},[a("div",{staticClass:"card-body"},[t._v("\n              Dark\n              "),a("div",{staticClass:"text-white-50 small"},[t._v("#5a5c69")])])])])])]),t._v(" "),a("div",{staticClass:"col-lg-6 mb-4"},[a("div",{staticClass:"card shadow mb-4"},[a("div",{staticClass:"card-header py-3"},[a("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("Illustrations")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"text-center"},[a("img",{staticClass:"img-fluid px-3 px-sm-4 mt-3 mb-4",staticStyle:{width:"25rem"},attrs:{src:"img/undraw_posting_photo.svg",alt:"..."}})]),t._v(" "),a("p",[t._v("\n            Add some quality, svg illustrations to your project courtesy of\n            "),a("a",{attrs:{target:"_blank",rel:"nofollow",href:"https://undraw.co/"}},[t._v("unDraw")]),t._v(", a constantly updated collection of beautiful svg images that\n            you can use completely free and without attribution!\n          ")]),t._v(" "),a("a",{attrs:{target:"_blank",rel:"nofollow",href:"https://undraw.co/"}},[t._v("Browse Illustrations on unDraw →")])])]),t._v(" "),a("div",{staticClass:"card shadow mb-4"},[a("div",{staticClass:"card-header py-3"},[a("h6",{staticClass:"m-0 font-weight-bold text-primary"},[t._v("\n            Development Approach\n          ")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("p",[t._v("\n            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in\n            order to reduce CSS bloat and poor page performance. Custom CSS\n            classes are used to create custom components and custom utility\n            classes.\n          ")]),t._v(" "),a("p",{staticClass:"mb-0"},[t._v("\n            Before working with this theme, you should become familiar with\n            the Bootstrap framework, especially the utility classes.\n          ")])])])])])])}],!1,null,null,null).exports}}]);