"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[9059],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8592:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="Desktop operating systems",u={unversionedId:"Notes/thoughts on operating systems",id:"Notes/thoughts on operating systems",title:"Desktop operating systems",description:"Setup",source:"@site/notes/Notes/thoughts on operating systems.md",sourceDirName:"Notes",slug:"/Notes/thoughts on operating systems",permalink:"/notes/docs/Notes/thoughts on operating systems",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"things to write essays about",permalink:"/notes/docs/Notes/things to write essays about"}},p={},c=[{value:"Setup",id:"setup",level:2},{value:"Current",id:"current",level:3},{value:"Previous",id:"previous",level:3},{value:"Annoyances with each operating system",id:"annoyances-with-each-operating-system",level:2},{value:"Windows",id:"windows",level:3},{value:"MacOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3},{value:"Benefits to each operating system",id:"benefits-to-each-operating-system",level:2},{value:"MacOS",id:"macos-1",level:3},{value:"Linux",id:"linux-1",level:3},{value:"Windows",id:"windows-1",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"desktop-operating-systems"},"Desktop operating systems"),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"current"},"Current"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MacBook Pro with M1 Max - use for everything"),(0,o.kt)("li",{parentName:"ul"},'Lenovo laptop running Arch Linux - use occasionally to run VMs and do Linux-y stuff, also to say "I use Arch"',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Although recently I switched to the Arch-based distro ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/EndeavourOS-Community-Editions/sway"},"EndeavourOS Sway")," since it had everything I wanted out-of-the-box"))),(0,o.kt)("li",{parentName:"ul"},"Lenovo desktop PC as a home server running Ubuntu Linux")),(0,o.kt)("h3",{id:"previous"},"Previous"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lenovo desktop PC running Windows - used for music production and light gaming"),(0,o.kt)("li",{parentName:"ul"},"Lenovo laptop running Manjaro Linux - used for everything else, including jam sessions in Bitwig Studio")),(0,o.kt)("h2",{id:"annoyances-with-each-operating-system"},"Annoyances with each operating system"),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"While WSL is a huge step in the right direction for software development, I find that it takes up way too much of my system resources, is often clunky to switch back and forth between in the command line, and has sometimes stopped working altogether causing me to have to restart or even reinstall it. Not a fun experience when I'm just trying to put together a quick Node.js website."),(0,o.kt)("li",{parentName:"ul"},"Doesn't allow me to separate my app launcher and status bar like Linux and MacOS do"),(0,o.kt)("li",{parentName:"ul"},"Constant nagging to update my system or to restart"),(0,o.kt)("li",{parentName:"ul"},"Still crashes more often than other operating systems"),(0,o.kt)("li",{parentName:"ul"},"Privacy-invasive"),(0,o.kt)("li",{parentName:"ul"},"CRLF line endings make sharing text files and code a huge pain")),(0,o.kt)("h3",{id:"macos"},"MacOS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No cut and paste in Finder, instead have to use Cmd+C and Cmd+Option+V, really annoying"),(0,o.kt)("li",{parentName:"ul"},"Often need to bypass security restrictions when installing audio plugins from the internet"),(0,o.kt)("li",{parentName:"ul"},"Doesn't run 32-bit games (Portal 2, CS:GO)"),(0,o.kt)("li",{parentName:"ul"},"Having to switch between Cmd and Ctrl whenever I'm on a different computer or in a Linux VM"),(0,o.kt)("li",{parentName:"ul"},"Recording computer audio for live streams is difficult and requires third-party apps which change all the time due to Apple changing security requirements with each update")),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Doesn't run Ableton"),(0,o.kt)("li",{parentName:"ul"},"More buggy than other operating systems - forces a trade-off between stability (Ubuntu) and up-to-date software (Arch), unless you want to use Flatpak for everything and run into annoying issues trying to configure security settings so that apps like VSCode actually work")),(0,o.kt)("h2",{id:"benefits-to-each-operating-system"},"Benefits to each operating system"),(0,o.kt)("h3",{id:"macos-1"},"MacOS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"UNIX command line ecosystem"),(0,o.kt)("li",{parentName:"ul"},"Apple ecosystem - sync notes and messages, use iPad as external monitor, AirDrop, FaceTime, etc"),(0,o.kt)("li",{parentName:"ul"},"Best audio drivers - everything just works "),(0,o.kt)("li",{parentName:"ul"},"Makes use of Apple Silicon efficiency - blazing fast, tremendous battery life, fan rarely turns on"),(0,o.kt)("li",{parentName:"ul"},"Looks pretty")),(0,o.kt)("h3",{id:"linux-1"},"Linux"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Easy to install any GUI app using the command line, especially with AUR"),(0,o.kt)("li",{parentName:"ul"},"Easy to keep apps updated - just a single command "),(0,o.kt)("li",{parentName:"ul"},"Reproducible builds (Archinstall)"),(0,o.kt)("li",{parentName:"ul"},"Many desktop environments to choose from that are all customizable"),(0,o.kt)("li",{parentName:"ul"},"Good learning tool for how computers work"),(0,o.kt)("li",{parentName:"ul"},"Open source, enabling better security and freedom"),(0,o.kt)("li",{parentName:"ul"},"Separation of GUI app environments through distrobox")),(0,o.kt)("h3",{id:"windows-1"},"Windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Biggest selection of games"),(0,o.kt)("li",{parentName:"ul"},"Touch screen interface")))}d.isMDXComponent=!0}}]);