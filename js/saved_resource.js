@charset "utf-8";

@import url(http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);

@import url(http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300&amp;subset=cyrillic-ext,latin);

/* RuBizPanel 2.0 | Кнопки "Открыть" и "Закрыть"
===============================================================*/

.RuBizPanel-open * { 
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -ms-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
.RuBizPanel-open {
    background: #888888;
    background: rgba(0,0,0,0.4);
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 9998;  
    width: 100%;
    left: 100%;
    margin-left: -100px;
    height: 200%;
    font-family: helvetica, sans-serif;
    -webkit-box-shadow: 0 0 0 7px rgba(150,150,150,0.15), 0 0 3px rgba(25,25,25,0.3);
       -moz-box-shadow: 0 0 0 7px rgba(150,150,150,0.15), 0 0 3px rgba(25,25,25,0.3);
            box-shadow: 0 0 0 7px rgba(150,150,150,0.15), 0 0 3px rgba(25,25,25,0.3);
    -webkit-transition: all ease .5s;
       -moz-transition: all ease .5s;
        -ms-transition: all ease .5s;
         -o-transition: all ease .5s;
            transition: all ease .5s;
    -webkit-transform-origin: top left;
       -moz-transform-origin: top left;
        -ms-transform-origin: top left;
         -o-transform-origin: top left;
            transform-origin: top left;
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
}
    .RuBizPanel-open:hover {
        left: 0;
        margin-left: 0;
        -webkit-transform: rotate(0deg);
           -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
             -o-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    .RuBizPanel-open:hover ~ .RuBizPanel-close {
        margin-right: -100px;
    }
    .RuBizPanel-open:hover ~ .RuBizPanel-close ~ .rbp-icon1 {
        margin-top: -100px;
    }
    .RuBizPanel-open:hover + .RuBizPanel-close {
        margin-right: -100px;
    }
    .rbp-icon1:hover + .fa-RuBizPanel {
        opacity: 0;
    }
.rbp-icon1 {
    z-index: 9999;
    position: fixed;
    top: 10px;
    right: 12px;
    pointer-events: none;
    -webkit-transition: all ease .5s;
       -moz-transition: all ease .5s;
        -ms-transition: all ease .5s;
         -o-transition: all ease .5s;
            transition: all ease .5s;
}
    .fa-RuBizPanel {
        font-size: 35px;
        color: #fff;
        margin: 0;
        padding: 0;
        text-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    }
.RuBizPanel-close {
    z-index: 9999;
    position: fixed;
    top: 0;
    right: 100%;
    width: 200px;
    height: 200px;
    background: #999;
    cursor: pointer;
    -webkit-transition: all ease .5s;
       -moz-transition: all ease .5s;
        -ms-transition: all ease .5s;
         -o-transition: all ease .5s;
            transition: all ease .5s;
    -webkit-transform-origin: top right;
       -moz-transform-origin: top right;
        -ms-transform-origin: top right;
         -o-transform-origin: top right;
            transform-origin: top right;
    -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
            transform: rotate(45deg);
}
    a.RuBizPanel-close:hover {
        margin: 0;
    }
    .RuBizPanel-close .rbp-icon2 {
        z-index: 9999;
        position: absolute;
        right: 12px; 
        left: auto;
        top: 50px;
        pointer-events: none;
        -webkit-transform: rotate(-45deg);
           -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
             -o-transform: rotate(-45deg);
                transform: rotate(-45deg);
    }


/* RuBizPanel | Содержание
===============================================================*/

.RuBizPanel {
    opacity: 0;
    background: #fff;
    border-top: 2px solid #dd5544;
    max-width: 760px;
    margin: 0 auto;
    padding: 1em 0 0 0;
    margin-top: 6%;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box; 
    -webkit-transition: all ease .5s;
       -moz-transition: all ease .5s;
        -ms-transition: all ease .5s;
         -o-transition: all ease .5s;
            transition: all ease .5s;
    -webkit-box-shadow: 0 0 0 7px rgba(150, 150, 150, 0.15), 0 0 3px rgba(25, 25, 25, 0.3);
       -moz-box-shadow: 0 0 0 7px rgba(150, 150, 150, 0.15), 0 0 3px rgba(25, 25, 25, 0.3);
            box-shadow: 0 0 0 7px rgba(150, 150, 150, 0.15), 0 0 3px rgba(25, 25, 25, 0.3);
}
    .RuBizPanel div {
        text-shadow: none;
    }
    .RuBizPanel-open:hover > .RuBizPanel {
        opacity: 1;
        -webkit-transition: all ease 1s;
           -moz-transition: all ease 1s;
            -ms-transition: all ease 1s;
             -o-transition: all ease 1s;
                transition: all ease 1s;
    }
.rbp-bg:hover {
    background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.96) 0%, rgba(246,246,246,0.96) 47%, rgba(219,219,219,0.96) 100%);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,0.96)), color-stop(47%,rgba(246,246,246,0.96)), color-stop(100%,rgba(219,219,219,0.96)));
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.96) 0%,rgba(246,246,246,0.96) 47%,rgba(219,219,219,0.96) 100%);
    background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.96) 0%,rgba(246,246,246,0.96) 47%,rgba(219,219,219,0.96) 100%);
    background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.96) 0%,rgba(246,246,246,0.96) 47%,rgba(219,219,219,0.96) 100%);
    background: radial-gradient(ellipse at center,  rgba(255,255,255,0.96) 0%,rgba(246,246,246,0.96) 47%,rgba(219,219,219,0.96) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5ffffff', endColorstr='#f5dbdbdb',GradientType=1 );
}
/* заголовок */
.RuBizPanel .rbp-headline {
    color: #dd5544;
    font-size: 30px;
    font-weight: bold;
    padding: 5px 10px 15px 10px;
    text-align: center;
    line-height: 33px;
    font-family: 'Open Sans Condensed', sans-serif;
}
/* картинка */
.rbp-img img {
    width: 37%;
    height: auto !important;
    float: left;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 5px;
}
/* пули (список) */
.rbp-list {
    width: 59%;
    float: left;
    display: inline-block;
    color: #777;
    text-align: left;
    font-size: 19px;
    line-height: 25px;
    padding: 0 10px 5px 0;
}
    .rbp-list-item {
        padding-top: 10px;
    }
    .rbp-list i {
        color: #dd5544;
        font-size: 22px;
    }
