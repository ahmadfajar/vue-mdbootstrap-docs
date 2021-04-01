export default {
    data() {
        return {
            selectedChips1: null,
            selectedChips2: null,
            selectedChips3: null,
            selectedAmenities: null,
            selectedNeighborhoods: null,
            selectedMultiple: [],
            chipItems1: [
                {text: 'Arts'},
                {text: 'Creative Writers'},
                {text: 'Drawers'},
                {text: 'Foods'},
                {text: 'Shopping'},
                {text: 'Tech'},
                {text: 'Vacation'},
            ],
            chipItems2: [
                {text: 'Arts'},
                {text: 'Creative Writers'},
                {text: 'Drawers'},
                {text: 'Foods'},
                {text: 'Home'},
                {text: 'Shopping'},
                {text: 'Tech'},
                {text: 'Vacation'},
                {text: 'Work'},
            ],
            amenities: [
                {text: 'Elevator'},
                {text: 'Washer / Dryer'},
                {text: 'Fireplace'},
                {text: 'Wheelchair access'},
                {text: 'Dogs ok'},
                {text: 'Cats ok'},
            ],
            neighborhoods: [
                {text: 'Snowy Rock Place'},
                {text: 'Honeylane Circle'},
                {text: 'Donna Drive'},
                {text: 'Elaine Street'},
                {text: 'Court Street'},
                {text: 'Kennedy Park'},
            ],
        }
    }
}
