/*
    JavaScript를 검색하다보면

    $ 와 _ 표시를 볼수있다. 

    대부분 사람들은 $는 jQuery 잖아요! 

    라고했다.. 슬펐다..

    사실 JavaScript는 $와 _ 표시는 그냥 문자로 인식한다.
    변수선언 or 함수선언도 된다.

    만약 아래와 같은 함수를 만든다면

    function $(selector){
        return document.querySelector(selector);
    }

    $('#id');

    를 사용하게 된다면. 아마 jQuery랑 같은 기능을할것이다.

    이렇게 우리는 암묵적으로 $는 document.querySelector에 대한것

    _는 privte 내용을 사용할때 사용한다 합니다!
*/