// ********************* back end skills 
var btnGolang = document.querySelector('#btn_golang'); 
var btnCsharp = document.querySelector('#btn_csharp'); 
var btnJs = document.querySelector('#btn_js'); 
var btnPhp = document.querySelector('#btn_php'); 
var btnJava = document.querySelector('#btn_java');
var btnPy = document.querySelector('#btn_py');
var btnMongo = document.querySelector('#btn_mongo');
var btnPsql = document.querySelector('#btn_psql');

var cardBase = document.querySelector('#card-base');
var cardGo = document.querySelector('#card_golang');
var cardCsharp = document.querySelector('#card_csharp');
var cardJs = document.querySelector('#card_js');
var cardPhp = document.querySelector('#card_php');
var cardJava = document.querySelector('#card_java');
var cardPy = document.querySelector('#card_py');
var cardMongo = document.querySelector('#card_mongo')
var cardPsql = document.querySelector('#card_psql')


// criando função botao GO
btnGolang.addEventListener('click', function() {

    if(cardGo.style.display === 'none') {
        cardGo.style.display = 'block';
        cardBase.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardJs.style.display = 'none';
        cardPhp.style.display = 'none';
        cardJava.style.display = 'none';
        cardPy.style.display = 'none';
        cardMongo.style.display = 'none';
        cardPsql.style.display = 'none';

    } else {
        cardGo.style.display = 'block';
        cardBase.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardJs.style.display = 'none';
        cardPhp.style.display = 'none';
        cardJava.style.display = 'none';
        cardPy.style.display = 'none';
        cardMongo.style.display = 'none';
        cardPsql.style.display = 'none';
    }
});

// criando função botao c#
btnCsharp.addEventListener('click', function() {

    if(cardCsharp.style.display === 'none') {
        cardCsharp.style.display = 'block';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardJs.style.display = 'none';
        cardPhp.style.display = 'none';
        cardJava.style.display = 'none';
        cardPy.style.display = 'none';
        cardMongo.style.display = 'none';
        cardPsql.style.display = 'none';

    } else {
        cardCsharp.style.display = 'block';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardJs.style.display = 'none';
        cardPhp.style.display = 'none';
        cardJava.style.display = 'none';
        cardPy.style.display = 'none';
        cardMongo.style.display = 'none';
        cardPsql.style.display = 'none';
    }
});

// criando função botao JS
btnJs.addEventListener('click', function() {

    if(cardJs.style.display === 'none') {
        cardJs.style.display = 'block';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardPhp.style.display = 'none';
        cardJava.style.display = 'none';
        cardPy.style.display = 'none';
        cardMongo.style.display = 'none';
        cardPsql.style.display = 'none';

    } else {
        cardJs.style.display = 'block';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardPhp.style.display = 'none';
        cardJava.style.display = 'none';
        cardPy.style.display = 'none';
        cardMongo.style.display = 'none';
        cardPsql.style.display = 'none';
    }
});

// criando função botao PHP
btnPhp.addEventListener('click', function() {

    if(cardPhp.style.display === 'none') {
        cardPhp.style.display = 'block';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardJs.style.display = 'none';
        cardJava.style.display = 'none';
        cardPy.style.display = 'none';
        cardMongo.style.display = 'none';
        cardPsql.style.display = 'none';

    } else {
        cardPhp.style.display = 'block';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardJs.style.display = 'none';
        cardJava.style.display = 'none';
        cardPy.style.display = 'none';
        cardMongo.style.display = 'none';
        cardPsql.style.display = 'none';
    }
});

// criando função botao JAVA
btnJava.addEventListener('click', function() {

    if(cardJava.style.display === 'none') {
        cardJava.style.display = 'block';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardJs.style.display = 'none';
        cardPhp.style.display = 'none';
        cardPy.style.display = 'none';
        cardMongo.style.display = 'none';
        cardPsql.style.display = 'none';
    } else {
        cardJava.style.display = 'block';
        cardPhp.style.display = 'none';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardJs.style.display = 'none';
        cardPy.style.display = 'none';
        cardMongo.style.display = 'none';
        cardPsql.style.display = 'none';
    }
});

// criando função botao PY
btnPy.addEventListener('click', function() {

    if(cardPy.style.display === 'none') {
        cardPy.style.display = 'block';
        cardJava.style.display = 'none';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardJs.style.display = 'none';
        cardPhp.style.display = 'none';
        cardMongo.style.display = 'none';
        cardPsql.style.display = 'none';
    } else {
        cardPy.style.display = 'block';
        cardJava.style.display = 'none';
        cardPhp.style.display = 'none';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardJs.style.display = 'none';
        cardMongo.style.display = 'none';
        cardPsql.style.display = 'none';
    }
});

// criando função botao Mongo
btnMongo.addEventListener('click', function() {

    if(cardMongo.style.display === 'none') {
        cardMongo.style.display = 'block';
        cardPy.style.display = 'none';
        cardJava.style.display = 'none';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardJs.style.display = 'none';
        cardPhp.style.display = 'none';
        cardPsql.style.display = 'none';
    } else {
        cardMongo.style.display = 'block';
        cardPy.style.display = 'none';
        cardJava.style.display = 'none';
        cardPhp.style.display = 'none';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardJs.style.display = 'none';
        cardPsql.style.display = 'none';
    }
});

// criando função botao Psql
btnPsql.addEventListener('click', function() {

    if(cardPsql.style.display === 'none') {
        cardPsql.style.display = 'block';
        cardMongo.style.display = 'none';
        cardPy.style.display = 'none';
        cardJava.style.display = 'none';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardJs.style.display = 'none';
        cardPhp.style.display = 'none';
    } else {
        cardPsql.style.display = 'block';
        cardMongo.style.display = 'none';
        cardPy.style.display = 'none';
        cardJava.style.display = 'none';
        cardPhp.style.display = 'none';
        cardBase.style.display = 'none';
        cardGo.style.display = 'none';
        cardCsharp.style.display = 'none';
        cardJs.style.display = 'none';
    }
});

