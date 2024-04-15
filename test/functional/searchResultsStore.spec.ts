import { useSearchResultsStore } from '@/stores/searchResultsStore';
import { setActivePinia, createPinia } from 'pinia'
import { Locale, Specialty } from '~/typedefs/gqlTypes.js'
import { expect } from 'chai'

describe("SearchResultsStore", () => {

    beforeEach(() => {
        setActivePinia(createPinia())
    });

    it('should initialize with default values', () => {
        const searchResulstsStore = useSearchResultsStore()

        expect(searchResulstsStore.activeResultId).to.be.undefined
        expect(searchResulstsStore.activeResult).to.be.undefined
        expect(searchResulstsStore.searchResultsList).to.be.an('array').that.is.empty
    })

    it('update the search', () => {
        const searchResulstsStore = useSearchResultsStore()

        searchResulstsStore.search('', Specialty.AllergyAndImmunology, Locale.EnUs)


        expect(searchResulstsStore.searchResultsList).to.be.an('array').that.is.empty


    })
})
