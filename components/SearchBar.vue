<template>
    <div class="flex flex-0 w-128">
        <div id="search-fields" class="grid-cols-3 mx-4">
            <div class="search-specialty col-span-1 inline-block w-1/3 py-4">
                <select class="rounded-l-full rounded-r-none w-full px-1 border-2 border-primary/60
                    py-1.5 drop-shadow-md text-primary-text bg-primary-bg hover:bg-primary-hover/10 transition-all">
                    <option value="" class="text-primary-text-muted" disabled selected>
                        Select a specialty...
                    </option>
                    <option value=""></option>
                    <option :key="index" v-for="(specialty, index) in specialtyDropdownOptions">
                        {{ specialty.names[0].name }}
                    </option>
                </select>
            </div>
            <div class="search-location col-span-1 inline-block w-1/3 py-4">
                <select class="w-full px-1 border-y-2 border-primary/60 py-1.5 drop-shadow-md
                        text-primary-text bg-primary-bg hover:bg-primary-hover/10 transition-all">
                    <option value="" class="text-primary-text-muted" disabled selected>
                        Select a location...
                    </option>
                    <option value=""></option>
                    <option :key="index" v-for="(location, index) in locationDropdownOptions">
                        {{ location }}
                    </option>
                </select>
            </div>
            <div class="search-language col-span-1 inline-block w-1/3 py-4">
                <select class="rounded-r-full rounded-l-none w-full px-1 border-2 border-primary/60 py-1.5
                        drop-shadow-md text-primary-text bg-primary-bg hover:bg-primary-hover/10 transition-all">
                    <option value="" class="text-primary-text-muted" disabled selected>
                        Select a language...
                    </option>
                    <option value=""></option>
                    <option :key="index" v-for="(language, index) in languageDropdownOptions">
                        {{ language }}
                    </option>
                </select>
            </div>
        </div>
        <div id="search-button" class="flex items-center">
            <button id="searchButton"
                class="flex flex-0 flex-row rounded-full bg-primary w-28 pl-1 pr-2 py-2 text-sm align-middle justify-center
                    hover:bg-primary-hover transition-all"
                data-testid="searchbutton">
                <svg role="img" alt="search icon" title="search icon"
                    class="search-icon w-5 h-5 mr-1 fill-primary-text-inverted">
                    <use xlink:href="../assets/images/search-icon.svg#search-icon-svg" />
                </svg>
                <span class="self-center text-primary-text-inverted">Search</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const specialtyMockData = [{
    id: 1,
    names: [{
        name: 'Dentist',
        locale: 'english'
    }]
}, {
    id: 2,
    names: [{
        name: 'Psychiatrist',
        locale: 'english'
    }]
}]
const locationMockData = ['Tokyo', 'Chiba', 'Saitama', 'Setagaya', 'Minato', 'Nagano', 'Kyoto', 'Osaka', 'Nara']
const languageMockData = ['English', 'Japanese']

const specialtyDropdownOptions = ref(specialtyMockData)
const locationDropdownOptions = ref(locationMockData)
const languageDropdownOptions = ref(languageMockData)

</script>