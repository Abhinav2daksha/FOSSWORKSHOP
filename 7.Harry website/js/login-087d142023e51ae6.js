(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7604:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return x}});var s=a(266),n=a(809),r=a.n(n),o=a(7294),l=a(7942),c=a(1163),i=a(9669),d=a.n(i),u=a(9008),m=a(4853),g=a(5893),x=!0;t.default=function(e){var t=(0,o.useState)(),a=t[0],n=t[1],i=(0,o.useState)(),x=i[0],f=i[1],h=(0,o.useState)("Login"),p=h[0],y=h[1],w=(0,c.useRouter)(),b=(0,o.useRef)();(0,o.useEffect)((function(){if(w.isReady&&(void 0!=w.query.confirmation&&d().get("".concat(e.url,"/auth/email-confirmation?confirmation=")+w.query.confirmation).then((function(){e.addAlert("green","Successfully Confirmed Email! You can now login")})).catch((function(){e.addAlert("green","Please login to continue"),console.log("Your email was not verified!")})),void 0!=w.query.access_token)){var t=w.query.access_token;d().get("".concat(e.url,"/auth/google/callback?access_token=").concat(t)).then((function(t){localStorage.setItem("v3user",JSON.stringify(t.data)),e.addAlert("green","Successfully logged in"),e.updateUser(),w.push("/")})).catch((function(t){e.addAlert("red","Some error occurred while authenticating via Google. Please try authenticating manually")}))}}),[w.isReady]);var j=function(){var t=(0,s.Z)(r().mark((function t(s){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),n=b.current.getValue(),y("Logging in..."),t.next=5,d().post("".concat(e.url,"/auth/local"),{identifier:a,password:x},{headers:{token:n}}).then((function(t){localStorage.setItem("v3user",JSON.stringify(t.data)),w.push("/"),e.addAlert("green","Successfully logged in"),e.updateUser()})).catch((function(t){e.addAlert("red",t.response.data.message[0].messages[0].message),w.push("/")}));case 5:t.sent;case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(e){"email"==e.target.name&&n(e.target.value),"password"==e.target.name&&f(e.target.value)};return(0,g.jsxs)("div",{className:"md:py-6 md:mt-20",children:[(0,g.jsxs)(u.default,{children:[(0,g.jsx)("title",{children:"Login | CodeWithHarry"}),(0,g.jsx)("meta",{name:"description",content:"Login to CodeWithHarry using the created account. If you havent created an account you can signup. Its free!"}),(0,g.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,g.jsxs)("div",{className:"flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl",children:[(0,g.jsx)("div",{className:"hidden lg:block lg:w-1/2 bg-cover",style:{backgroundImage:"url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"}}),(0,g.jsxs)("div",{className:"w-full p-8 lg:w-1/2",children:[(0,g.jsx)("img",{className:"mx-auto rounded object-cover h-16",src:"/img/logo-blue.png"}),(0,g.jsx)("h2",{className:"text-2xl font-semibold text-gray-700 text-center",children:"CodeWithHarry.com"}),(0,g.jsx)("p",{className:"text-xl text-gray-600 text-center",children:"Welcome back!"}),(0,g.jsx)(l.default,{href:e.url+"/connect/google",children:(0,g.jsxs)("span",{className:"flex items-center justify-center cursor-pointer mt-4 text-white rounded-lg shadow-md hover:bg-gray-100",children:[(0,g.jsx)("div",{className:"px-4 py-3 cursor-pointer",children:(0,g.jsxs)("svg",{className:"h-6 w-6",viewBox:"0 0 40 40",children:[(0,g.jsx)("path",{d:"M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z",fill:"#FFC107"}),(0,g.jsx)("path",{d:"M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z",fill:"#FF3D00"}),(0,g.jsx)("path",{d:"M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z",fill:"#4CAF50"}),(0,g.jsx)("path",{d:"M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z",fill:"#1976D2"})]})}),(0,g.jsx)("h1",{className:"px-4 py-3 w-5/6 text-center text-gray-600 font-bold",children:"Sign in with Google"})]})}),(0,g.jsxs)("div",{className:"mt-4 flex items-center justify-between",children:[(0,g.jsx)("span",{className:"border-b w-1/5 lg:w-1/4"}),(0,g.jsx)("span",{className:"text-xs text-center text-gray-500 uppercase",children:"or login with email"}),(0,g.jsx)("span",{className:"border-b w-1/5 lg:w-1/4"})]}),(0,g.jsxs)("form",{onSubmit:j,children:[(0,g.jsxs)("div",{className:"mt-4",children:[(0,g.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Email Address"}),(0,g.jsx)("input",{onChange:v,name:"email",className:"bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none",type:"email"})]}),(0,g.jsxs)("div",{className:"mt-4",children:[(0,g.jsxs)("div",{className:"flex justify-between",children:[(0,g.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Password"}),(0,g.jsx)("span",{className:"text-xs text-gray-500",children:(0,g.jsx)(l.default,{href:"/forgotpassword",children:"Forget Password?"})})]}),(0,g.jsx)("input",{onChange:v,name:"password",className:"bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none",type:"password"}),(0,g.jsx)("div",{className:"mt-8 mx-auto",children:(0,g.jsx)(m.Z,{sitekey:"6LdqqZEdAAAAAN1twzXmDcPKcQ0GBGqEvXECUnb5",size:"normal",ref:b})})]}),(0,g.jsx)("div",{className:"mt-8",children:(0,g.jsx)("button",{disabled:!x||!a||"Login"!=p,className:"bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 disabled:opacity-50",children:p})})]}),(0,g.jsxs)("div",{className:"mt-4 flex items-center justify-between",children:[(0,g.jsx)("span",{className:"border-b w-1/5 md:w-1/4"}),(0,g.jsx)("span",{className:"text-xs text-gray-500 uppercase",children:(0,g.jsx)(l.default,{href:"/signup",children:" or Signup"})}),(0,g.jsx)("span",{className:"border-b w-1/5 md:w-1/4"})]})]})]})]})}},7156:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a(7604)}])}},function(e){e.O(0,[993,774,888,179],(function(){return t=7156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);