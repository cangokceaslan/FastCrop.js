class FastCropper{constructor(){}params(e){this.width=e.width,this.height=e.height,this.imageWidth=e.width*e.multiply,this.imageHeight=e.height*e.multiply,this.proportion=this.height/this.width,this.cropText=e.cropText,void 0===e.cropText&&(this.cropText="Hemen Kırp"),void 0===e.changeBy?this.changeBy=30:this.changeBy=e.changeBy,void 0===e.type?this.type=null:"jpg"===e.type||"jpeg"===e.type?this.type="image/jpeg":"png"===e.type&&(this.type=null),this.json=e,this.htmlCreate()}htmlCreate(){this.onimage=this.json.image,this.onimage.style.backgroundColor="black",this.onimage.style.opacity="0.6";var e='<div class="cropper" id="cropper" style="background-color:black;z-index:9999;opacity:0.8;border:5px solid black;width:'+this.width+"px;height:"+this.height+'px;position:absolute;left:0px;top:0px;"><button id="increaser" style="background-color:green;opacity:1 !important;position:absolute;left:-5px;top:calc(-5px);width:60px;height:calc(50% + 5.1px);outline:none;font-weight:bold;color:black;border:5px solid black;color:white;font-size:50px;font-weight:bold;text-align:center;">&#43;</button><button id="decreaser" style="outline:none;background-color:red;opacity:1 !important;position:absolute;left:-5px;top:50%;width:60px;height:calc(50% + 5px);font-weight:bold;color:white ;border:5px solid black;font-size:50px;min-height:(50% - 5px);max-height:(50% - 5px);font-weight:bold;text-align:center;">&#8722;</button><button style="width:60px;background-color:gold;color:black;border:5px solid black;font-size:45px;height:calc(100% + 10px);position:absolute;right:-5px;top:-5px;font-weight:500;outline:none;" id="cropbutt">\t&#10004;</button></div></div>';null!==this.onimage.parentElement.innerHTML?this.onimage.parentElement.innerHTML=this.onimage.parentElement.innerHTML+e:this.onimage.parentElement.innerHTML=e,document.getElementById("cropper").style.left=(this.json.image.width/2-this.json.width/2).toString()+"px",document.getElementById("cropper").style.top=(this.json.image.height/2-this.json.height/2).toString()+"px",this.element=document.getElementById("cropper"),this.imageWidthFromImage=this.onimage.width,this.imageHeightFromImage=this.onimage.height,this.resizer(),fastCrop.dragElement(document.getElementById("cropper"),document.getElementById("image")),fastCrop.cropImage()}resizer(){var e=this;document.getElementById("increaser").onclick=function(){var t=parseInt(e.element.style.width.split("px")[0])+e.changeBy+parseInt(e.element.style.left.split("px")[0])<e.onimage.width,n=parseInt(e.element.style.height.split("px")[0])+e.changeBy+parseInt(e.element.style.top.split("px")[0])<e.onimage.height;t&&n&&(e.element.style.width=(parseInt(e.element.style.width.split("px")[0])+e.changeBy).toString()+"px",e.element.style.height=(parseInt(e.element.style.height.split("px")[0])+e.changeBy*e.proportion).toString()+"px")},document.getElementById("decreaser").onclick=function(){var t=parseInt(e.element.style.width.split("px")[0])-e.changeBy>100,n=parseInt(e.element.style.height.split("px")[0])-e.changeBy>100;t&&n&&(e.element.style.width=(parseInt(e.element.style.width.split("px")[0])-e.changeBy).toString()+"px",e.element.style.height=(parseInt(e.element.style.height.split("px")[0])-e.changeBy*e.proportion).toString()+"px")}}isTouchScreen(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}dragElement(e,t){this.element=e;var n=0,i=0,o=0,s=0;function l(l){(l=l||window.event).preventDefault(),n=o-l.clientX,i=s-l.clientY,o=l.clientX,s=l.clientY,e.offsetTop-i>0&&e.offsetTop-i-4+parseInt(e.style.height.split("px")[0])<t.height&&(e.style.top=e.offsetTop-i+"px"),e.offsetLeft-n>0&&e.offsetLeft-n-4+parseInt(e.style.width.split("px")[0])<t.width&&(e.style.left=e.offsetLeft-n+"px")}function p(){document.onmouseup=null,document.onmousemove=null}this.isTouchScreen()?e.addEventListener("touchstart",function(n){var i=0,o=0,s=0,l=0;s=n.touches[0].clientX,l=n.touches[0].clientY,document.ontouchmove=function(n){i=s-n.touches[0].clientX,o=l-n.touches[0].clientY,s=n.touches[0].clientX,l=n.touches[0].clientY,e.offsetTop-o>0&&e.offsetTop-o+parseInt(e.style.height.split("px")[0])<t.height&&(e.style.top=e.offsetTop-o+"px");e.offsetLeft-i>0&&e.offsetLeft-i+parseInt(e.style.width.split("px")[0])<t.width&&(e.style.left=e.offsetLeft-i+"px")},document.ontouchend=function(){document.ontouchmove=null,document.ontouchend=null}},{passive:!1}):e.onmousedown=function(e){(e=e||window.event).preventDefault(),o=e.clientX,s=e.clientY,document.onmouseup=p,document.onmousemove=l}}cropImage(){var e=this,t=this.json.image;document.getElementById("cropbutt").onclick=function(){var n=document.createElement("canvas"),i=n.getContext("2d");n.width=e.imageWidth,n.height=e.imageHeight;var o=parseInt(e.element.style.left.split("px")[0]),s=parseInt(e.element.style.top.split("px")[0]),l=parseInt(e.element.style.width.split("px")[0]),p=parseInt(e.element.style.height.split("px")[0]);i.drawImage(image,o,s,l,p,0,0,e.imageWidth,e.imageHeight);var h=document.createElement("img");h.src=n.toDataURL(e.type),h.width=t.width,h.alt=t.alt,e.json.showCropped&&document.getElementById(t.id).parentElement.appendChild(h),document.getElementById("cropper").parentNode.removeChild(document.getElementById("cropper")),document.getElementById(t.id).parentNode.removeChild(document.getElementById(t.id)),e.json.getBase64(h.src)}}}var fastCrop=new FastCropper;