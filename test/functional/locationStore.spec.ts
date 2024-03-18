import { setActivePinia, createPinia } from "pinia";
import { useLocationsStore } from "@/stores/locationsStore";
import { useLoadingStore } from '@/stores/loadingStore.js'
import { expect } from 'chai';
import { provideApolloClient } from "@vue/apollo-composable";
import { initializeApollo } from "@/utils/apollo";

describe('LocationStore', () => {
    initializeApollo()

    beforeEach(() => {
        setActivePinia(createPinia())
    });

    it('should initialize with default value', () => {
        const locationStore = useLocationsStore();
        expect(locationStore.citiesDisplayOptions).to.be.empty;
    })

    it('the loading visual state should be triggered appropriately', () => {
        const loadingStore = useLoadingStore()
        const locationStore = useLocationsStore();
        locationStore.fetchLocations()
        expect(loadingStore.isLoading).to.be.true;
    })

    it('checking the display options', () => {
        const locationStore = useLocationsStore();
        locationStore.fetchLocations();
        console.log(locationStore.citiesDisplayOptions)
        expect(locationStore.citiesDisplayOptions).to.not.be.empty;
        // expect(locationStore.citiesDisplayOptions[0]).to.equal('----Any----');
    })
})
