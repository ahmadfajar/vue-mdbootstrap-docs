export default {
    data() {
        return {
            radio1: 0,
            selectedColors: null,
            selectedFruits: null,
            selectedFavoriteColors: null,
            selectedFavoriteFruits: null,
            selectedItems: null,
            colorsItems: [
                {value: 'red', label: 'Red', color: 'red'},
                {value: 'green', label: 'Green', color: 'green'},
                {value: 'blue', label: 'Blue', color: 'blue'},
                {value: 'purple', label: 'Purple', color: 'purple'},
            ],
            favoriteColors: [
                {value: 'red', label: 'Red'},
                {value: 'green', label: 'Green'},
                {value: 'blue', label: 'Blue'},
                {value: 'purple', label: 'Purple'},
            ],
            favoriteFruits: [
                {value: 'Orange', label: 'Orange'},
                {value: 'Apple', label: 'Apple'},
                {value: 'Pineapple', label: 'Pineapple'},
                {value: 'Grape', label: 'Grape'},
            ],
            dummyItems: [
                {value: 1, label: 'Item 1'},
                {value: 2, label: 'Item 2'},
                {value: 3, label: 'Item 3'},
                {value: 4, label: 'Item 4'},
                {value: 5, label: 'Item 5'},
                {value: 6, label: 'Item 6'},
            ],
        };
    },
}
