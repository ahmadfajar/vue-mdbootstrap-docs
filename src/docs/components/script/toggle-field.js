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
            occupations: [
                { value: 1, label: 'Computer and IT' },
                { value: 2, label: 'Scientists and Research' },
                { value: 3, label: 'Consultant' },
                { value: 4, label: 'Other' },
            ],
            occupation: null,
            favoriteDrink: null,
            favoriteDrink1: null,
            favoriteDrinks: [],
            selectedDrink: null,
            selectedWeather: null,
            todayWheather: null,
        }
    }
}
