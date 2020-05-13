function tab(){//tab切换
	    var tab1=document.getElementById('tab1');
		var tab2=document.getElementById('tab2');
		var tab3=document.getElementById('tab3');
		
		var box1=document.getElementsByClassName('box1')[0];
		var box2=document.getElementsByClassName('box2')[0];
		var box3=document.getElementsByClassName('box3')[0];
		
		tab1.onclick=function(){
			box1.style.display='block';
			box2.style.display='none';
			box3.style.display='none';
			tab1.style.backgroundPositionX='-50px';
			tab2.style.backgroundPositionX='0px';
			tab3.style.backgroundPositionX='0px';
			
		}
		tab2.onclick=function(){
			box1.style.display='none';
			box2.style.display='block';
			box3.style.display='none';
			tab2.style.backgroundPositionX='-50px';
			tab1.style.backgroundPositionX='0px';
			tab3.style.backgroundPositionX='0px';
			
		}
		tab3.onclick=function(){
			box1.style.display='none';
			box2.style.display='none';
			box3.style.display='block';
			tab3.style.backgroundPositionX='-50px';
			tab1.style.backgroundPositionX='0px';
			tab2.style.backgroundPositionX='0px';
			
		}
};



function lb(){
	 var mySwiper = new Swiper ('.swiper-container', {
	 direction: 'horizontal',
	 initialSlide:0,
	 autoplay:2000,
	 longSwipesMs:2000,
	 pagination: '.swiper-pagination',
//	 paginationClickable :true,
//	 paginationType:'bullets',
	 effect:'effect'//effect,默认平动，
	 	
}) 
}

function time(){
    var time=document.getElementsByClassName("all_top")[0];
    var time1=time.getElementsByTagName('span')[0];
    var time2=time.getElementsByTagName('span')[2];    
    var time3=time.getElementsByTagName('span')[4];
	var myDate = new Date();       
	time1.innerHTML=myDate.getFullYear();//获取当前年份(4位)
	time2.innerHTML=myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
	time3.innerHTML=myDate.getDate();        //获取当前日(1-31)
}
function vol(){
	var vol=document.getElementsByClassName("all_one_vol_center")[0];
	var voncont=document.getElementsByClassName("all_one_vol_cont")[0];
	var t=false;
	var img1=vol.getElementsByTagName("img")[0];
	vol.onclick=function(){
		if(t==false){
				t=true;
				img1.style.transform='rotateZ(180deg)';
         		img1.style.transition='0.5s';
         		voncont.style.height='900px';
         		voncont.style.transition='1.5s';

			}else{
				t=false;
				img1.style.transform='rotateZ(0deg)';
         		img1.style.transition='0.5s';
         		voncont.style.height='0px';
         		voncont.style.transition='0.5s';
//       		voncont.scrollTop=voncont.scrollHeight;
         		
		}
	}
}

function tq(){
           window.onscroll = function() {
                var sstop = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
                var tq=document.getElementsByClassName("all_wd")[0];
               
                if(sstop > 10) {
                  tq.style.height="0px";
         		  tq.style.transition='0.5s';
                  
                  }else{
                  	tq.style.height="30px";
         		  tq.style.transition='0.5s';
                  }
               }
}