// ********************* front end skills 

var btnHtml = document.querySelector('#btn_html');
var btnCss = document.querySelector('#btn_css');
var btnReact = document.querySelector('#btn_react');
var btnBs = document.querySelector('#btn_bootstrap');
var btnTailwind = document.querySelector('#btn_tailwind');
var btnHtmx = document.querySelector('#btn_htmx');

var cardBaseFront = document.querySelector('#card_base_front');
var cardHtml = document.querySelector('#card_html');
var cardCss = document.querySelector('#card_css');
var cardReact = document.querySelector('#card_react');
var cardBs= document.querySelector('#card_bootstap');
var cardTailwind= document.querySelector('#card_tailwind');
var cardHtmx = document.querySelector('#card_htmx');

// criando função botao html
btnHtml.addEventListener('click', function() {

    if(cardHtml.style.display === 'none') {
        cardHtml.style.display = 'block';
        cardBaseFront.style.display = 'none';
        cardCss.style.display = 'none';
        cardReact.style.display = 'none';
        cardBs.style.display = 'none';
        cardTailwind.style.display = 'none';
        cardHtmx.style.display = 'none';

    } else {
        cardHtml.style.display = 'block';
        cardBaseFront.style.display = 'none';
        cardCss.style.display = 'none';
        cardReact.style.display = 'none';
        cardBs.style.display = 'none';
        cardTailwind.style.display = 'none';
        cardHtmx.style.display = 'none';
    }
});

// criando função botao css
btnCss.addEventListener('click', function() {

    if(cardCss.style.display === 'none') {
        cardCss.style.display = 'block';
        cardBaseFront.style.display = 'none';
        cardHtml.style.display = 'none';
        cardReact.style.display = 'none';
        cardBs.style.display = 'none';
        cardTailwind.style.display = 'none';
        cardHtmx.style.display = 'none';

    } else {
        cardCss.style.display = 'block';
        cardBaseFront.style.display = 'none';
        cardHtml.style.display = 'none';
        cardReact.style.display = 'none';
        cardBs.style.display = 'none';
        cardTailwind.style.display = 'none';
        cardHtmx.style.display = 'none';
    }
});


// criando função botao react
btnReact.addEventListener('click', function() {

    if(cardReact.style.display === 'none') {
        cardReact.style.display = 'block';
        cardBaseFront.style.display = 'none';
        cardHtml.style.display = 'none';
        cardCss.style.display = 'none';
        cardBs.style.display = 'none';
        cardTailwind.style.display = 'none';
        cardHtmx.style.display = 'none';

    } else {
        cardReact.style.display = 'block';
        cardBaseFront.style.display = 'none';
        cardHtml.style.display = 'none';
        cardCss.style.display = 'none';
        cardBs.style.display = 'none';
        cardTailwind.style.display = 'none';
        cardHtmx.style.display = 'none';
    }
});


// criando função botao bs
btnBs.addEventListener('click', function() {

    if(cardBs.style.display === 'none') {
        cardBs.style.display = 'block';
        cardBaseFront.style.display = 'none';
        cardHtml.style.display = 'none';
        cardReact.style.display = 'none';
        cardCss.style.display = 'none';
        cardTailwind.style.display = 'none';
        cardHtmx.style.display = 'none';

    } else {
        cardBs.style.display = 'block';
        cardBaseFront.style.display = 'none';
        cardHtml.style.display = 'none';
        cardReact.style.display = 'none';
        cardCss.style.display = 'none';
        cardTailwind.style.display = 'none';
        cardHtmx.style.display = 'none';
    }
});


// criando função botao tailwind
btnTailwind.addEventListener('click', function() {

    if(cardTailwind.style.display === 'none') {
        cardTailwind.style.display = 'block';
        cardBaseFront.style.display = 'none';
        cardHtml.style.display = 'none';
        cardReact.style.display = 'none';
        cardBs.style.display = 'none';
        cardCss.style.display = 'none';
        cardHtmx.style.display = 'none';

    } else {
        cardTailwind.style.display = 'block';
        cardBaseFront.style.display = 'none';
        cardHtml.style.display = 'none';
        cardReact.style.display = 'none';
        cardBs.style.display = 'none';
        cardCss.style.display = 'none';
        cardHtmx.style.display = 'none';
    }
});


// criando função botao HTMX
btnHtmx.addEventListener('click', function() {

    if(cardHtmx.style.display === 'none') {
        cardHtmx.style.display = 'block';
        cardBaseFront.style.display = 'none';
        cardHtml.style.display = 'none';
        cardReact.style.display = 'none';
        cardBs.style.display = 'none';
        cardTailwind.style.display = 'none';
        cardCss.style.display = 'none';

    } else {
        cardHtmx.style.display = 'block';
        cardBaseFront.style.display = 'none';
        cardHtml.style.display = 'none';
        cardReact.style.display = 'none';
        cardBs.style.display = 'none';
        cardTailwind.style.display = 'none';
        cardCss.style.display = 'none';
    }
});


// Botoes para altenar entre fron e back

var btnFront = document.querySelector('#btn_frontend');
var btnBack = document.querySelector('#btn_backend');

var skillsFront = document.querySelector('#frontend_skills');
var skillsBack = document.querySelector('#backend_skills');


btnFront.addEventListener('click', function() {
    skillsFront.style.display = 'block';
    skillsBack.style.display = 'none';
});

btnBack.addEventListener('click', function() {
    skillsFront.style.display = 'none';
    skillsBack.style.display = 'block';
});