/* форма подписки */
.rbp-optin {
    background: #dd5544;
    width: 100%;
    padding: 10px 0 15px 0;
    text-align: center;
    position: relative;
}
    /* стрелки */
    .rbp-optin .rbp-arrow-l {
        position: absolute;
        left: 2px;
        top: -85px;
        width: 35px;
        height: auto !important;
    }
    .rbp-optin .rbp-arrow-r {
        position: absolute;
        right: 2px;
        top: -85px;
        width: 35px;
        height: auto !important;
    }
    /* призыв */
    .rbp-optin .rbp-optin-call {
        font-size: 16px;
        line-height: 18px;
        color: #fff;
        padding: 0 0 10px 0;
    }
    
    /* иконки в инпутах */
    .rbp-input { width: 100%; }
    .rbp-input .add-on1,
    .rbp-input .add-on2,
    .rbp-input .add-on3 {
        position: relative;
        display: inline-block;
    }
    .rbp-input .add-on1,
    .rbp-input .add-on2 {
        width: 30%;
    }
    .rbp-input .add-on1:before,
    .rbp-input .add-on2:before { 
        font-family: "FontAwesome";
        position: absolute;
        height: 40px;
        width: 36px;
        line-height: 40px;
        text-align: center;
        color: #bbb;
        border-right: 1px solid #ddd;
        font-size: 18px;
  		left: 0;
    }
    .rbp-input .add-on3:before { 
        font-family: "FontAwesome";
        position: absolute;
        height: 36px;
        width: 36px;
        line-height: 36px;
        text-align: center;
        color: #bbb;
        border-right: 1px solid #ddd;
        font-size: 18px;
    }
    .rbp-input .add-on3:before {
        color: #fff;
		text-shadow: 1px 1px 1px #555;
        border: none;
        font-size: 20px;
        right: 0;
    }
    .rbp-input .add-on1:before {
        content: "\f007";
    }
    .rbp-input .add-on2:before {
        content: "\f0e0";
    }
    .rbp-input .add-on3:before {
        content: "\f061";
    }
    .rbp-input .add-on1 {
        margin-right: 10px;
    }
    
    .rbp-optin input::-webkit-input-placeholder { color:#999; }
	.rbp-optin input:focus::-webkit-input-placeholder { color:#ccc; }
	.rbp-optin input::-moz-placeholder { color:#555; }
	.rbp-optin input:focus::-moz-placeholder { color:#aaa; }
	.rbp-optin input:-ms-input-placeholder { color:#999; }
	.rbp-optin input:focus:-ms-input-placeholder { color:#ccc; }
	.rbp-optin input[type="text"] {
        width: 100%;
		color: #999;
		font-size: 17px;
		padding: 9px 5px 8px 45px;
		border: none;
		outline: none;
		text-align: left;
		-webkit-appearance: none;
        -webkit-box-sizing: border-box;
           -moz-box-sizing: border-box;
                box-sizing: border-box;
		-webkit-border-radius: 0;
		   -moz-border-radius: 0;
				border-radius: 0;
	}
    	.rbp-optin input[type="text"]:hover {
    		background: #f9f9f9;
    	}
	.rbp-optin input[type="submit"] {
		background: #f39c12;
		border: none;
		color: #fff;
		cursor: pointer;
		font-size: 17px;
		font-weight: bold;
		padding: 9px 35px 9px 12px;
		margin-left: 10px;
		text-shadow: 1px 1px 1px #555;
		-webkit-appearance: none;
		-webkit-transition: all ease .5s;
           -moz-transition: all ease .5s;
            -ms-transition: all ease .5s;
             -o-transition: all ease .5s;
                transition: all ease .5s;
		-webkit-appearance: none;
		-webkit-border-radius: 0;
		   -moz-border-radius: 0;
				border-radius: 0;
        -webkit-box-shadow: none;
		   -moz-box-shadow: none;
		        box-shadow: none;
	}
    	.rbp-optin input[type="submit"]:hover {
    		background: #27ae60;
    		-webkit-transition: all ease .5s;
               -moz-transition: all ease .5s;
                -ms-transition: all ease .5s;
                 -o-transition: all ease .5s;
                    transition: all ease .5s; 
    	}



/* Для моб.
===============================================================*/

@media only screen and (max-width: 800px) {

    .RuBizPanel {
        max-width: 740px;
        margin-top: 7%;
    }

}

@media only screen and (max-width: 767px) {

    .mob-no, .fa-RuBizPanel { display: none; }

}