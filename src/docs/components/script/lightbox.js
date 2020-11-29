export default {
    data: () => ({
        showGalleryItems1: false,
        showGalleryItems2: false,
        showSingleItem: false,
        buttons: {download: true, rotate: true, menubar: true, close: true},
        galleryItems1: [{
            thumbnail: 'https://unsplash.it/200.jpg?image=251',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=251',
            title: 'First image title'
        }, {
            thumbnail: 'https://unsplash.it/200.jpg?image=252',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=252',
            title: 'Second image title'
        }, {
            thumbnail: 'https://unsplash.it/200.jpg?image=253',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=253',
            title: 'Third image title'
        }],
        galleryItems2: [{
            thumbnail: 'https://unsplash.it/200.jpg?image=254',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=254',
            title: 'First image title'
        }, {
            thumbnail: 'https://unsplash.it/200.jpg?image=255',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=255',
            title: 'Second image title'
        }, {
            thumbnail: 'https://unsplash.it/200.jpg?image=256',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=256',
            title: 'Third image title'
        }],
        singleItem: [{
            thumbnail: 'https://unsplash.it/200.jpg?image=257',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=257',
            title: 'Your image title'
        }],
    }),
    methods: {
        openGallery1At(index) {
            if (index != null && index > -1) {
                this.$refs.lightbox1.openAt(index);
            } else {
                this.showGalleryItems1 = true;
            }
        },
        openGallery2At(index) {
            if (index != null && index > -1) {
                this.$refs.lightbox2.openAt(index);
            } else {
                this.showGalleryItems2 = true;
            }
        }
    }
}
