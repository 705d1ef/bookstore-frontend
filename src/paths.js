export const paths = {
    home: "/",
    book: "/book",
};

// http://127.0.0.1:8000/book = book-list
// http://127.0.0.1:8000/book/3/
// http://127.0.0.1:8000/admin/

// book/$ [name='book-list']
// book/(?P<pk>[^/.]+)/$ [name='book-detail']
// book_relation/(?P<book>[^/.]+)/$ [name='userbookrelation-detail']

//export const paths = {
//    home: '/',
//    plane: '/plane',
//    createPlane: '/create-plane',
//    order: '/order'
//}
