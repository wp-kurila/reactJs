class Img {
    constructor(sourse, containet = '#root'){
        this.sourse = sourse;
        this.containet = containet;
        this._init();
    }
    
    _init() {
        fetch(this.sourse)
            .then(
                result => result.json(),
                error => console.log(error)
            )
            .then( (data) => {
                for (let img of data) {
                    this.renderImg(img);
                    console.log(img.alt)
                }
            
            })            
    }

    renderImg(img) {
        let $img = $('<img/>', {
            src: img.src,
            alt: img.alt
        });

        $(this.containet).append($img);
    }
}