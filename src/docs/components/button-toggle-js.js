export default {
    data() {
        return {
            drinks: [{
                value: 'tea',
                label: 'Tea'
            }, {
                value: 'coffee',
                label: 'Coffee'
            }, {
                value: 'beer',
                label: 'Beer'
            }],
            weathers: [{
                value: 'sunny',
                label: 'Sunny',
                icon: 'cloud-sun',
                iconSize: 'lg'
            }, {
                value: 'rain',
                label: 'Rain',
                icon: 'cloud-rain',
                iconSize: 'lg'
            }, {
                value: 'heavy-rain',
                label: 'Heavy Rain',
                icon: 'cloud-showers-heavy',
                iconSize: 'lg'
            }],
            selectedDrink: null,
            selectedWeather: null
        }
    }
}
