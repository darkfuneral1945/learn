var Body = {
    setBackgroundColor: function (color) {
//        document.querySelector('body').style.backgroundColor = color;
        $("body").css("backgroundColor", color);
    },
    setColor: function (color) {
//        document.querySelector('body').style.color = color;
        $("body").css("color", color);
    },
    setAcolor: function (color) {
//        var i = 0;
//        var alist = document.querySelectorAll('a');
//        while (i < alist.length) {
//            alist[i].style.color = color;
//            i = i + 1;
//        }
        $('a').css("color",color);
    }
}

function clickHandler(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Body.setAcolor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Body.setAcolor('orangered');
    }
}
